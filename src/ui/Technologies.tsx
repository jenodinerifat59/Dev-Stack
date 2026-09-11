import TechnologieCard from '../component/TechnologieCard';
import type { TechType } from '../type/techType';
interface TechnologiType {
    technologies: TechType[]
}
const Technologies = ({ technologies }: TechnologiType) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((technologie) => (
                <TechnologieCard
                    key={technologie.id}
                    technologie={technologie}
                />
            ))}
        </div>
    );
};

export default Technologies;