import { Box, Button, Text, Input, VStack, FormControl, Link } from "@chakra-ui/react"
import { Fragment } from "react"
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const handleSubmit = () => navigate('/chat');

  return (
      <Fragment>
        <Box w="80%" h="80%" display="flex" flexDirection="column" m="10% auto">
          <Text textAlign="center" m="15% auto 0" fontWeight="bold" fontSize="5xl">
            Welcome!
          </Text>
          <VStack spacing="3rem" w="full" pt="3rem">
            <form onSubmit={handleSubmit}>
              <FormControl as='fieldset'>
                <Input
                  type="text"
                  name="email"
                  placeholder="Email*"
                  focusBorderColor="#ECEFF6"
                  required={true}
                  mb="1rem"
                >
                </Input>
                <Input
                  type="text"
                  name="username"
                  placeholder="Username*"
                  focusBorderColor="#ECEFF6"
                  required={true}
                  mb="1rem"
                >
                </Input>
                <Input
                  type="password"
                  name="password"
                  placeholder="Password*"
                  focusBorderColor="#ECEFF6"
                  required={true}
                  mb="1rem"
                >
                </Input>
                <Button 
                  display="flex" 
                  m="10% auto" 
                  w={{base: "90%", md: "50%"}} 
                  h="50px" background="green.logo" 
                  color="white" 
                  fontSize="20px"
                  type="submit"
                >
                  Sign up
                </Button>
                <Text 
                  m={{base: "5% auto", md: "5% 0 0 20%"}} 
                  textAlign={{ base: "center", md: "initial"}}
                >
                  Already have an account? 
                  <Link ml=".2rem" color="green.logo"
                      onClick={() => {
                        navigate('/auth', {
                          state: {
                            route: undefined,
                          },
                          replace: true
                        })
                        navigate(0);
                      }}
                    >Sign in!</Link>
                </Text>
              </FormControl>
            </form>
          </VStack>
        </Box>
      </Fragment>
  )
}
