import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { useState } from "react";
// import { FaRegHeart } from "react-icons/fa";
import { NotificationsLogo } from "../../assets/constants";

const Notifications = ({ colorMode, isOpen }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Tooltip
      hasArrow
      label={"Notifications"}
      placement="right"
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Flex zIndex={11}
        alignItems={"center"}
        gap={4}
        _hover={{
          bg: colorMode === "light" ? "rgba(0, 0, 0, .05)" : "whiteAlpha.400",
        }}
        borderRadius={6}
        p={3}
        w={{ base: 10, md: isOpen ? '48px' : "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        marginY={"2px"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* <FaRegHeart  size={isHovered ? 26 : 25} 
         style={{ transition: 'transform .2s' }} /> */}
        <Box height={"24px"} width={"24px"}>
          <NotificationsLogo colorMode={colorMode} isHovered={isHovered} />
        </Box>
        <Box display={{ base: "none", md: isOpen ? "none" : "block" }}>
          Notifications
        </Box>
      </Flex>
    </Tooltip>
  );
};

export default Notifications;
