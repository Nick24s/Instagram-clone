import { Switch} from "@chakra-ui/react";

const CustomSwitch = ({ toggleColorMode, colorMode }) => {
  return (
    <Switch 
    isChecked={colorMode === 'dark' ?   true : false}
    sx={{ 
      '.chakra-switch__thumb': {
        bg: 'white', // This sets the thumb color when the switch is not checked
 },
      'span.chakra-switch__track:not([data-checked])': { backgroundColor: 'rgb(218,222,228)' },

      '.chakra-switch__track[data-checked]:not([data-theme])': { backgroundColor: 'white' },
      '.chakra-switch__thumb[data-checked]:not([data-theme])': { backgroundColor: 'black' },


      }} 
      size={"md"}
       onChange={toggleColorMode}
    />
  );
};

export default CustomSwitch;
