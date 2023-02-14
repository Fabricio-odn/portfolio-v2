import { Button, Link } from "@chakra-ui/react";
import { ImHome } from "react-icons/im";

export default function ButtonBack() {
  return (
    <Link href="/" _hover={"textDecoration: none"}>
      <Button
        variant="solid"
        bg="white"
        color="black"
        size="lg"
        height="48px"
        width="120px"
        textTransform="uppercase"
        fontWeight="bold"
        fontFamily="lora"
        rightIcon={<ImHome />}
      >
        Home
      </Button>
    </Link>
  );
}
