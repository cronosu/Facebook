"use client"
import { useState } from "react";
import Card from "./Card";

export default function Stories() {
    const [scroll, setScroll] = useState(0);
    const [nrbStories, setNrbStories] = useState(6);
    const cards = [];
    const oneStory = 158;

    for (let i = 0; i < nrbStories; i++) {
        cards.push(<Card key={i} />);
    }
    const defilementX = () => {
        const scrollNow = scroll;
    
        const oneScroll = -oneStory + scrollNow;

        if (oneScroll <= -nrbStories * oneStory + oneStory) {

            setScroll(-nrbStories * oneStory + oneStory);
            return
        }
        setScroll(oneScroll);
    }
    const defilementXInverse = () => {
        const scrollNow = scroll;

        const oneScroll = scrollNow + oneStory;
        if (oneScroll > 0) {
            setScroll(0);
            return
        }
        setScroll(oneScroll);
    }

    return (
        <div className="w-full min-h-[300px] relative overflow-hidden">
            <div className={`w-full  flex gap-2 ease-in-out duration-300`} style={{ transform: `translateX(${scroll}px)` }}>

                {cards}


            </div>

            {scroll !== 0 && <div onClick={defilementXInverse} className="absolute top-[50%] left-[2%] rotate-90 rounded-full bg-neutral-700 size-10 flex justify-center items-center pt-[3px] translate-y-[-50%] hover:bg-neutral-600 cursor-pointer">

                <svg viewBox="0 0 16 16" width="25" height="25" fill="white" aria-hidden="true"  ><g fillRule="evenodd" transform="translate(-448 -544)  "><path fillRule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>
            </div>}


      {scroll !== -nrbStories * oneStory + (4*oneStory ) && nrbStories > 4 &&   <div onClick={defilementX} className="absolute top-[50%] right-[2%] rotate-[-90deg]  rounded-full bg-neutral-700 size-10 flex justify-center items-center pt-[3px] translate-y-[-50%] hover:bg-neutral-600 cursor-pointer">

                <svg viewBox="0 0 16 16" width="25" height="25" fill="white" aria-hidden="true"  ><g fillRule="evenodd" transform="translate(-448 -544)  "><path fillRule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>
            </div>}
         
        </div>
    )
};