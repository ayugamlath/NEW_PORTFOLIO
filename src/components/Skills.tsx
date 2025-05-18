import { Box, Container, Heading, SimpleGrid, VStack, Text, Icon } from '@chakra-ui/react'
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaBootstrap, FaUnity,FaJava } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiAdobephotoshop, SiAdobeillustrator,SiMysql,SiMongodb } from 'react-icons/si'
import {BiLogoSpringBoot} from 'react-icons/bi'

const skills = [
  { name: 'React', icon: FaReact, level: 'Advanced' },
  { name: 'Node.js', icon: FaNodeJs, level: 'Advanced' },
  { name: 'TypeScript', icon: SiTypescript, level: 'Advanced' },
  { name: 'JavaScript', icon: SiJavascript, level: 'Advanced' },
  { name: 'HTML5', icon: SiHtml5, level: 'Advanced' },
  { name: 'CSS3', icon: SiCss3, level: 'Advanced' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Advanced' },
  { name: 'Bootstrap', icon: FaBootstrap, level: 'Advanced' },
  { name: 'MongoDB', icon: SiMongodb, level: 'Intermediate' },
  { name: 'Git', icon: FaGitAlt, level: 'Advanced' },
  { name: 'Photoshop', icon: SiAdobephotoshop, level: 'Intermediate' },
  { name: 'Illustrator', icon: SiAdobeillustrator, level: 'Intermediate' },
  { name: 'Unity', icon: FaUnity, level: 'Intermediate' },
  { name: 'Java', icon: FaJava, level: 'Intermediate' },
  { name: 'Spring Boot', icon: BiLogoSpringBoot, level: 'Intermediate' },
  { name: 'MySQL', icon: SiMysql, level: 'Intermediate' }
]

const Skills = () => {
  return (
    <Box id="skills" py={20} bg="white">
      <Container maxW="1200px">
        <VStack spacing={12}>
          <Heading>Skills</Heading>
          <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
            {skills.map((skill, index) => (
              <Box
                key={index}
                p={6}
                bg="gray.50"
                borderRadius="lg"
                textAlign="center"
                _hover={{ transform: 'translateY(-5px)', boxShadow: 'md' }}
                transition="all 0.3s"
              >
                <Icon as={skill.icon} w={10} h={10} color="blue.500" mb={4} />
                <Text fontWeight="bold" mb={2}>
                  {skill.name}
                </Text>
                <Text color="gray.600" fontSize="sm">
                  {skill.level}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  )
}

export default Skills 