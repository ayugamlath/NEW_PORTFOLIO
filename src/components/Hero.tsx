import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MotionBox = motion(Box);

interface TypewriterTextProps {
  text: string;
}

const TypewriterText = ({ text }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <Text fontSize="xl">{displayText}</Text>;
};

const Hero = () => {
  return (
    <Box id="home" minH="100vh" display="flex" alignItems="center" bg="gray.50">
      <Container maxW="1200px">
        <VStack spacing={8} align="start">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading size="2xl">Hi, I'm AAYU GAMLATH</Heading>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <TypewriterText text="A Full Stack Developer passionate about creating beautiful and functional web applications." />
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <HStack spacing={4}>
              <Button colorScheme="blue" size="lg">
                View My Work
              </Button>
              <Button variant="outline" size="lg">
                Contact Me
              </Button>
            </HStack>
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <HStack spacing={6}>
              <Icon
                as={FaGithub}
                w={6}
                h={6}
                cursor="pointer"
                _hover={{ color: "blue.500" }}
              />
              <Icon
                as={FaLinkedin}
                w={6}
                h={6}
                cursor="pointer"
                _hover={{ color: "blue.500" }}
              />
              <Icon
                as={FaTwitter}
                w={6}
                h={6}
                cursor="pointer"
                _hover={{ color: "blue.500" }}
              />
            </HStack>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default Hero;
