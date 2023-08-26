import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatfromIconList from "./PlatfromIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GridCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"md"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatfromIconList
            platform={game.platforms.map((pf) => pf.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GridCard;
