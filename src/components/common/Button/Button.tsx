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
      <div class={classNames}>
        {href ? (
          <a
            href={href}
            target="_blank"
            class={`button primary whitespace-nowrap ${glow && "shadow-glow"}`}
          >
            {text}
          </a>
        ) : (
          <button
            class={`button primary whitespace-nowrap ${glow && "shadow-glow"}`}
          >
            {text}
          </button>
        )}
      </div>
    );
  }
);
