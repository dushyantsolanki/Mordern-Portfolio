import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100', '200', "300", "400", "500", "600", "700"],
  display: "swap",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className}  `}>
        <main className="min-h-screenbg bg-primary text-white font-light">
          {children}
        </main>
      </body>
    </html>
  );
}




