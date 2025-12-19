import type { Metadata } from "next";
import { Inter, Aldrich } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const aldrich = Aldrich({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aldrich",
});

export const metadata: Metadata = {
  title: "Nurana Rustamli - Portfolio",
  description: "Modern portfolio website featuring 3D animations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${aldrich.variable}`}>{children}</body>
    </html>
  );
}

