import { Box, Link, Tooltip } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
const Home = ({colorMode}) => {
  return (
    <Tooltip
              hasArrow
              label={'Home'}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                to={'/'}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{  bg: colorMode === "light" ? "rgba(0, 0, 0, .05)" : "whiteAlpha.400"}}
                borderRadius={6}
                p={3}
                w={{ base: 10, md: "full" }}
                justifyContent={{ base: "center", md: "flex-start" }}
                height={'48px'}
                marginY={'2px'}
                
             >
               <AiFillHome size={25}/>
                <Box display={{ base: "none", md: "block" }}>Home</Box>
              </Link>
            </Tooltip>
  )
}

export default Home;
