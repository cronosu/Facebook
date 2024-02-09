import React from 'react';

interface ButtonProps {
    active: boolean;
    icon?: string;
}

const ButtonMainPage: React.FC<ButtonProps> = ({ active, icon }) => {
    return (
        <button className={` block h-12 w-32 ${active ? "text-blue-900 " : "hover:bg-neutral-700 hover:rounded-xl "}`}>
            {active ? <p>active</p> : ""}
            {icon}
            
        </button>

    );
};

export default ButtonMainPage;
