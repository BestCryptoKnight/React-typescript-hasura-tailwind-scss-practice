import React from "react";
import { MouseEventHandler } from "react";
import { ReactNode } from "react";

type PaginationButtonProps = {
  children: ReactNode;
  isNavigationBtn?: boolean;
  isActive?: boolean;
  onClick: MouseEventHandler;
  disable?: boolean;
};

const PaginationButton = ({
  children,
  isNavigationBtn = false,
  isActive = false,
  onClick,
  disable,
}: PaginationButtonProps) => {
  const backgroundColor = isNavigationBtn || isActive ? "pageBg1" : "pageBg2";
  const textColor = isNavigationBtn ? "black" : "white";
  const opacity = isActive ? 20 : 100;
  const borderColor = isNavigationBtn || isActive ? "border1" : "border2";
  const pointerDisable = disable ? "cursor-default" : "cursor-pointer";
  return (
    <div
      onClick={onClick}
      className={`bg-${backgroundColor} w-10 h-10 flex justify-center items-center text-xl text-${textColor} m-1 bg-opacity-${opacity} border-${borderColor} border ${pointerDisable}`}
    >
      {children}
    </div>
  );
};

export default PaginationButton;
