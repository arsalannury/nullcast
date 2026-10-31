import LocalFont from "next/font/local";
import "./globals.css";
import { Metadata } from "next";

const iranYekan = LocalFont({
  src: "../../public/fonts/yekan.ttf",
});

export const metadata: Metadata = {
  title: "نال کست",
  description: "جایی برای گوش کردن به آنچه ارزش شنیدن دارد",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" className={`${iranYekan.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
