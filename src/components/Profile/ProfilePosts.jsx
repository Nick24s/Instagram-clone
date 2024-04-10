import { Box, Flex, Grid, Skeleton, Text, VStack,  } from "@chakra-ui/react";
import ProfilePost from "./ProfilePost";
import useGetUserPosts from "../../hooks/useGetUserPosts";
import { CiCamera } from "react-icons/ci";

const ProfilePosts = () => {
const {isLoading, posts} =  useGetUserPosts();
const noPostsFound = !isLoading  && posts.length === 0;
if(noPostsFound) return <NoPostsFound />

  return (
    <Grid
      templateColumns={{
        sm: "repeat(1 , 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={1}
      columnGap={1}
    >
      {isLoading &&
        [0, 1, 2].map((_, idx) => (
          <VStack key={idx} alignItems={"flex-start"} gap={4}>
            <Skeleton w={"full"}>
              <Box h={"300px"}>content wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {!isLoading && (
        <>
         {posts.map((post) => <ProfilePost post={post} key={post.id} />)}
        </>
      )}
    </Grid>
  );
};

export default ProfilePosts;

const NoPostsFound = () => {
  return (
    <Flex flexDir={'column'} textAlign={'center'} mx={'auto'} mt={59} justifyContent={'center'} alignItems={'center'} gap={5} > 
      <Box borderRadius={'50px'} border={'3px solid gray'} p={3}>
      
      <CiCamera size={50} color="gray"/>  {/* border */}
      </Box>
      <Text fontSize={'30px'}  fontWeight={'bold'}>No Posts Yet</Text>
    </Flex>
  )
}
