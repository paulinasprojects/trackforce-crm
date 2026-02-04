import GradientButton from "../common/gradient-button"

const CtaSection = () => {
  return (
    <section className='bg-[#1f2451]'>
      <div className='md:px-10 px-6 py-14'>
        <div className='wrapper w-full rounded-[24px]'>
          <div className='flex flex-col items-center gap-6 bg-[#262c63] rounded-[24px] md:py-20 py-6 px-6'>
            <h2 className="xl:text-5xl lg:text-[40px] text-headingMedium text-center font-medium text-white leading-lg">
              Start Growing Your Business With TrackForce Today
            </h2>
            <p className="text-lightGray lg:text-lg md:text-md text-sm text-center">
              Whether you're a small team or a large enterprise, TrackForce is designed to meet your CRM needs. See how our platform can help you scale.
            </p>
            <div className="gap-4 mt-[16px] flex md:flex-row flex-col items-center w-full md:w-auto">
              <GradientButton className="md:w-fit w-full">
                Get Started for Free
              </GradientButton>
              <button className="bg-white text-black px-3 py-2 rounded-lg text-md leading-xl font-medium md:w-fit w-full hover:bg-white/80 transi duration-200">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection