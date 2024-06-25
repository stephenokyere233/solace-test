import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "jotai";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Solace Test | Stephen",
  description: "Stephen Okyere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
