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

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/roster-length', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rosterLengths),
      });
      if (response.ok) {
        console.log('Roster lengths submitted successfully');
      } else {
        console.error('Failed to submit roster lengths');
      }
    } catch (error) {
      console.error('Error submitting roster lengths:', error);
    }
  };

  const handleUpdate = async (index) => {
    try {
      const response = await fetch(`/api/roster-length/${index}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rosterLengths[index]),
      });
      if (response.ok) {
        console.log('Roster length updated successfully');
      } else {
        console.error('Failed to update roster length');
      }
    } catch (error) {
      console.error('Error updating roster length:', error);
    }
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
            <Button colorScheme="yellow" onClick={() => handleUpdate(index)}>Update</Button>
          </Box>
        ))}
        <Button colorScheme="teal" onClick={handleAddRosterLength}>Add Roster Length</Button>
        <Button colorScheme="blue" onClick={handleSubmit}>Submit</Button>
      </VStack>
    </Box>
  );
};

export default RosterLength;