import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import Hero from "~/components/Hero/Hero";
import Text from "~/components/common/Text/Text";
import Button from "~/components/common/Button/Button";

export default component$(() => {
  return (
    <>
      <Hero className="!h-fit">
        <div class="flex flex-col justify-center pt-64 py-24 px-8 mx-auto container">
          <Text tag="h1" type="heading-1" className="text-center">
            Meet the Untied team
          </Text>
          <Text className="text-center max-w-2xl mx-auto pb-8">
            We are passionate about helping people achieve better health through
            personalized and tailored wellness. Our team includes business
            people, developers, designers, and health and fitness enthusiasts.
          </Text>
          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16 mt-8 lg:mt-16 max-w-4xl mx-auto">
            <div class="text-center">
              <img
                src="/assets/images/team/johannes.png"
                alt="Johannes"
                width={128}
                height={128}
                class="rounded-full h-32 w-32 mx-auto mb-4"
              />
              <Text className="text-lg font-bold mb-0">Johannes Mattsson</Text>
              <Text>Tech</Text>
            </div>
            <div class="text-center">
              <img
                src="/assets/images/team/erik.png"
                alt="Erik"
                width={128}
                height={128}
                class="rounded-full h-32 w-32 mx-auto mb-4"
              />
              <Text className="text-lg font-bold mb-0">Erik Forsberg</Text>
              <Text>Tech</Text>
            </div>
            <div class="text-center">
              <img
                src="/assets/images/team/arvid.png"
                alt="Arvid"
                width={128}
                height={128}
                class="rounded-full h-32 w-32 mx-auto mb-4"
              />
              <Text className="text-lg font-bold mb-0">Arvid Klint</Text>
              <Text>Tech</Text>
            </div>
            <div class="text-center">
              <img
                src="/assets/images/team/daniel.png"
                alt="Daniel"
                width={128}
                height={128}
                class="rounded-full h-32 w-32 mx-auto mb-4"
              />
              <Text className="text-lg font-bold mb-0">Daniel Hellquist</Text>
              <Text>Sales</Text>
            </div>
            <div class="text-center">
              <img
                src="/assets/images/team/wille.png"
                alt="Wilhelm"
                width={128}
                height={128}
                class="rounded-full h-32 w-32 mx-auto mb-4"
              />
              <Text className="text-lg font-bold mb-0">Wilhelm Schenning</Text>
              <Text>Product</Text>
            </div>
            <div class="text-center">
              <img
                src="/assets/images/team/you.png"
                alt="An anonymous avatar"
                width={128}
                height={128}
                class="rounded-full h-32 w-32 mx-auto mb-4"
              />
              <Text className="text-lg font-bold mb-0">You</Text>
              <Link
                href="https://dtyl3ii63lk.typeform.com/to/WQkcPqZx"
                target="_blank"
              >
                <Text underline>Send us your CV</Text>
              </Link>
            </div>
          </div>
        </div>
      </Hero>
      <section class="flex flex-col items-center py-32">
        <h2 class="text-center mb-8">Get in touch?</h2>
        <Text className="max-w-md text-center mb-12">
          We’re friendly, so don’t hesitate to ask us anything (unless it’s
          lunchtime).
        </Text>
        <Button
          className="!px-10 !py-6"
          text="Contact"
          href="https://dtyl3ii63lk.typeform.com/to/KA75GQKQ"
        />
      </section>
    </>
  );
});

// sets the title and meta properties of the page
export const head: DocumentHead = {
  title: "Team - Untied",
  meta: [
    {
      name: "description",
      content:
        "Some information about who we are at Untied World, what we do, and why we do what we do.",
    },
  ],
};
