import { useState } from "react";
import { Box, SimpleGrid, Input, Button, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginCredintied } from "../redux/LoginRedux/actions";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.loginState);
  const appState = useSelector((state) => state.appState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    dispatch(loginCredintied(credentials));
    setCredentials({ email: "", password: "" });
  };

  if (appState.isLoading) {
    return <Loading />;
  }

  if (loginState.isAuth) {
    return <Navigate to="/" />;
  }

  return (
    <Box p={10}>
      <Box width={"40%"} margin={"auto"} textAlign={"center"}>
        <Heading my={5}>Login to continue!</Heading>
        <form onSubmit={handleSubmit}>
          <SimpleGrid gap={5} p={10} boxShadow={"xl"} borderRadius={10} background="brand.100">
            <Input
              placeholder="Enter Email"
              value={credentials.email}
              name="email"
              onChange={handleChange}
              required
            />
            <Input
              placeholder="Enter password"
              value={credentials.password}
              name="password"
              type="password"
              onChange={handleChange}
              required
            />
            <Button type="submit" colorScheme="blue">
              Login
            </Button>
          </SimpleGrid>
        </form>
        {appState.isError ? <Error  /> : null}
      </Box>
    </Box>
  );
}

export default Login;
