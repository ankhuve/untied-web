import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { UntiedLogo } from "~/components/common/Icons/Logo";
import { Link } from "@builder.io/qwik-city";
import styles from "./Footer.css?inline";
import Github from "~/components/common/Icons/Github";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      <div className="container mx-auto flex h-full justify-between">
        <div className="flex flex-col justify-center">
          <Link href="/">
            <div className="flex items-center mb-4">
              <div className="mr-4">
                <UntiedLogo />
              </div>
              <h1 className="text-2xl">Untied</h1>
            </div>
          </Link>
          <span className="text-sm text-gray-50">Org. no 559400-2304</span>
          <Link href="/">
            <span className="text-sm text-gray-50">© 2022 Untied World AB</span>
          </Link>
        </div>

        <div className="flex space-x-12">
          <ul className="flex flex-col text-right md:text-left space-y-2 md:space-y-4">
            <li className="flex justify-end md:justify-start text-primary-500">
              Find us
            </li>
            <li className="flex justify-end md:justify-start">
              <Github />
            </li>
          </ul>
          <ul className="flex flex-col text-right md:text-left space-y-2 md:space-y-4">
            <li className="flex justify-end md:justify-start text-primary-500">
              Company
            </li>
            <li className="select-none opacity-50 hidden sm:block">
              Docs (coming soon)
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link
                href="https://dtyl3ii63lk.typeform.com/to/SFVX49Iz"
                target="_blank"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="https://dtyl3ii63lk.typeform.com/to/SFVX49Iz"
                target="_blank"
              >
                Careers
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
});
