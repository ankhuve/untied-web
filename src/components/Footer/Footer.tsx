import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { UntiedLogo } from "~/components/common/Icons/Logo";
import { Link } from "@builder.io/qwik-city";
import styles from "./Footer.css?inline";
import GithubIcon from "~/components/common/Icons/Github";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      <div class="container flex flex-col items-center gap-8 md:flex-row mx-auto h-full justify-between">
        <div class="flex flex-col justify-center">
          <Link href="/">
            <div class="flex items-center mb-4">
              <div class="mr-4">
                <UntiedLogo />
              </div>
              <h1 class="text-2xl m-0">Untied</h1>
            </div>
          </Link>
          <p class="text-sm text-gray-50 max-w-sm">
            Copyright © 2023 Untied World AB. All rights reserved. Organization
            number: 559400-2304
          </p>
        </div>

        <div class="flex max-w-md justify-evenly md:justify-end gap-8 md:gap-24">
          <ul class="flex flex-col space-y-4">
            <li class="flex text-primary-500 whitespace-nowrap">Find us</li>
            <li class="flex justify-end md:justify-start">
              <Link
                href="https://github.com/untiedworld"
                target="_blank"
                aria-label="Github"
                class="flex gap-2 items-center"
              >
                Github
                <GithubIcon />
              </Link>
            </li>
          </ul>
          <ul class="flex flex-col space-y-4">
            <li class="text-primary-500">Company</li>
            <li>
              <Link href="/team">Team</Link>
            </li>
            <li>
              <Link
                href="https://dtyl3ii63lk.typeform.com/to/gOYi2LoS"
                target="_blank"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
});
