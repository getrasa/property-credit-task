import React, { PropsWithChildren, ReactNode } from "react";

export interface AppLayoutProps extends PropsWithChildren {
  topbar: ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ topbar, children }) => {
  return (
    <div className="w-full flex flex-col">
      {topbar}
      <div className="p-16">{children}</div>
    </div>
  );
};
