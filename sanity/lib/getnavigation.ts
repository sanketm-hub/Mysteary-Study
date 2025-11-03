import { client } from "@/sanity/lib/client";

export async function getNavigation() {
  const query = `*[_type == "navigation"] | order(order asc) {
    title,
    slug,
    submenu[]{
      label,
      slug
    }
  }`;
  return await client.fetch(query);
}
