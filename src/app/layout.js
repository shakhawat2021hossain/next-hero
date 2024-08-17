import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import AuthProvider from "@/services/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Next Hero",
    template: "%s | Next Hero",
  },
  description: "Choose your meal",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar></Navbar>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
