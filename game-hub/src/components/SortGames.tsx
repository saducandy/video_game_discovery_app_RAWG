import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

const SortGames = () => {
  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          OrderBy:Relevance
        </MenuButton>
        <MenuList>
          <MenuItem>one</MenuItem>
          <MenuItem>two</MenuItem>
          <MenuItem>three</MenuItem>
          <MenuItem>four</MenuItem>
          <MenuItem>five</MenuItem>
          <MenuItem>six</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default SortGames;
