import { component$ } from "@builder.io/qwik";
import {UntiedLogo} from "~/components/common/logo/logo";
import {Link} from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <footer className="flex justify-between mx-auto flex-row items-center px-8 lg:px-32 h-32 lg:px-32 bg-text-dark">
        <div className="justify-start space-x-16 flex">
          <div className="flex flex-col space-y-4">
            <div className="w-20z">
              <Link href="/">
                <div className="flex items-center">
                  <div class="mr-4">
                    <UntiedLogo />
                  </div>
                  <h1 className="text-2xl text-primary-900">Untied</h1>
                </div>
              </Link>
            </div>
            <span className="text-small text-gray-50">
              © 2022 Untied World AB
            </span>
          </div>
        </div>
        <div className="justify-end space-x-8">
          <a href="https://untied.world" className="text-small text-gray-50">
            About us
          </a>
          <a
            href="https://dtyl3ii63lk.typeform.com/to/SFVX49Iz"
            target="_blank"
            className="button primary"
          >
            Get access
          </a>
        </div>
      </footer>
    </>
  );
});
