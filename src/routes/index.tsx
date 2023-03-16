import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/Hero/Hero";
import Button from "~/components/common/Button/Button";
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
              text="Get started"
              href="https://dtyl3ii63lk.typeform.com/to/gOYi2LoS"
              className="mt-8 !px-12"
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
          className="!px-12"
        />
      </div>
    </section>
  );
};

export const FutureOfWellness = () => {
  return (
    <section class="my-12 lg:my-24 flex flex-col">
      <h2 class="text-center">Build the future of wellness.</h2>
      <p class="text-center">
        We believe that you should be in control of your own product. That’s why
        we offer two different ways to integrate Untied into your product. You
        can host Untied yourself using our open source software, or let Untied
        provide a complete solution for you.
      </p>
      <div class="py-16 mx-auto max-w-4xl grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-2">
        <div class="textbox-gradient p-8 rounded-xl">
          <Text tag="h4" className="text-2xl font-bold mb-2">
            All wearables and sensors.
          </Text>
          <p class="text-base mb-0">
            Support any wearable and sensor with our seamless experience.
          </p>
        </div>
        <div class="textbox-gradient p-8 rounded-xl">
          <Text tag="h4" className="text-2xl font-bold mb-2">
            Security you can trust.
          </Text>
          <p class="text-base mb-0">
            We take your security very seriously and that's why we anonymize all
            data by default.
          </p>
        </div>
        <div class="textbox-gradient p-8 rounded-xl">
          <Text tag="h4" className="text-2xl font-bold mb-2">
            Open source, self-hostable.
          </Text>
          <p class="text-base mb-0">
            We understand the importance of transparency and being in charge of
            your own data.
          </p>
        </div>
        <div class="textbox-gradient p-8 rounded-xl">
          <Text tag="h4" className="text-2xl font-bold mb-2">
            For compaines of any size.
          </Text>
          <p class="text-base mb-0">
            Our platform serves startups, scaleups and large enterprises alike,
            providing custom solutions and tools.
          </p>
        </div>
        <div class="textbox-gradient p-8 rounded-xl">
          <Text tag="h4" className="text-2xl font-bold mb-2">
            Loved by developers.
          </Text>
          <p class="text-base mb-0">
            We give developers the tools they need to build the best
            applications possible.
          </p>
        </div>
        <div class="textbox-gradient p-8 rounded-xl">
          <Text tag="h4" className="text-2xl font-bold mb-2">
            Seamless user experience.
          </Text>
          <p class="text-base mb-0">
            Our widget module streamlines your onboarding experience to help
            users connect their wearables and sensors.
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
        <h2 class="m-0 w-8/12 mb-8 sm:m-0">
          Implementation just went from months to hours
        </h2>
        <div class="w-4/12 mx-auto">
          <div class="flex justify-center">
            <Button
              text="Get started"
              className="!px-12"
              href={"https://dtyl3ii63lk.typeform.com/to/gOYi2LoS"}
            />
          </div>
        </div>
      </div>
      <hr class="mt-8" />
    </section>
  );
};

export const OurMission = () => {
  return (
    <section class="my-12 lg:my-24 flex-col max-w-xl mx-auto pt-12">
      <Text type="heading-1" tag="h2" center>
        We're on a mission.
      </Text>
      <p class="text-center">
        We want to make wellness personal and tailored to every individual
        person. A key step in getting there is simplifying access and making
        sense of wearable health data.
      </p>
    </section>
  );
};

export const CallToAction = () => {
  return (
    <section class="my-12 lg:my-24 flex flex-col max-w-xl mx-auto py-12">
      <div class="flex justify-center">
        <Button
          text="Get started"
          className="!px-12"
          href={"https://dtyl3ii63lk.typeform.com/to/gOYi2LoS"}
        />
      </div>
    </section>
  );
};

// sets the title and meta properties of the page
export const head: DocumentHead = {
  title: "One integration, endless wellness solutions -  Untied",
  meta: [
    {
      name: "description",
      content:
        "Build or enhance your health or fitness service by integrating your customers wearable devices. Connect to any wearable device through our single, easy-to-use API.",
    },
  ],
};
