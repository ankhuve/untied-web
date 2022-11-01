import {component$, Slot, useStylesScoped$} from "@builder.io/qwik";
import styles from "./hero.css?inline";
import Button from "~/components/common/button/button";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div className="hero">
      <div className="flex flex-col md:w-1/2 2xl:left-56 relative justify-center px-8 sm:px-16 space-y-4 md:space-y-8 md:mt-16 md:h-full">
        <Slot />
      </div>
    </div>
  );
});
