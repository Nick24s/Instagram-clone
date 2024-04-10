import { Box, Link, Tooltip } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { useState } from "react";
const Home = ({colorMode , isOpen , onToggle}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Tooltip
              hasArrow
              label={'Home'}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link zIndex={11}
                display={"flex"}
                to={'/'}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{  bg: colorMode === "light" ? "rgba(0, 0, 0, .05)" : "whiteAlpha.400"}}
                borderRadius={6}
                p={3}
                w={{ base: 10,    md: isOpen ? "48px" : "full" }}
                justifyContent={{ base: "center", md: "flex-start" }}
                height={'48px'}
                marginY={'2px'}
                onClick={isOpen ? onToggle : null}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                
             >
               <AiFillHome 
         size={isHovered ? 26 : 25} 
         style={{ transition: 'transform .2s' }} 
         
        />
                <Box display={{ base: "none", md: isOpen ? 'none' : "block" }}>Home</Box>

              </Link>
            </Tooltip>
  )
}

export default Home;
