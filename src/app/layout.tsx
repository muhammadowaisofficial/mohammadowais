import clsx from "clsx";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header/Header";
// import Footer from '@/components/Footer/Footer';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ecommerce Inside",
  description:
    "Ecommerce Inside is a full-service digital solutions agency based in USA specializing in branding designs, Software, Mobile Apps, Webs, & Marketing Solutions.",
  icons: ["/favicon.png"],
  viewport: { width: "device-width", initialScale: 1, maximumScale: 1 },
};

export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <html
      lang="en"
      className={clsx("font-lato h-full antialiased", poppins.className)}
    >
      <head />
      <body className="flex min-h-full flex-col">
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
