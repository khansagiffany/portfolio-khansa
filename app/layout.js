import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://portfolio-khansa.vercel.app"),
  title: "Khansa Putri Giffany — Full Stack Developer Portfolio",
  description:
    "Portfolio of Khansa Putri Giffany, a Full Stack Developer passionate about building modern web apps, dashboards, and digital solutions.",
  openGraph: {
    title: "Khansa Putri Giffany — Full Stack Developer",
    description:
      "Explore my projects, skills, and experiences in web development.",
    url: "https://portfolio-khansa.vercel.app",
    siteName: "Khansa Giffany Portfolio",
    images: [
      {
        url: "/og-image.png", // otomatis jadi absolute: https://portfolio-khansa.vercel.app/og-image.png
        width: 1200,
        height: 630,
        alt: "Khansa Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khansa Putri Giffany — Full Stack Developer",
    description: "Explore my portfolio and web projects.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
