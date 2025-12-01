import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function SimplyblueApplicationLayout({ children }) {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get("isAuthenticated")?.value;

  if (!isAuthenticated || isAuthenticated === "false") {
    redirect("/simplyblu");
  }

  return children;
}
