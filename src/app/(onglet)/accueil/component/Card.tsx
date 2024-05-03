import React from 'react';

function Card() {
    return (
        <div className=" rounded-xl  h-[300px] bg-neutral-900"> 
            <div className="relative">
                <div className="h-[300px] w-[150px] bg-neutral-900  rounded-xl overflow-hidden">
                    <img className="hover:scale-105 hover:brightness-80  ease-out duration-300 object-cover h-full  rounded-xl" src="https://images.unsplash.com/photo-1526512340740-9217d0159da9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8fDA%3D" alt="photo" />

                </div>
                <img className="border-[3px] border-blue-600 border-solid absolute top-3 left-3 rounded-[50px] object-cover  size-9"
                    src="https://images.unsplash.com/photo-1526512340740-9217d0159da9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWx8ZW58MHx8MHx8fDA%3D" />
                <p className='absolute bottom-3 left-[10%] text-white w-[80%]  text-balance   text-pretty break-words text-shadow-sm shadow-black'>Exemple de Stories</p>
            </div>
        </div>
    );
}

export default Card;
