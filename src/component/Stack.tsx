import type { Dispatch, SetStateAction } from "react";
import type { TechType } from "../type/techType";
import StackCurd from "./StackCurd";
import { toast } from "react-toastify";

interface StackType {
  stack: TechType[];
  setStack: Dispatch<SetStateAction<TechType[]>>;
}

const Stack = ({ stack, setStack }: StackType) => {

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All Technologies Are Remove")

  }

  if (stack.length === 0) {
    return (
      <div className="border border-gray-300 rounded-2xl shadow-2xl p-4">
        <h2 className="font-bold text-[16px] text-black">
          Your Stack
        </h2>

        <p className="font-normal text-[14px] text-[#94A3B8] mt-2">
          No technologies selected yet.
        </p>

        <div className="border-2 border-dashed rounded-lg border-[#94A3B8] mt-3">
          <p className="font-normal text-[14px] text-[#94A3B8] text-center py-6 px-15.5">
            No technologies selected yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-gray-300 rounded-2xl shadow-2xl p-4">

      <h2 className="font-bold text-[16px] text-black">
        Your Stack
      </h2>

      <p className="font-normal text-[14px] text-[#94A3B8] mt-2">
        {stack.length} Technology Selected
      </p>

      <div>
        {stack.map((s) => (
          <StackCurd key={s.id} s={s} stack={stack} setStack={setStack} />
        ))}
      </div>

      <div className="mt-3">
        <button
          onClick={handleRemoveAll}
          className="text-red-400 bg-transparent border border-red-400 rounded-2xl w-full py-2 cursor-pointer">Remove All</button>
      </div>

    </div>
  );
};

export default Stack;