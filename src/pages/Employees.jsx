import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, HStack } from "@chakra-ui/react";

const Employees = () => {
  const [employees, setEmployees] = useState([{ name: "", skillsets: [""], position: "", contract: "" }]);

  const handleEmployeeChange = (index, event) => {
    const values = [...employees];
    values[index][event.target.name] = event.target.value;
    setEmployees(values);
  };

  const handleSkillsetChange = (empIndex, skillIndex, event) => {
    const values = [...employees];
    values[empIndex].skillsets[skillIndex] = event.target.value;
    setEmployees(values);
  };

  const handleAddEmployee = () => {
    setEmployees([...employees, { name: "", skillsets: [""], position: "", contract: "" }]);
  };

  const handleRemoveEmployee = (index) => {
    const values = [...employees];
    values.splice(index, 1);
    setEmployees(values);
  };

  const handleAddSkillset = (index) => {
    const values = [...employees];
    values[index].skillsets.push("");
    setEmployees(values);
  };

  const handleRemoveSkillset = (empIndex, skillIndex) => {
    const values = [...employees];
    values[empIndex].skillsets.splice(skillIndex, 1);
    setEmployees(values);
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        {employees.map((employee, empIndex) => (
          <Box key={empIndex} p={4} borderWidth="1px" borderRadius="lg" w="100%">
            <FormControl id={`name-${empIndex}`} mb={2}>
              <FormLabel>Name</FormLabel>
              <Input type="text" name="name" value={employee.name} onChange={(event) => handleEmployeeChange(empIndex, event)} />
            </FormControl>
            {employee.skillsets.map((skillset, skillIndex) => (
              <HStack key={skillIndex} mb={2}>
                <FormControl id={`skillset-${empIndex}-${skillIndex}`}>
                  <FormLabel>Skillset</FormLabel>
                  <Input type="text" value={skillset} onChange={(event) => handleSkillsetChange(empIndex, skillIndex, event)} />
                </FormControl>
                <Button colorScheme="red" onClick={() => handleRemoveSkillset(empIndex, skillIndex)}>Remove Skillset</Button>
              </HStack>
            ))}
            <Button colorScheme="teal" onClick={() => handleAddSkillset(empIndex)}>Add Skillset</Button>
            <FormControl id={`position-${empIndex}`} mb={2}>
              <FormLabel>Position</FormLabel>
              <Input type="text" name="position" value={employee.position} onChange={(event) => handleEmployeeChange(empIndex, event)} />
            </FormControl>
            <FormControl id={`contract-${empIndex}`} mb={2}>
              <FormLabel>Contract</FormLabel>
              <Input type="text" name="contract" value={employee.contract} onChange={(event) => handleEmployeeChange(empIndex, event)} />
            </FormControl>
            <Button colorScheme="red" onClick={() => handleRemoveEmployee(empIndex)}>Remove Employee</Button>
          </Box>
        ))}
        <Button colorScheme="teal" onClick={handleAddEmployee}>Add Employee</Button>
      </VStack>
    </Box>
  );
};

export default Employees;