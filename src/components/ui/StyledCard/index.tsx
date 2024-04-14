import React, { ReactNode } from "react";
import { Card } from "primereact/card";
import { Divider } from "../Divider";

export interface CardProps {
  children: React.ReactNode;
  title?: ReactNode;
  titleDivider?: boolean;
}

export const StyledCard: React.FC<CardProps> = ({
  children,
  title,
  titleDivider = false,
}) => {
  return (
    <Card
      title={<div className="px-6 py-4">{title}</div>}
      style={{ width: "100%" }}
      className="border rounded-md shadow-md bg-white h-full"
    >
      {titleDivider && <Divider orientation="horizontal" />}
      <div className="px-6 pb-4">{children}</div>
    </Card>
  );
};
