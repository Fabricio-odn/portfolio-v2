import { Box, Container, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Box width="100vw" height="100vh" bg="black" color="white">
      <Container maxW="container.sm" centerContent>
        <Flex align="center" justify="center" width="100vw" height="100vh">
          <Outlet />
        </Flex>
      </Container>
    </Box>
  );
}

export default App;
