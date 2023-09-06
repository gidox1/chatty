import { Box, Image } from "@chakra-ui/react"
import ContentLayout from "../layouts/Content"
import MainLayout from "../layouts/MainLayout"
import { Login } from "./Login"
import bg from '../assets/bgnew.png'

export const Auth = () => {
  return (
    <MainLayout>
      <ContentLayout>
        <Box w="100%" h="100%" position="relative" display="flex">
            <Box w={{base: "100%", md: "100%", lg: "40%"}} h="90%" m="auto 2%">
              <Login/>
            </Box>
            <Box display={{base: "none", md: "none", lg: "flex"}} m="auto 1%" w="52%" h="90%" background="green.logo" borderRadius="5%">
              <Image
                src={bg}
                width="100%"
                h="85%"
                m="8% 0"
              >
              </Image>
            </Box>
          </Box>
      </ContentLayout>
    </MainLayout>
  )
}
