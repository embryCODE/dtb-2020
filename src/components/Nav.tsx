import React from 'react'
import { Box, Flex, NavLink } from '@theme-ui/components'

const verticalSeparator = (
  <Box
    mx={3}
    sx={{
      flexShrink: 0,
      height: 50,
      display: 'inline-block',
      borderRight: theme => `solid 1px ${theme.colors.textDarker}`,
    }}
  />
)

const Nav: React.FC = () => {
  return (
    <Flex
      as="nav"
      sx={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: [1, 2],
      }}
    >
      <NavLink href="#!" color="white" sx={{ letterSpacing: 'normal' }}>
        home
      </NavLink>

      {verticalSeparator}

      <NavLink href="#!" color="white" sx={{ letterSpacing: 'normal' }}>
        about
      </NavLink>

      {verticalSeparator}

      <NavLink href="#!" color="white" sx={{ letterSpacing: 'normal' }}>
        songs
      </NavLink>

      {verticalSeparator}

      <NavLink href="#!" color="white" sx={{ letterSpacing: 'normal' }}>
        packages
      </NavLink>

      {verticalSeparator}

      <NavLink href="#!" color="white" sx={{ letterSpacing: 'normal' }}>
        videos
      </NavLink>

      {verticalSeparator}

      <NavLink href="#!" color="white" sx={{ letterSpacing: 'normal' }}>
        contact
      </NavLink>
    </Flex>
  )
}

export default Nav
