import { Box, Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeRedux/actions";
import { SunIcon, MoonIcon } from "@chakra-ui/icons"; 

function Theme() {
  const themeState = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Box py={5} px={10}>
      <Button onClick={handleTheme} colorScheme="blue" leftIcon={themeState.isDarkTheme ? <SunIcon /> : <MoonIcon />}>
        {themeState.isDarkTheme ? " Light Mode" : " Dark Mode"}
      </Button>
    </Box>
  );
}

export default Theme;
