import { Avatar, Box,  Flex } from "@chakra-ui/react";
import useAuthStore from "../../store/authStore";
import { Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import useUpdateSearchHistory from "../../hooks/useUpdateSearchHistory";

const SearchedUser = ({ user, colorMode, renderDeleteButton }) => {
  const navigate = useNavigate();
  const authUser = useAuthStore((state) => state.user);
  const { isUpdating, updateSearchHistory } = useUpdateSearchHistory(authUser); 
  

  const onUpdateSearchHistory = async (action) => {
    await updateSearchHistory(user, action);
    
    if (!action) {
      console.log(action);
      navigate(`/${user.username}`);
    }
  };
  return (
    <Flex
      onClick={() => onUpdateSearchHistory()}
      justifyContent={"space-between"}
      alignItems={"center"}
      w={"full"}
      paddingX={"24px"}
      paddingY={"8px"}
      _hover={{
        bg:
          colorMode === "light"
            ? "rgba(0, 0, 0, .05)"
            : "rgba(255,255,255, 0.1)",
      }}
    >
      <Flex alignItems={"center"} gap={2}>
        <Link to={`/${user.username}`}>
          <Avatar src={user.profilePicURL} boxSize={"44px"}></Avatar>
        </Link>
        <Flex alignItems={"flex-start"} direction={"column"}>
          <Link to={`/${user.username}`}>
            <Box
              fontSize={"14px"}
              fontWeight={600}
              color={colorMode === "light" ? "black" : "white"}
            >
              {user.username}
            </Box>
          </Link>
          <Box fontSize={"14px"} color={"rgb(162,162,163)"} fontWeight={400}>
            {user.bio}
          </Box>
        </Flex>
      </Flex>
      <Flex padding={"8px"}>
        {renderDeleteButton && (
          
          <IoMdClose
            size={"25px"}
            color="rgb(133,132,132)"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onUpdateSearchHistory("delete");
            }}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default SearchedUser;
// TODO ADD SKELETON