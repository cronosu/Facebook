//"use client"
import Link from "next/link";
import { auth } from "./api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation'
import { useEffect } from "react";

export default async function Home() {
  const session = await auth();

redirect("/login")

  return (
    <>
      <p className="text-3xl flex justify-center items-center mt-20"> Main page </p>
      <Link href="/accueil" className="text-3xl flex justify-center items-center mt-20 text-white"> Accueil </Link>
      <p className="text-3xl flex justify-center items-center "> {session ? "Session On" : "Session Off"} </p>
    </>
  );
}
