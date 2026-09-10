import Logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    <nav>
      <div className="flex items-center justify-between">
        <img src={Logo} alt="Logo img" />
        <ul className="flex gap-4 font-semibold text-[14px] leading-none-5 bg-[#334155]">
            <li className="text-[#DB2777]">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div>
            <button className="font-semibold text-[14px] leading-none-5 text-[#334155] bg-transparent rounded-[9999px] py-2.5 px-5">Sign In</button>
            <button className="font-semibold text-[14px] leading-none-5 text-white rounded-[9999px] bg-[#D91B7E] py-2.5 px-5">Sign Up</button>
        </div> 
      </div>
    </nav>
  );
};

export default Nav;
