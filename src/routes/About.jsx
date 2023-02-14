import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import { ImAddressBook } from "react-icons/im";
import ButtonBack from "../components/ButtonBack";

export default function About() {
  return (
    <Box bg="black" paddingTop={{ base: "9rem", md: 0 }}>
      <Flex flexDirection="column" gap={1} p={5}>
        <Heading
          as="h1"
          fontSize="6xl"
          fontFamily="lora"
          fontWeight="bold"
          lineHeight={1}
        >
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
          <Flex flexDirection="column" mt={5}>
            <Heading as="h2" fontSize="4xl" fontFamily="lora" fontWeight="bold">
              Habilidades
            </Heading>
            <Flex
              flexDirection="column"
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
            </Flex>
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
              width="140px"
              textTransform="uppercase"
              fontWeight="bold"
              fontFamily="lora"
              rightIcon={<ImAddressBook />}
            >
              Contato
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}
