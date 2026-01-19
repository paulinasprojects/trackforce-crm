const SocialProof = () => {
  return (
    <section className="bg-[#1F2451]">
      <div className="md:mt-[80px] mt-[40px] mx-6 md:mx-5 lg:mx-[40px] text-white lg:py-[56px] py-[32px] flex flex-col items-center justify-center gap-[16px] md:gap-[40px]">
        <p className="lg:text-[32px] md:text-[24px] text-lg leading-[120%] font-medium text-center">Trusted by over 40,000 teams and companies worldwide</p>
        <div className="grid grid-cols-5 md:gap-[56px] gap-[12px]">
          <img src="/social.png" alt="" />
          <img src="/social-1.png" alt="" />
          <img src="/social-2.png" alt="" />
          <img src="/social-3.png" alt="" />
          <img src="/social-4.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default SocialProof