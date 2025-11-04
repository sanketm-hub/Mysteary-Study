"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Header from "./Header";

export default function HeaderWrapper() {
  const [menuItems, setMenuItems] = useState<any[]>([]);

  useEffect(() => {
    async function fetchMenu() {
      try {
        const data = await client.fetch(`*[_type == "navigation"] | order(order asc)`);
        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching navigation data:", error);
      }
    }

    fetchMenu();
  }, []);

  return <Header menuItems={menuItems} />;
}
