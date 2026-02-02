const ProductHeading = () => {
  return (
    <section className="mt-14 text-white lg:mx-[189px] md:mx-16 mx-6 flex flex-col gap-6 items-center justify-center">
      <span className="px-3 py-3 wrapper text-sm rounded-lg">Work and Collaboration Feature</span>
      <h1 className="xl:text-heading md:text-5xl text-headingMedium font-medium leading-lg text-white text-center">Streamline Teamwork and Get More Done Together</h1>
      <p className="text-lightGray text-center lg:text-lg md:text-md text-sm leading-xl">
        Efficient teamwork is essential to driving your business forward. With TrackForce's Work and Collaboration feature, your teams can collaborate seamlessly, track progress in real time, and stay aligned on every project.
      </p>
      <div className="flex md:flex-row flex-col gap-4 mt-3 md:w-fit w-full">
        <button className="button-gradient px-3 py-3.5 rounded-lg md:text-md text-sm md:w-fit w-full">Get Started for Free</button>
        <button className="bg-white text-black px-3 py-3.5 rounded-lg md:w-fit w-full">Book a Demo</button>
      </div>
    </section>
  )
}

export default ProductHeading