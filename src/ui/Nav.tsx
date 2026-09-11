import Logo from "../assets/logo-text.png";
import Bar from "../assets/hamburger.png";

const Nav = () => {
    return (
        <nav className="w-full">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <button className="lg:hidden">
                    <img src={Bar} alt="Menu" className="w-7 h-7" />
                </button>
                <img src={Logo} alt="Logo" className="w-32 md:w-36" />
                <ul className="hidden lg:flex items-center gap-6 font-semibold text-[14px] text-[#334155]">
                    <li className="text-[#DB2777] cursor-pointer">Home</li>
                    <li className="hover:text-[#DB2777] cursor-pointer">Technologies</li>
                    <li className="hover:text-[#DB2777] cursor-pointer">Projects</li>
                    <li className="hover:text-[#DB2777] cursor-pointer">About</li>
                    <li className="hover:text-[#DB2777] cursor-pointer">Contact</li>
                </ul>
                <div className=" lg:flex items-center gap-2">
                    <button className="font-semibold text-[14px] text-[#334155] bg-transparent rounded-full py-2.5 px-5 cursor-pointer"> Sign In</button>

                    <button className="font-semibold text-[14px] text-white rounded-full bg-[#D91B7E] py-2.5 px-5 cursor-pointer">
                        Sign Up
                    </button>
                </div>


            </div>
        </nav>
    )
}
export default Nav