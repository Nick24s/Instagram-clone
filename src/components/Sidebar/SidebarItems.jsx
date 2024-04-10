import { useColorMode } from "@chakra-ui/react";
import CreatePost from "./CreatePost";
import Home from "./Home";
import Notifications from "./Notifications";
import ProfileLink from "./ProfileLink";
import Search from "./Search";

const SidebarItems = ({isOpen, onOpen, onClose , onToggle}) => {
  const { colorMode } = useColorMode();


  return (
    <>
      <Home colorMode={colorMode} isOpen={isOpen}  onToggle={onToggle}/>
      <Search  colorMode={colorMode} isOpen={isOpen} onOpen={onOpen} onClose={onClose} onToggle={onToggle}/>
      <Notifications colorMode={colorMode} isOpen={isOpen}/>
      <CreatePost colorMode={colorMode} isOpenSearch={isOpen}  />
      <ProfileLink colorMode={colorMode} isOpenSearch={isOpen} onSearchToggle={onToggle}/>
      </>
  )
}

export default SidebarItems
