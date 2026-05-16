import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "César Alameda | Backend Developer",
  description:
    "Backend developer specialized in Java, Spring Boot, PostgreSQL, and ERP integrations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
