import { BsCheck } from "react-icons/bs";
import { contactData } from "../../lib/data";
import ContactUsForm from "./contact-us-form";

const ContactSection = () => {
  return (
    <div className='mt-[56px] mb-20 text-white'>
      <div className="lg:mx-20 md:mx-[64px] mx-6 flex xl:flex-row flex-col gap-[56px]">
        <div className="flex flex-col gap-6 xl:mt-10 mt-0">
          <h1 className="xl:text-[64px] lg:text-[48px] text-[32px] font-medium leading-[120%] text-white">Get in Touch with <br className="xl:block md:hidden block" /> Our Sales Team!</h1>
          <p className="text-lg text-[#c2c2c2] leading-[150%]">Whether you have questions about our plans, need a personalized demo, or want to discuss specific requirements for your organization, our knowledgeable sales team is here to assist you every step of the way.</p>
          <div className="flex flex-col gap-3">
            {contactData.map((data) => (
              <div className="inline-flex  gap-2" key={data.name}>
                <BsCheck className="lg:size-6 size-5 text-[#010CFF]" />
                <p className="md:text-lg text-sm">{data.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full outline outline-[#c2c2c2] rounded-2xl">
          <div className="xl:p-10 md:p-6 p-4">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection