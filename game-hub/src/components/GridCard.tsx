import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatfromIconList from "./PlatfromIconList";

interface Props {
  game: Game;
}

const GridCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatfromIconList platform={game.platforms.map((pf) => pf.platform)} />
      </CardBody>
    </Card>
  );
};

export default GridCard;
