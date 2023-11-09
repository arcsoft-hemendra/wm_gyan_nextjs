import "./globals.css";

export const metadata = {
  title:
    "Bharat ke Apne Gyan Guru: Learn new skills, knowledge & grow your career",
  description:
    "Gyan Manch - Bharat Ke Apne Gyan Guru. Share your knowledge to help everyone learn and get inspired by you. Learn new skills to grow your career",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
