import type { Metadata } from "next";
import LayoutShell, { baseMetadata } from "../LayoutShell";

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutShell lang="ru">{children}</LayoutShell>;
}
