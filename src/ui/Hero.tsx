import Baner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10"> 
        <div className="w-full lg:w-1/2">
          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-[60px] leading-tight tracking-[1.5px] mt-8 lg:mt-11.5">
            Build Your Ideal <br /><span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack </span><h1/><h1/> </h1>
          <p className="max-w-142.75 font-normal text-base sm:text-lg leading-7.5 text-[#475569] mt-6">Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project. </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="bg-gradient-to-r from-[#FF5722] to-[#D81B7E] font-semibold text-[14px] text-white rounded-full py-2.5 px-5 cursor-pointer"> Explore Technologies</button>
            <button className="font-semibold text-[14px] text-[#0F172A] border-2 border-[#0F172A] rounded-full py-2.5 px-5 cursor-pointer">Learn More </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-24">
          <img src={Baner} alt="Development stack" className="w-full max-w-md lg:max-w-lg" />
        </div>
      </div>
    </section>
  )
}
export default Hero