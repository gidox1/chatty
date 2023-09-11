import { Box } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import bg from '../assets/bg.jpg';

export interface MainLayoutProps {
    children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <Fragment>
      <Box display="flex" h={window.innerHeight} w="100%" margin="auto" bgImage={bg} overflowY="hidden">
          {children}
      </Box>
    </Fragment>
  )
}

export default MainLayout