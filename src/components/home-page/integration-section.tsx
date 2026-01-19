const IntegrationSection = () => {
  return (
    <section className='md:my-[100px] my-[40px] xl:mx-[64px] md:mx-[40px] mx-[24px]'>
      <div className="integration-background">
        <div className="absolute wrapper  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0e0e00] w-full xl:w-[1064px]  rounded-[12px]">
          <div className="flex flex-col items-center gap-6 lg:p-[56px] md:p-[40px] p-[32px] integration-gradient">
            <h2 className="xl:text-[48px] lg:text-[40px] text-[32px] text-center font-medium text-white leading-[120%]">
              Seamlessly Integrates with Your Favorite  Tools</h2>
            <p className="text-[#c2c2c2] lg:text-lg md:text-[16px] text-sm text-center">TrackForce connects effortlessly with the tools you already use, from email platforms to project management systems.</p>
            <button className="button-gradient px-2 py-2 rounded-md md:w-fit w-full text-white text-sm font-medium leading-[150%]">See All Integration</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntegrationSection