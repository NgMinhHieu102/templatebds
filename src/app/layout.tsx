import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUMIÈRE Prime Hills | Biểu tượng chất sống tinh anh",
  description: "LUMIÈRE Prime Hills — biểu tượng chất sống tinh anh tại trung tâm quốc tế Global Gate, Hà Nội.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
