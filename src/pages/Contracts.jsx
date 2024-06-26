import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

const Contracts = () => {
  const [contracts, setContracts] = useState([{ name: "", minHours: "", maxHours: "" }]);

  const handleContractChange = (index, event) => {
    const values = [...contracts];
    values[index][event.target.name] = event.target.value;
    setContracts(values);
  };

  const handleAddContract = () => {
    setContracts([...contracts, { name: "", minHours: "", maxHours: "" }]);
  };

  const handleRemoveContract = (index) => {
    const values = [...contracts];
    values.splice(index, 1);
    setContracts(values);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/contracts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contracts),
      });
      if (response.ok) {
        console.log('Contracts submitted successfully');
      } else {
        console.error('Failed to submit contracts');
      }
    } catch (error) {
      console.error('Error submitting contracts:', error);
    }
  };

  const handleUpdate = async (index) => {
    try {
      const response = await fetch(`/api/contracts/${index}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contracts[index]),
      });
      if (response.ok) {
        console.log('Contract updated successfully');
      } else {
        console.error('Failed to update contract');
      }
    } catch (error) {
      console.error('Error updating contract:', error);
    }
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        {contracts.map((contract, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg" w="100%">
            <FormControl id={`contract-name-${index}`} mb={2}>
              <FormLabel>Contract Name</FormLabel>
              <Input type="text" name="name" value={contract.name} onChange={(event) => handleContractChange(index, event)} />
            </FormControl>
            <FormControl id={`contract-minHours-${index}`} mb={2}>
              <FormLabel>Minimum Hours</FormLabel>
              <Input type="number" name="minHours" value={contract.minHours} onChange={(event) => handleContractChange(index, event)} />
            </FormControl>
            <FormControl id={`contract-maxHours-${index}`} mb={2}>
              <FormLabel>Maximum Hours</FormLabel>
              <Input type="number" name="maxHours" value={contract.maxHours} onChange={(event) => handleContractChange(index, event)} />
            </FormControl>
            <Button colorScheme="red" onClick={() => handleRemoveContract(index)}>Remove Contract</Button>
            <Button colorScheme="yellow" onClick={() => handleUpdate(index)}>Update</Button>
          </Box>
        ))}
        <Button colorScheme="teal" onClick={handleAddContract}>Add Contract</Button>
        <Button colorScheme="blue" onClick={handleSubmit}>Submit</Button>
      </VStack>
    </Box>
  );
};

export default Contracts;