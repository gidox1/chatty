import { Box } from "@chakra-ui/react"
import { Fragment } from "react"
import bg from '../assets/mainbg-ed.png';
import { Sidebar } from "../config/theme/components/Sidebar";
import { SearchBar } from "../config/theme/components/SearchBar";
import { Message } from "../config/theme/components/UserList";

export const Chat = () => {
  return (
    <Fragment>
      <Box display="flex" h={window.innerHeight} w="100%" margin="auto" bgImage={bg} overflowY="hidden">
        <Box display="flex" m="auto" h="85%" w="80%" background="green.chat">
          <Box w="12%" display={{base: "none", md: "flex"}}>
            <Sidebar/>
          </Box>
          <Box 
            w={{base: "100%", md: "88%"}} 
            borderRadius={{
              base: "initial",
              md: "30px 0 0 30px",
              lg: "70px 0 0 70px"
            }}
            background="white"
          >
            <Box 
              display="flex" 
              flexDirection="column" 
              w="35%" 
              h="100%" 
              background="gray.light"
              borderRadius={{
                base: "initial",
                md: "30px 0 0 30px",
                lg: "40px 0 0 40px"
              }}
            >
              <SearchBar/>
              <Message/>
            </Box>
          </Box>
        </Box>
      </Box>
    </Fragment>
  )
}