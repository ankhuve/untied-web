import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import Hero from "~/components/Hero/Hero";
import Text from "~/components/common/Text/Text";
import { CallToAction } from "~/components/CallToAction/CallToAction";

export default component$(() => {
  return (
    <>
      <Hero>
        <div class="flex flex-col justify-center max-w-3xl px-8 mx-auto space-y-4 md:space-y-8 md:h-full container">
          <h1>Untied wha..?</h1>
          <Text>
            Untied is an open source platform to easily get health and fitness
            data (such as heart rate, steps, activity, blood levels - you name
            it) from wearable devices.
          </Text>
          <Text>
            The data you receive on your end is standardized. That means no
            matter which device you get it from, it will be formatted the same
            way to make it easy for you to handle.
          </Text>
          <Text>
            Host Untied yourself, or sign up for the hosted version for a quick
            way to get started.
          </Text>
        </div>
      </Hero>
      <div class="flex flex-col items-center px-8 mx-auto space-y-12 lg:space-y-24 my-12 lg:my-24">
        <section class="container">
          <Text type={"heading-1"} tag={"h2"} center>
            Meet the team
          </Text>
          <div class="grid lg:grid-cols-3 gap-8 lg:gap-16 mt-8 lg:mt-16">
            <div class="text-center">
              <img
                src="/assets/images/daniel.png"
                alt="Daniel"
                width={128}
                height={128}
                class="rounded-4xl h-32 w-32 mx-auto mb-4"
              />
              <Text type={"heading-3"} tag={"h3"}>
                Daniel Hellquist
              </Text>
              <Text>Business person</Text>
            </div>
            <div class="text-center">
              <img
                src="/assets/images/erik.png"
                alt="Erik"
                width={128}
                height={128}
                class="rounded-4xl h-32 w-32 mx-auto mb-4"
              />
              <Text type={"heading-3"} tag={"h3"}>
                Erik Forsberg
              </Text>
              <Text>Tech person</Text>
            </div>
            <div class="text-center">
              <img
                src="/assets/images/wille.png"
                alt="Wilhelm"
                width={128}
                height={128}
                class="rounded-4xl h-32 w-32 mx-auto mb-4"
              />
              <Text type={"heading-3"} tag={"h3"}>
                Wilhelm Schenning
              </Text>
              <Text>Business person</Text>
            </div>
            <div class="text-center lg:col-span-3">
              <img
                src="/assets/images/you.png"
                alt="An anonymous avatar"
                width={128}
                height={128}
                class="rounded-4xl h-32 w-32 mx-auto mb-4"
              />
              <Text type={"heading-3"} tag={"h3"}>
                Maybe you?
              </Text>
              <Link
                href="https://dtyl3ii63lk.typeform.com/to/WQkcPqZx"
                target={"_blank"}
              >
                <Text underline>Let's get in touch!</Text>
              </Link>
            </div>
          </div>
        </section>
        <section>
          <CallToAction />
        </section>
      </div>
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
