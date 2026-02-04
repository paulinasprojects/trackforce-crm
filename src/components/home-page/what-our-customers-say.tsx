import { MdChevronRight } from "react-icons/md";
import GradientButton from "../common/gradient-button";

const WhatOurCustomersSay = () => {
  return (
    <section className="md:my-[100px] my-10 xl:mx-20 md:mx-10 mx-6">
      <div className="grid lg:grid-cols-2 items-center gap-12">
        <div className="flex flex-col gap-6 ">
          <h2 className="lg:text-5xl text-headingMedium font-medium text-center lg:text-start leading-lg text-white">
            What Our Customers Are <br className="hidden xl:block" /> Saying
          </h2>
          <p className="text-lightGray text-sm md:text-md lg:text-lg text-center lg:text-start">
            TrackForce has helped businesses streamline their processes and boost customer relationships. Hear from some of our happy clients!
          </p>
          <GradientButton className="inline-flex gap-2 items-center justify-center w-full lg:w-fit">
            Book a Free Demo Call
            <MdChevronRight className="size-5" />
          </GradientButton>
        </div>
        <div>
          <img src="/feedback-list.png" alt="" className="w-full" />
        </div>
      </div>
    </section>
  )
}

export default WhatOurCustomersSay