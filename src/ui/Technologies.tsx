import { useState } from "react";
import Stack from "../component/Stack";
import TechnologieCard from "../component/TechnologieCard";
import type { TechType } from "../type/techType";

interface TechnologiType {
  technologies: TechType[];
}

const Technologies = ({ technologies }: TechnologiType) => {
  const [stack, SetStack] = useState<TechType[]>([]);
  console.log(stack);
  return (
    <div>
      <h2 className="font-extrabold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-[#0F172A] mt-10 sm:mt-20 lg:mt-28">
        Explore the{" "}
        <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>

      <p className="font-normal text-base sm:text-lg text-[#64748B] leading-6 sm:leading-7">Pick one technology per category to build your ideal stack.</p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-2 lg:mt-5">
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {technologies.map((technologie) => (
            <TechnologieCard
              key={technologie.id}
              technologie={technologie}
              stack={stack}
              SetStack={SetStack}
            />
          ))}
        </div>
        <div className="lg:col-span-1">
          <Stack stack={stack} setStack={SetStack} />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
