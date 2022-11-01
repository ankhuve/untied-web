import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { UntiedLogo } from "../common/logo/logo";
import styles from "./header.css?inline";
import { Link } from "@builder.io/qwik-city";
import Button from "~/components/common/button/button";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="flex px-6 py-4 sm:px-14 bg-primary-50 justify-between items-center">
      <Link href="/" className="flex">
          <div class="mr-4">
            <UntiedLogo />
          </div>
          <h1 className="text-2xl text-primary-900">Untied</h1>
      </Link>
      <ul class="flex items-center text-primary-900 text-right">
        <li class="text-primary-200 select-none">Docs</li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Button text="Get access" href="/contact" />
        </li>
      </ul>
    </header>
  );
});
