import { ChakraProvider } from "@chakra-ui/react";
import AllRoutes from "./routes/AllRoutes";
import { useSelector } from "react-redux";
import { customDarkTheme, customLightTheme } from "./themes/customTheme";
import Theme from "./components/Theme";

function App() {
  const themeState = useSelector((state) => state.theme);
  return (
    <>
      <ChakraProvider theme={themeState.isDarkTheme ? customDarkTheme : customLightTheme}>
        <Theme position="absolute" right={0} />
        <AllRoutes />
      </ChakraProvider>
    </>
  );
}

export default App;
