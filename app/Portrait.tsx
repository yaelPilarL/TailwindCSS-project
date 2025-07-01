import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type LandscapeState = "default" | "hover" | "focused" | "pressed";

type LandscapeProps = {
  children?: ReactNode;
  className?: string;
  state?: LandscapeState;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles =
  "flex flex-col items-start " +
  "pl-[16px] pr-[24px] pt-[16px] pb-[16px] " +
  "rounded-[8px] border border-neutral-70 " +
  "w-[167px] h-[192px] " +
  "outline-offset-2 border-2 gap-4 ";

const stateStyles = {
  default: "bg-primary-1 shadow-elevation-4",
  hover: "bg-primary-5 shadow-elevation-4",
  focused: "bg-primary-1 shadow-elevation-4 border-4",
  pressed: "bg-primary-20",
};

export function Portrait({
  children,
  className,
  state = "default",
  ...buttonProps
}: LandscapeProps) {
  const styles = twMerge(
    baseStyles,
    stateStyles[state],
    className,
    "flex-none",
  );

  const defaultChildren = (
    <>
      <div className="relative w-[40px] h-[40px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black rounded-full"></div>

        <FontAwesomeIcon
          icon={faClock}
          className="relative z-10 text-[24px] text-neutral-0"
        />
      </div>

      <span className="font-bold text-[24px] text-neutral-70">time</span>

      <span className="text-neutral-70 text-[14px] leading-[20px] text-left w-full">
        At a specific time every day, week, or month.
      </span>
    </>
  );

  return (
    <button className={styles} {...buttonProps}>
      {children || defaultChildren}
    </button>
  );
}
