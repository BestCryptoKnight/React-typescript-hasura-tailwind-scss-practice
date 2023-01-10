import { MouseEventHandler } from "react";
import { ReactNode } from "react";

type PaginationButtonProps = {
  children: ReactNode;
  isNavigationBtn?: boolean;
  isActive?: boolean;
  onClick: MouseEventHandler;
};

const PaginationButton = ({
  children,
  isNavigationBtn = false,
  isActive = false,
  onClick,
}: PaginationButtonProps) => {
  const backgroundColor = isNavigationBtn || isActive ? "pageBg1" : "pageBg2";
  const textColor = isNavigationBtn ? "black" : "white";
  const opacity = isActive ? 20 : 100;
  const borderColor = isNavigationBtn || isActive ? "#EED5A5" : "#575764";
  return (
    <div
      onClick={onClick}
      className={`bg-${backgroundColor} w-10 h-10 flex justify-center items-center text-xl text-${textColor} m-1 bg-opacity-${opacity} border-[${borderColor}] border-2 cursor-pointer`}
    >
      {children}
    </div>
  );
};

export default PaginationButton;
