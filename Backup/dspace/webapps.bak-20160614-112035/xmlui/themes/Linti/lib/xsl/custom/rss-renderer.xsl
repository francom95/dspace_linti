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

<!-- Add each RSS feed from meta to a list -->
<xsl:template name="addRSSLinks">
        <xsl:element name="ul">
            <xsl:attribute name="id">rss-links</xsl:attribute>
  
            <xsl:for-each select="/dri:document/dri:meta/dri:pageMeta/dri:metadata[@element='feed']">
	       
                 <xsl:element name="li">

                        <xsl:choose> 
                                        <xsl:when test="contains(., 'rss_1.0')">
                                                <xsl:attribute name="class">rss1-link</xsl:attribute>
                                        </xsl:when>        
                                        <xsl:when test="contains(., 'rss_2.0')">
                                                <xsl:attribute name="class">rss2-link</xsl:attribute>
                                        </xsl:when>
                                        <xsl:when test="contains(., 'atom_1.0')">
                                                <xsl:attribute name="class">atom-link</xsl:attribute>
                                        </xsl:when>
                                        <xsl:otherwise>
                                                <xsl:attribute name="class">other-link</xsl:attribute>                                                
                                        </xsl:otherwise>
                        </xsl:choose>  

                        <xsl:element name="a">


				<xsl:attribute name="href">
					<xsl:value-of select="."/>
				</xsl:attribute>

				<xsl:choose>
					<xsl:when test="contains(., 'rss_1.0')">
						<xsl:text>RSS 1.0</xsl:text>
					</xsl:when>
					<xsl:when test="contains(., 'rss_2.0')">
						<xsl:text>RSS 2.0</xsl:text>
					</xsl:when>
					<xsl:when test="contains(., 'atom_1.0')">
						<xsl:text>Atom</xsl:text>
					</xsl:when>
					<xsl:otherwise>
						<xsl:value-of select="@qualifier"/>
					</xsl:otherwise>
				</xsl:choose>
			</xsl:element>
		</xsl:element>
	</xsl:for-each>
        </xsl:element>
</xsl:template>
        
</xsl:stylesheet>
