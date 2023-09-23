import { Box, Text } from "@chakra-ui/react"
import { Fragment, useState } from "react"

export const Sidebar = () => {
  const [username] = useState<string>("Gidox");

  return (
    <Fragment>
      <Box display="flex" m="auto" w="100%" h="90%" flexDirection="column">
        <Box 
          m="10px auto" border="2px solid white" 
          h={{base: "initial", md: "13.5%", lg: "14%", xl: "16%"}}
          w={{base: "initial", md: "95%", lg: "70%"}} 
          borderRadius="50%" 
          background={"orange"}
        >
          <Text textAlign="center" fontSize={{base: "5xl", md: "6xl", lg: "7xl", "2xl": "8xl"}} fontWeight="bold">
            {username.charAt(0).toLocaleUpperCase()}
          </Text>
        </Box>
        <Box display="flex" w="full" h="full" border="1px solid red">
          <Box display="flex" border="1px solid yellow" flexDirection="column" w="100%" h="50%" m="auto 0">
            <Box border="1px solid red" height="50%" w="100%">

            </Box>
            <Box border="1px solid red" height="50%" w="100%">

            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  )
}
