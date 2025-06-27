import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonState = "default" | "hover" | "focused" | "pressed" | "disabled";

type ButtonProps = {
  children?: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  state?: ButtonState;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children = "button",
  variant,
  className,
  state = "default",
  ...buttonProps
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center px-[32px] py-[12px] rounded-[8px] w-[122px] h-[48px] outline-offset-2 font-medium text-body-medium/[24px] text-neutral-70";

  let variantStyles = "";

  switch (variant) {
    case "primary":
      variantStyles = twMerge(
        "bg-primary-10 text-neutral-70 outline-neutral-70 border-neutral-70 border-2",
        state === "default" ? "shadow-elevation-4" : "",
        state === "hover" ? "bg-primary-5 shadow-elevation-4" : "",
        state === "focused"
          ? " bg-primary-5 shadow-elevation-4 text-neutral-70 outline-neutral-70 border-neutral-70 border-4"
          : "",
        state === "pressed" ? "bg-primary-20" : "",
        state === "disabled"
          ? "bg-neutral-60 text-neutral-40  outline-neutral-70 border-neutral-70 border-2"
          : "",
      );
      break;

    case "secondary":
      variantStyles = twMerge(
        "bg-neutral-0 text-neutral-70 outline-neutral-70 border-neutral-70 border-2",
        state === "default" ? "shadow-elevation-4" : "",
        state === "hover" ? "bg-neutral-20 shadow-elevation-4" : "",
        state === "focused"
          ? "bg-neutral-20 shadow-elevation-4 text-neutral-70 outline-neutral-70 border-neutral-70 border-4"
          : "",
        state === "pressed" ? "bg-neutral-40" : "",
        state === "disabled"
          ? "bg-neutral-60 text-neutral-40  outline-neutral-70 border-neutral-70 border-2"
          : "",
      );
      break;

    case "tertiary":
      variantStyles = twMerge(
        "bg-transparent border-2 border-transparent",
        state === "hover"
          ? "bg-neutral-20 shadow-elevation-4 text-neutral-70 outline-neutral-70 border-neutral-70 border-2"
          : "",
        state === "focused"
          ? "bg-neutral-20 shadow-elevation-4 text-neutral-70 outline-neutral-70 border-neutral-70 border-4"
          : "",
        state === "pressed"
          ? "bg-neutral-40 text-neutral-70 outline-neutral-70 border-neutral-70 border-2"
          : "",
        state === "disabled"
          ? "bg-neutral-60 text-neutral-40  outline-neutral-70 border-neutral-70 border-2"
          : "",
      );
      break;
  }

  return (
    <button
      className={twMerge(baseStyles, variantStyles, className)}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
