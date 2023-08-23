import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";

const GenresList = () => {
  const { data } = useGenres();

  return (
    <div>
      <List>
        {data.map((singleGenre) => (
          <ListItem key={singleGenre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={singleGenre.image_background}
              />
              <Text fontSize={"lg"}>{singleGenre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenresList;
