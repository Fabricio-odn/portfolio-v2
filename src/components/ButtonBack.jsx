import { Button, Link } from "@chakra-ui/react";

export default function ButtonBack() {
  return (
    <Link href="/">
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
      >
        Voltar
      </Button>
    </Link>
  );
}
