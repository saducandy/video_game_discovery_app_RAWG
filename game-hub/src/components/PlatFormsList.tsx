import React from "react";
import usePlatForms from "../hooks/usePlatForms";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const PlatFormsList = () => {
  const { data, errors, isLoading } = usePlatForms();

  if (errors) return null;

  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          PlatForms
        </MenuButton>
        <MenuList>
          {data.map((pf) => (
            <MenuItem value={pf.name} key={pf.id}>
              {pf.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default PlatFormsList;
