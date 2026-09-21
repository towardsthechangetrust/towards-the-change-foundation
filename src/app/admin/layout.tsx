import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Console",
  description: "Administrative console for Towards the Change Foundation.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
