import { Avatar, Tooltip, Box , Link } from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom';
import useAuthStore from "../../store/authStore";

const ProfileLink = ({colorMode}) => {
    const authUser = useAuthStore((state) => state.user);
  return (
    <Tooltip
              hasArrow
              label={"Profile"}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                to={`/${authUser?.username}`}
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
                <Avatar size={'sm'} src={authUser?.profilePicURL || ''}/>
                <Box display={{ base: "none", md: "block" }}>Profile</Box>
              </Link>
            </Tooltip>
  )
}

export default ProfileLink;
