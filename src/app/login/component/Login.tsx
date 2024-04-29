"use client"
import Link from "next/link";
import { LuPlusSquare } from "react-icons/lu";
import { signIn } from "next-auth/react"
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handlkeSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const res = await signIn("credentials", {
        email: formData.get("email"),
        password: formData.get("password"),
        redirect: false,
      }
      );
      console.log(res)
      if (res.error === null) router.push("/accueil")
      else console.log(res.error)

    } catch (e) {
      console.log(e)
    }
  };

  return (
    <div className="flex flex-col justify-center items-center   w-full  font-sans ">
      <div className="bg-gray-100  flex  justify-center items-center  gap-5  w-full h-[700px] font-sans ">
        <div className="flex  justify-between items-center  gap-1 md:mt-20  p-6 max-w-[1000px]  max-md:flex-col  ">
          <div className="flex flex-col text md:mt-[-225px] min-w-[450px] max-md:text-center max-md:max-w-[390px] ">
            <h1 className="text-6xl  font-bold text-blue-600 scale-y-90">facebook</h1>
            <p className="text-3xl mt-4 text-gray-700 max-md:text-[24px] ">Avec Facebook, partagez et restez en contact avec votre entourage.</p>
          </div>
          <div className=" rounded-lg max-md:flex max-md:flex-col max-md:items-center max-md:mt-5 ">
            <form

              onSubmit={handlkeSubmit}
              className="bg-white flex flex-col p-5 pb-0 gap-4 w-[420px]  items-center shadow-2xl rounded-lg ">
              <div className=" flex flex-col gap-4 w-full" >
                <input
                  className="border border-gray-300 rounded p-4 w-full focus:outline-none focus:border-blue-500 placeholder-black placeholder-opacity-25 focus:placeholder-opacity-10"
                  placeholder="Adresse e-mail ou numéro de tél."
                  type="text"
                  autoComplete="email"
                  name="email"
                />
                <input
                  className="border border-gray-300 rounded p-4 w-full focus:outline-none focus:border-blue-500 placeholder-black placeholder-opacity-25 focus:placeholder-opacity-10"
                  placeholder="Mot de passe"
                  autoComplete="current-password"
                  type="password"
                  name="password"
                />
              </div>
              <button
                className="text-[20px] font-bold bg-blueBtn text-white  p-4 w-full  rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
                type="submit"
              >
                Se connecter
              </button >
              <Link href="/password" className="text-blue-500 tracking-tight hover:underline">Mot de passe oublié ?</Link>
              <div className="bottom-0 w-full h-[1px] bg-blue-300 ">

              </div>
              <button className="pt-3 flex w-full  items-center justify-center ">
                <Link href="/register" className="text-[20px] font-bold  bg-green text-white  p-4 px-18 rounded-lg  hover:bg-green-600">Créer nouveau compte</Link>
              </button>

            </form>
            <div className="p-6 text-center max-md:max-w-[450px] max-md:text-[15px]">
              <Link href="/" className="font-bold hover:underline ">Créer une Page</Link>
              {" "}pour une célébrité, une marque ou une entreprise.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-6 w-[950px] h-[190px] gap-3 text-xs text-black text-opacity-50 max-md:w-full ">
        <ul className="flex gap-3 flex-wrap">
          <li>Français (France) </li>
          <li>English (US) </li>
          <li>Español </li>
          <li>Türkçe </li>
          <li>Português (Portugal) </li>
          <li>العربية </li>
          <li>Italiano </li>
          <li>Deutsch </li>
          <li>हिन्दी </li>
          <li>中文(简体) </li>
          <li>日本語 </li>
          <li>

            <LuPlusSquare
              size={10} />

          </li>
        </ul>

        <ul className="flex flex-wrap gap-2 border-t border-gray-300 border-solid pt-4">
          <li>S’inscrire</li>
          <li>Se connecter</li>
          <li>Messenger</li>
          <li>Facebook Lite</li>
          <li>Vidéo</li>
          <li>Lieux</li>
          <li>Jeux</li>
          <li>Marketplace</li>
          <li>Meta Pay</li>
          <li>Meta Store</li>
          <li>Meta Quest</li>
          <li>Instagram</li>
          <li>Threads</li>
          <li>Collectes de dons</li>
          <li>Services Centre d’information sur les élections</li>
          <li>Politique de confidentialité</li>
          <li>Centre de confidentialité</li>
          <li>Paramètres des cookies</li>
          <li>Groupes</li>
          <li>À propos</li>
          <li>Créer une publicité</li>
          <li>Créer une Page</li>
          <li>Développeurs</li>
          <li>Emplois</li>
          <li>Cookies</li>
          <li>Paramètres des cookies</li>
          <li>Choisir sa publicité</li>
          <li>Conditions générales</li>
          <li>Aide</li>
          <li>Importation des contacts et non-utilisateurs</li>

        </ul>

        <div className="mt-1 pb-5">
          Meta © 2024
        </div>
      </div>

    </div>
  );
}
