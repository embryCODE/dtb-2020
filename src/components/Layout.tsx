import React from 'react'
import { Styled } from 'theme-ui'
import '../index.css'

import Header from './Header'
import { Box } from '@theme-ui/components'
import Footer from './Footer'
import purpleBG from '../assets/images/purple-bg.jpg'

const Layout: React.FC = ({ children }) => {
  return (
    <Styled.root>
      <Header />

      <Box
        as="main"
        sx={{
          background: `url(${purpleBG}) no-repeat center`,
          backgroundSize: 'cover',
        }}
      >
        {children}
      </Box>

      <Footer />
    </Styled.root>
  )
}

export default Layout
