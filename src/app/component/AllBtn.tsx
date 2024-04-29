"use client"
import { useState } from 'react';
import ButtonMainPage from './ButtonMainPage';
 
export default function  AllBtn() {
    const buttons = ["Home", "TV", "Market", "Groupes", "Jeux"];
    const [activeButton, setActiveButton] = useState<string>("Home");

    const handleClick = (icon: string): void => {
        setActiveButton(icon);       
    };
 

    return (
        <div className='flex gap-2'>
            {buttons.map((type, index) => (<ButtonMainPage onclick={() => handleClick(type)} active={activeButton} key={index} icon={type} />
            ))}
        </div>
    );
};


