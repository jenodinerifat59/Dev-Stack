
import Nav from './ui/Nav';
// @ts-expect-error Hero is a JavaScript module without TypeScript declarations.
import Hero from './ui/Hero';

const App = () => {
  return (
    <div className='container mx-auto'>
      <Nav/>
      <Hero/>
    </div>
  );
};

export default App;