import React, { PropsWithChildren } from "react";

export interface TitleProps extends PropsWithChildren {
  size: "small" | "medium" | "large";
}

export const Title: React.FC<TitleProps> = ({ children, size='medium' }) => {
  const titleSize =
    size === "small" ? "text-sm" : size === "medium" ? "text-md" : "text-lg";

  return <label className={`${titleSize} font-semibold`}>{children}</label>;
};
