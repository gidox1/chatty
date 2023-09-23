import { Box } from "@chakra-ui/react"
import { Fragment } from "react"
import { Card } from "./Card";

export const Message = () => {
  return (
    <Fragment>
      <Box 
        display="flex" 
        gap="1rem" 
        flexDirection="column" 
        w="95%" 
        h="100%"
        overflowY="auto"
        maxHeight="100%"
      >
        <Card/>
      </Box>
    </Fragment>
  )
}
