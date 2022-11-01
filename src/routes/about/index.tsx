import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/Hero/Hero";

export default component$(() => {
  return (
    <>
      <Hero>
        <div className="flex flex-col justify-center px-8 sm:px-16 mx-auto space-y-4 md:space-y-8 md:h-full container">
          <h1>Untied wha..?</h1>
          <p className="text-base">
            Untied is an open source platform to easily get health and fitness
            data (such as heart rate, steps, activity, blood levels - you name
            it) from wearable devices.
          </p>
          <p className="text-base">
            The data you receive on your end is standardized. That means no
            matter which device you get it from, it will be formatted the same
            way to make it easy for you to handle.
          </p>
          <p className="text-base">
            Host Untied yourself, or sign up for the hosted version for a quick
            way to get started.
          </p>
        </div>
      </Hero>
      <main className="py-12 lg:py-24 container-fluid mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 2xl:w-2/5 flex flex-col justify-center items-center space-y-32">
          <div className="w-11/12 lg:w-2/3 space-y-16">
            <div className="p-6 rounded-2xl shadow-2xl space-y-3">
              <h2 className="text-heading-3 font-bold">Integrate with ease</h2>
              <p>
                Support any wearable, and get it done by the end of the day -
                easy peasy
              </p>
            </div>
            <div className="p-6 rounded-2xl shadow-2xl space-y-3">
              <h2 className="text-heading-3 font-bold">Connect and forget</h2>
              <p>
                Spend your time where it matters, we’ll take good care of your
                integrations
              </p>
            </div>
            <div className="p-6 rounded-2xl shadow-2xl space-y-3">
              <h2 className="text-heading-3 font-bold">
                Standardized data types
              </h2>
              <p>
                We map device data into standardized formats, so you know what
                you get
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 2xl:w-3/5 flex flex-col justify-center items-center lg:items-start mt-12 lg:mt-0">
          <div className="w-11/12 flex justify-center">
            <img
              src="/assets/images/one-api.svg"
              alt="One API, all wearable devices"
            />
          </div>
        </div>
      </main>
    </>
  );
});

// sets the title and meta properties of the page
export const head: DocumentHead = {
  title: "About - Untied",
  meta: [
    {
      name: "description",
      content:
        "Here's some information about who we are at Untied World, what we do, and why we do what we do.",
    },
  ],
};
