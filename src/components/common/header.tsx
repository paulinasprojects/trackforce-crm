import { useState } from "react";
import MobileNav from "./mobile-nav"
import { Link } from "react-router-dom";
import GradientButton from "./gradient-button";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="hidden md:flex items-center justify-between xl:mx-20 lg:mx-10 md:mx-5 mt-8">
        <a href="/">
          <img src="/trackforce-logo.svg" alt="" />
        </a>
        <div className="flex items-center gap-6 text-white">
          <Link to="/product" className="hover-underline-animation font-medium  text-md leading-xl">Product</Link>
          <Link to="/changelog" className="hover-underline-animation font-medium  text-md leading-xl">Changelog</Link>
          <Link to="/pricing" className="hover-underline-animation font-medium  text-md leading-xl">Pricing</Link>
          <Link to="/contact" className="hover-underline-animation font-medium  text-md leading-xl">Contact Sales</Link>
        </div>
        <div className="flex items-center gap-6">
          <button className="font-medium text-sm text-white leading-xl hover:text-white/90 transition duration-200">
            <Link to="/sign-in">Sign in</Link>
          </button>
          <GradientButton>
            <Link to="/sign-up">Start for Free</Link>
          </GradientButton>
        </div>
      </div>
      <div className="block md:hidden">
        <MobileNav isOpen={open} onToggle={handleOpen} />
      </div>
    </>
  )
}

export default Header