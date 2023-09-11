import { Box, Input, Image } from "@chakra-ui/react";
import { Fragment } from "react";
import searchIcon from '../../../assets/search.png';

export const SearchBar = () => {
  return (
    <Fragment>
      <Box
        display="flex" 
        flexDirection="row" 
        h="7%" 
        w="90%" 
        m="10% auto" 
        borderRadius="30px" 
        border="1px solid #ECECEC" 
        background="white" 
        boxShadow="0 0 1px 1.5px #ECECEC;"
      >
        <Image 
          src={searchIcon} 
          h="50%"
          m="auto 4%"
        >
        </Image>
        <Input 
          h="100%" 
          w="90%" 
          borderRadius="30px" 
          border="none" 
          placeholder="search by name" 
          _placeholder={{color: 'gray.font', opacity: '0.6'}} 
          focusBorderColor="white"
          fontSize="15px"
        >
        </Input>
      </Box>
    </Fragment>
  )
}