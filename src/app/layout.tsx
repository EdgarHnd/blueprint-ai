export const metadata = {
  title: "Blueprint AI",
  description: "Get all the answers you need about Bryan Johnson's Blueprint using this AI chatbot.",
};

import "../global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <script defer data-domain="blueprint-ai.app" src="https://plausible.io/js/script.js"></script>
      <body>{children}</body>
    </html>
  );
}
