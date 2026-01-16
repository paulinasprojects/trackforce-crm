const CtaSection = () => {
  return (
    <section className='bg-[#1f2451] text-white'>
      <div className='md:px-10 px-6 py-[56px]'>
        <div className='wrapper w-full rounded-[24px] '>
          <div className='flex flex-col items-center gap-6 bg-[#262c63] rounded-[24px] md:py-[80px] py-[24px] px-6'>
            <h2 className="xl:text-[48px] lg:text-[40px] text-[32px] text-center font-medium text-white leading-[120%]">Start Growing Your Business With TrackForce Today</h2>
            <p className="text-[#c2c2c2] lg:text-lg md:text-[16px] text-sm text-center">Whether you’re a small team or a large enterprise, TrackForce is designed to meet your CRM needs. See how our platform can help you scale.</p>
            <div className="gap-4 mt-[16px] flex md:flex-row flex-col items-center w-full md:w-auto">
              <button className="button-gradient text-white px-3 py-2 rounded-lg text-[16px] leading-[150%] font-medium md:w-fit w-full ">Get Started for Free</button>
              <button className="bg-white text-black px-3 py-2 rounded-lg text-[16px] leading-[150%] font-medium md:w-fit w-full hover:bg-white/80 transi duration-200 ">Book a Demo</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection