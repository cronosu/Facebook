"use client"

import { AiFillHome } from "react-icons/ai";
import { CiYoutube } from "react-icons/ci";
import { IoStorefront, IoGameControllerOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { useState } from "react";
import Link from "next/link";
import path from "path";
import Image from 'next/image';

type ButtonProps = {
    icon: string;
    active: string;
    onclick: () => void 
}

const ButtonMainPage: React.FC<ButtonProps> = ({ icon, active, onclick }) => {

    return (
        <Link href={
            icon === "Home" ? "/accueil"
                : icon === "TV" ? "/video"
                    : icon === "Market" ? "/market"
                        : icon === "Groupes" ? "/groupes"
                            : icon === "Jeux" ? "/jeux"
                                : icon
        }
            passHref
            onClick={onclick}
            className={`flex h-14 w-32 justify-center items-center ml-2 
             ${active === icon ?
                    "text-blue-900 border-b-4 border-blue-900 pt-[5px] border-solid"
                    : 
                    "hover:bg-neutral-700 hover:rounded-xl text-white"
                } `}
        >
            {icon === "Home" && <AiFillHome className="size-7" />}
            {icon === "TV" && <CiYoutube className="size-7" />}
            {icon === "Market" && <IoStorefront className="size-7" />}
            {icon === "Groupes" && <HiOutlineUserGroup className="size-7" />}
            {icon === "Jeux" && <IoGameControllerOutline className="size-7" />}
        </Link>
    );
};


export default ButtonMainPage;
