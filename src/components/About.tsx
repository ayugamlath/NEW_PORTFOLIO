import { Box, Container, Heading, Text, SimpleGrid, VStack, Image } from '@chakra-ui/react'
import ayu from '../assets/ayu.jpg'

const About = () => {
  return (
    <Box id="about" py={20} bg="white">
      <Container maxW="1200px">
        <VStack spacing={12}>
          <Heading>About Me</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Text fontSize="lg" color="gray.600" lineHeight="1.8">
                I am a passionate Full Stack Developer with a strong foundation in web technologies
                and a keen eye for creating elegant solutions. With expertise in both frontend and
                backend development, I strive to build applications that are not only functional
                but also provide an exceptional user experience.
              </Text>
              <Text fontSize="lg" color="gray.600" lineHeight="1.8" mt={4}>
                When I'm not coding, you can find me exploring new technologies, contributing to
                open-source projects, or sharing my knowledge through technical writing.
              </Text>
            </Box>
            <Box>
              <Image
                src={ayu}
                alt="Profile"
                borderRadius="lg"
                objectFit="cover"
                w="100%"
                h="auto"
              />
            </Box>
          </SimpleGrid>
          
        </VStack>
      </Container>
    </Box>
  )
}

export default About 