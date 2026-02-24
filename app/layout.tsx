export const metadata = {
  title: "PropertyGenome",
  description: "PropertyGenome Score - The FICO Score for Real Estate"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Inter, Arial, sans-serif", background: "#ffffff" }}>
        {children}
      </body>
    </html>
  );
}
