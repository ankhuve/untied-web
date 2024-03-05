import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Swirl from "../components/Swirl";

export default component$(() => {
  return (
    <div class="w-screen h-screen max-w-full flex justify-center bg-gradient-to-br from-[#B5EBA2] to-white text-black overflow-hidden">
      <img
        src="/assets/images/bg.png"
        class="w-full h-full absolute pointer-events-none"
      />
      <Swirl />
      <div class="max-w-screen-lg w-full flex flex-col justify-center gap-4 md:gap-8 h-full z-10 p-8">
        <h1 class="w-full flex items-center gap-1 md:gap-4 text-lg md:text-5xl m-0">
          <img src="/assets/images/untied.svg" class="w-8 md:w-12" />
          Untied
          <img
            src="/assets/images/triangle.svg"
            alt="arrow-right"
            class="w-3 mx-4 md:mx-8 md:w-5"
          />
          <img src="/assets/images/closarai.svg" class="w-12 md:w-20" />
          Closar AI
        </h1>
        <p class="max-w-xl">
          Untied has been acquired by Closar AI, to accelerate its goal of
          creating the ultimate doctor co-pilot. By leveraging wearable health
          and wellness data, Closar AI provides AI-powered recommendations and
          enables medical professionals to act on wearable health insights.{" "}
          <a href="https://closar.ai/">More information can be found here</a>
        </p>
      </div>
    </div>
  );
});

// sets the title and meta properties of the page
export const head: DocumentHead = {
  title: "One integration, endless wellness solutions -  Untied",
  meta: [
    {
      name: "description",
      content:
        "Untied transforms in real-time your users wearable and sensor health data into actionable insights that drive new product features, improve user engagement and higher revenues.",
    },
  ],
};
