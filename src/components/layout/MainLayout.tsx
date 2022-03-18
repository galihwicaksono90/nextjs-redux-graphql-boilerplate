import React from "react";
import { AppShell } from "@mantine/core";
import { Header } from "components/header";

interface Props {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
  return <AppShell header={<Header />}>{children}</AppShell>;
};
