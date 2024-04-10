import {
  Box,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Slide,
  Text,
  Tooltip,
  Spinner,
} from "@chakra-ui/react";
import useSearchUser from "../../hooks/useSearchUser";
import { useEffect, useState } from "react";
import { SearchLogo } from "../../assets/constants";
import { IoCloseCircleSharp } from "react-icons/io5";
import useDebounce from "../../hooks/useDebounce";
import useAuthStore from "../../store/authStore";
import SearchedUser from "../SearchedUsers.jsx/SearchedUsers";

const Search = ({ colorMode, isOpen, onOpen, onClose, onToggle }) => {
  const [isHovered, setIsHovered] = useState(false);
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const { users, isLoading, getUserProfile, setUser, setUsers } =  useSearchUser();
   
  const [inputValue, setInputValue] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const authUser = useAuthStore((state) => state.user);

    
  useEffect(() => {
    const storedSearchHistory = authUser?.searchHistory || [];
    setSearchHistory(storedSearchHistory);
  }, [onToggle , inputValue , authUser ]);

  useEffect(() => {
    setInputValue('');
  },[onToggle])

  const debouncedValue = useDebounce(inputValue, 500);

  useEffect(() => {
    if (!inputValue) {
      setUsers([]);
    }
    if (debouncedValue) {
      getUserProfile(debouncedValue);
    }
  }, [debouncedValue, inputValue]);

  const handleCleanInput = () => {
    setInputValue("");
    setUsers([]);
  };

  return (
    <>
      <Tooltip
        hasArrow
        label={"Search"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Flex
          zIndex={11}
          alignItems={"center"}
          gap={4}
          _hover={{
            bg: colorMode === "light" ? "rgba(0, 0, 0, .05)" : "whiteAlpha.400",
          }}
          borderRadius={6}
          border={isOpen ? "1px solid" : "none"}
          p={3}
          w={{ base: 10, md: isOpen ? "48px" : "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          marginY={"2px"}
          onClick={onToggle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <SearchLogo colorMode={colorMode} isHovered={isHovered} />

          <Box display={{ base: "none", md: isOpen ? "none" : "block" }}>
            Search
          </Box>
        </Flex>
      </Tooltip>

      <Box>
        <Slide style={{ zIndex: 10  }} direction="left" in={isOpen}> {/* TODO the default position is FIXED , so when its open , the the like button is unclickable*/}
          <Box
            color="white"
            ml={"74px"}
            w={397}
            h={"100vh"}
            bg={colorMode === "light" ? "white" : "black"}
            rounded="lg"
            boxShadow="10px 0px 15px rgba(0, 0, 0, 0.1)"
            borderRight={"1px solid"}
            borderColor={
              colorMode === "light" ? "rgb(219,218,218)" : "rgb(38,39,39)"
            }
            borderRadius={20}
            paddingY={"8px"}
            // overflow={'visible'}
          >
            <Flex
              w={"auto"}
              h={"69px"}
              marginY={"8px"}
              paddingTop={"12px"}
              paddingBottom={"36px"}
              paddingLeft={"24px"}
              paddingRight={"14px"}
            >
              <Flex>
                <Text
                  fontWeight={600}
                  color={colorMode === "light" ? "black" : "white"}
                  fontSize={"24px"}
                >
                  Search
                </Text>
              </Flex>
            </Flex>
            <Flex marginX={"16px"} h={"40px"} marginBottom={"24px"}>
              <InputGroup>
                <Input
                  placeholder="Search"
                  value={inputValue}
                  onInput={(event) =>
                    setInputValue(
                      event.currentTarget.value.trim().toLowerCase()
                    )
                  }
                  htmlSize="md"
                  w={"370px"}
                  paddingX={"16px"}
                  paddingY={"3px"}
                  bg={
                    colorMode === "light" ? "rgb(239,238,238)" : "rgb(38,39,39)"
                  }
                  sx={{
                    "&:focus": {
                      outline: "none",
                      borderWidth: "0",
                      boxShadow: "none",
                      color: colorMode === "light" ? "black" : "white",
                    },
                    "&:not(:focus)": {
                      outline: "none",
                      borderWidth: "0",
                      boxShadow: "none",
                      color: colorMode === "light" ? "black" : "white",
                    },
                  }}
                ></Input>
                <InputRightElement>
                  {inputValue &&
                    (isLoading ? (
                      <Spinner />
                    ) : (
                      <IoCloseCircleSharp
                        style={{ color: "rgb(201,200,201)" }}
                        onClick={handleCleanInput}
                      />
                    ))}
                </InputRightElement>
              </InputGroup>
            </Flex>
            <Divider />
            {!inputValue && !isLoading && (
              <Flex pt={"12px"}>
                <Flex
                  marginTop={"6px"}
                  marginBottom={"8px"}
                  pt={"4px"}
                  marginX={"24px"}
                  w={"100%"}
                  justifyContent={"space-between"}
                >
                  <Text
                    color={colorMode === "light" ? "black" : "white"}
                    fontSize={"16px"}
                    fontWeight={600}
                  >
                    Recent
                  </Text>
                  <Text
                    color={"rgb(14,155,247)"}
                    fontSize={"14px"}
                    fontWeight={600}
                    _hover={{
                      color: colorMode === "light" ? "rgb(0,55,107)" : "white",
                    }}
                    //TODO add onclick here
                  >
                    Clear all
                  </Text>
                </Flex>
              </Flex>
            )}
            <Flex marginY={"8px"} direction={"column"}>
              {users.length === 0 &&
              searchHistory.length === 0 &&
              !inputValue &&
              !isLoading ? (
                <Flex
                  h={"728px"}
                  padding={"15px"}
                  justifyContent="center"
                  alignItems="center"
                  fontSize={"14px"}
                  color={
                    colorMode === "light"
                      ? "rgb(115, 115, 115)"
                      : "rgb(168, 168, 168)"
                  }
                >
                  No recent searches.
                </Flex>
              ) : users.length === 0 && inputValue && !isLoading ? (
                <Flex
                  h={"728px"}
                  padding={"15px"}
                  justifyContent="center"
                  alignItems="center"
                  fontSize={"14px"}
                  color={
                    colorMode === "light"
                      ? "rgb(115, 115, 115)"
                      : "rgb(168, 168, 168)"
                  }
                >
                  No results found.
                </Flex>
              ) : users.length === 0 &&
                searchHistory.length > 0 &&
                (!inputValue || inputValue === "") &&
                !isLoading ? (
                searchHistory.map((user) => (
                  <SearchedUser
                    key={user.username}
                    user={user}
                    setUser={setUser}
                    colorMode={colorMode}
                    renderDeleteButton={true}
                  />
                ))
              ) : users.length > 0 && inputValue && !isLoading ? (
                users.map((user) => (
                  <SearchedUser
                    key={user.username}
                    user={user}
                    setUser={setUser}
                    colorMode={colorMode}
                    renderDeleteButton={false}
                  />
                ))
              ) : null}
            </Flex>
          </Box>
        </Slide>
      </Box>
    </>
  );
};

export default Search;

