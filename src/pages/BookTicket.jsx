import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Heading, Select } from "@chakra-ui/react";

const BookTicket = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle ticket booking goes here
    console.log("Ticket Booked:", { name, email, quantity });
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h2" size="xl" mb={4}>Book Your Ticket</Heading>
        <Box as="form" width="100%" onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </FormControl>
            <FormControl id="quantity" isRequired>
              <FormLabel>Ticket Quantity</FormLabel>
              <Select 
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)} 
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>{num + 1}</option>
                ))}
              </Select>
            </FormControl>
            <Button colorScheme="teal" type="submit" size="lg" width="100%">Book Ticket</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default BookTicket;