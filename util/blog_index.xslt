<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>
  <xsl:template match="/">
    <ul class="statler-dept-article">
      <xsl:apply-templates select="//item[position() &lt; 5]"/>
    </ul>
  </xsl:template>

  <xsl:template match="item">
    <article class="wvu-article" itemscope="" itemtype="http://schema.org/BlogPosting" role="article">
      <h2 class="wvu-article__title" itemprop="headline">
        <a>
          <xsl:attribute name="href">
            <xsl:value-of select="link"/>
          </xsl:attribute>
          <xsl:value-of select="title"/>
        </a>
      </h2>
      <div class="wvu-article__image" itemprop="articleImage">
        <img>
          <xsl:attribute name="src">
            <xsl:value-of select="image"/>
          </xsl:attribute>
          <xsl:attribute name="alt">
            <xsl:value-of select="image-alt"/>
          </xsl:attribute>
        </img>
      </div>
      <div class="wvu-article__body" itemprop="articleBody">
        <xsl:value-of disable-output-escaping="yes" select="description"/>
      </div>
    </article>
  </xsl:template>
</xsl:stylesheet>
