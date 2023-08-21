import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/spider_logo_2.jpeg";

const NavBar = () => {
  return (
    <div>
      <HStack>
        <Image src={logo} boxSize={"60px"}></Image>
        <Text>Nav bar</Text>
      </HStack>
    </div>
  );
};

export default NavBar;
