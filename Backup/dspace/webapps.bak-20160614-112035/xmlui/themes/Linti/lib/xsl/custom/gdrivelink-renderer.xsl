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

    <!-- 
        TO USE TEMPLATE, CALL TEMPLATE LIKE SO...
        
        <xsl:call-template name="video-media">
            <xsl:with-param name="width" select="640"/>
            <xsl:with-param name="height" select="348"/>
            <xsl:with-param name="element" select="video-url"/>
        </xsl:call-template>
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

    <xsl:template name="gdrive-link">
        <xsl:param name="url"/>
        <xsl:param name="filename"/>

        <div>
            <xsl:attribute name="data-src">     
                <xsl:value-of select="$url"/>
            </xsl:attribute>
            <xsl:attribute name="data-sitename">RIFI</xsl:attribute>
            <xsl:attribute name="data-filename">
                <xsl:value-of select="$filename"/>
            </xsl:attribute>
            <xsl:attribute name="class">g-savetodrive</xsl:attribute>
            &#160;
        </div>
    </xsl:template>
        
  
</xsl:stylesheet>
