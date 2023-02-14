import { Box, Flex, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ButtonBack from "../components/ButtonBack";
import Cards from "../components/Cards";

export default function Home() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios("https://api.github.com/users/fabricio-odn/repos").then((res) => {
      setUserData(res.data);
    });
  }, []);

  return (
    <Box bg="black" textAlign="center" paddingTop={{ base: '28rem', md: 0 }}>
      <Flex flexDirection="column" gap={3}>
        <Heading Heading as="h1" fontSize="6xl" fontFamily="lora" fontWeight="bold">
          Projetos
        </Heading>
        <ButtonBack />
      </Flex>

      <Flex
        flexDirection={{ base: "column", md: "row" }}
        gap={5}
        wrap="wrap"
        justify="center"
        align="center"
        maxW="1450"
        p="5"
      >
        {userData
          .filter((repo) => repo.description)
          .map((repos) => {
            return (
              <Cards
                key={repos.id}
                name={repos.name}
                description={repos.description}
                html_url={repos.html_url}
                homepage={repos.homepage}
              />
            );
          })}
        <Cards
          name="Meus Repositórios no Github"
          description="Visite meu Github para obter mais informações, onde você pode encontrar uma variedade de meus projetos, testes e lading pages. Obrigado!"
          html_url="https://github.com/Fabricio-odn?tab=repositories"
          homepage="https://github.com/Fabricio-odn?tab=repositories"
        />
      </Flex>
    </Box>
  );
}

{
  /* <Flex gap='20' align='center'>
      <Cards />
      <Heading as="h1" size="4xl" fontFamily="lato" fontWeight="bold">
        Projetos
      </Heading>
    </Flex> */
}
