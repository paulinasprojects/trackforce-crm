import { BsCheck } from "react-icons/bs";
import { contactData } from "../../lib/data";
import ContactUsForm from "./contact-us-form";

const ContactSection = () => {
  return (
    <div className='mt-14 mb-20'>
      <div className="lg:mx-20 md:mx-16 mx-6 flex xl:flex-row flex-col gap-14">
        <div className="flex flex-col gap-6 xl:mt-10 mt-0">
          <h1 className="xl:text-heading lg:text-5xl text-headingMedium font-medium leading-lg text-white">
            Get in Touch with <br className="xl:block md:hidden block" /> Our Sales Team!
          </h1>
          <p className="text-lg text-lightGray leading-xl">
            Whether you have questions about our plans, need a personalized demo, or want to discuss specific requirements
            for your organization, our knowledgeable sales team is here to assist you every step of the way.
          </p>
          <div className="flex flex-col gap-3">
            {contactData.map((data) => (
              <div className="inline-flex gap-2" key={data.name}>
                <BsCheck className="lg:size-6 size-5 text-[#010CFF]" />
                <p className="md:text-lg text-sm text-white">{data.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full outline outline-lightGray rounded-2xl">
          <div className="xl:p-10 md:p-6 p-4">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection