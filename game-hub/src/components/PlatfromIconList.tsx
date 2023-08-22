import React from "react";
import { PF } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platform: PF[];
}

const PlatfromIconList = ({ platform }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    playstation5: FaPlaystation,
    playstation4: FaPlaystation,
    playstation3: FaPlaystation,
    playstation2: FaPlaystation,
    playstation1: FaPlaystation,
    "ps-vita": FaPlaystation,
    pc: FaWindows,
    xbox: FaXbox,
    "xbox-series-x": FaXbox,
    "xbox-old": FaXbox,
    xbox360: FaXbox,
    "xbox-one": FaXbox,
    nintendo: SiNintendo,
    "nintendo-switch": SiNintendo,
    macos: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };

  return (
    <HStack marginY={"10px"}>
      {platform.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={"gray.500"} />
      ))}
    </HStack>
  );
};

export default PlatfromIconList;
