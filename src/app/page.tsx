"use client"
import { redirect } from 'next/navigation'
import { useState} from "react";

export default function Home() {
  const [login, SetLogin] = useState(false);

  if (!login) {
    redirect('/login')
  }

  return (
    <main className="p-4">
      <p className="text-lg">
        Tu es connecté ? : {" "}
        <span className={login ? "text-green-500" : "text-red-500"}>
          {login ? "Oui" : "Non"}
        </span>
      </p>
    </main>

  );
}
