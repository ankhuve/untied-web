import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Button.css?inline";

interface ButtonProps {
  text: string;
  href?: string;
  glow?: boolean;
}

export default component$<ButtonProps>(({ text, href, glow = false }) => {
  useStylesScoped$(styles);

  return (
    <div className="flex justify-center md:justify-start">
      {href ? (
        <a
          href="https://dtyl3ii63lk.typeform.com/to/SFVX49Iz"
          target="_blank"
          className={`button primary ${glow && "shadow-glow"}`}
        >
          {text}
        </a>
      ) : (
        <button className={`button primary ${glow && "shadow-glow"}`}>{text}</button>
      )}
    </div>
  );
});
