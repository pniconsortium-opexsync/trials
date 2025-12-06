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
  title: "PNI Consortium | GST, Tax, Auditing, Litigation & Compliance Experts",
  description: "A leading GST, tax consulting, auditing, litigation, and corporate compliance firm based in Aluva, Kochi. With 40+ years of experience and 5000+ clients, we provide reliable, accurate, and business-focused financial and legal services for individuals and companies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}



