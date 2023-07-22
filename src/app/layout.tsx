export const metadata = {
  title: "Blueprint AI",
  description: "Get all the answers you need about Bryan Johnson's Blueprint",
};

import "../global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
