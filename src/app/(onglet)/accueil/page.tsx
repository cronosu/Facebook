
import { auth } from "@/auth";
import Service from "./component/Service";
import Main from "./component/Main";
export default async function Groupes() {
  const session = await auth();


  const { image = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png", name = "" } = session?.user || {};



  return (
    <>

      {!session ? <p> vous n'êtes connecté !</p> :
        <div className=" max-w-[1800px] mx-auto
        h-full flex flex row overflow-hidden  font-semibold ">
          <Service
            image={image}
            name={name}
          />

         <Main/>


          <div className="bg-neutral-900 w-1/5 ">Contact</div>
        </div>

      }

</>
  
  );
}
