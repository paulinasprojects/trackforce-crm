import { CiFacebook, CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { footerLinks } from "../../lib/data";
import FooterLink from "./footer-link";

const Footer = () => {
  return (
    <footer className="py-10 lg:px-16 px-6">
      <div className="flex md:flex-row flex-col lg:gap-20 md:gap-10">
        <div className="flex flex-col gap-2 md:items-start items-center">
          <img src="/trackforce-logo.svg" alt="" className="w-fit" />
          <p className="text-sm leading-xl text-lightGray max-w-[342px] md:text-start text-center">Streamline your sales, marketing, and customer  service operations with an all-in-one CRM platform designed to help you grow faster and serve your <br /> customers better.</p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 lg:gap-20 gap-6 md:mt-0 mt-8">
          {footerLinks.map((link, index) => (
            <div key={index} className="flex flex-col gap-3">
              <FooterLink
                title={link.title}
                links={link.links}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-6 md:gap-0 items-center justify-between mt-14">
        <div className="flex gap-6 md:flex-row flex-col md:items-start items-center">
          <p className="text-sm text-lightGray">© 2026 TrackForce. All rights reserved.</p>
          <p className="text-white text-sm">Terms & Conditions</p>
          <p className="text-white text-sm">Privacy Policy</p>
        </div>
        <div className="flex gap-[30px]">
          <CiFacebook size={24} className="cursor-pointer text-white hover:text-gray-400 transition duration-200" />
          <FaInstagram size={24} className="cursor-pointer text-white hover:text-gray-400 transition duration-200" />
          <CiYoutube size={24} className="cursor-pointer text-white hover:text-gray-400 transition duration-200" />
        </div>
      </div>
    </footer>
  )
}

export default Footer