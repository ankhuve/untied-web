import { component$, Slot } from "@builder.io/qwik";

interface TextProps {
  type?: "heading-1" | "heading-2" | "heading-3" | "base" | "sm" | "lg";
  tag?: keyof HTMLElementTagNameMap;
  center?: boolean;
  noMargin?: boolean;
  underline?: boolean;
}
export default component$<TextProps>(
  ({ type, tag = "p", center, noMargin, underline }) => {
    const Tag = tag;
    const className = ``
      .concat(type ? ` text-${type}` : "")
      .concat(center ? " text-center" : "")
      .concat(underline ? " underline" : "");

    return (
      <Tag class={className} style={noMargin ? "margin: 0" : ""}>
        <Slot />
      </Tag>
    );
  }
);
