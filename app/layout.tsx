import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stevron Chile | Power. Simplified.",
  description: "Stevron Chile: herramientas manuales, accesorios, sistema 1ne, soporte y distribución.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#070907" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
