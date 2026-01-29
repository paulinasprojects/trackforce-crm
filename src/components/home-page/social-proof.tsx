const SocialProof = () => {
  return (
    <section className="bg-[#1F2451]">
      <div className="md:mt-20 mt-10 mx-6 md:mx-5 lg:mx-10 text-white lg:py-14 py-8 flex flex-col items-center justify-center gap-[16px] md:gap-10">
        <p className="lg:text-headingMedium md:text-2xl text-lg leading-lg font-medium text-center">Trusted by over 40,000 teams and companies worldwide</p>
        <div className="grid grid-cols-5 md:gap-14 gap-3">
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