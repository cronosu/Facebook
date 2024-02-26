"use client"

import { AiFillHome } from "react-icons/ai";
import { CiYoutube } from "react-icons/ci";
import { IoStorefront, IoGameControllerOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { useState } from "react";


interface ButtonProps {
    icon: string;
    active: boolean;
}

const ButtonMainPage: React.FC<ButtonProps> = ({ icon, active }) => {

    const buttons = ["Home", "TV", "Market", "Groupes", "Jeux"];
    const [activeButton, setActiveButton] = useState<string>("Home");

    const handleClick = (icon: string): void => {
        setActiveButton(icon);

    };



    return (
        <button
            onClick={() => handleClick(icon)}
            className={`flex h-12 w-32 justify-center items-center
             ${activeButton===icon ?
                    "text-blue-900"
                    :
                    "hover:bg-neutral-700 hover:rounded-xl text-white"
                }`}
        >
            {
                icon === "Home" ? <AiFillHome className='size-7' />
                    : icon === "TV" ? <CiYoutube className='size-7' />
                        : icon === "Market" ? <IoStorefront className='size-7' />
                            : icon === "Groupes" ? <HiOutlineUserGroup className='size-7' />
                                : icon === "Jeux" ? <IoGameControllerOutline className='size-7' />
                                    : icon
            }

            {icon}{activeButton}

        </button>
    );
};


export default ButtonMainPage;
