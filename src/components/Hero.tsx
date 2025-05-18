import { Box, Container, Heading, Text, Button, VStack } from '@chakra-ui/react'
import { Link } from 'react-scroll'
import me from '../assets/me.jpg'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const MotionHeading = motion(Heading)
const MotionText = motion(Text)

interface TypewriterTextProps {
  text: string;
  delay?: number;
}

const TypewriterText = ({ text, delay = 0 }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < text.length) {
        // Typing
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      } else if (isDeleting && currentIndex > 0) {
        // Deleting
        setDisplayText(text.slice(0, currentIndex - 1))
        setCurrentIndex(currentIndex - 1)
      } else {
        // Change direction
        setIsDeleting(!isDeleting)
        if (!isDeleting) {
          // Wait before starting to delete
          setTimeout(() => {}, 2000)
        }
      }
    }, isDeleting ? 50 : 150) // Faster deletion, slower typing

    return () => clearTimeout(timeout)
  }, [currentIndex, isDeleting, text])

  const renderText = () => {
    const parts = text.split('AAYU GAMLATH')
    if (parts.length === 1) return displayText

    const firstPart = displayText.slice(0, parts[0].length)
    const secondPart = displayText.slice(parts[0].length)

    return (
      <>
        <span style={{ color: 'black' }}>{firstPart}</span>
        <span style={{ color: '#3182CE' }}>{secondPart}</span>
      </>
    )
  }

  return (
    <MotionText
      component="span"
      fontSize={{ base: '3xl', md: '5xl' }}
      fontWeight="bold"
      lineHeight="1.2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {renderText()}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        |
      </motion.span>
    </MotionText>
  )
}

const Hero = () => {
  return (
    <Box
      id="home"
      minH="100vh"
      display="flex"
      alignItems="center"
      bg="gray.50"
      backgroundImage={`url(${me})`}
      backgroundSize="120%"
      backgroundPosition="75% 15%"
      backgroundRepeat="no-repeat"
      position="relative"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="rgba(255, 255, 255, 0.65)"
        zIndex={1}
      />
      <Container maxW="1200px" position="relative" zIndex={2}>
        <VStack spacing={6} align="center" textAlign="center">
          <Heading
            fontSize={{ base: '3xl', md: '5xl' }}
            fontWeight="bold"
            lineHeight="1.2"
          >
            <TypewriterText text="Hi, I'm AAYU GAMLATH" delay={0} />
          </Heading>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.600" maxW="600px">
            A passionate Full Stack Developer crafting beautiful and functional web experiences
          </Text>
          <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>
            <Button
              size="lg"
              colorScheme="blue"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
            >
              View My Work
            </Button>
          </Link>
        </VStack>
      </Container>
    </Box>
  )
}

export default Hero 