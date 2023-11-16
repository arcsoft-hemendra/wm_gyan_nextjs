import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export const metadata = {
  title:
    "Bharat ke Apne Gyan Guru: Learn new skills, knowledge & grow your career",
  description:
    "Gyan Manch - Bharat Ke Apne Gyan Guru. Share your knowledge to help everyone learn and get inspired by you. Learn new skills to grow your career",
  applicationName: "https://gyan.workmob.com/",
  keywords: ["Next.js", "React", "JavaScript"],
  metadataBase: new URL("https://gyan.workmob.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
