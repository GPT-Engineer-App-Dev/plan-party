import { Container, Text, VStack, Heading, Box, Button, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUsers, FaCog, FaTicketAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" mb={4}>Event Management Platform</Heading>
        <Text fontSize="xl" textAlign="center">Manage your events efficiently and effortlessly.</Text>
        <HStack spacing={4}>
          <Button as={Link} to="/create-event" leftIcon={<FaCalendarAlt />} colorScheme="teal" variant="solid" size="lg">
            Create Event
          </Button>
          <Button leftIcon={<FaUsers />} colorScheme="teal" variant="solid" size="lg">
            Manage Attendees
          </Button>
          <Button as={Link} to="/book-ticket" leftIcon={<FaTicketAlt />} colorScheme="teal" variant="solid" size="lg">
            Book Ticket
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