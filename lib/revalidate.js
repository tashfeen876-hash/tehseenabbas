import { revalidatePath } from "next/cache";

export function revalidateSite() {
  revalidatePath("/");
  revalidatePath("/api/portfolio");
}