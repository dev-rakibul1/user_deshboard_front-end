import type { Metadata } from "next";

import Providers from "@/lib/Providers";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata: Metadata = {
  title: "USER TASK",
  description:
    "A responsive task dashboard using Next.js and TypeScript, with task CRUD, filtering, and charts. Features responsive design, persistent storage, and validation with Zod, styled with Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <Toaster />
          {children}
        </body>
      </html>
    </Providers>
  );
}
