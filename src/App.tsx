import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    // to create resposive layout, use templateAreas , lg
    <Grid templateAreas={{
      base: `"nav"" main"`,
      lg : `"nav nav" "aside main"`
    }}>
      <GridItem bg="tomato" gridArea="nav">
        nav
      </GridItem>
      {/*show above lg renders the aside component only when the screen size is larger than  or equal to lg */}
      <Show above="lg">
        <GridItem bg="papayawhip" gridArea="aside">
          aside
        </GridItem>
      </Show>
      <GridItem bg="lightgray" gridArea="main">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
