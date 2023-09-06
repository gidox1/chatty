import { Box } from '@chakra-ui/react';
import { Fragment } from 'react';
import { MainLayoutProps } from '../layouts/MainLayout';

const ContentLayout = ({ children }: MainLayoutProps) => {
  return (
    <Fragment>
      <Box w="80%" display="flex" h="80%" m="auto">
        <Box h={{base: "650px", "2xl": "800px"}} w="100%" background="white" display="flex" flexDirection="column">
          {children}
        </Box>
      </Box>
    </Fragment>
  )
}

export default ContentLayout