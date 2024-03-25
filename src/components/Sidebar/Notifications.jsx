import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { NotificationsLogo } from "../../assets/constants";

const Notifications = ({colorMode}) => {
  return (
    <Tooltip
      hasArrow
      label={'Notifications'}
      placement="right"
          ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Flex
        alignItems={"center"}
        gap={4}
        _hover={{  bg: colorMode === "light" ? "rgba(0, 0, 0, .05)" : "whiteAlpha.400"}}
        borderRadius={6}
        p={3}
        w={{ base: 10, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
        marginY={'2px'}
      >
        <NotificationsLogo colorMode={colorMode}/>
        <Box display={{ base: "none", md: "block" }}>Notifications</Box>
      </Flex>
    </Tooltip>
  );
};

export default Notifications;
