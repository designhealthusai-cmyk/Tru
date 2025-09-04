import fg from "fast-glob";

export default async function sitemap() {
  const baseUrl = "https://www.trupeakhealth.in";

  // Find all page files
  const files = await fg(["./app/**/page.{js,jsx,ts,tsx}"], { dot: true });

  const routes = files.map((file) => {
    let path = file
      .replace(/^\.\/app/, "") // remove ./app
      .replace(/\/page\.(js|jsx|ts|tsx)$/, "") // remove page extension
      .replace(/\/index$/, "") // clean index routes
      .replace(/\\/g, "/"); // windows fix

    if (path === "") path = "/"; // homepage

    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date().toISOString(),
    };
  });

  return routes;
}
