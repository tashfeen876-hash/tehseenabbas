import { getContent } from "../lib/data";
import HomeClient from "./home-client";

export const revalidate = 3600;

export default async function Home() {
  let initialData = null;
  try {
    initialData = await getContent();
  } catch (err) {
    console.error("Failed to load content on server:", err);
  }
  return <HomeClient initialData={initialData} />;
}