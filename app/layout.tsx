import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import CustomFloatingDock from "@/components/custom-floating-dock";
import NavbarDemo from "@/components/navbar-menu-demo";
import CustomNavbar from "@/components/resizable-navbar-demo";
import Footer from "@/components/common/footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "කරවල කඩේ",
  description: "",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={`${geistSans.className} antialiased`}>

          <CustomNavbar />
          {children}

          <div className="fixed bottom-4 w-full items-center z-20">
            <CustomFloatingDock />
          </div>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
