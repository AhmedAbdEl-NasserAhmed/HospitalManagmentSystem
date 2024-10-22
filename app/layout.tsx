import type { Metadata } from "next";
import { Inter } from "next/font/google";

import StoreProvider from "./StoreProvider";
import "./globals.scss";
import { AntdRegistry } from "@ant-design/nextjs-registry";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "700", "800"]
});

export const metadata: Metadata = {
  title: "TIRYAAQ",
  description: "The Best Finding Doctors Site"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          suppressHydrationWarning={true}
          className={`${inter.className} antialiased`}
        >
          <AntdRegistry>{children}</AntdRegistry>
        </body>
      </html>
    </StoreProvider>
  );
}
