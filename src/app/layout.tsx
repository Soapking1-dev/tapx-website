import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin", "hebrew"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tapx.shop"),
  title: "TAPX — לא עוד מעמד QR",
  description:
    "TAPX מעצבת ומייצרת מעמדי QR ו-NFC מודפסים בתלת־ממד, בעיצוב אישי מלא לפי המיתוג של העסק שלכם. מוצר מיתוג, לא סתם מדבקה עם קוד.",
  openGraph: {
    title: "TAPX — לא עוד מעמד QR",
    description:
      "מעמדים מודפסים בתלת־ממד, בעיצוב אישי מלא. QR ו-NFC שמחברים לקוחות לאינסטגרם, וואטסאפ, ביקורות בגוגל, תפריט ועוד.",
    locale: "he_IL",
    type: "website",
    images: ["/images/product-2.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "מעמד ברקוד מעוצב אישית",
  description:
    "מעמד QR ו-NFC מודפס בתלת־ממד, בעיצוב אישי מלא לפי מיתוג העסק.",
  brand: { "@type": "Brand", name: "TAPX" },
  offers: {
    "@type": "Offer",
    priceCurrency: "ILS",
    price: "350",
    availability: "https://schema.org/InStock",
    url: "https://tapx.shop/collections/all",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable} h-full`}>
      <body className="min-h-full bg-ink text-paper antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
