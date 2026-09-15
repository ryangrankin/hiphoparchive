import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Hip-Hop Archive",
  description: "Explore the history, culture, and evolution of hip-hop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}