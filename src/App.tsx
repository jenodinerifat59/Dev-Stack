import Nav from "./ui/Nav";
import Hero from "./ui/Hero";
import Technologies from "./ui/Technologies";
import { useEffect, useState } from "react";
import type { TechType } from "./type/techType";

const App = () => {
  const [technologies, SetTechnologies] = useState<TechType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/apiData.json")
      .then((res) => res.json())
      .then((data) => {
        SetTechnologies(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-40">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div className="container mx-auto">
      <Nav />
      <Hero />
      <Technologies technologies={technologies} />
    </div>
  );
};

export default App;
