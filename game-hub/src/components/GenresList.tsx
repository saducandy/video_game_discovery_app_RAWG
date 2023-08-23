import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";

const GenresList = () => {
  const { data, errors, isLoading } = useGenres();

  if (errors) return null;

  if (isLoading) return <Spinner />;

  return (
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
  );
};

export default GenresList;
