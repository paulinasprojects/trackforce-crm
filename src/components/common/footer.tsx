import { Link } from "react-router-dom"
import { CiFacebook, CiYoutube } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white py-10 lg:px-16 px-6">
      <div className="flex md:flex-row flex-col lg:gap-[80px] md:gap-10">
        <div className="flex flex-col gap-2 md:items-start items-center">
          <img src="/trackforce-logo.svg" alt="" className="w-fit" />
          <p className="text-sm leading-[150%] text-[#c2c2c2] max-w-[342px] md:text-start text-center">Streamline your sales, marketing, and customer  service operations with an all-in-one CRM platform designed to help you grow faster and serve your <br /> customers better.</p>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2  lg:gap-20 gap-6 md:mt-0 mt-8">
          <div className="flex flex-col gap-3">
            <p className="text-[16px] font-medium leading-[150%]">Company</p>
            <Link to="#" className="text-sm font-medium text-[#c2c2c2]">Customers</Link>
            <Link to="#" className="text-sm font-medium text-[#c2c2c2]">Blog</Link>
            <Link to="#" className="text-sm font-medium text-[#c2c2c2]">Careers</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[16px] font-medium leading-[150%]">Recourses</p>
            <Link to="#" className="text-sm font-medium text-[#c2c2c2]">Changelog</Link>
            <Link to="#" className="text-sm font-medium text-[#c2c2c2]">Documentation</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[16px] font-medium leading-[150%]">Customers</p>
            <Link to="#" className="text-sm font-medium text-[#c2c2c2]">Contact Us</Link>
            <Link to="#" className="text-sm font-medium text-[#c2c2c2]">FAQ</Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-[16px] font-medium leading-[150%]">Products</p>
            <Link to="#" className="text-sm font-medium text-[#c2c2c2]">Work and Collaboration</Link>
            <Link to="#" className="text-sm font-medium text-[#c2c2c2]">Sales Email Template</Link>
            <Link to="#" className="text-sm font-medium text-[#c2c2c2]">Marketing Analytics</Link>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-6 md:gap-0 items-center justify-between mt-[56px]">
        <div className="flex gap-6 md:flex-row flex-col md:items-start items-center">
          <p className="text-sm text-[#c2c2c2]">© 2026 TrackForce. All rights reserved.</p>
          <p className="text-white text-sm">Terms & Conditions</p>
          <p className="text-white text-sm">Privacy Policy</p>
        </div>
        <div className="flex gap-[30px]">
          <CiFacebook size={24} className="cursor-pointer hover:text-gray-400 transition duration-200" />
          <FaInstagram size={24} className="cursor-pointer hover:text-gray-400 transition duration-200" />
          <CiYoutube size={24} className="cursor-pointer hover:text-gray-400 transition duration-200" />
        </div>
      </div>
    </footer>
  )
}

export default Footer