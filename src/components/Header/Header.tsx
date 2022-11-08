import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { UntiedLogo } from "../common/Icons/Logo";
import styles from "./Header.css?inline";
import { Link } from "@builder.io/qwik-city";
import Button from "~/components/common/Button/Button";
import GithubIcon from "~/components/common/Icons/Github";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header class="flex px-6 py-4 md:px-16 justify-between items-center absolute w-full">
      <Link href="/" className="flex">
        <div class="mr-4">
          <UntiedLogo />
        </div>
        <h1 className="text-2xl m-0">Untied</h1>
      </Link>
      <ul class="flex items-center text-right gap-2 lg:gap-4">
        <li class="select-none opacity-50 hidden sm:block">
          Docs (coming soon)
        </li>
        <li>
          <Link href="/about" className="p-2 md:p-4">
            About
          </Link>
        </li>
        <li>
          <Link
            className="p-2 md:p-4"
            href="https://dtyl3ii63lk.typeform.com/to/SFVX49Iz"
            target="_blank"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/untiedworld"
            target="_blank"
            className="px-4"
            aria-label={"Github"}
          >
            <GithubIcon />
          </Link>
        </li>
        <li class="pl-4 hidden sm:block">
          <Button
            text="Get access"
            href="https://dtyl3ii63lk.typeform.com/to/SFVX49Iz"
          />
        </li>
      </ul>
    </header>
  );
});
