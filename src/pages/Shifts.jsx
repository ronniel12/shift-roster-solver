import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, VStack, HStack } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Shifts = () => {
  const [shifts, setShifts] = useState([{ name: "", startTime: new Date(), endTime: new Date(), locations: [{ name: "", requiredSkills: [""] }] }]);

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
    setShifts([...shifts, { name: "", startTime: new Date(), endTime: new Date(), locations: [{ name: "", requiredSkills: [""] }] }]);
  };

  const handleRemove = (index) => {
    const values = [...shifts];
    values.splice(index, 1);
    setShifts(values);
  };

  const handleAddLocation = (index) => {
    const values = [...shifts];
    values[index].locations.push({ name: "", requiredSkills: [""] });
    setShifts(values);
  };

  const handleRemoveLocation = (shiftIndex, locationIndex) => {
    const values = [...shifts];
    values[shiftIndex].locations.splice(locationIndex, 1);
    setShifts(values);
  };

  const handleLocationChange = (shiftIndex, locationIndex, event) => {
    const values = [...shifts];
    values[shiftIndex].locations[locationIndex].name = event.target.value;
    setShifts(values);
  };

  const handleAddSkill = (shiftIndex, locationIndex) => {
    const values = [...shifts];
    values[shiftIndex].locations[locationIndex].requiredSkills.push("");
    setShifts(values);
  };

  const handleRemoveSkill = (shiftIndex, locationIndex, skillIndex) => {
    const values = [...shifts];
    values[shiftIndex].locations[locationIndex].requiredSkills.splice(skillIndex, 1);
    setShifts(values);
  };

  const handleSkillChange = (shiftIndex, locationIndex, skillIndex, event) => {
    const values = [...shifts];
    values[shiftIndex].locations[locationIndex].requiredSkills[skillIndex] = event.target.value;
    setShifts(values);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/shifts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(shifts),
      });
      if (response.ok) {
        console.log('Shifts submitted successfully');
      } else {
        console.error('Failed to submit shifts');
      }
    } catch (error) {
      console.error('Error submitting shifts:', error);
    }
  };

  const handleUpdate = async (index) => {
    try {
      const response = await fetch(`/api/shifts/${index}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(shifts[index]),
      });
      if (response.ok) {
        console.log('Shift updated successfully');
      } else {
        console.error('Failed to update shift');
      }
    } catch (error) {
      console.error('Error updating shift:', error);
    }
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
              <DatePicker selected={shift.startTime} onChange={(date) => handleChange(index, { name: "startTime", value: date })} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />
            </FormControl>
            <FormControl id={`endTime-${index}`} mb={2}>
              <FormLabel>End Time</FormLabel>
              <DatePicker selected={shift.endTime} onChange={(date) => handleChange(index, { name: "endTime", value: date })} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />
            </FormControl>
            {shift.locations.map((location, locIndex) => (
              <Box key={locIndex} mb={4} p={4} borderWidth="1px" borderRadius="lg">
                <HStack mb={2}>
                  <FormControl id={`location-${index}-${locIndex}`}>
                    <FormLabel>Location</FormLabel>
                    <Input type="text" value={location.name} onChange={(event) => handleLocationChange(index, locIndex, event)} />
                  </FormControl>
                  <Button colorScheme="red" onClick={() => handleRemoveLocation(index, locIndex)}>Remove Location</Button>
                </HStack>
                {location.requiredSkills.map((skill, skillIndex) => (
                  <HStack key={skillIndex} mb={2}>
                    <FormControl id={`skill-${index}-${locIndex}-${skillIndex}`}>
                      <FormLabel>Required Skill</FormLabel>
                      <Input type="text" value={skill} onChange={(event) => handleSkillChange(index, locIndex, skillIndex, event)} />
                    </FormControl>
                    <Button colorScheme="red" onClick={() => handleRemoveSkill(index, locIndex, skillIndex)}>Remove Skill</Button>
                  </HStack>
                ))}
                <Button colorScheme="teal" onClick={() => handleAddSkill(index, locIndex)}>Add Skill</Button>
              </Box>
            ))}
            <Button colorScheme="teal" onClick={() => handleAddLocation(index)}>Add Location</Button>
            <Button colorScheme="yellow" onClick={() => handleUpdate(index)}>Update</Button>
            <Button colorScheme="red" onClick={() => handleRemove(index)}>Remove Shift</Button>
          </Box>
        ))}
        <Button colorScheme="teal" onClick={handleAdd}>Add Shift</Button>
        <Button colorScheme="blue" onClick={handleSubmit}>Submit</Button>
      </VStack>
    </Box>
  );
};

export default Shifts;