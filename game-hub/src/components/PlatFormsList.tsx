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
import { PF } from "../hooks/useGames";

interface Props {
  onSelectingPF: (selectedPF: PF) => void;
  selectedPlatFormPL: PF | null;
}

const PlatFormsList = ({ onSelectingPF, selectedPlatFormPL }: Props) => {
  const { data, errors, isLoading } = usePlatForms();

  if (errors) return null;

  return (
    <div>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {selectedPlatFormPL?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data.map((pf) => (
            <MenuItem
              onClick={() => onSelectingPF(pf)}
              value={pf.name}
              key={pf.id}
            >
              {pf.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default PlatFormsList;
