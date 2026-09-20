import "./globals.css";
import ExtensionCleanup from "./extension-cleanup";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tahseenabbas.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Tahseen Abbas | Founder of Binary Hub | Gilgit-Baltistan",
    template: "%s",
  },
  description:
    "Official profile of Tahseen Abbas, Founder and Chairman of Binary Hub — a technology entrepreneur and digital-skills advocate empowering students, youth and women in Gilgit-Baltistan, Pakistan through technology, freelancing, digital skills and entrepreneurship.",
  keywords: [
    "Tahseen Abbas",
    "Tashfeen Abbas",
    "Binary Hub",
    "Founder of Binary Hub",
    "Gilgit-Baltistan",
    "Tech Entrepreneur",
    "Digital Skills",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Tahseen Abbas | Founder of Binary Hub | Gilgit-Baltistan",
    description:
      "Official profile of Tahseen Abbas, Founder and Chairman of Binary Hub — a technology entrepreneur and digital-skills advocate from Gilgit-Baltistan, Pakistan.",
    url: SITE_URL,
    siteName: "Binary Hub",
    type: "profile",
    profile: { firstName: "Tahseen", lastName: "Abbas" },
    images: [`${SITE_URL}/logo/tehseen-abbas.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahseen Abbas | Founder of Binary Hub | Gilgit-Baltistan",
    description:
      "Official profile of Tahseen Abbas, Founder and Chairman of Binary Hub — a technology entrepreneur and digital-skills advocate from Gilgit-Baltistan, Pakistan.",
    images: [`${SITE_URL}/logo/tehseen-abbas.jpg`],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function s(){var e=document.querySelectorAll("*");for(var i=0;i<e.length;i++){var n=e[i];if(n.hasAttribute("bis_skin_checked"))n.removeAttribute("bis_skin_checked");if(n.hasAttribute("bis_register"))n.removeAttribute("bis_register");if(n.attributes){var a=n.attributes;for(var j=a.length-1;j>=0;j--){var x=a[j].name;if(x.indexOf("__processed_")===0)n.removeAttribute(x)}}}}s();var o=new MutationObserver(s);o.observe(document.documentElement,{childList:true,subtree:true,attributes:true});window.addEventListener("load",function(){o.disconnect()})})();`,
          }}
        />
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
      <body suppressHydrationWarning>
        <ExtensionCleanup />
        {children}
      </body>
    </html>
  );
}