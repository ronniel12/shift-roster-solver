import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

const RosterLength = () => {
  const [rosterLengths, setRosterLengths] = useState([{ length: "" }]);

  const handleRosterLengthChange = (index, event) => {
    const values = [...rosterLengths];
    values[index][event.target.name] = event.target.value;
    setRosterLengths(values);
  };

  const handleAddRosterLength = () => {
    setRosterLengths([...rosterLengths, { length: "" }]);
  };

  const handleRemoveRosterLength = (index) => {
    const values = [...rosterLengths];
    values.splice(index, 1);
    setRosterLengths(values);
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        {rosterLengths.map((rosterLength, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg" w="100%">
            <FormControl id={`rosterLength-${index}`} mb={2}>
              <FormLabel>Roster Length (days)</FormLabel>
              <Input type="number" name="length" value={rosterLength.length} onChange={(event) => handleRosterLengthChange(index, event)} />
            </FormControl>
            <Button colorScheme="red" onClick={() => handleRemoveRosterLength(index)}>Remove Roster Length</Button>
          </Box>
        ))}
        <Button colorScheme="teal" onClick={handleAddRosterLength}>Add Roster Length</Button>
      </VStack>
    </Box>
  );
};

export default RosterLength;