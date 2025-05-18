import { Box, Flex, Button } from '@chakra-ui/react'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <Box
      position="fixed"
      w="100%"
      bg="white"
      px={4}
      py={4}
      zIndex={1000}
      boxShadow="sm"
    >
      <Flex maxW="1200px" mx="auto" justify="space-between" align="center">
        <Box fontSize="xl" fontWeight="bold">
          Portfolio
        </Box>
        <Flex gap={4}>
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Button variant="ghost" _hover={{ bg: 'gray.100' }}>
                {item}
              </Button>
            </Link>
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 