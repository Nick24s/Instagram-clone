import { useColorMode } from "@chakra-ui/react";
import CreatePost from "./CreatePost";
import Home from "./Home";
import Notifications from "./Notifications";
import ProfileLink from "./ProfileLink";
import Search from "./Search";

const SidebarItems = () => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Home colorMode={colorMode}/>
      <Search  colorMode={colorMode}/>
      <Notifications colorMode={colorMode}/>
      <CreatePost colorMode={colorMode}/>
      <ProfileLink colorMode={colorMode}/>
      </>
  )
}

export default SidebarItems
