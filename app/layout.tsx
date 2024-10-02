import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import ThemeContextProvider from "./components/Context/ThemContext";
import ThemeSwitch from "./components/ThemSwitch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aboelwafa | SoftwareEngineer",
  description: "created by Aboelwafa fresh frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 bg-gray-50 text-gray-950 relative`}>
        <div className="bg-[#fbe2e3] dark:bg-[#946263] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] dark:bg-[#676394] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl-[left-5rem]"></div>
        <ThemeContextProvider>
        <Navbar />
        {children}
        <Footer />
        <ThemeSwitch />
        </ThemeContextProvider>
        </body>
    </html>
  );
}
