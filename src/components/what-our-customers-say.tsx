const WhatOurCustomersSay = () => {
  return (
    <section className="md:my-[100px] my-[40px] xl:mx-[80px] md:mx-[40px] mx-[24px] text-white">
      <div className="grid lg:grid-cols-2 items-center gap-12">
        <div className="flex flex-col gap-6 ">
          <h2 className=" lg:text-[48px] text-[32px] font-medium text-center lg:text-start leading-[120%]">What Our Customers Are <br className="hidden xl:block" /> Saying</h2>
          <p className="text-[#c2c2c2] text-sm md:text-[16px] lg:text-lg text-center lg:text-start">TrackForce has helped businesses streamline their processes and boost customer relationships. Hear from some of our happy clients!</p>
          <button className="button-gradient px-2 py-2 rounded-md w-full lg:w-fit">Book a Free Demo Call</button>
        </div>
        <div>
          <img src="/feedback-list.png" alt="" className="w-full" />
        </div>
      </div>
    </section>
  )
}

export default WhatOurCustomersSay