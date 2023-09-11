import { Box, VStack } from "@chakra-ui/react"
import { Fragment } from "react"
import { Card } from "./Card";

export const Message = () => {
  return (
    <Fragment>
      <VStack spacing="3rem" w="full" h="full">
        <Box 
          display="flex" 
          gap="1rem" 
          flexDirection="column" 
          w="90%" 
          h="100%"
        >
          <Card/>
        </Box>
      </VStack>
    </Fragment>
  )
}
