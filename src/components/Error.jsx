import { Alert, AlertIcon, Text} from "@chakra-ui/react";

const Error = () => {
  return (
    <Alert status="error">
      <AlertIcon boxSize={8} mr={4} /> <Text>Error occured</Text>
    </Alert>
  );
};

export default Error;
