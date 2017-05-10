<?xml version="1.0" encoding="UTF-8"?>
<!--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    http://www.dspace.org/license/

-->
<!--  
    Author: Alex Humar
    Author: Jose Schulz 
-->    

<xsl:stylesheet xmlns:i18n="http://apache.org/cocoon/i18n/2.1"
	xmlns:dri="http://di.tamu.edu/DRI/1.0/"
	xmlns:mets="http://www.loc.gov/METS/"
	xmlns:xlink="http://www.w3.org/TR/xlink/"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0"
	xmlns:dim="http://www.dspace.org/xmlns/dspace/dim"
	xmlns:xhtml="http://www.w3.org/1999/xhtml"
	xmlns:mods="http://www.loc.gov/mods/v3"
	xmlns:dc="http://purl.org/dc/elements/1.1/"
	xmlns="http://www.w3.org/1999/xhtml"
	exclude-result-prefixes="i18n dri mets xlink xsl dim xhtml mods dc">

   
    <xsl:output indent="yes"/>   

    <!-- The handling of the special case of instanced composite fields under "form" lists -->
    <xsl:template match="dri:field[@type='composite'][dri:field/dri:instance | dri:params/@operations]" mode="formComposite" priority="2">
        <xsl:variable name="confidenceIndicatorID" select="concat(translate(@id,'.','_'),'_confidence_indicator')"/>
        <div class="ds-form-content">
            <xsl:apply-templates select="dri:field" mode="compositeComponent"/>
            <!--<xsl:if test="contains(dri:params/@operations,'add')">-->
                <!-- Add buttons should be named "submit_[field]_add" so that we can ignore errors from required fields when simply adding new values-->
               <input type="submit" name="{concat('submit_',@n,'_add')}" class="ds-button-field ds-add-button">
                  <!-- Make invisible if we have choice-lookup operation that provides its own Add. -->
                  <xsl:attribute name="value">
                      <xsl:text>Añadir nuevo</xsl:text>
                  </xsl:attribute>
                  <xsl:if test="dri:params/@choicesPresentation = 'lookup'">
                    <xsl:attribute name="style">
                      <xsl:text>display:none;</xsl:text>
                    </xsl:attribute>
                  </xsl:if>
               </input>
            <!--</xsl:if>-->
            <!-- insert choice mechansim and/or Add button here -->
            <xsl:choose>
              <xsl:when test="dri:params/@choicesPresentation = 'suggest'">
                <xsl:message terminate="yes">
                  <xsl:text>ERROR: Input field with "suggest" (autocomplete) choice behavior is not implemented for Composite (e.g. "name") fields.</xsl:text>
                </xsl:message>
              </xsl:when>
              <!-- lookup popup includes its own Add button if necessary. -->
              <xsl:when test="dri:params/@choicesPresentation = 'lookup'">
                <xsl:call-template name="addLookupButton">
                  <xsl:with-param name="isName" select="'true'"/>
                  <xsl:with-param name="confIndicator" select="$confidenceIndicatorID"/>
                </xsl:call-template>
              </xsl:when>
            </xsl:choose>
            <!-- place to store authority value -->
            <xsl:if test="dri:params/@authorityControlled">
              <xsl:call-template name="authorityConfidenceIcon">
                <xsl:with-param name="confidence" select="dri:value[@type='authority']/@confidence"/>
                <xsl:with-param name="id" select="$confidenceIndicatorID"/>
              </xsl:call-template>
              <xsl:call-template name="authorityInputFields">
                <xsl:with-param name="name" select="@n"/>
                <xsl:with-param name="authValue" select="dri:value[@type='authority']/text()"/>
                <xsl:with-param name="confValue" select="dri:value[@type='authority']/@confidence"/>
              </xsl:call-template>
            </xsl:if>
            <div class="spacer">&#160;</div>
            <xsl:apply-templates select="dri:field/dri:error" mode="compositeComponent"/>
            <xsl:apply-templates select="dri:error" mode="compositeComponent"/>
            <xsl:apply-templates select="dri:help" mode="compositeComponent"/>
            <xsl:if test="dri:instance or dri:field/dri:instance">
                <div class="ds-previous-values">
                    <xsl:call-template name="fieldIterator">
                        <xsl:with-param name="position">1</xsl:with-param>
                    </xsl:call-template>
                    <xsl:if test="contains(dri:params/@operations,'delete') and (dri:instance or dri:field/dri:instance)">
                        <!-- Delete buttons should be named "submit_[field]_delete" so that we can ignore errors from required fields when simply removing values-->
                        <input type="submit" value="Borrar seleccionados" name="{concat('submit_',@n,'_delete')}" class="ds-button-field ds-delete-button" />
                    </xsl:if>
                    <xsl:for-each select="dri:field">
                        <xsl:apply-templates select="dri:instance" mode="hiddenInterpreter"/>
                    </xsl:for-each>
                </div>
            </xsl:if>
        </div>
    </xsl:template>

</xsl:stylesheet>
