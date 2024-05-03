
import { signOut, signIn, auth } from "@/auth";
async function Session() {

    const session: any = await auth();


    return (

        <div className="flex">

            {session && session.user ?
                <div className="flex gap-2 items-center">
                    <div className="flex gap-2 flex-col">
                        <form
                            action={async () => {
                                "use server"
                                await signOut()
                            }}>
                            <button type="submit">Se déconnecter</button>
                        </form>
                    </div>
                    <div className="grid bg-neutral-700 rounded-[50px] min-w-[2.5rem] min-h-[2.5rem] size-10 p-[10px] gap-[2px] grid-cols-3 cursor-pointer" >
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="white" ><path d="M12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 16a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm8 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 17a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path></svg>
                    </div>
                    <div className="flex items-center justify-center bg-neutral-700 rounded-[50px] size-10 cursor-pointer" >
                    <svg viewBox="0 0 12 13" width="20" height="20" fill="white"  ><g fillRule="evenodd" transform="translate(-450 -1073)"><path d="m459.603 1077.948-1.762 2.851a.89.89 0 0 1-1.302.245l-1.402-1.072a.354.354 0 0 0-.433.001l-1.893 1.465c-.253.196-.583-.112-.414-.386l1.763-2.851a.89.89 0 0 1 1.301-.245l1.402 1.072a.354.354 0 0 0 .434-.001l1.893-1.465c.253-.196.582.112.413.386M456 1073.5c-3.38 0-6 2.476-6 5.82 0 1.75.717 3.26 1.884 4.305.099.087.158.21.162.342l.032 1.067a.48.48 0 0 0 .674.425l1.191-.526a.473.473 0 0 1 .32-.024c.548.151 1.13.231 1.737.231 3.38 0 6-2.476 6-5.82 0-3.344-2.62-5.82-6-5.82"></path></g></svg>
                    </div>

                    <div className="grid bg-neutral-700 rounded-[50px] min-w-[2.5rem] min-h-[2.5rem] size-10 p-[10px] gap-[2px] grid-cols-3 cursor-pointer" >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="white"><path d="M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z"></path></svg>
                    </div>
                    <img className="rounded-[50px] object-cover size-10 cursor-pointer" src={session.user.image || 'Pseudo'} />

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
