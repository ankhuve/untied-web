import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Button.css?inline";

interface ButtonProps {
  text: string;
  href?: string;
  glow?: boolean;
  className?: string;
}

export default component$<ButtonProps>(
  ({ text, href, glow = false, className }) => {
    useStylesScoped$(styles);
    const classNames = "flex justify-center md:justify-start".concat(
      className ? " " + className : ""
    );

    return (
      <div className={classNames}>
        {href ? (
          <a
            href="https://dtyl3ii63lk.typeform.com/to/SFVX49Iz"
            target="_blank"
            className={`button primary whitespace-nowrap ${
              glow && "shadow-glow"
            }`}
          >
            {text}
          </a>
        ) : (
          <button
            className={`button primary whitespace-nowrap ${
              glow && "shadow-glow"
            }`}
          >
            {text}
          </button>
        )}
      </div>
    );
  }
);
