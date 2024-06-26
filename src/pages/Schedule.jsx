import { useState, useEffect } from "react";
import { Box, Button, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    fetchSchedule();
  }, []);

  const fetchSchedule = async () => {
    try {
      const response = await fetch('/api/schedule');
      const data = await response.json();
      setSchedule(data);
    } catch (error) {
      console.error('Error fetching schedule:', error);
    }
  };

  const handleSolve = async () => {
    try {
      const response = await fetch('/api/schedule/solve', {
        method: 'POST',
      });
      if (response.ok) {
        fetchSchedule();
      } else {
        console.error('Failed to solve schedule');
      }
    } catch (error) {
      console.error('Error solving schedule:', error);
    }
  };

  return (
    <Box p={4}>
      <Button colorScheme="blue" onClick={handleSolve}>Solve</Button>
      <Table variant="simple" mt={4}>
        <Thead>
          <Tr>
            <Th>Employee</Th>
            {/* Add date headers dynamically */}
            {schedule.length > 0 && Object.keys(schedule[0].tasks).map((date) => (
              <Th key={date}>{date}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {schedule.map((employee) => (
            <Tr key={employee.name}>
              <Td>{employee.name}</Td>
              {/* Add tasks dynamically */}
              {Object.keys(employee.tasks).map((date) => (
                <Td key={date}>
                  {employee.tasks[date].map((task, index) => (
                    <Box key={index}>
                      {task.location} ({task.startTime} - {task.endTime})
                    </Box>
                  ))}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Schedule;