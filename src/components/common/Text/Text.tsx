import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./Text.css?inline";

interface TextProps {
  type?: "heading-1" | "heading-2" | "heading-3" | "base" | "sm" | "lg";
  tag?: keyof HTMLElementTagNameMap;
  center?: boolean;
  noMargin?: boolean;
  underline?: boolean;
}
export default component$<TextProps>(
  ({ type = "base", tag = "p", center, noMargin, underline }) => {
    useStylesScoped$(styles);
    const Tag = tag;
    const className = `text-${type}`
      .concat(center ? " text-center" : "")
      .concat(noMargin ? " m-0" : "")
      .concat(underline ? " underline" : "");

    return (
      <Tag class={className}>
        <Slot />
      </Tag>
    );
  }
);
