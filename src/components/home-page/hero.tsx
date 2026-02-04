import { Link } from "react-router-dom"
import GradientButton from "../common/gradient-button"
import ChangeLogButton from "./change-log-button"

const Hero = () => {
  return (
    <section className='md:mt-14 md:mx-0 mx-6 md:ml-5 lg:ml-10 xl:ml-20'>
      <div className='flex md:flex-row sm:flex-col md:justify-between gap-14'>
        <div className='text-white pt-[53px] flex flex-col items-center md:items-start text-center md:text-left'>
          <ChangeLogButton />
          <p className="xl:text-heading lg:text-5xl sm:text-headingMedium leading-lg">
            Empower Your <br /> Business with <br /> Smarter Customer <br /> Management
          </p>
          <span className="text-sm md:text-md lg:text-lg mt-6">
            Streamline your sales, marketing, and customer service operations with
            <br className="hidden xl:block" />  an all-in-one CRM platform designed
            <br className="hidden xl:hidden lg:block" /> to help you grow faster and serve your customers better.
          </span>
          <div className="flex md:flex-row sm:flex-col gap-4 mt-10 w-full">
            <GradientButton>
              <Link to="/sign-up">Get Started For Free</Link>
            </GradientButton>
            <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-white/90 duration-200 transition">Book a Demo</button>
          </div>
        </div>
        <div className="border-t-[16px] outline outline-2 outline-[#383838] border-b-[16px] border-l-[16px] border-[#141515] md:border-r-0 sm:border-r-[16px] rounded-tl-[30px] rounded-bl-[30px] md:rounded-tr-[0px] md:rounded-br-[0px] sm:rounded-tr-[30px] sm:rounded-br-[30px]">
          <img src="/hero-image.png" alt="hero image" className="hidden md:block w-full h-full" />
          <img src="/hero-image-mobile.png" alt="hero image on mobile device" className="block md:hidden w-full" />
        </div>
      </div>
    </section>
  )
}

export default Hero