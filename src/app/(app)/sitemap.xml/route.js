import IIpucsub from "/IIpucsub.json";
import sslcsub from "/sslcsub.json";

export async function GET() {
  const baseUrl = "https://acadigo.vercel.app";

  const allRoutes = [];

  const addRoute = (
    url,
    priority = "0.5",
    changefreq = "monthly",
    lastmod = new Date()
  ) => {
    allRoutes.push({ url, priority, changefreq, lastmod });
  };

  // Homepage
  addRoute("/", "1.0", "weekly");

  // Static pages
  const staticPages = [
    "/iipuc",
    "/sslc",
    "/upload-resources",
    "/kcet",
    "/neet",
  ];
  staticPages.forEach((path) => addRoute(path, "0.8", "monthly"));

  // II PUC
  for (const stream in IIpucsub) {
    addRoute(`/iipuc/${encodeURIComponent(stream)}`, "0.7", "monthly");

    IIpucsub[stream].forEach((subject) => {
      addRoute(
        `/iipuc/${encodeURIComponent(stream)}/${encodeURIComponent(subject)}`,
        "0.6",
        "yearly"
      );
    });
  }

  // SSLC
  for (const stream in sslcsub) {
    addRoute(`/sslc/${encodeURIComponent(stream)}`, "0.7", "monthly");

    sslcsub[stream].forEach((subject) => {
      addRoute(
        `/sslc/${encodeURIComponent(stream)}/${encodeURIComponent(subject)}`,
        "0.6",
        "yearly"
      );
    });
  }

  // Sitemap XML string
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    ({ url, priority, changefreq, lastmod }) => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${lastmod.toISOString().split("T")[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}