import {
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";
import { Link as RouterLink } from "react-router-dom";

export default function Home() {
  return (
    <Flex flexDirection="column" gap={2} align="center" textAlign="center">
      <Heading
        as="h1"
        fontSize="6xl"
        fontFamily="lora"
        fontWeight="bold"
        lineHeight={{base: 1, md: 0.75}}
        letterSpacing={2}
      >
        FABRICIO OLIVEIRA
      </Heading>
      <Heading
        as="h2"
        fontSize={{ base: "1.6rem", sm: "4xl", md: "5xl" }}
        fontFamily="lato"
        fontWeight="normal"
        color="whiteAlpha.700"
      >
        Desenvolvedor Front-end
      </Heading>
      <Stack
        direction="row"
        align="center"
        justify="center"
        gap={{ base: 1, md: 3 }}
        wrap="wrap"
        mt={{ base: 0, md: 1 }}
      >
        <Button
          size={{ base: "md", md: "lg" }}
          bg="white"
          color="black"
          variant="solid"
          fontWeight="bold"
          fontFamily="lora"
          _hover={{ bg: "whiteAlpha.800" }}
        >
          <RouterLink to="/Projetos">Projetos</RouterLink>
        </Button>
        <Button
          size={{ base: "md", md: "lg" }}
          bg="white"
          color="black"
          variant="solid"
          fontWeight="bold"
          fontFamily="lora"
          _hover={{ bg: "whiteAlpha.800" }}
        >
          <RouterLink to="/Sobre">Sobre</RouterLink>
        </Button>
        <Button
          size={{ base: "md", md: "lg" }}
          bg="white"
          color="black"
          variant="solid"
          fontWeight="bold"
          fontFamily="lora"
          _hover={{ bg: "whiteAlpha.800" }}
        >
          <RouterLink to="/Contato">Contato</RouterLink>
        </Button>
      </Stack>
      <HStack marginTop="2" align="center">
        <Link href="https://github.com/Fabricio-odn">
          <Icon as={RiGithubFill} boxSize="8" />
        </Link>
        <Link href="https://linkedin.com/in/fabricio-on">
          <Icon as={RiLinkedinFill} boxSize="8" />
        </Link>
      </HStack>
    </Flex>
  );
}
