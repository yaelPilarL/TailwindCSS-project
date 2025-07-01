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

const baseStyles =
  "flex items-center justify-center px-[32px] py-[12px] rounded-[8px] w-[122px] h-[48px] outline-offset-2 font-medium text-body-medium/[24px] text-neutral-70";

const variantBase = {
  primary: "bg-primary-10 text-neutral-70 border-neutral-70 border-2",
  secondary: "bg-neutral-0 text-neutral-70 border-neutral-70 border-2",
  tertiary: "bg-transparent border-2 border-transparent",
};

const stateStyles = {
  primary: {
    default: "shadow-elevation-4",
    hover: "bg-primary-5 shadow-elevation-4",
    focused: "bg-primary-5 shadow-elevation-4 border-4",
    pressed: "bg-primary-20",
    disabled: "bg-neutral-60 text-neutral-40",
  },
  secondary: {
    default: "shadow-elevation-4",
    hover: "bg-neutral-20 shadow-elevation-4",
    focused: "bg-neutral-20 shadow-elevation-4 border-4",
    pressed: "bg-neutral-40",
    disabled: "bg-neutral-60 text-neutral-40",
  },
  tertiary: {
    default: "",
    hover: "bg-neutral-20 shadow-elevation-4 border-neutral-70 border-2",
    focused: "bg-neutral-20 shadow-elevation-4 border-neutral-70 border-4",
    pressed: "bg-neutral-40 border-neutral-70 border-2",
    disabled: "bg-neutral-60 text-neutral-40 border-neutral-70 border-2",
  },
};

export function Button({
  children = (
    <>
      <span>button</span>
    </>
  ),
  variant = "primary",
  className,
  state = "default",
  ...buttonProps
}: ButtonProps) {
  const styles = twMerge(
    baseStyles,
    variantBase[variant],
    stateStyles[variant][state],
    className,
  );

  return (
    <button className={styles} {...buttonProps}>
      {children}
    </button>
  );
}
