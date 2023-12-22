import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "react-calendar/dist/Calendar.css";
import "./globals.css";
import { AppThemeProvider } from "~~/components/providers";
import { PrimaryLayout } from "~~/components/layout";

export const metadata: Metadata = {
  title: "veerge",
  description: "This is a real estate management app",
};
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const proxima = localFont({
  src: "./ProximaRegular.otf",
  display: "swap",
  variable: "--font-proxima",
});
const euclid = localFont({
  src: [
    {
      path: "./EuclidRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./EuclidMedium.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./EuclidBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-euclid",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${proxima.variable}  ${euclid.variable} ${inter.className}`}
      >
        <AppThemeProvider>
          <PrimaryLayout>{children}</PrimaryLayout>
        </AppThemeProvider>
      </body>
    </html>
  );
}
