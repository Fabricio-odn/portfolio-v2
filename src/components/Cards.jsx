import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { RiGithubFill } from "react-icons/ri";

export default function socialProfileWithImageHorizontal({
  id,
  image,
  name,
  description,
  html_url,
  homepage,
}) {
  return (
    <Box key={id}>
      <Card maxW="md">
        <CardBody>
          <Image src={image} borderRadius="lg" />
          <Stack mt="6" spacing="3">
            <Heading
              size="md"
              textAlign="center"
              textTransform="uppercase"
              fontFamily="lato"
              fontWeight="bold"
            >
              {name}
            </Heading>
            <Text >{description}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Link href={html_url} isExternal>
              <Button
                rightIcon={<RiGithubFill />}
                variant="solid"
                background="black"
                color="white"
                _hover={{ bg: "#3a3a3a" }}
                
              >
                Github
              </Button>
            </Link>
            <Link href={homepage} isExternal>
              <Button
                variant="outline"
                color="black"
                _hover={{ bg: "#cccccc" }}
              >
                Deploy
              </Button>
            </Link>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
}
