import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faqs" className="pt-12 mx-auto text-4xl max-w-full bg-black text-purple-100">
      <h1 className="text-center">FAQ's</h1>
      <Accordion type="single" collapsible className="lg:w-[1200px] mt-12 mx-auto px-5 pb-20">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg">
            What is the purpose of this platform?
          </AccordionTrigger>
          <AccordionContent>
            Our platform connects developers based on their interests and
            expertise, fostering a collaborative environment for problem-solving
            and knowledge sharing.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg">
            {" "}
            Is the platform only for experienced developers?
          </AccordionTrigger>
          <AccordionContent>
            No, developers of all levels are welcome! Whether you're a beginner
            seeking guidance or an experienced developer looking to help others,
            our platform caters to a diverse audience.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg">
            {" "}
            What kind of assistance can I seek or offer?
          </AccordionTrigger>
          <AccordionContent>
            Users can seek help with coding challenges, debugging, project
            guidance, or any developer-related queries. You can offer assistance
            in these areas based on your expertise.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg">
            {" "}
            How are credits or experience points earned?
          </AccordionTrigger>
          <AccordionContent>
            When a user seeking help is satisfied with the assistance received,
            they can approve the solution, and credits or experience points are
            awarded to the solver.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg">
            {" "}
            How can I join and start using the platform?
          </AccordionTrigger>
          <AccordionContent>
            Simply sign up with your developer profile, specifying your
            interests and expertise. You'll then be matched with others based on
            your preferences.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-lg">
            {" "}
            Is my information and data secure on the platform?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely. We prioritize user privacy and data security. All
            interactions and personal information are handled with the utmost
            care and follow industry-standard security measures.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
