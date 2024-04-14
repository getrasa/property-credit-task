import React from "react";

export interface DividerProps {
  orientation?: "horizontal" | "vertical";
}

export const Divider: React.FC<DividerProps> = ({ orientation='horizontal' }) => {
  const isHorizontal = orientation === "horizontal";
  const border = isHorizontal ? "border-t-2" : "border-l-2";
  const expand = isHorizontal ? "w-full" : "min-h-full";

  return <div className={`${border} ${expand}`}></div>;
};
