import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  metadataBase: new URL("https://portfolio-lime-rho-kpnnttmaud.vercel.app"),
  title: "Mahmoud Elbalhi | Full Stack JavaScript Developer",
  description:
    "Portfolio of Mahmoud Elbalhi, a Full Stack JavaScript Developer building modern web applications with React, Next.js, Node.js, and Express.js.",
  icons: { icon: "/portfolio.svg" },
  openGraph: {
    title: "Mahmoud Elbalhi | Full Stack JavaScript Developer",
    description:
      "Full Stack JavaScript Developer — React.js, Next.js, Node.js, Express.js.",
    images: [{ url: "/portfolio.webp", width: 1024, height: 1024, alt: "Mahmoud Elbalhi portfolio" }],
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", images: ["/portfolio.webp"] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
