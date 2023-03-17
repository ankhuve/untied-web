import { component$, Slot } from "@builder.io/qwik";

interface Props {
  className?: string;
}
export default component$<Props>(({ className = "" }) => {
  return (
    <div
      class={`flex flex-col justify-center md:h-[calc(90vh)] bg-no-repeat bg-hero-gradient pt-32 md:pt-0 py-16 md:py-0 ${className}`}
    >
      <Slot />
    </div>
  );
});
