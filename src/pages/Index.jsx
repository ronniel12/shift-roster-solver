import { Container, Text, VStack, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Image src="/images/employee-scheduling.jpg" alt="Employee Scheduling" />
        <Text fontSize="2xl">Welcome to Employee Scheduling</Text>
        <Text>Manage your employee schedules efficiently and effectively.</Text>
      </VStack>
    </Container>
  );
};

export default Index;