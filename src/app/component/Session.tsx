

import { auth, signIn, signOut } from "@/auth";

async function Session() {

    const session = await auth();
    
    return (
        < >
            <div className=''>
            {session && session.user ?
                <>
                    <p>{session.user.name}</p>

                    <form
                        action={async () => {
                            "use server"
                            await signOut()
                        }}>
                        <button type="submit">Se déconnecter</button>
                    </form></>

                :
                <form
                    action={async () => {
                        "use server"
                                     await signIn()
                        console.log(session)
                    }}>
                    <button type="submit">Se connecter</button>
                </form>
            }

        </div>
        </>
    );
};

export default Session;
