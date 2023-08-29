import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";
import PlatFormsList from "./components/PlatFormsList";
import { PF } from "./hooks/useGames";
import SortGames from "./components/SortGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);
  const [selectedPF, setSelectedPF] = useState<PF | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={5} area={"aside"}>
          {
            <GenresList
              selectedGenre={selectedGenre}
              onSelectingGenre={(selectedGenreFromGenreList) =>
                setSelectedGenre(selectedGenreFromGenreList)
              }
            />
          }
        </GridItem>
      </Show>

      <GridItem area={"main"}>
        <HStack paddingLeft={9} spacing={4}>
          <PlatFormsList
            selectedPlatFormPL={selectedPF}
            onSelectingPF={(pf) => setSelectedPF(pf)}
          />
          <SortGames />
        </HStack>
        <GameGrid
          selectedPlatF={selectedPF}
          selectedGenreFromParent={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
