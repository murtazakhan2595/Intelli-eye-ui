import type { Metadata } from "next";
import "./globals.css";
import localFont from "@next/font/local";
import { cn } from "@/lib/utils";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
const graphik = localFont({
  src: [
    {
      path: "../../public/fonts/Graphik-Regular-Trial.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Graphik-Bold-Trial.otf",
      weight: "600",
    },
    {
      path: "../../public/fonts/Graphik-Black-Trial.otf",
      weight: "700",
    },
  ],
  variable: "--font-graphik",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-graphik antialiased",
          graphik.variable
        )}
      >
        <div className="min-h-screen ">{children}</div>
      </body>
    </html>
  );
}
