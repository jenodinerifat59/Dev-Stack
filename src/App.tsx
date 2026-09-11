
import Nav from './ui/Nav';
import Hero from './ui/Hero';
import Technologies from './ui/Technologies';
import { useEffect, useState } from 'react';
import type { TechType } from './type/techType';



const App = () => {
  const [technologies,SetTechnologies] =useState<TechType[]>([])
   useEffect(() => {
    fetch("/apiData.json")
      .then(res => res.json())
      .then(data => {SetTechnologies(data)})
  },[])
  return (
    <div className='container mx-auto'>
      <Nav/>
      <Hero/>
      <Technologies technologies={technologies}/>
    </div>
  );
};

export default App;