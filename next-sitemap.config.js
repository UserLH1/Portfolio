/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://horatiulazea.com", // adresa site-ului tău
  generateRobotsTxt: true, // Automat generează și un robots.txt
  sitemapSize: 5000, // Numărul maxim de link-uri per sitemap
};
