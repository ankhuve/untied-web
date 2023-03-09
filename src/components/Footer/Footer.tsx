import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { UntiedLogo } from "~/components/common/Icons/Logo";
import { Link } from "@builder.io/qwik-city";
import styles from "./Footer.css?inline";
import GithubIcon from "~/components/common/Icons/Github";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      <div class="container flex flex-col items-center gap-8 md:flex-row mx-auto flex h-full justify-between">
        <div class="flex flex-col justify-center whitespace-nowrap">
          <Link href="/">
            <div class="flex items-center mb-4">
              <div class="mr-4">
                <UntiedLogo />
              </div>
              <h1 class="text-2xl m-0">Untied</h1>
            </div>
          </Link>
          <span class="text-sm text-gray-50">Org. no 559400-2304</span>
          <Link href="/">
            <span class="text-sm text-gray-50">© 2022 Untied World AB</span>
          </Link>
        </div>

        <div class="flex w-full justify-evenly md:justify-end gap-8 md:gap-12">
          <ul class="flex flex-col text-right md:text-left space-y-2 md:space-y-4">
            <li class="flex justify-end md:justify-start text-primary-500 whitespace-nowrap">
              Find us
            </li>
            <li class="flex justify-end md:justify-start">
              <Link
                href="https://github.com/untiedworld"
                target="_blank"
                aria-label={"Github"}
              >
                <GithubIcon />
              </Link>
            </li>
          </ul>
          <ul class="flex flex-col text-right md:text-left space-y-2 md:space-y-4">
            <li class="text-primary-500">Company</li>
            <li class="select-none opacity-50">Docs (coming soon)</li>
            <li>
              <Link href="/about">About</Link>
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
              <Link
                href="https://dtyl3ii63lk.typeform.com/to/WQkcPqZx"
                target="_blank"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
});
