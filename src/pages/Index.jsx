import { Container, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Employee Scheduling</Text>
        <Text>Manage your employee schedules efficiently and effectively.</Text>
        <Link to="/employees">Go to Employees</Link>
        <Link to="/shifts">Go to Shifts</Link>
        <Link to="/contracts">Go to Contracts</Link>
        <Link to="/roster-length">Go to Roster Length</Link>
      </VStack>
    </Container>
  );
};

export default Index;