"use client"
import Link from "next/link";

export default function Coucou() {
  return (
    <div className="flex flex-col justify-center items-center   w-full  font-sans">
      <div className="bg-gray-100  flex  justify-center items-center  gap-5 pt-5 w-full h-[700px] font-sans">
        <div className="flex  justify-between items-center  gap-1 mt-20  p-6 max-w-[1000px]  max-md:flex-col ">
          <div className="text mt-[-225px] min-w-[450px] max-md:text-center   ">
            <h1 className="text-6xl pt-5 font-bold text-blue-600">facebook</h1>
            <p className="text-3xl mt-4 text-gray-700 ">Avec Facebook, partagez et restez en contact avec votre entourage.</p>
          </div>

          <div className=" rounded-lg max-md:flex max-md:flex-col max-md:items-center  ">
            <form className="bg-white flex flex-col p-3 gap-4 w-[390px]  items-center shadow-2xl rounded-lg ">
              <input
                className="border border-gray-300 rounded p-4 w-full focus:outline-none focus:border-blue-500 placeholder-black placeholder-opacity-25 focus:placeholder-opacity-10"
                placeholder="Adresse e-mail ou numéro de tél."
                type="email"
                autoComplete="email"
              />
              <input
                className="border border-gray-300 rounded p-4 w-full focus:outline-none focus:border-blue-500 placeholder-black placeholder-opacity-25 focus:placeholder-opacity-10"
                placeholder="Mot de passe"
                type="password"
                autoComplete="current-password"
              />
              <button
                className="  bg-blue-500 text-white  p-3 w-full rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
                type="submit"
              >
                Se connecter
              </button>
              <Link href="/password" className="text-blue-500 tracking-tight">Mot de passe oublié ?</Link>
              <div className="bottom-0 w-full h-[1px] bg-blue-300 ">

              </div>
              <div className="pt-4 flex w-full  items-center justify-center">
                <Link href="/nouveau-compte" className="text-2xl bg-green-500 text-white  p-4 px-18 rounded-lg  hover:bg-green-600">Créer nouveau compte</Link>
              </div>

            </form>
            <div className="p-6 text-center">
              <Link href="/" className="font-bold">Créer une Page </Link>
              pour une célébrité, une marque ou une entreprise.
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-6 w-[950px] h-[190px] gap-3 text-xs text-black text-opacity-50">
        <ul className="flex gap-3">
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
        <div className="mt-1">
          Meta © 2024
        </div>
      </div>

    </div>
  );
}
