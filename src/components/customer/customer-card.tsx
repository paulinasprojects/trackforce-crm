interface Props extends React.HTMLAttributes<HTMLDivElement> {
  logo: string;
  title: string;
  series: string;
  category: string;
  description: string;
  successPercent: string;
  successTitle: string;
  successPercentTwo: string;
  successTitleTwo: string;
}

const CustomerCard = ({ logo, title, series, category, description, successPercent, successTitle, successPercentTwo, successTitleTwo }: Props) => {
  return (
    <div className="text-white outline outline-[#606060] pb-6  rounded-lg">
      <div className="lg:py-[59px] py-[49px] flex items-center justify-center">
        <div className="wrapper rounded-lg p-6">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="mx-6 flex flex-col gap-4">
        <p>{title}</p>
        <div className="flex gap-2">
          <span className="uppercase">{series}</span> • <span className="uppercase">{category}</span>
        </div>
        <p className="text-lightGray text-md leading-xl">{description}</p>
        <div className="mt-2 flex xl:flex-row flex-col p-6 gap-6  wrapper rounded-2xl">
          <div className="flex gap-1">
            <span className="xl:text-2xl lg:text-lg text-md font-medium leading-lg">{successPercent}
              <span className="xl:text-md md:text-sm text-xs leading-xl text-lightGray ml-2">{successTitle}</span>
            </span>
          </div>
          <div className="xl:block hidden h-[66px] bg-[#383838] w-[1px]" />
          <div className="flex gap-1">
            <span className="xl:text-2xl lg:text-lg text-md font-medium leading-lg">{successPercentTwo}
              <span className="xl:text-md md:text-sm text-xs leading-xl text-lightGray ml-2">{successTitleTwo}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerCard