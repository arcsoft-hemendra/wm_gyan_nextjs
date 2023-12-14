import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { HomepageData } from "@/utils/strings/string";
import UrlContext from "@/context/UrlContext";

export const metadata = {
  title: HomepageData.title,
  description: HomepageData.description,
  applicationName: HomepageData.applicationName,
  metadataBase: new URL("https://gyan.workmob.com"),
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: HomepageData.title,
    description: HomepageData.description,
    url: HomepageData.hostName,
    siteName: HomepageData.hostName,
    images: [
      {
        url: HomepageData.ogImage,
        width: 800,
        height: 600,
      },
      {
        url: HomepageData.ogImage,
        width: 1800,
        height: 1600,
        alt: HomepageData.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: HomepageData.title,
    description: HomepageData.description,
    creator: "@Workmob",
    images: {
      url: HomepageData.ogImage,
      alt: HomepageData.hostName,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  alternates: {
    canonical: HomepageData.hostName,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UrlContext>{children}</UrlContext>
      </body>
    </html>
  );
}
