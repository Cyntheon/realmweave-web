import React, {PropsWithChildren, useState} from "react";
import {AppShell} from "@mantine/core";
import Header from "./Header";
import SidebarDrawer from "./SidebarDrawer";

export default function AppLayout({children}: PropsWithChildren) {
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <AppShell
      header={
        <Header drawerOpened={drawerOpened} setDrawerOpened={setDrawerOpened} />
      }
    >
      <SidebarDrawer opened={drawerOpened} setOpened={setDrawerOpened} />
      {children}
    </AppShell>
  );
}
