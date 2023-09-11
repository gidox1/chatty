import { Box, Text } from "@chakra-ui/react"
import { Fragment, useState } from "react"

export const Sidebar = () => {
  const [username] = useState<string>("Gidox");

  return (
    <Fragment>
      <Box display="flex" m="auto" w="100%" h="90%">
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
      </Box>
    </Fragment>
  )
}