import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahmoud Elbalhi | Front-End Portfolio & Projects",
  description: "Portfolio of Mahmoud Elbalhi, Front-End Developer. Showcasing modern UI/UX, web projects, and skills in React.js, Tailwind CSS, and more.",
  icons: {
    icon: "/portfolio.svg",
  },
  openGraph: {
    title: "Mahmoud Elbalhi | Front-End Portfolio & Projects",
    description: "Portfolio of Mahmoud Elbalhi, Front-End Developer. Showcasing modern UI/UX, web projects, and skills in React.js, Tailwind CSS, and more.",
    url: "https://your-portfolio-url.com/",
    siteName: "Mahmoud Elbalhi Portfolio",
    images: [
      {
        url: "/portfolio.webp",
        width: 1200,
        height: 630,
        alt: "Mahmoud Elbalhi Portfolio Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahmoud Elbalhi | Front-End Portfolio & Projects",
    description: "Portfolio of Mahmoud Elbalhi, Front-End Developer. Showcasing modern UI/UX, web projects, and skills in React.js, Tailwind CSS, and more.",
    images: ["/portfolio.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
