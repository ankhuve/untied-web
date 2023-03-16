import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="flex flex-col md:h-800 bg-no-repeat bg-hero-gradient pt-32 md:pt-0 py-16 md:py-0">
      <Slot />
    </div>
  );
});
