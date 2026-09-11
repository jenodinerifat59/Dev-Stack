import type { Dispatch, SetStateAction } from "react";
import type { TechType } from "../type/techType";
import { toast } from "react-toastify";

interface StackCurdProps {
  s: TechType;
  stack: TechType[];
  setStack: Dispatch<SetStateAction<TechType[]>>;
}

const StackCurd = ({ s, stack, setStack }: StackCurdProps) => {

  const handleRemove = (s:TechType) => {
    const remainingStack = stack.filter((tech) => tech.id !== s.id);
    setStack(remainingStack);
    toast.error(`${s.name} is deleted `)
  };

  return (
    <div className="flex justify-between items-center border border-[#94A3B8] py-3 px-4 rounded-2xl mt-3">
      <div className="flex items-center gap-3">
        <img src={s.icon} alt={s.name} className="w-10 h-10 object-contain"/>
        <div>
          <h2 className="font-semibold">{s.name}</h2>
          <p className="text-sm text-gray-400">{s.category}</p>
        </div>
      </div>
      <button onClick={()=>handleRemove(s)} className="text-[#94A3B8] font-bold cursor-pointer"> X </button>

    </div>
  );
};

export default StackCurd;