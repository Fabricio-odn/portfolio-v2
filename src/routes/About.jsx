import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import ButtonBack from "../components/ButtonBack";
import { ImAddressBook } from "react-icons/im";

export default function About() {
  return (
    <Box bg="black" mt={{ base: 150, md: 0 }}>
      <Flex flexDirection="column" gap={1} p={5}>
        <Heading as="h1" fontSize="6xl" fontFamily="lora" fontWeight="bold">
          Fabricio Oliveira
        </Heading>
        <Box>
          <Text
            fontSize="2xl"
            fontFamily="lato"
            fontWeight="normal"
            color="whiteAlpha.800"
            maxW={800}
          >
            Sou um desenvolvedor front-end autodidata apaixonado por web design
            e experiência do usuário. Através de meus próprios projetos,
            desenvolvi expertise em HTML, CSS, JavaScript, React e UI/UX. Tenho
            um forte foco na criação de sites responsivos e visualmente
            atraentes. Estou ansioso para trazer minha paixão e habilidades para
            um ambiente profissional e continuar a crescer como desenvolvedor.
          </Text>
          <Flex flexDirection="column" mt={5} gap={2}>
            <Heading as="h2" fontSize="4xl" fontFamily="lora" fontWeight="bold">
              Habilidades
            </Heading>
            <Text
              fontSize="2xl"
              fontFamily="lato"
              fontWeight="normal"
              color="whiteAlpha.800"
            >
              <p>- HTML - CSS</p>
              <p>- Javascript</p>
              <p>- ReactJS</p>
              <p>- NextJS</p>
              <p>- Styled-Components</p>
              <p>- TailwindCSS</p>
              <p>- Chakra UI</p>
            </Text>
          </Flex>
        </Box>
        <Box paddingTop={2}>
          <ButtonBack />
          <Link paddingLeft={5} href="/contact" _hover={"textDecoration: none"}>
            <Button
              variant="outline"
              color="black"
              bg="white"
              size="lg"
              height="48px"
              width="120px"
              textTransform="uppercase"
              fontWeight="bold"
              fontFamily="lora"
              rightIcon={<ImAddressBook />}
              _hover={{ bg: "#cccccc" }}
            >
              Deploy
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
