import { Button, Menu } from "@chakra-ui/react";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Order by: Relevance
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="">Relevance</Menu.Item>
          <Menu.Item value="">Date added</Menu.Item>
          <Menu.Item value="">Name</Menu.Item>
          <Menu.Item value="">Release date</Menu.Item>
          <Menu.Item value="">Popularity</Menu.Item>
          <Menu.Item value="">Average rating</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default SortSelector;
