import { Box, Container, Heading, SimpleGrid, VStack, Image, Text, Link } from '@chakra-ui/react'

const projects = [
  {
    title: 'Project 1',
    description: 'A full-stack web application built with React and Node.js',
    image: 'https://via.placeholder.com/400x300',
    link: '#'
  },
  {
    title: 'Project 2',
    description: 'Mobile-first responsive website with modern design',
    image: 'https://via.placeholder.com/400x300',
    link: '#'
  },
  {
    title: 'Project 3',
    description: 'E-commerce platform with payment integration',
    image: 'https://via.placeholder.com/400x300',
    link: '#'
  }
]

const Projects = () => {
  return (
    <Box id="projects" py={20} bg="gray.50">
      <Container maxW="1200px">
        <VStack spacing={12}>
          <Heading>My Projects</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {projects.map((project, index) => (
              <Box
                key={index}
                bg="white"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
                transition="all 0.3s"
              >
                <Image src={project.image} alt={project.title} w="100%" h="200px" objectFit="cover" />
                <Box p={6}>
                  <Heading size="md" mb={2}>
                    {project.title}
                  </Heading>
                  <Text color="gray.600" mb={4}>
                    {project.description}
                  </Text>
                  <Link
                    href={project.link}
                    color="blue.500"
                    fontWeight="medium"
                    _hover={{ textDecoration: 'underline' }}
                  >
                    View Project →
                  </Link>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Projects 