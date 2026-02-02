import { collaborationData } from "../../lib/data"
import CollaborationCard from "./colllaboration-card"

const FeaturedCollaborationTools = () => {
  return (
    <section className="mt-14">
      <div className="lg:mx-[189px] md:mx-16 mx-6 flex flex-col gap-6 items-center justify-center">
        <h1 className="md:text-5xl text-headingMedium font-medium leading-lg text-white text-center">Work Smarter Together with These Powerful Collaboration Tools</h1>
        <p className="text-lightGray text-center lg:text-lg md:text-md text-sm leading-xl">
          Explore the features that enable your team to achieve more together, all within a single, connected platform.
        </p>
      </div>
      <div className="xl:mx-20 md:mx-10 mx-6 mt-14 text-white">
        <div className="flex flex-col gap-10">
          {collaborationData.map((data) => (
            <CollaborationCard
              key={data.id}
              benefits={data.benefits}
              description={data.description}
              title={data.title}
              image={data.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollaborationTools