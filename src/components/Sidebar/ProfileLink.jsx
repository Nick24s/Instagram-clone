import { Avatar, Tooltip, Box , Link } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom';
import useAuthStore from "../../store/authStore";
import { useState } from "react";

const ProfileLink = ({colorMode , isOpenSearch , onSearchToggle}) => {
  const authUser = useAuthStore((state) => state.user);
    const [isHovered, setIsHovered] = useState(false);
  return (
    <Tooltip
              hasArrow
              label={"Profile"}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
             
              <Link zIndex={11}
                display={"flex"}
                to={`/${authUser?.username}`}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{  bg: colorMode === "light" ? "rgba(0, 0, 0, .05)" : "whiteAlpha.400"}}
                borderRadius={6}
                p={3}
                // w={{ base: 10, md: "full" }}
        w={{ base: 10, md: isOpenSearch ? '48px' : "full" }}

                justifyContent={{ base: "center", md: "flex-start" }}
                height={'48px'}
                marginY={'2px'}
                onClick={isOpenSearch ? onSearchToggle : null}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
             >
               
                <Avatar  // <Avatar size={'sm'} src={authUser?.profilePicURL || ''}/> 
                width={isHovered ? '24px' : "22px"}  // width={isHovered ? '34px' : "32px"} 
                height={isHovered ? '24px' : "22px"}  // height={isHovered ? '34px' : "32px"} 
                src={authUser?.profilePicURL || ''}/>
                <Box display={{ base: "none", md: isOpenSearch ? 'none' : "block" }}>Profile</Box>
              </Link>
           
            </Tooltip>
  )
}

export default ProfileLink;
