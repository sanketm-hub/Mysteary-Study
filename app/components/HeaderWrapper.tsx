import { getNavigation } from "@/sanity/lib/getnavigation";
import Header from "./Header";

export default async function HeaderWrapper() {
  const menuItems = await getNavigation();
  return <Header menuItems={menuItems} />;
}
