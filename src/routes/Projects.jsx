import { Box, Flex, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";

export default function Home() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios("https://api.github.com/users/fabricio-odn/repos").then((res) => {
      setUserData(res.data);
    });
  }, []);

  return (
    <Box bg="black" textAlign="center" mt={{ base: 100, md: 0 }}>
      <Heading as="a" href="/">
        Projetos
      </Heading>
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
