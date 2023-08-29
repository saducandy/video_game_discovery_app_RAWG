import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { PF } from "../hooks/useGames";
import GridCard from "./GridCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genres } from "../hooks/useGenres";

interface Props {
  selectedGenreFromParent: Genres | null;
  selectedPlatF: PF | null;
}

const GameGrid = ({ selectedPlatF, selectedGenreFromParent }: Props) => {
  const { data, errors, isLoading } = useGames(
    selectedGenreFromParent,
    selectedPlatF
  );
  const skeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        padding={10}
      >
        {isLoading &&
          skeletonArray.map((item) => (
            <GameCardContainer key={item}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GridCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
