import { faqAccordionData } from "../../lib/data"
import { FaqAccordion } from "./accordion/faq-accordion"
import { FaqAccordionContent } from "./accordion/faq-accordion-content"
import FaqAccordionItem from "./accordion/faq-accordion-item"
import { FaqAccordionTrigger } from "./accordion/faq-accordion-trigger"

const FaqSection = () => {
  return (
    <section className="lg:my-20 md:my-14 my-10">
      <div className="xl:mx-[189px] lg:mx-20 md:mx-16 mx-6">
        <div className="md:mb-14 mb-8 flex flex-col gap-6 items-center justify-center">
          <h1 className="md:text-5xl text-headingMedium font-medium leading-lg text-white text-center">Frequently Asked Questions</h1>
          <p className="text-lightGray text-center lg:text-lg md:text-md text-sm leading-xl">
            Check out our FAQs to learn more about how TrackForce can elevate your business.
          </p>
        </div>
        <div className="bg-[#131314] rounded-[24px]">
          <div className="p-4">
            <FaqAccordion className="flex flex-col gap-4">
              {faqAccordionData.map((data) => (
                <FaqAccordionItem key={data.value} className="w-full wrapper rounded-lg p-4" value={data.value}>
                  <FaqAccordionTrigger className="lg:text-2xl text-lg text-left font-medium leading-lg text-white">{data.title}</FaqAccordionTrigger>
                  <FaqAccordionContent className="text-lightGray text-md leading-xl">{data.description}</FaqAccordionContent>
                </FaqAccordionItem>
              ))}
            </FaqAccordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqSection