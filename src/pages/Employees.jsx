import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";

const Employees = () => {
  const [employees, setEmployees] = useState([{ name: "", skillset: "", position: "", contract: "" }]);

  const handleChange = (index, event) => {
    const values = [...employees];
    values[index][event.target.name] = event.target.value;
    setEmployees(values);
  };

  const handleAdd = () => {
    setEmployees([...employees, { name: "", skillset: "", position: "", contract: "" }]);
  };

  const handleRemove = (index) => {
    const values = [...employees];
    values.splice(index, 1);
    setEmployees(values);
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        {employees.map((employee, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg" w="100%">
            <FormControl id={`name-${index}`} mb={2}>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" value={employee.name} onChange={(event) => handleChange(index, event)} />
            </FormControl>
            <FormControl id={`skillset-${index}`} mb={2}>
              <FormLabel>Skillset</FormLabel>
              <Input type="text" name="skillset" value={employee.skillset} onChange={(event) => handleChange(index, event)} />
            </FormControl>
            <FormControl id={`position-${index}`} mb={2}>
              <FormLabel>Position</FormLabel>
              <Input type="text" name="position" value={employee.position} onChange={(event) => handleChange(index, event)} />
            </FormControl>
            <FormControl id={`contract-${index}`} mb={2}>
              <FormLabel>Contract</FormLabel>
              <Input type="text" name="contract" value={employee.contract} onChange={(event) => handleChange(index, event)} />
            </FormControl>
            <Button colorScheme="red" onClick={() => handleRemove(index)}>Remove</Button>
          </Box>
        ))}
        <Button colorScheme="teal" onClick={handleAdd}>Add Employee</Button>
      </VStack>
    </Box>
  );
};

export default Employees;