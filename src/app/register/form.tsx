'use client'
//import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation'
import router from 'next/router';
import { FormEvent } from "react"
export default function Form() {
    const router = useRouter()
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(
                {
                    email: formData.get('email'),
                    password: formData.get('password'),
                    nickname: formData.get('nickname')
                }),

        });
        if (response.ok) {
            router.push("/login")
        }
        

    };


    return (< div className="w-full h-full bg-neutral-800 pt-20" >
        <form onSubmit={handleSubmit} className="flex flex-col  gap-4 font-sans w-[400px] items-start p-[50px]  m-auto border-solid border-2 border-sky-500 rounded-3xl  bg-neutral-500">

            <label className="text-white ">Pseudo :</label>
            <input autoComplete="nickname" type="text" name="nickname" className="text-black w-full border border-gray-300 rounded-xl p-4 w-full focus:outline-none focus:border-blue-500 bg-neutral-400 shadow-lg " />

            <label className="text-white ">Email :</label>
            <input autoComplete="email" type="email" name="email" className="text-black w-full border border-gray-300 rounded-xl p-4 w-full focus:outline-none focus:border-blue-500 bg-neutral-400 shadow-lg" />

            <label className="text-white">Mot de passe :</label>
            <input autoComplete="current-password" name="password" type="password" className=" text-black w-full border border-gray-300 rounded-xl p-4 w-full focus:outline-none focus:border-blue-500 bg-neutral-400 shadow-lg" />

            <button type="submit" className="mt-6 text-[20px]  bg-blueBtn text-white  p-4 w-full  rounded-2xl focus:outline-none focus:shadow-outline-blue active:bg-blue-700 shadow-lg">S'enregistrer</button>
        </form>
        </div>
    )
}