import {component$} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";
import Hero from "~/components/hero/hero";
import Button from "~/components/common/button/button";

export default component$(() => {
  return (
    <>
      <Hero>
        <h1 className="text-heading-2 md:text-heading-1">
          Get in touch
        </h1>
        <p className="text-base">
          We are always happy to hear from you. If you have any questions, please don't hesitate to reach out.
        </p>
        <Button
          text="Contact us"
          href="https://dtyl3ii63lk.typeform.com/to/SFVX49Iz"
        />
      </Hero>
      <main className="my-12 lg:my-24 container-fluid mx-auto flex flex-col lg:flex-row">
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

// sets the title of the page
export const head: DocumentHead = {
  title: "Contact - Untied",
  meta: [{
    name: 'description',
    content: "We are always happy to hear from you. If you have any questions, please don't hesitate to reach out."
  }]
};
