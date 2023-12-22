import type { Metadata } from "next";
import "react-calendar/dist/Calendar.css";
import "./globals.css";
import { AppThemeProvider } from "~~/components/providers";
import { PrimaryLayout } from "~~/components/layout";

export const metadata: Metadata = {
  title: "veerge",
  description: "This is a real estate management app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppThemeProvider>
          <PrimaryLayout>{children}</PrimaryLayout>
        </AppThemeProvider>
      </body>
    </html>
  );
}
