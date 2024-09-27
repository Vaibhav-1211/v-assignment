import { DotsHorizontalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Box, Flex, Heading, IconButton, TextField } from "@radix-ui/themes";

const StatusFields = () => {
  return (
    <>
      <Heading>StatusFields</Heading>
      <Flex direction="column" gap="3" maxWidth="200px">
        <Box maxWidth="300px">
          <TextField.Root
            placeholder="Search the docs…"
            size="3"
            value="email"
            mb="3"
          ></TextField.Root>
        </Box>
      </Flex>
    </>
  );
};

export default StatusFields;
