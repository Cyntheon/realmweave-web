import React, {Dispatch, SetStateAction} from "react";
import {Burger, Header as MantineHeader} from "@mantine/core";

interface Props {
  drawerOpened: boolean;
  setDrawerOpened: Dispatch<SetStateAction<boolean>>;
}

export default function Header({drawerOpened, setDrawerOpened}: Props) {
  return (
    <MantineHeader height={32}>
      <Burger
        opened={drawerOpened}
        onClick={() => setDrawerOpened((prev) => !prev)}
      />
    </MantineHeader>
  );
}
