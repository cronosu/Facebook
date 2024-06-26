import type { Metadata } from "next";

import "./globals.css";
import { ReactNode } from "react";



export const metadata: Metadata = {
  title: "Facebook",
  description: "Generated by Cronosu",
};

interface IProps {
  children: ReactNode;
}

export default async function RootLayout({
  children
}: IProps) {

  return (
    <html lang="fr" >
      <head>
      </head>
      <body > 

          {children}

      </body>
    </html>
  );
}
