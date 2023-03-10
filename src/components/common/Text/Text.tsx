import { component$, Slot } from "@builder.io/qwik";

interface TextProps {
  type?: "heading-1" | "heading-2" | "heading-3" | "base" | "sm" | "lg";
  tag?: keyof HTMLElementTagNameMap;
  center?: boolean;
  noMargin?: boolean;
  underline?: boolean;
  className?: string;
}
export default component$<TextProps>(
  ({ type, tag = "p", center, noMargin, underline, className = "" }) => {
    const Tag = tag;
    const classNames = className
      .concat(type ? ` text-${type}` : "")
      .concat(center ? " text-center" : "")
      .concat(underline ? " underline" : "");

    return (
      <Tag class={classNames} style={noMargin ? "margin: 0" : ""}>
        {/*// @ts-ignore*/}
        <Slot />
      </Tag>
    );
  }
);
