import Button from "~/components/common/Button/Button";
import { component$ } from "@builder.io/qwik";

export const CallToAction = component$(() => {
  return (
    <section className="my-12 lg:my-24 flex flex-col mb-24 items-center">
      <h2 className="text-center mb-12 lg:mb-18">
        Build your health or <br /> fitness app with Untied.
      </h2>
      <Button
        text={"Get started"}
        glow
        href={"https://dtyl3ii63lk.typeform.com/to/SFVX49Iz"}
      />
    </section>
  );
});
