//"use client"
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from 'next/navigation'
import { useEffect } from "react";

export default async function Home() {
  const session = await auth();

  {
    session ? redirect("/accueil"):redirect("/login")
  }


  return null;
}
