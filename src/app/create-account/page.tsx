"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation'

const CreerCompte: React.FC = () => {
  const router = useRouter()
  const [nomUtilisateur, setNomUtilisateur] = useState<string>('');
  const [motDePasse, setMotDePasse] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    // Code pour envoyer les données de création de compte
    try {
      router.push('/')
      // Appel à une fonction pour créer un compte utilisateur
      // Par exemple, une requête à une API
      // await api.post('/creer-compte', { nomUtilisateur, motDePasse });
      // Redirection après la création du compte
    } catch (error) {
      console.error('Erreur lors de la création du compte : ', error);
      // Gestion des erreurs, affichage d'un message à l'utilisateur, etc.
    }

  };

  return (
    <div className=" flex justify-center items-center h-[100vh] w-full bg-blue-900">
      <form onSubmit={handleSubmit} className="bg-white flex flex-col p-5 pb-0 gap-4 w-[420px]  items-center shadow-2xl rounded-lg ">
        <label htmlFor="nomUtilisateur">Nom d'utilisateur</label>
        <input  className="border border-gray-300 rounded p-4 w-full focus:outline-none focus:border-blue-500 placeholder-black placeholder-opacity-25 focus:placeholder-opacity-10"
          type="text"
          id="nomUtilisateur"
          value={nomUtilisateur}
          onChange={(e) => setNomUtilisateur(e.target.value)}
        />
        <label htmlFor="motDePasse">Mot de passe</label>
        <input  className="border border-gray-300 rounded p-4 w-full focus:outline-none focus:border-blue-500 placeholder-black placeholder-opacity-25 focus:placeholder-opacity-10"
          type="password"
          id="motDePasse"
          value={motDePasse}
          onChange={(e) => setMotDePasse(e.target.value)}
        />
        
        <button className="text-[20px] font-bold  bg-green text-white  p-4 px-18 rounded-lg  hover:bg-green-600" type="submit">Créer le compte</button>
      </form>
    </div>
  );
};

export default CreerCompte;
