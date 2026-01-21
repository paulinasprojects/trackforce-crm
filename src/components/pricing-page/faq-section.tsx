import { faqAccordionData } from "../../lib/data"
import { FaqAccordion } from "./accordion/faq-accordion"
import { FaqAccordionContent } from "./accordion/faq-accordion-content"
import FaqAccordionItem from "./accordion/faq-accordion-item"
import { FaqAccordionTrigger } from "./accordion/faq-accordion-trigger"

const FaqSection = () => {
  return (
    <div className="lg:my-20 md:my-[56px] my-10">
      <div className="xl:mx-[189px] lg:mx-[80px] md:mx-[64px] mx-6">
        <div className="md:mb-[56px] mb-8 flex flex-col gap-6 items-center justify-center">
          <h1 className=" md:text-[48px] text-[32px] font-medium leading-[120%] text-white text-center">Frequently Asked Questions</h1>
          <p className="text-[#c2c2c2] text-center lg:text-lg md:text-[16px] text-sm leading-[150%]">Check out our FAQs to learn more about how TrackForce can elevate your business.</p>
        </div>
        <div className="bg-[#131314] rounded-[24px]">
          <div className="p-4">
            <FaqAccordion className="flex flex-col gap-3">
              {faqAccordionData.map((data) => (
                <FaqAccordionItem key={data.value} className="w-full wrapper rounded-lg p-4" value={data.value}>
                  <FaqAccordionTrigger className="lg:text-[24px] text-lg text-left font-medium leading-[120%]  text-white">{data.title}</FaqAccordionTrigger>
                  <FaqAccordionContent className="text-[#c2c2c2] text-[16px] leading-[150%]">{data.description}</FaqAccordionContent>
                </FaqAccordionItem>
              ))}
            </FaqAccordion>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FaqSection