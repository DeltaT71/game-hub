import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
const SearchInput = () => {
  return (
    <InputGroup startElement={<BsSearch></BsSearch>}>
      <Input
        borderRadius={20}
        placeholder="Search Games"
        variant="subtle"
      ></Input>
    </InputGroup>
  );
};

export default SearchInput;
