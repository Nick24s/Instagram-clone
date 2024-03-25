import { Box, Flex, Link, useColorMode } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo } from "../../assets/constants";
import SidebarItems from "./SidebarItems";
import More from "./More";

const Sidebar = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      h={"100vh"}
      borderRight={"1px solid"}
      borderColor={
        colorMode === "light" ? "rgb(219,219,219)" : "whiteAlpha.300"
      }
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
        >
          <InstagramLogo colorMode={colorMode} />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          cursor={"pointer"}
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          w={10}
        >
          <InstagramMobileLogo colorMode={colorMode} />
        </Link>
        <Flex direction={"column"} cursor={"pointer"}>
          <SidebarItems />
        </Flex>
        {/* Log out  + change theme*/}
        <More />
      </Flex>
    </Box>
  );
};

export default Sidebar;
