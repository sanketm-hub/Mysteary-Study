"use client";
import Header from "./Header";

export default function HeaderClient({ menuItems }: { menuItems: any[] }) {
  return <Header menuItems={menuItems} />;
}
