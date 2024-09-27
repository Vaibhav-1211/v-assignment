import { PlusCircledIcon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  DropdownMenu,
} from "@radix-ui/themes";
import { useState } from "react";

const initialFields = [
  "email",
  "contact_id",
  "created_date",
  "global_acq_date",
  "last_sent",
  "last_opened",
  "last_clicked",
];
const initialMappings = [
  "Email",
  "id",
  "date created",
  "global date",
  "last sent",
  "last opened",
  "last clicked",
];

export default function FieldMapping() {
  const [lists, setLists] = useState([
    { name: "Default Mapping", fields: initialMappings },
  ]);
  const [selectedOptions, setSelectedOptions] = useState({});

  const addList = () => {
    const newListName = `List ${lists.length + 1}`;
    setLists([
      ...lists,
      { name: newListName, fields: Array(initialFields.length).fill("") },
    ]);
  };

  const handleFieldChange = (listIndex, fieldIndex, value) => {
    const newLists = [...lists];
    newLists[listIndex].fields[fieldIndex] = value;
    setLists(newLists);

    // Update selected options
    setSelectedOptions((prev) => ({
      ...prev,
      [`${listIndex}-${fieldIndex}`]: value,
    }));
  };

  const addNewFieldMapping = () => {
    setLists(
      lists.map((list) => ({
        ...list,
        fields: [...list.fields, ""],
      }))
    );
    initialFields.push("");
  };

  const getAvailableOptions = (listIndex, fieldIndex) => {
    const allOptions = [
      "Email",
      "id",
      "date created",
      "global date",
      "last sent",
      "last opened",
      "last clicked",
    ];
    return allOptions.filter(
      (option) =>
        !Object.entries(selectedOptions).some(
          ([key, value]) =>
            value === option && key !== `${listIndex}-${fieldIndex}`
        )
    );
  };

  const handleSave = () => {
    const result = lists.reduce((acc, list, index) => {
      acc[list.name] = {};
      initialFields.forEach((field, i) => {
        if (field) {
          acc[list.name][field] = list.fields[i];
        }
      });
      return acc;
    }, {});
    console.log(JSON.stringify(result, null, 2));
  };

  return (
    <Container size="3" mt="6">
      <Flex direction="row" justify="start">
        <Box width="20%">
          <Heading>Status Fields</Heading>
          {initialFields.map((field, index) => (
            <Box key={index} mb="2" p="2" style={{ border: "border rounded" }}>
              {field}
            </Box>
          ))}
          <Button onClick={addNewFieldMapping} variant="ghost" mx="1">
            <PlusCircledIcon /> New Field Mapping
          </Button>
        </Box>
        {lists.map((list, listIndex) => (
          <Box key={listIndex} width="auto" mx="3">
            <Flex justify="between" align="center">
              <Heading as="h2" mb="2" weight="bold">
                {list.name}
                {listIndex === 0 && (
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                      <Button variant="surface" mx="3">
                        <PlusCircledIcon />
                      </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      {Array.from({ length: 14 }, (_, i) => i + 1).map(
                        (num) => (
                          <DropdownMenu.Item key={num} onClick={addList}>
                            List {num.toString().padStart(2, "0")}
                          </DropdownMenu.Item>
                        )
                      )}
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                )}
              </Heading>
            </Flex>
            {list.fields.map((field, fieldIndex) => (
              <Box key={fieldIndex} mb="2" className="mb-2">
                <select
                  value={field}
                  onChange={(e) =>
                    handleFieldChange(listIndex, fieldIndex, e.target.value)
                  }
                  style={{ width: "100%" }}
                >
                  <option value="">Select...</option>
                  {getAvailableOptions(listIndex, fieldIndex).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </Box>
            ))}
          </Box>
        ))}
      </Flex>
      <Flex justify="center">
        <Button variant="solid" onClick={handleSave} size="3">
          Save
        </Button>
      </Flex>
    </Container>
  );
}
