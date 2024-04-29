
import { signOut, signIn, auth } from "../api/auth/[...nextauth]/route";
async function Session() {

    const session: any = await auth();


    return (

        <div className="flex">
   
            {session && session.user ?

                <div className="flex gap-2 ">
                    {
                         <img className="rounded-[50px] size-10" src={session.user.image || 'Pseudo'} />
                    }
                    <div className="flex gap-2 flex-col">
                        <p className="flex self-center">{session.user.name}</p>

                        <form
                            action={async () => {
                                "use server"
                                await signOut({ /*redirectTo: '/login' */})
                            }}>
                            <button type="submit">Se déconnecter</button>
                        </form></div>
                </div>

                : 
                <form
                    action={async () => {
                        "use server"
                        await signIn()
                    }}>
                    <button type="submit">Se connecter</button>
                </form>
            }

        </div >

    );
};

export default Session;
