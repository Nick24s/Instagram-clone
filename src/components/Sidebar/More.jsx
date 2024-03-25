import { useState } from "react";

import { Box, Button, Divider, Flex, Popover, PopoverBody, PopoverContent, PopoverTrigger, Text, useColorMode } from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";
import { LuSunMedium } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";

import useLogout from "../../hooks/useLogout";
import CustomSwitch from "./customSwitch";

const More = () => {

const { colorMode, toggleColorMode } = useColorMode();
const { handleLogout, isLoggingOut } = useLogout();

const [showSwitchAppearance, toggleSwitchAppearance] = useState(false);

    return (
        <Popover autoFocus={false}  placement="top-start" >
        <PopoverTrigger>
          <Flex
          height={'48px'}
            padding={3}
            marginY={'2px'}
            alignItems="center"
            mt={"auto"}
            cursor={"pointer"}
            _hover={{
              bg: "whiteAlpha.400",
            }}
            borderRadius={6}
       
          >
            <GiHamburgerMenu size={25} />
            <Text ml={2}>More</Text>
          </Flex>
        </PopoverTrigger>
        <PopoverContent
          borderColor={
            colorMode === "light" ? "rgb(255,254,254)" : "rgb(39,39,38)"
          }
          w={250}
          borderRadius={"20px"}
          boxShadow={
            "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)"
          }
        >
          {!showSwitchAppearance ? (
            <Box borderRadius={"20px"} overflow="hidden">
              <PopoverBody
                bg={
                  colorMode === "light" ? "rgb(255,254,254)" : "rgb(39,39,38)"
                }
              >
                <Flex
                  flexDir={"column"}
                  alignItems={"flex-start"}
                  gap={4}
                  p={2}
                  w={{ base: 10, md: "full" }}
                  mt={"auto"}
                  justifyContent={{ base: "flex-start", md: "flex-start" }}
                >
                  
                  <Flex
                    paddingLeft={"16px"}
                    _hover={{ bg: "whiteAlpha.400" }}
                    borderRadius={6}
                    justifyContent="flex-start"
                    alignItems="center"
                    width="110%"
                    height="50px"
                    marginLeft="-5%"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSwitchAppearance(true);
                    }}
                  >
                    {colorMode === "light" ?  <LuSunMedium size={25} strokeWidth="1.5" /> : <FiMoon  size={25}  strokeWidth="1.5"  style ={{transform: 'rotate(-90deg)' }}/>}
                    
                    <Button
                      display={{ base: "none", md: "block" }}
                      variant={"ghost"}
                      _hover={{ bg: "transparent" }}
                      fontWeight={"5"}
                    >
                      Switch appearance
                    </Button>
                  </Flex>
                  <Divider borderWidth={'6px'} width={'116%'} marginLeft={'-10%'}/>
                  <Flex
                    _hover={{ bg: "whiteAlpha.400" }}
                    borderRadius={6}
                    justifyContent="flex-start"
                    alignItems="center"
                    width="110%"
                    height="50px"
                    marginLeft="-5%"
                    onClick={handleLogout}
                  >
                    <Button
                      display={{ base: "none", md: "block" }}
                      variant={"ghost"}
                      _hover={{ bg: "transparent" }}
                      isLoading={isLoggingOut}
                      fontWeight={"5"}
                    >
                      Log out
                    </Button>
                  </Flex>
                </Flex>
              </PopoverBody>
            </Box>
          ) : (
            <Box borderRadius={"20px"} overflow="hidden">
              <PopoverBody
                bg={
                  colorMode === "light" ? "rgb(255,254,254)" : "rgb(39,39,38)"
                }
              >
                <Flex
                  // flexDir={"column"}
                  // gap={4}
                  p={2}
                  w={{ base: 10, md: "full" }}
                  // height="50px"
                  mt={"auto"}
                  justifyContent={{ base: "flex-start", md: "flex-start" }}
                >
                  <Flex
                    justifyContent="space-between"
                    //  _hover={{ bg: "whiteAlpha.400" }}
                    alignItems="center"
                    width="100%"
                    paddingBottom={"15px"}
                    direction={"column"}
                   
                  >
                    <Flex
                      alignItems="center"
                      justifyContent="space-between"
                      width="100%"
                      p={1}
                      pb={4}
                      onClick={(event) => {
                        event.stopPropagation();
                        toggleSwitchAppearance(false);
                      }}
                    >
                      <IoIosArrowBack  />
                      <Text textAlign="center" flexGrow={1}>
                        Switch appearance
                      </Text>
                      {colorMode === "light" ?  <LuSunMedium size={25} strokeWidth="1.5" /> : <FiMoon  size={25}  strokeWidth="1.5"  style ={{transform: 'rotate(-90deg)' }}/>}
                    
                    </Flex>
                    <Divider orientation="horizontal" w={"120%"} />

                    <Flex pt={3} alignItems={"center"} justifyContent={'space-between'} w={'100%'}>
                      <Text flex={1}>Dark mode</Text>
                      <CustomSwitch 
                        toggleColorMode={toggleColorMode}
                        />
                      {/* <CustomSwitch  toggleColorMode={toggleColorMode}/>
                       */}

                    </Flex>
                  </Flex>
                </Flex>
              </PopoverBody>
            </Box>
          )}
        </PopoverContent>
      </Popover>
    )
}

export default More;