import { component$ } from "@builder.io/qwik";

interface ButtonProps {
  text: string;
  href?: string;
  glow?: boolean;
  className?: string;
}

export default component$<ButtonProps>(
  ({ text, href, glow = false, className }) => {
    const buttonStyle =
      "bg-primary h-10 flex justify-center items-center rounded-full hover:bg-primary-500 text-white whitespace-nowrap px-6 transition-colors text-base font-bold";
    return href ? (
      <a
        href={href}
        target="_blank"
        class={`${buttonStyle} ${glow && "shadow-glow"} ${className}`}
      >
        {text}
      </a>
    ) : (
      <button class={`${buttonStyle} ${glow && "shadow-glow"} ${className}`}>
        {text}
      </button>
    );
  }
);
