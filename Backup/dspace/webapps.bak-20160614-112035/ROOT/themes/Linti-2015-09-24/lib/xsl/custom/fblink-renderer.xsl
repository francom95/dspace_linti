<?xml version="1.0" encoding="UTF-8"?>
<!--  
    Author: Maria Agustina Reynoso
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
        xmlns:fb="http://ogp.me/ns/fb#"
        exclude-result-prefixes="i18n dri mets xlink xsl dim xhtml mods dc">


    <xsl:output indent="yes"/>

    <xsl:template name="fb-link">
        <xsl:param name="url"/>

        <fb:like>
            <xsl:attribute name="href">
                <xsl:value-of select="$url"/>
            </xsl:attribute>
            <xsl:attribute name="class">fb-like</xsl:attribute>
            <xsl:attribute name="layout">button_count</xsl:attribute>
            <xsl:attribute name="action">like</xsl:attribute>
            <xsl:attribute name="show-faces">true</xsl:attribute>
            <xsl:attribute name="share">true</xsl:attribute>
            &#160;
        </fb:like>
    </xsl:template>


</xsl:stylesheet>

