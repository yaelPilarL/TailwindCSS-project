import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type PortraitState = "default" | "hover" | "focused" | "pressed";

type PortraitProps = {
  children?: ReactNode;
  className?: string;
  state?: PortraitState;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles = `
  flex flex-col items-start justify-start
  w-[306px] h-auto
  gap-[8px] 
  pt-[24px] pr-[16px] py-[16px] pl-[16px] 
  rounded-[8px] border-2 border-neutral-70
  font-medium outline-offset-2
  text-neutral-70 text-body-medium/[24px]
`;

const stateStyles = {
  default: "bg-primary-1",
  hover: "bg-primary-5 shadow-elevation-4",
  focused: "bg-primary-1 shadow-elevation-4 border-4",
  pressed: "bg-primary-20",
};

export function Landscape({
  children,
  className,
  state = "default",
  ...buttonProps
}: PortraitProps) {
  const styles = twMerge(baseStyles, stateStyles[state], className);
  const defaultChildren = (
    <>
      <div className="flex items-center gap-2">
        <div className="relative w-[40px] h-[40px] flex items-center justify-center">
          <div className="absolute inset-0 bg-black rounded-full"></div>

          <FontAwesomeIcon
            icon={faClock}
            className="relative z-10 text-[24px] text-neutral-0"
          />
        </div>
        <span className="font-bold text-[24px] text-neutral-70">time</span>
      </div>

      <span className="text-neutral-70 text-[14px] leading-[20px] text-left  ml-[48px] w-[211]">
        At a specific time every day, week, or month.
      </span>
    </>
  );

  return (
    <button className={twMerge(styles, "flex-none")} {...buttonProps}>
      {children || defaultChildren}
    </button>
  );
}
