import {Drawer} from "@mantine/core";
import React, {Dispatch, SetStateAction} from "react";

interface Props {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

export default function SidebarDrawer({opened, setOpened}: Props) {
  return (
    <Drawer
      opened={opened}
      onClose={() => setOpened(false)}
      closeOnClickOutside
      transition="slide-right"
      transitionDuration={400}
    />
  );
}
