import { Box, Flex, Heading, HStack, Link } from "@chakra-ui/react";
import React from "react";
import { ImDownload, ImEnvelop } from "react-icons/im";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";

export default function Contact() {
  return (
    <Box>
      <Heading
        as="h1"
        fontSize="6xl"
        fontFamily="lora"
        fontWeight="bold"
        textAlign="center"
      >
        Contato
      </Heading>
      <Flex align="center" gap={2} mt={2}>
        <Link href="mailto:fabriciodeoliveira334@gmail.com">
          <Box bg="whiteAlpha.900" color="black" borderRadius={4} p={1.5}>
            <ImEnvelop size={20} />
          </Box>
        </Link>

        <Link
          fontSize="2xl"
          fontFamily="lato"
          fontWeight="normal"
          href="mailto:fabriciodeoliveira334@gmail.com"
        >
          fabriciodeoliveira334@gmail.com
        </Link>
      </Flex>

      <Flex align="center" gap={2} mt={1}>
        <Link
          href="https://drive.google.com/file/d/1kB40-puJng3bLeO_sN1lInK4bumLjLcv/view?usp=sharing"
          _target="_blank"
        >
          <Box bg="whiteAlpha.900" color="black" borderRadius={4} p={1.5}>
            <ImDownload size={20} />
          </Box>
        </Link>

        <Link
          fontSize="2xl"
          fontFamily="lato"
          fontWeight="normal"
          href="https://drive.google.com/file/d/1kB40-puJng3bLeO_sN1lInK4bumLjLcv/view?usp=sharing"
          _target="_blank"
        >
          Baixar Currículo
        </Link>
      </Flex>
      <HStack marginTop="2" align="center" gap={2}>
        <Flex gap={2}>
          <Link href="https://github.com/Fabricio-odn" isExternal>
            <Box bg="whiteAlpha.900" color="black" borderRadius={4} p={1.5}>
              <RiGithubFill size={20} />
            </Box>
          </Link>

          <Link
            fontSize="2xl"
            fontFamily="lato"
            fontWeight="normal"
            href="https://github.com/Fabricio-odn"
            isExternal
          >
            Github
          </Link>
        </Flex>

        <Flex gap={2}>
          <Link href="https://www.linkedin.com/in/fabricio-on/" isExternal>
            <Box bg="whiteAlpha.900" color="black" borderRadius={4} p={1.5}>
              <RiLinkedinFill size={20} />
            </Box>
          </Link>

          <Link
            fontSize="2xl"
            fontFamily="lato"
            fontWeight="normal"
            href="https://www.linkedin.com/in/fabricio-on/"
            isExternal
          >
            LinkedIn
          </Link>
        </Flex>
      </HStack>
    </Box>
  );
}
