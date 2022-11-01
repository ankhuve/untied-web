import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./button.css?inline";

interface ButtonProps {
  text: string;
  href?: string;
}

export default component$<ButtonProps>(({ text, href }) => {
  useStylesScoped$(styles);

  return (
    <div className="flex justify-center md:justify-start">
      {href ? (
        <a
          href="https://dtyl3ii63lk.typeform.com/to/SFVX49Iz"
          target="_blank"
          className="button primary"
        >
          {text}
        </a>
      ) : (
        <button className="button primary">{text}</button>
      )}
    </div>
  );
});
