import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import ButtonBack from "../components/ButtonBack";

export default function About() {
  return (
    <Box>
      <Flex flexDirection="column" gap={5}>
        <Heading as="h1" size="3xl" fontFamily="lato" fontWeight="bold">
          Sobre
        </Heading>
        <ButtonBack/>
      </Flex>
    </Box>
  );
}
