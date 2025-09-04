import fg from "fast-glob";

export default async function sitemap() {
  const baseUrl = "https://www.trupeakhealth.in"; // your domain

  // Scan all page files in /app
  const files = await fg(["./app/**/page.{js,jsx,ts,tsx}"], { dot: true });

  const routes = files.map((file) => {
    let path = file
      .replace(/^\.\/app/, "") // remove ./app
      .replace(/\/page\.(js|jsx|ts|tsx)$/, "") // remove page.xxx
      .replace(/\/index$/, "") // clean index routes
      .replace(/\\/g, "/");

    if (path === "") path = "/"; // root path

    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date().toISOString(),
    };
  });

  return routes;
}
