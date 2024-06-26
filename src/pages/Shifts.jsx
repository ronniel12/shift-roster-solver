import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Shifts = () => {
  const [shifts, setShifts] = useState([{ name: "", startTime: new Date(), endTime: new Date(), location: "", requiredSkills: "" }]);

  const handleChange = (index, event) => {
    const values = [...shifts];
    if (event.target) {
      values[index][event.target.name] = event.target.value;
    } else {
      values[index][event.name] = event.value;
    }
    setShifts(values);
  };

  const handleAdd = () => {
    setShifts([...shifts, { name: "", startTime: new Date(), endTime: new Date(), location: "", requiredSkills: "" }]);
  };

  const handleRemove = (index) => {
    const values = [...shifts];
    values.splice(index, 1);
    setShifts(values);
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        {shifts.map((shift, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="lg" w="100%">
            <FormControl id={`name-${index}`} mb={2}>
              <FormLabel>Shift Name</FormLabel>
              <Input type="text" name="name" value={shift.name} onChange={(event) => handleChange(index, event)} />
            </FormControl>
            <FormControl id={`startTime-${index}`} mb={2}>
              <FormLabel>Start Time</FormLabel>
              <DatePicker selected={shift.startTime} onChange={(date) => handleChange(index, { name: "startTime", value: date })} showTimeSelect dateFormat="Pp" />
            </FormControl>
            <FormControl id={`endTime-${index}`} mb={2}>
              <FormLabel>End Time</FormLabel>
              <DatePicker selected={shift.endTime} onChange={(date) => handleChange(index, { name: "endTime", value: date })} showTimeSelect dateFormat="Pp" />
            </FormControl>
            <FormControl id={`location-${index}`} mb={2}>
              <FormLabel>Location</FormLabel>
              <Input type="text" name="location" value={shift.location} onChange={(event) => handleChange(index, event)} />
            </FormControl>
            <FormControl id={`requiredSkills-${index}`} mb={2}>
              <FormLabel>Required Skills</FormLabel>
              <Input type="text" name="requiredSkills" value={shift.requiredSkills} onChange={(event) => handleChange(index, event)} />
            </FormControl>
            <Button colorScheme="red" onClick={() => handleRemove(index)}>Remove</Button>
          </Box>
        ))}
        <Button colorScheme="teal" onClick={handleAdd}>Add Shift</Button>
      </VStack>
    </Box>
  );
};

export default Shifts;