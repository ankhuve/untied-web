import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import styles from "./Hero.css?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <div className="hero">
      <Slot />
    </div>
  );
});
