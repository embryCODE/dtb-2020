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
      sx={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}
    >
      <NavLink href="#!">home</NavLink>

      {verticalSeparator}

      <NavLink href="#!">about</NavLink>

      {verticalSeparator}

      <NavLink href="#!">songs</NavLink>

      {verticalSeparator}

      <NavLink href="#!">packages</NavLink>

      {verticalSeparator}

      <NavLink href="#!">videos</NavLink>

      {verticalSeparator}

      <NavLink href="#!">contact</NavLink>
    </Flex>
  )
}

export default Nav
