import type { Metadata } from "next";
import "./globals.css";
import Footer from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from "react-hot-toast";
import QueryProvider from '@/components/QueryProvider'
import Head from "next/head";

export const metadata: Metadata = {
  title: {
    default: "mountnoor",
    template: "mountnoor"
  },
  description: "Village of knowledge",
  openGraph: {
    title: "mountnoor",
    description: "village of knowledge",
    url: "https://mountnoor.in",
    siteName: "mountnoor",
    images: [
      {
        url: "https://res.cloudinary.com/dah6aafle/image/upload/v1724747350/mountnoor/mountnoor5_h0u4eh.png",
        width: 800,
        height: 600,
        alt: "mountnoor",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mountnoor",
    description: "Village of knowledge",
    images: ["https://res.cloudinary.com/dah6aafle/image/upload/v1724747350/mountnoor/mountnoor5_h0u4eh.png"],
  },
  icons: {
    icon: [
      { url: "/public/favicon.png" },
      { url: "/public/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/public/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/public/favicon.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content="mountnoor website - Find information about mountnoor and mountune. Stay updated with the latest news and activities." />
        <meta name="keywords" content="mountnoor, Mountnoor, posoat, mountune" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body className={`min-h-screen flex flex-col`}>
        <Toaster position="top-center" reverseOrder={false} />
        <QueryProvider>
          <div className="flex-grow">
            {children}
          </div>
        </QueryProvider>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}



// import type { Metadata } from "next";
// import "./globals.css";
// import Footer from '@/components/Footer';
// import { Analytics } from '@vercel/analytics/react';
// import { Toaster } from "react-hot-toast";
// import QueryProvider from '@/components/QueryProvider'
// import Head from "next/head";


// export const metadata: Metadata = {
//   title: {
//     default: "mountnoor",
//     template: "%mountnoor"
//   },
//   description: "Village of knowledge",
//   openGraph: {
//     title: "mountnoor",
//     description: "village of knowledge",
//     url: "https://mountnoor.in",
//     siteName: "mountnoor",
//     images: [
//       {
//         url: "https://res.cloudinary.com/dah6aafle/image/upload/v1724747350/mountnoor/mountnoor5_h0u4eh.png",
//         width: 800,
//         height: 600,
//         alt: "mountnoor",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "mountnoor",
//     description: "Village of knowlede",
//     images: ["https://res.cloudinary.com/dah6aafle/image/upload/v1724747350/mountnoor/mountnoor5_h0u4eh.png"],
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {


//   return (
//     <html lang="en">
//       <Head>
//         <meta name="description" content="mountnoor website - Find information about mountnoor and mountune. Stay updated with the latest news and activities." />
//         <meta name="keywords" content="mountnoor" />
//         <meta name="keywords" content="Mountnoor" />
//         <meta name="keywords" content="posoat" />
//         <meta name="keywords" content="mountune" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" />
//         {/* <link
//             href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap"
//             rel="stylesheet"
//           /> */}
//       </Head>

//       <body className={`min-h-screen flex flex-col`}>
//         <Toaster position="top-center" reverseOrder={false} />
//         <QueryProvider>
//           <div className="flex-grow">
//             {children}
//           </div>
//         </QueryProvider>

//         <Footer />
//         <Analytics />
//       </body>
//     </html>
//   );
// }
