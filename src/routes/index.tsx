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
        <div class="hero-illustration">
          <div class="flex flex-col md:w-1/2 2xl:left-56 relative justify-center px-8 sm:px-16 md:mt-16 md:h-full max-w-4xl">
            <Text tag={"h1"} type={"heading-1"}>
              All wearable <br /> data in one API
            </Text>
            <Text>
              Build or enhance your health or fitness service by integrating
              your customers wearable devices. Connect to any wearable device
              through our single, open-source, easy-to-use API.
            </Text>
            <Button
              glow
              text="Get access"
              href="https://dtyl3ii63lk.typeform.com/to/gOYi2LoS"
              class="mt-8"
            />
          </div>
        </div>
      </Hero>
      <div class="container mx-auto px-4 lg:px-16">
        <HowItWorks />
        <Features />
        <WhyUntied />
        <CallToAction />
      </div>
    </>
  );
});

export const HowItWorks = () => {
  return (
    <section class="my-12 lg:my-24 flex flex-col">
      <h2 class="text-center mb-12 lg:mb-24">How it works</h2>
      <div class="flex justify-center gap-4 lg:gap-24 mb-32">
        <div class="justify-center flex flex-col">
          <img
            src="/assets/images/step-1.svg"
            alt="Step 1"
            width="160"
            height="346"
            class="shadow-glow-green rounded-2xl"
          />
        </div>
        <div class="flex gap-4 md:gap-16 items-center justify-center w-1/2 flex-col md:flex-row">
          <h3 class="text-heading-2 md:text-heading-1 mb-8 md:mb-0">1.</h3>
          <div class="space-y-3">
            <h3>Select your wearable device</h3>
            <p>
              In your application, simply display the Untied Widget to your
              user, allowing them to select their wearable device.
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center space-x-8 lg:space-x-24 mb-32">
        <div class="flex gap-4 md:gap-16 items-center justify-center w-1/2 flex-col md:flex-row">
          <h3 class="text-heading-2 md:text-heading-1 mb-8 md:mb-0">2.</h3>
          <div class="space-y-3">
            <h3>Authenticate with permissions</h3>
            <p>
              The user gets redirected to the wearable’s authentication page,
              where they enter their credentials and give access access to their
              wearable data.
            </p>
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-2 md:gap-16">
          <div class="justify-center flex flex-col">
            <img
              src="/assets/images/step-2-1.svg"
              alt="Step 2.1: Authenticate with your wearable device provider"
              width="160"
              height="330"
              class="shadow-glow-green rounded-2xl"
            />
          </div>
          <div class="justify-center flex flex-col">
            <img
              src="/assets/images/step-2-2.svg"
              alt="Step 2.2: Allow the requested permissions"
              width="160"
              height="330"
              class="shadow-glow-green rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-center gap-4 lg:gap-24 mb-32">
        <div class="justify-center flex flex-col">
          <img
            src="/assets/images/step-3.svg"
            alt="Step 3: Receive the data"
            width="160"
            height="346"
            class="shadow-glow-green rounded-2xl"
          />
        </div>
        <div class="flex gap-4 md:gap-16 items-center justify-center w-1/2 flex-col md:flex-row">
          <h3 class="text-heading-2 md:text-heading-1 mb-8 md:mb-0">3.</h3>
          <div class="space-y-3">
            <h3>You’re in!</h3>
            <p>
              When the user has authenticated, your application will receive an
              API token from Untied, so your business logic can take over and
              request whatever data your need, in a standardized format.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Features = () => {
  return (
    <section class="my-12 lg:my-24 flex flex-col">
      <h2 class="text-center mb-12 lg:mb-24">Features</h2>
      <div class="flex justify-center lg:space-x-12 xl:space-x-24 flex-col-reverse lg:flex-row">
        <div class="flex flex-col lg:w-1/2 space-y-12">
          <div>
            <h3 class="mb-3">Open source, self-hostable</h3>
            <p>
              We understand the importance of transparency and being in charge
              of your own data.
            </p>
          </div>
          <div>
            <h3 class="mb-3">Integrate with ease</h3>
            <p>
              Support any wearable, and get it done by the end of the day - easy
              peasy.
            </p>
          </div>
          <div>
            <h3 class="mb-3">Connect and forget</h3>
            <p>
              Spend your time where it matters, we’ll take good care of your
              integrations.
            </p>
          </div>
          <div>
            <h3 class="mb-3">Standardized data types</h3>
            <p>
              We map device data into standardized formats, so you know what you
              get.
            </p>
          </div>
        </div>
        <div class="w-full lg:w-1/2 mb-8 md:mb-0 justify-center flex">
          <img
            src="/assets/images/one-api.svg"
            alt="Illustration of various wearable providers being connected to your applications through a single API."
            width="656"
            height="512"
          />
        </div>
      </div>
    </section>
  );
};

export const WhyUntied = () => {
  return (
    <section class="my-12 lg:my-24 flex flex-col">
      <h2 class="text-center mb-12 lg:mb-24">Why Untied?</h2>
      <div class="flex justify-center lg:space-x-12 xl:space-x-24 flex-col lg:flex-row">
        <div class="flex flex-col lg:w-1/2 space-y-12">
          <div class="textbox-gradient">
            <h3 class="mb-3">It’s open source software</h3>
            <Text type={"base"}>
              Whether you want to host Untied by yourself, or want us to just
              solve it for you - there’s a solution for you.
            </Text>
            <Text noMargin>
              Untied is open source software (OSS), which means our source code
              is public and open for anyone to contribute to. Hosting it on the
              server of your choice is easy, you’re even free to modify the
              source code to fit your specific needs.
            </Text>
          </div>
          <div class="textbox-gradient">
            <h3 class="mb-3">Privacy centered architecture</h3>
            <Text type={"base"}>
              We have designed Untied from the ground up with privacy and data
              security at the center of every architectural decision. We only
              store the data that is necessary to make Untied work, and we don’t
              share it with anyone.
            </Text>
            <Text noMargin>
              Since our software is open source, you can read all of our source
              code and verify that we’re not doing anything shady. Our community
              is also free to contribute to the source code, and we welcome
              everyone to do so.
            </Text>
          </div>
        </div>
        <div class="w-full lg:w-1/2 mb-8 md:mb-0 justify-center flex">
          <img
            class="right-6 relative"
            src="/assets/images/funnel.svg"
            alt="Illustration of different wearable providers being connected to your applications through a single API."
            width="656"
            height="946"
          />
        </div>
      </div>
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
