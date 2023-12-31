import { Box, Button, Text, Input, VStack, FormHelperText, FormControl, Link } from "@chakra-ui/react"
import { Fragment } from "react"
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = () => navigate('/chat');

  return (
      <Fragment>
        <Box w="80%" h="80%" display="flex" flexDirection="column" m="10% auto">
          <Text textAlign="center" m="15% auto 0" fontWeight="bold" fontSize="5xl">
            Welcome Back!
          </Text>
          <VStack spacing="1rem" w="full" pt="3rem">
            <form onSubmit={handleSubmit}>
              <FormControl as='fieldset'>
                <Input
                  type="email"
                  placeholder="Email*"
                  focusBorderColor="#ECEFF6"
                  required={true}
                >
                </Input>
                <FormHelperText mb={{base: "10%", md: "10%", lg: "7%"}} opacity="0.5">
                  This is a sample app with no email verification, dummy emails allowed.
                </FormHelperText>
                <Input
                  type="password"
                  placeholder="Password*"
                  focusBorderColor="#ECEFF6"
                  required={true}
                >
                </Input>
                <FormHelperText mb="5%" opacity="0.5">
                  No password rule, just some random stuff you can easily remember.
                </FormHelperText>
                <Button 
                  display="flex" 
                  m="10% auto" 
                  w={{base: "90%", md: "50%"}} 
                  h="50px" background="green.logo" 
                  color="white" 
                  fontSize="20px"
                  type="submit"
                >
                  Sign in
                </Button>
                <Text 
                  m={{base: "5% auto", md: "5% 0 0 20%"}} 
                  textAlign={{ base: "center", md: "initial"}}
                >
                  Don't have an account? 
                  <Link ml=".2rem" color="green.logo"
                    onClick={() => {
                      navigate('/auth', {
                        state: {
                          route: "signup",
                        },
                        replace: true
                      })
                      navigate(0);
                    }}
                  >Sign up!</Link>
                </Text>
              </FormControl>
            </form>
          </VStack>
        </Box>
      </Fragment>
  )
}
