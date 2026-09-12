import { type Dispatch, type SetStateAction } from "react";
import type { TechType } from "../type/techType";
import { toast } from "react-toastify";

interface TechnologieCardType {
    technologie: TechType;
    stack : TechType[];
    SetStack: Dispatch<SetStateAction<TechType[]>>;
}

const TechnologieCard = ({ technologie,stack,SetStack }: TechnologieCardType) => {
    
    const isAdded = stack.filter((item) => item.id === technologie.id).length > 0;
    const handelClick=(technologie:TechType)=>{
        SetStack([...stack , technologie ])
        toast.success(`${technologie.name} add successfully`)
        
    }

    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ">
            <div className="flex justify-between items-center mb-5">
                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center border">
                    <img src={technologie.icon} alt="technology icon" className="w-10 h-10 object-contain" />
                </div><span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-600"> {technologie.badge}</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {technologie.name}
            </h2>
            <p className="text-gray-500 text-sm leading-6 min-h-[72px]">
                {technologie.description}
            </p>
            <hr className="my-5 border-gray-200" />
            <div className="flex flex-wrap justify-between mb-5"><span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-medium rounded-full">{technologie.category} </span><span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">{technologie.difficulty}
            </span><span className="px-3 py-1 bg-yellow-100 text-yellow-600 text-xs font-medium rounded-full"> ⭐ {technologie.rating}</span> </div>
            <button onClick={() => handelClick(technologie)} className={`w-full py-3 rounded-xl  text-white font-semibold active:scale-95 transition-all duration-200 cursor-pointer ${isAdded ? "bg-black" :"bg-gradient-to-r from-[#FF5722] to-[#D81B7E]"}`} disabled={isAdded}>
               {isAdded ? "✓ Added to Stack" : "Add to Stack"}
            </button>
        </div>
    )
}

export default TechnologieCard;