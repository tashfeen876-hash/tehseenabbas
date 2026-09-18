import "./globals.css";
import ExtensionCleanup from "./extension-cleanup";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tahseenabbas.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tahseen Abbas - Profile",
  description: "Portfolio of Tahseen Abbas",
  openGraph: {
    title: "Tahseen Abbas - Profile",
    description: "Portfolio of Tahseen Abbas",
    url: SITE_URL,
    images: [`${SITE_URL}/logo/tehseen-abbas.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahseen Abbas - Profile",
    description: "Portfolio of Tahseen Abbas",
    images: [`${SITE_URL}/logo/tehseen-abbas.jpg`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="icon" href="/logo/logo.png" type="image/png" />
      </head>
      <body>
        <ExtensionCleanup />
        {children}
      </body>
    </html>
  );
}