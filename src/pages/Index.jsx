import { Container, Text, VStack, Heading, Box, Button, HStack } from "@chakra-ui/react";
import { FaCalendarAlt, FaUsers, FaCog } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" mb={4}>Event Management Platform</Heading>
        <Text fontSize="xl" textAlign="center">Manage your events efficiently and effortlessly.</Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaCalendarAlt />} colorScheme="teal" variant="solid" size="lg">
            View Events
          </Button>
          <Button leftIcon={<FaUsers />} colorScheme="teal" variant="solid" size="lg">
            Manage Attendees
          </Button>
          <Button leftIcon={<FaCog />} colorScheme="teal" variant="solid" size="lg">
            Settings
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;