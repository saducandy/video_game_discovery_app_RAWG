import React from "react";
import useGenres, { Genres } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  Link,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";

interface Props {
  onSelectingGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenresList = ({ selectedGenre, onSelectingGenre }: Props) => {
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
            <Button
              onClick={() => onSelectingGenre(singleGenre)}
              variant={"link"}
              fontSize={"lg"}
              fontWeight={singleGenre.id === selectedGenre?.id ? "bold" : ""}
            >
              {singleGenre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
