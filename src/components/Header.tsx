import { Box, Text, Image } from "@chakra-ui/react"
import logo from "../assets/phone1.png";

export const Header = () => {
  return (
    <>
        <Box w={{base:"initial", md: "20%"}} m={{ base: "0 auto 5%", md: "unset"}} h="15%" mt={{base: "10%", md: "unset"}} display="flex" flexDirection="row">
          <Text color="green.logo" m="auto 5px" ml={{base: "0", md: "57%"}} fontWeight="bold" fontSize="5xl" textAlign={{base: "center"}}>
            Chatty
          </Text>
          <Image src={logo} h="40px" w="45px" m="auto 0"></Image>
        </Box>
    </>
  )
}
