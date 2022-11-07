import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/Header/Header";
import Footer from "~/components/Footer/Footer";

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
