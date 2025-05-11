import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans'; // Import GeistSans from the correct package
import './globals.css';
import { MainLayout } from '@/components/layout/main-layout';
import { Toaster } from "@/components/ui/toaster";

// The GeistSans object from 'geist/font/sans' is used directly.
// Its .variable property provides a class name that defines the --font-geist-sans CSS variable.

// Removed Geist_Mono as it's not explicitly used and GeistSans is primary
// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: "Ranvir's Portfolio",
  description: "Personal portfolio of Ranvir Kumar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} font-sans antialiased`}>
        <MainLayout>{children}</MainLayout>
        <Toaster />
      </body>
    </html>
  );
}
