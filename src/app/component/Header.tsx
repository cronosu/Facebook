
import { Children } from 'react';
import { auth, signIn, signOut } from "@/auth"
import Link from 'next/link';
import AllBtn from './AllBtn';

function Header({children}) {

    const buttons = ["Home", "TV", "Market", "Groupes", "Jeux"];



    return (
        <nav className='w-full bg-neutral-800 h-[56px] items-center flex px-3  border-b-[1px] border-neutral-600 border-solid select-none justify-between'>
            <div className='flex gap-2 '>
                <Link href="/login" >
                    <img src='/logo.png' className='w-10'></img>
                </Link>
                <div className="relative">
                    <input
                        className='w-[250px] size-10 rounded-3xl bg-neutral-700 items-center appearance-none font-sans text-white font-thin 
                    pl-[45px]
                    outline-none
                    ' 
                        placeholder='Rechercher sur Facebook'
                    />
                    <svg
                        className="w-6 h-6 text-neutral-500 absolute top-1/2 left-3 transform -translate-y-1/2 "
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </div>

            </div>
            <AllBtn/>
         
            {children}
    
        </nav >
    );
}; 

export default Header;
