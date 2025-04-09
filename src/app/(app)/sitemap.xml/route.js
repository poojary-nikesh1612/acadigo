import IIpucsub from "/IIpucsub.json";
import sslcsub from "/sslcsub.json";

export async function GET() {
  const baseUrl = " http://localhost:3000";

  const allRoutes = [
    "/",
    "/iipuc",
    "/sslc",
    "/upload-resources",
    "/kcet",
    "/neet",
  ];

  for (const stream in IIpucsub) {
    const route = `/iipuc/${encodeURIComponent(stream)}`;
    allRoutes.push(route);
    IIpucsub[stream].forEach((subject) => {
      const route = `/iipuc/${stream}/${encodeURIComponent(subject)}`;
      allRoutes.push(route);
    });
  }

  for (const stream in sslcsub) {
    const route = `/sslc/${encodeURIComponent(stream)}`;
    allRoutes.push(route);
    sslcsub[stream].forEach((subject) => {
      const route = `/sslc/${encodeURIComponent(stream)}/${encodeURIComponent(
        subject
      )}`;
      allRoutes.push(route);
    });
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (url) => `
  <url>
    <loc>${baseUrl}${url}</loc>
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
