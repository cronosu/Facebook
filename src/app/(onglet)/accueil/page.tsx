
import { auth} from "../../api/auth/[...nextauth]/route";

export default async function Groupes() {
  



  const session = await auth();
  return (
    <div>
      <p>Coucou sur la page Accueil</p>
      {session ? <p> vous etes connecté !</p>:<p> vous n'êtes pas connecté !</p>}
    </div>
  );
}
