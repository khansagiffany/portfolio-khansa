import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
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
        url: "/og-image.png",
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
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
