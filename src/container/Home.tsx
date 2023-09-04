import { Box, Image, Text, Button, Link } from "@chakra-ui/react";
import MainLayout from "../layouts/MainLayout";
import logo from "../assets/phone1.png";
import phone from "../assets/phone.png";

export const Home = () => {
  return (
    <MainLayout>
      <Box w="80%" display="flex" h="80%" m="auto">
        <Box h={{base: "650px", "2xl": "800px"}} w="100%" background="white" display="flex" flexDirection="column">
          <Box w={{base:"initial", md: "20%"}} m={{ base: "0 auto 5%", md: "unset"}} h="15%" mt={{base: "10%", md: "unset"}} display="flex" flexDirection="row">
            <Text color="green.logo" m="auto 5px" ml={{base: "0", md: "57%"}} fontWeight="bold" fontSize="5xl" textAlign={{base: "center"}}>
              Chatty
            </Text>
            <Image src={logo} h="40px" w="45px" m="auto 0"></Image>
          </Box>
          <Box display="flex" flexDirection="row">
            <Box w={{base: "100%", md: "55%"}} h="100%">
              <Text m={{base: "0 auto", md: "12% 0 5% 20%"}} fontSize={{base: "4xl", md: "5xl", "2xl": "7xl"}} fontWeight="400" w={{base: "80%", md: "60%"}} textAlign={{base: "center", md: "initial"}}>
                Get Chatting With Chatty!
              </Text>
              <Text w={{base: "80%", md: "60%"}} m={{base: "15% auto", md: "0 0 5% 20%"}} fontSize={{ base: "17px", "2xl": "20px" }} textAlign={{ base: "center", md: "initial"}}>
                Experience fast and secure in-app messaging with Chatty. 
                Make video calls and create chat link to message and call your friends and family on <b>Chatty</b>!
              </Text>
              <Button display={{base: "flex", md: "initial"}} m={{base: "0 auto", md: "0 0 0 20%"}} w={{base: "90%", md: "50%"}} h="50px" background="green.logo" color="white" fontSize="20px">
                Get Started
              </Button>
              <Text m={{base: "5% auto", md: "5% 0 0 20%"}} textAlign={{ base: "center", md: "initial"}}>Already  have an account? 
                <Link href="/" ml=".2rem" color="green.logo">Sign in!</Link>
              </Text>
            </Box>
            <Box display={{base: "none", md: "unset"}} w={{base: "40%", xl: "35%", lg: "35%", "2xl": "31.5%"}} h={{base: "90%", lg: "80%", md: "60%", xl: "90%", "2xl": "80%"}} borderRadius="50%" mt={{base: "10%", md: "5%"}} background="radial-gradient(#e66465, #9198e5)" position="relative">
              <Image src={phone} position="absolute">
              </Image>
            </Box>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};
