import React from "react";
import { AppLayout } from "./AppLayout";
import { Topbar } from "../Topbar";

export interface AppContainerProps {
  children: React.ReactNode;
}

export const AppContainer: React.FC<AppContainerProps> = (props) => {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <AppLayout topbar={<Topbar />}>{props.children}</AppLayout>
    </main>
  );
};