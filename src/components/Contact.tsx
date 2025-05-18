import { Box, Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, Text, HStack, Icon } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_k8tv1nc', 'template_s7ow6qd', form.current, {
        publicKey: 'B9ro17Ez0WtHGupyz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Email sent successfully');
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Email sent failed');
        },
      );
  };

  return (
    <Box 
      id="contact" 
      py={20} 
      bg="gray.50"
      backgroundImage="url('/src/assets/your-image.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      position="relative"
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(255, 255, 255, 0.9)"
        zIndex={1}
      />
      <Container maxW="1200px" position="relative" zIndex={2}>
        <VStack spacing={12}>
          <Heading>Get In Touch</Heading>
          <Box w="100%" maxW="600px">
            <form ref={form} onSubmit={sendEmail}>
              <VStack spacing={6}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" placeholder="Your name" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" name='user_email' placeholder="Your email" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea name="message" placeholder="Your message" rows={6} />
                </FormControl>
                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  w="100%"
                  _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
          <VStack spacing={4}>
            <Text>Connect with me on social media</Text>
            <HStack spacing={6}>
              <Icon as={FaGithub} w={6} h={6} cursor="pointer" _hover={{ color: 'blue.500' }} />
              <Icon as={FaLinkedin} w={6} h={6} cursor="pointer" _hover={{ color: 'blue.500' }} />
              <Icon as={FaTwitter} w={6} h={6} cursor="pointer" _hover={{ color: 'blue.500' }} />
            </HStack>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Contact 