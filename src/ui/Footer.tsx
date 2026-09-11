import FooterImg from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="text-[#0F172A] bg-white px-6 py-12">
      <div>
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img
              src={FooterImg}   alt="Dev Stack logo"  className="w-40 mb-4"  />
            <p className="text-[#94A3B8] leading-7 max-w-sm">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p> 
            <ul className="flex gap-5 mt-6">
              <li> <a  href="https://github.com/jenodinerifat59"  target="_blank"  rel="noreferrer" className="text-[#94A3B8] hover:text-white transition">GitHub</a>
              </li> 
              <li><a href="https://x.com/jenodine_r93990" target="_blank" rel="noreferrer" className="text-[#94A3B8] hover:text-white transition" > Twitter</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jenodinerifat/" target="_blank"  rel="noreferrer" className="text-[#94A3B8] hover:text-white transition"> LinkedIn</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-5">PRODUCT</h3>
            <ul className="space-y-3 text-[#94A3B8]">
              <li><a href="#" className="hover:text-white transition"> Projects</a></li>
              <li> <a href="#" className="hover:text-white transition">Technologies </a> </li>
              <li> <a href="#" className="hover:text-white transition">Resources</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-5">COMPANY</h3>
            <ul className="space-y-3 text-[#94A3B8]">
              <li> <a href="#" className="hover:text-white transition"> About </a></li>
              <li><a href="#" className="hover:text-white transition">Contact </a></li>
              <li> <a href="#" className="hover:text-white transition"> Careers</a> </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-5">LEGAL</h3>
            <ul className="space-y-3 text-[#94A3B8]">
              <li><a href="#" className="hover:text-white transition"> Privacy Policy </a> </li>
              <li><a href="#" className="hover:text-white transition"> Terms of Service</a> </li>
            </ul>
          </div>
        </div>
        <hr className="border-slate-700 my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#94A3B8]">
          <p>&copy; 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy </a>
<a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;