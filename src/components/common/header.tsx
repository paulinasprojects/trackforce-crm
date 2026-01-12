import { useState } from "react";
import MobileNav from "./mobile-nav"
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="hidden md:flex items-center justify-between text-white  md:mx-5 lg:mx-[40px] xl:mx-[80px] mt-[32px]">
        <a href="/">
          <img src="/trackforce-logo.svg" alt="" />
        </a>
        <div className="flex items-center gap-6">
          <Link to="/product" className="hover-underline-animation font-medium  text-[16px] leading-[150%]">Product</Link>
          <Link to="/changelog" className="hover-underline-animation font-medium  text-[16px] leading-[150%]">Changelog</Link>
          <Link to="/pricing" className="hover-underline-animation font-medium  text-[16px] leading-[150%]">Pricing</Link>
          <Link to="/contact" className="hover-underline-animation font-medium  text-[16px] leading-[150%]">Contact Sales</Link>
        </div>
        <div className="flex items-center gap-6">
          <button className="font-medium text-sm leading-[150%] hover:text-white/90 transition duration-200">Sign in</button>
          <button className="button-gradient text-white px-6 py-2.5 rounded-md font-medium text-sm leading-[150%] hover:text-white/90 transition duration-200">Start for Free</button>
        </div>
      </div>
      <div className="block md:hidden">
        <MobileNav isOpen={open} onToggle={handleOpen} />
      </div>
    </>
  )
}

export default Header