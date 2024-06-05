import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, Heading } from "@chakra-ui/react";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle event creation goes here
    console.log("Event Created:", { eventName, eventDate, eventLocation, eventDescription });
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h2" size="xl" mb={4}>Create New Event</Heading>
        <Box as="form" width="100%" onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="event-name" isRequired>
              <FormLabel>Event Name</FormLabel>
              <Input 
                type="text" 
                value={eventName} 
                onChange={(e) => setEventName(e.target.value)} 
              />
            </FormControl>
            <FormControl id="event-date" isRequired>
              <FormLabel>Event Date</FormLabel>
              <Input 
                type="date" 
                value={eventDate} 
                onChange={(e) => setEventDate(e.target.value)} 
              />
            </FormControl>
            <FormControl id="event-location" isRequired>
              <FormLabel>Event Location</FormLabel>
              <Input 
                type="text" 
                value={eventLocation} 
                onChange={(e) => setEventLocation(e.target.value)} 
              />
            </FormControl>
            <FormControl id="event-description">
              <FormLabel>Event Description</FormLabel>
              <Textarea 
                value={eventDescription} 
                onChange={(e) => setEventDescription(e.target.value)} 
              />
            </FormControl>
            <Button colorScheme="teal" type="submit" size="lg" width="100%">Create Event</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreateEvent;