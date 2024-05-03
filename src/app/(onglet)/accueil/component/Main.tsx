import Stories from "./Stories";

export default function Main() {


    return (
        <div className="bg-neutral-800 flex flex-col w-3/5 pt-5 px-[150px] gap-3 ">
            <Stories />
            
            <div className="flex flex-col gap-3 h-full"> Quoi de neuf</div>
        </div>

    )
};