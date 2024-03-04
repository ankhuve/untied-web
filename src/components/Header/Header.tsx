import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <header class="flex px-6 py-4 md:px-16 md:py-8 justify-end items-center absolute w-full z-20">
      <ul class="flex items-center text-right gap-2 lg:gap-4 text-lg font-bold text-black">
        <li>
          <a class="p-2 md:p-4 lg:px-6" href="mailto:erik@untied.world">
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
});
