const IntegrationSection = () => {
  return (
    <section className='md:my-[100px] my-10 xl:mx-16 md:mx-10 mx-6'>
      <div className="integration-background">
        <div className="absolute wrapper top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0e0e00] w-full xl:w-[1064px] rounded-xl">
          <div className="flex flex-col items-center gap-6 lg:p-14 md:p-10 p-8 integration-gradient">
            <h2 className="xl:text-5xl lg:text-[40px] text-headingMedium text-center font-medium text-white leading-lg">
              Seamlessly Integrates with Your Favorite  Tools</h2>
            <p className="text-lightGray lg:text-lg md:text-md text-sm text-center">
              TrackForce connects effortlessly with the tools you already use, from email platforms to project management systems.
            </p>
            <button className="button-gradient px-2 py-2 rounded-md md:w-fit w-full text-white text-sm font-medium leading-xl">See All Integration</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntegrationSection