import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/Hero/Hero";
import Button from "~/components/common/Button/Button";
import { CallToAction } from "~/components/CallToAction/CallToAction";
import Text from "~/components/common/Text/Text";

export default component$(() => {
  return (
    <>
      <Hero>
        <div class="flex flex-col relative justify-center px-8 sm:px-16 md:mt-16 md:h-full max-w-[1536px] mx-auto">
          <Text tag={"h1"} type={"heading-1"}>
            One integration, <br />
            endless wellness solutions
          </Text>
          <Text className="max-w-md">
            Untied transforms in real-time your users wearable and sensor health
            data into actionable insights that drive new product features,
            improved user engagement and higher revenues.
          </Text>
          <div class="flex">
            <Button
              text="Get access"
              href="https://dtyl3ii63lk.typeform.com/to/gOYi2LoS"
              className="mt-8 !px-16"
            />
          </div>
        </div>
      </Hero>
      <div class="container mx-auto px-4 lg:px-16">
        <BestCustomerExperience />
        <FutureOfWellness />
        <ImplementationTimeCTA />
        <OurMission />
        <CallToAction />
      </div>
    </>
  );
});

export const BestCustomerExperience = () => {
  return (
    <section class="mx-auto max-w-5xl my-12 lg:my-24 lg:mt-32">
      <h2 class="text-center">Create the best customer experience</h2>
      <p class="mx-auto text-center max-w-2xl">
        Our data collection and solutions empower you to create and open new
        possibilities for your customers, to maximize engagement and revenue.
      </p>
      <div class="grid gap-16 grid-cols-2 py-32">
        <div class="flex justify-end items-center">
          <img src="/assets/images/home/integrations.svg" />
        </div>
        <div class="flex flex-col justify-center">
          <Text type={"heading-3"} tag={"h3"} className="text-primary-200">
            One integration to unify health, fitness and sensor data.
          </Text>
          <p class="text-base mb-0">
            Allow your users to connect and see their health and fitness data
            via the Untied link.
          </p>
        </div>
      </div>
      <div class="grid gap-16 grid-cols-2 py-32">
        <div class="flex flex-col justify-center">
          <Text type={"heading-3"} tag={"h3"} className="text-primary-200">
            Standardized, harmonized and reliable data.
          </Text>
          <p class="text-base mb-0">
            We map device data into standardized formats and harmonize it across
            wearable devices, so that you can compare metrics regardless of
            device.
          </p>
        </div>
        <div class="flex justify-start items-center">
          <img src="/assets/images/home/data.svg" />
        </div>
      </div>
      <div class="grid gap-16 grid-cols-2 py-32">
        <div class="flex justify-end items-center">
          <img src="/assets/images/home/insights.png" />
        </div>
        <div class="flex flex-col justify-center">
          <Text type={"heading-3"} tag={"h3"} className="text-primary-200">
            Real-time insights and recommendations into your business.
          </Text>
          <p class="text-base">
            Our platform optimizes and makes sense of all user data and provides
            actionable insights through your personalized user dashboard.
          </p>
          <p class="text-base font-bold mb-0">(Coming soon)</p>
        </div>
      </div>
      <div class="grid gap-16 grid-cols-2 py-32">
        <div class="flex flex-col justify-center">
          <Text type={"heading-3"} tag={"h3"} className="text-primary-200">
            1-click implementation of new feature.
          </Text>
          <p class="text-base">
            Well, maybe not with just one click, but we offer plug & play
            features such as sleep analysis and heart rate variability analysis
            ready to be implemented directly into your app or service.
          </p>
          <p class="text-base font-bold mb-0">(Coming soon)</p>
        </div>
        <div class="flex justify-start items-center">
          <img src="/assets/images/home/modules.png" />
        </div>
      </div>
      <div class="flex justify-center items-center h-48">
        <Button
          text="Get started"
          href="https://dtyl3ii63lk.typeform.com/to/gOYi2LoS"
          className="!px-16"
        />
      </div>
    </section>
  );
};

export const FutureOfWellness = () => {
  return (
    <section class="my-12 lg:my-24 flex flex-col">
      <h2>Build the future of wellness</h2>
      <p>
        We believe that you should be in control of your own product. That’s why
        we offer two different ways to integrate Untied into your product. You
        can host Untied yourself using our open source software, or let Untied
        provide a complete solution for you.
      </p>
      <div className="flex flex-wrap gap-y-24 mt-16">
        <div className="w-full md:w-1/2 xl:w-1/3 md:pr-8 xl:pr-16">
          <div className="w-[64px] h-[64px] bg-primary-500 rounded-full mb-6"></div>
          <Text tag={"h4"} className="text-heading-3">
            All wearables and sensors
          </Text>
          <p>Support any wearable and sensor with our seamless experience.</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 md:pr-8 xl:pr-16">
          <div className="w-[64px] h-[64px] bg-primary-500 rounded-full mb-6"></div>
          <Text tag={"h4"} className="text-heading-3">
            Loved by developers
          </Text>
          <p>
            We want to give developers the tools they need to build the best
            applications possible.
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 md:pr-8 xl:pr-16">
          <div className="w-[64px] h-[64px] bg-primary-500 rounded-full mb-6"></div>
          <Text tag={"h4"} className="text-heading-3">
            Security you can trust
          </Text>
          <p>
            We take our security very seriously, and that's we anonymize all
            data by default.
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 md:pr-8 xl:pr-16">
          <div className="w-[64px] h-[64px] bg-primary-500 rounded-full mb-6"></div>
          <Text tag={"h4"} className="text-heading-3">
            Open source
          </Text>
          <p>
            We give you the flexibility to host your own instance of Untied, no
            risk of vendor lock-in.
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 md:pr-8 xl:pr-16">
          <div className="w-[64px] h-[64px] bg-primary-500 rounded-full mb-6"></div>
          <Text tag={"h4"} className="text-heading-3">
            Companies and ideas of any size
          </Text>
          <p>
            Our platform serves big, growing, and small companies alike,
            providing custom solutions and tools.
          </p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 md:pr-8 xl:pr-16">
          <div className="w-[64px] h-[64px] bg-primary-500 rounded-full mb-6"></div>
          <Text tag={"h4"} className="text-heading-3">
            World class support
          </Text>
          <p>
            Our dedicated team is committed to providing you with the assistance
            you need, when you need it. Don't hesitate to reach out.
          </p>
        </div>
      </div>
    </section>
  );
};
export const ImplementationTimeCTA = () => {
  return (
    <section class="my-12 lg:my-24 flex-col">
      <hr class="mb-8" />
      <div class="flex flex-col sm:flex-row items-center justify-between">
        <h2 class="m-0">Implementation just went from months to hours</h2>
        <Button
          text="Get started"
          className="!block pl-8 my-8 sm:my-0"
          href={"https://dtyl3ii63lk.typeform.com/to/gOYi2LoS"}
        />
      </div>
      <hr class="mt-8" />
    </section>
  );
};

export const OurMission = () => {
  return (
    <section className="my-12 lg:my-24 flex-col max-w-xl mx-auto">
      <Text type={"heading-1"} tag={"h2"} center>
        Our mission
      </Text>
      <Text type={"lg"}>
        We’re on a mission to make health and fitness personal and tailored to
        every individual person. A key step in getting there is simplifying
        access to wearable health data.
      </Text>
      <Text type={"lg"}>
        Whether your app is on the web, mobile or even on a smart TV, developers
        should be able to build and enhance their health and fitness
        applications with real data gathered by wearable devices in a
        consistent, reliable and cost-effective manner.
      </Text>
      <Text type={"lg"}>Together, let’s build the future of health!</Text>
    </section>
  );
};

// sets the title and meta properties of the page
export const head: DocumentHead = {
  title: "One API, all wearable devices - Untied",
  meta: [
    {
      name: "description",
      content:
        "Build or enhance your health or fitness service by integrating your customers wearable devices. Connect to any wearable device through our single, easy-to-use API.",
    },
  ],
};
