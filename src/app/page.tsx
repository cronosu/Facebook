"use client"
import { redirect } from 'next/navigation';
import { useState} from "react";
import Header from "./component/Header";

export default function Home() {
  const [login, SetLogin] = useState(true);

  if (!login) {
    redirect('/login')
  }

  return (
    <main className="bg-neutral-900 h-[500px]">
         <Header/>
    </main>

  );
}
