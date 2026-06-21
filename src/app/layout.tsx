import Script from 'next/script';
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dynamic Fashions',
  description: 'Dynamic Fashions uses expert curation and style analysis to help you find the best fashion essentials for a modern lifestyle.',
  keywords: 'fashion reviews, menswear, womenswear, style guide, capsule wardrobe, accessories',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-5RDTBDFRL8`}
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-5RDTBDFRL8');
  `}
</Script>
      <body className="font-body antialiased selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
