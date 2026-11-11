import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseURL = "https://toolverse-phi.vercel.app/";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`
  };
}
