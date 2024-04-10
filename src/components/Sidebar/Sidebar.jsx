import {
  Box,
  Flex,
  Link,
  ScaleFade,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { InstagramLogo, InstagramMobileLogo } from "../../assets/constants";
import SidebarItems from "./SidebarItems";
import More from "./More";

const Sidebar = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  return (
    <Box  
      w={isOpen ? "73px" : "auto"}
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
        {!isOpen ? (
          <Link
            to={"/"}
            as={RouterLink}
            pl={2}
            display={{ base: "none", md: "block" }}
            cursor={"pointer"}
          >
            <InstagramLogo colorMode={colorMode} />
          </Link>
        ) : (
          <Flex>
            <Link
              to={"/"}
              as={RouterLink}
              pl={2}
              display={{ base: "block", md: isOpen ? "block" : "none" }}
              cursor={"pointer"}
              borderRadius={6}
              _hover={{
                bg:
                  colorMode === "light" ? "rgb(243,242,243)" : "whiteAlpha.200",
              }}
              // w={24}
              // h={'24'}
              padding={"12px"}
              zIndex={11}
              onClick={isOpen ? onToggle : null}
            >
              <ScaleFade initialScale={1.5} in={isOpen}>
                <InstagramMobileLogo colorMode={colorMode} />
              </ScaleFade>
            </Link>
          </Flex>
        )}
        <Flex direction={"column"} cursor={"pointer"}>
          <SidebarItems
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            onToggle={onToggle}
          />
        </Flex>
        <More isOpen={isOpen} />
      </Flex>
    </Box>
  );
};

export default Sidebar;
