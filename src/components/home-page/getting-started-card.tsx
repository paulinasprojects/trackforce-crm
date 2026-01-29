
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const GettingStartedCard = ({ title, description, icon: Icon }: Props) => {
  return (
    <div className="wrapper lg:w-[410px] lg:h-[298px] p-6 rounded-lg flex flex-col items-center gap-8 text-center">
      <div className="bg-[#050709] p-2 rounded-[12px] wrapper">
        <Icon />
      </div>
      <div>
        <p className="xl:text-2xl text-lg font-medium text-white">{title}</p>
        <p className="text-sm text-lightGray mt-4">{description}</p>
      </div>
    </div>
  )
}

export default GettingStartedCard