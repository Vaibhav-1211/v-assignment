import { Button, DropdownMenu, Heading } from "@radix-ui/themes";

const MappingComponents = () => {
  return (
    <DropdownMenu.Root>
    <Heading>StatusFields</Heading>
      <DropdownMenu.Trigger>
        <Button variant="soft">
          Email
          <DropdownMenu.TriggerIcon />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Item>Edit</DropdownMenu.Item>
        <DropdownMenu.Item>Remove</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default MappingComponents;
