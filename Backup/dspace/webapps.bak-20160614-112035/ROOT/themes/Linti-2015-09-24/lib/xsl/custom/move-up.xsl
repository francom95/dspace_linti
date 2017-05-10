<?xml version="1.0" encoding="UTF-8"?>
<!--

    The contents of this file are subject to the license and copyright
    detailed in the LICENSE and NOTICE files at the root of the source
    tree and available online at

    http://www.dspace.org/license/

-->
<!--
    Moves front page search box up, under the news file content, or to the
    top if there is no news div.
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

	<xsl:template match="node()|@*">
		<xsl:copy>
			<xsl:apply-templates select="node()|@*" />
		</xsl:copy>
	</xsl:template>

	<xsl:template match="dri:div[@id='file.news.div.news']">
		<xsl:apply-templates select="self::*" mode="copy"/>
		<xsl:apply-templates select="../dri:div[@id='aspect.artifactbrowser.FrontPageSearch.div.front-page-search']" mode="copy" />
	</xsl:template>

	<xsl:template match="dri:body/dri:div[1][(@id='file.news.div.news')]">
		<xsl:apply-templates select="../dri:div[@id='aspect.artifactbrowser.FrontPageSearch.div.front-page-search']" 
mode="copy" 
/>
		<xsl:apply-templates select="self::*" mode="copy"/>
	</xsl:template>

	<xsl:template match="dri:div[@id='aspect.artifactbrowser.FrontPageSearch.div.front-page-search']"/>
	

	<xsl:template match="node()|@*" mode="copy">
		<xsl:copy>
			<xsl:apply-templates select="node()|@*" />
		</xsl:copy>
	</xsl:template>

</xsl:stylesheet>
