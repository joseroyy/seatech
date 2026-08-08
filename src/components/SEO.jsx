import { useEffect } from 'react';

const DEFAULT_SEO = {
  title: 'Sea Tech Agencies | Premium Industrial Products & Engineering Solutions Kerala',
  description: 'Sea Tech Agencies is South India\'s premier industrial products distributor since 1998. Supplying high-quality hydraulic equipment, bearings, power tools, material handling, and engineering consumables in Perumbavoor, Ernakulam, Kochi, Kerala.',
  keywords: 'Sea Tech Agencies, industrial products supplier Kerala, hydraulic tools Kochi, bearings distributor Ernakulam, industrial equipment Perumbavoor, Enerpac distributor Kerala, SKF bearings Kochi, power tools Kerala, material handling equipment, industrial valves Kerala',
  canonicalUrl: 'https://www.seatechagencies.com/',
  ogImage: 'https://www.seatechagencies.com/images/home-highlights.png'
};

export default function SEO({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  schema
}) {
  useEffect(() => {
    // 1. Title Update
    const finalTitle = title ? `${title} | Sea Tech Agencies` : DEFAULT_SEO.title;
    document.title = finalTitle;

    // 2. Meta Tag Helper
    const setMetaTag = (selector, attrName, attrValue, content) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Link Tag Helper
    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 4. Update Descriptions & Keywords
    const finalDescription = description || DEFAULT_SEO.description;
    const finalKeywords = keywords || DEFAULT_SEO.keywords;
    const finalCanonical = canonicalUrl || DEFAULT_SEO.canonicalUrl;
    const finalOgImage = ogImage || DEFAULT_SEO.ogImage;

    setMetaTag('meta[name="description"]', 'name', 'description', finalDescription);
    setMetaTag('meta[name="keywords"]', 'name', 'keywords', finalKeywords);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', finalTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', finalDescription);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', finalOgImage);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', finalCanonical);
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', finalTitle);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', finalDescription);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', finalOgImage);
    
    setLinkTag('canonical', finalCanonical);

    // 5. Injected JSON-LD Schema (AEO & GEO optimization)
    let schemaScript = document.getElementById('dynamic-page-schema');
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.setAttribute('type', 'application/ld+json');
        schemaScript.setAttribute('id', 'dynamic-page-schema');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }

    return () => {
      // Cleanup dynamically injected page schema on unmount if needed
      const scriptToRemove = document.getElementById('dynamic-page-schema');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, keywords, canonicalUrl, ogImage, schema]);

  return null;
}
