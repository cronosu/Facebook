import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Facebook",
  description: "Generated by Cronosu",
};

interface IProps {
  children: ReactNode;
  session: any;
}

export default function RootLayout({
  children, session
}: IProps) {
  return (
    <html lang="fr">
      <body>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
