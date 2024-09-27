import { Box, Container, Flex, Grid } from "@radix-ui/themes";
import StatusFields from "./StatusFields";
import MappingComponents from "./MappingComponents";

const MainPage = () => {
  return (
    <Container size="1" mt="9">
      <Grid columns="2" gap="3" rows="repeat(2, 64px)">
        <Box height="500px">
          <StatusFields />
        </Box>
        <Box>
          <MappingComponents />
        </Box>
        <Box>
            
        </Box>
      </Grid>
    </Container>
  );
};

export default MainPage;
