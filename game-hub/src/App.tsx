import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genres } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

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
        <GameGrid selectedGenreFromParent={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
