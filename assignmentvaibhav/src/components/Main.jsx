import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Box, Container, Flex, Grid, Heading, Text } from "@radix-ui/themes";

const MappingComponent = () => {
  const [fields, setFields] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});

  // Function to handle adding new field mappings
  const addFieldMapping = () => {
    setFields([...fields, { key: "", value: "" }]);
  };

  // Dropdown Options
  const options = [
    "List 1",
    "List 2",
    "List 3",
    "List 4",
    "List 5",
    "List 6",
    "List 7",
    "List 8",
    "List 9",
    "List 10",
    "List 11",
    "List 12",
    "List 13",
    "List 14",
  ];

  //Modify the onSelect handler to update
  const handleDropdownSelect = (selectedOption) => {
    setFields([...fields, { key: selectedOption, value: "" }]);
    setSelectedOptions({
      ...selectedOptions,
      [selectedOption]: true, // mark this option as selected
    });
  };
  //Jason Response
  const handleSave = () => {
    const jsonResponse = fields.reduce((acc, field) => {
      acc[field.key] = field.value;
      return acc;
    }, {});
    console.log(JSON.stringify(jsonResponse, null, 2));
    alert(JSON.stringify(jsonResponse, null, 2)); // Display the JSON response
  };

  return (
    <Container size="4">
      <Grid columns="2" gap="3" width="auto">
        <Flex direction="row" justify="center" align="center">
          {/* Side Left */}
          <Box>
            <Flex direction="row" justify="start" align="center">
              <Heading>Status Fields</Heading>
            </Flex>
            <Flex direction="column">
              {fields.map((field, index) => (
                <div key={index}>
                  <input
                    type="text"
                    value={field.key}
                    readOnly // Make this field read-only as it comes from dropdown
                  />
                  <input
                    type="text"
                    placeholder={`Value for ${field.key}`}
                    value={field.value}
                    onChange={(e) => {
                      const newFields = [...fields];
                      newFields[index].value = e.target.value;
                      setFields(newFields);
                    }}
                  />
                </div>
              ))}
            </Flex>
          </Box>
          {/* Side Right */}
          <Box>
            <DropdownMenu.Root>
              <Flex direction="row" justify="end" align="center">
                <Heading>Default Mapping</Heading>
              </Flex>
              <DropdownMenu.Trigger>
                <PlusIcon />
              </DropdownMenu.Trigger>
              
              

              <DropdownMenu.Content>
                {options
                  .filter((option) => !selectedOptions[option]) // Exclude already selected options
                  .map((option) => (
                    <DropdownMenu.Item
                      key={option}
                      onSelect={() => handleDropdownSelect(option)}
                    >
                      {option}
                    </DropdownMenu.Item>
                  ))}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
            <button onClick={handleSave}>Save</button>
          </Box>
        </Flex>
      </Grid>
    </Container>
  );
};

export default MappingComponent;
