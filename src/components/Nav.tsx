import React, { useState } from 'react'
import { Box, Flex, MenuButton, NavLink } from '@theme-ui/components'
import { graphql, useStaticQuery, Link } from 'gatsby'
import theme from '../gatsby-plugin-theme-ui'
import AnimateHeight from 'react-animate-height'

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  const menuLinks = data.site.siteMetadata.menuLinks

  const handleMenuClick = () => {
    setIsOpen(!isOpen)
  }

  const links = menuLinks.map(
    ({ name, link }: { name: string; link: string }, i: number) => (
      <React.Fragment key={i}>
        <Link
          to={link}
          getProps={({ isCurrent }) => ({
            style: {
              color: isCurrent ? theme.colors.primary : 'white',
            },
          })}
        >
          <NavLink
            as="span"
            color="inherit"
            mt={[1, 0]}
            sx={{ fontSize: [2, 2, 3] }}
          >
            {name}
          </NavLink>
        </Link>

        {i < menuLinks.length - 1 && (
          <Box
            mx={3}
            sx={{
              flexShrink: 0,
              height: 50,
              display: ['none', 'inline-block'],
              borderRight: theme => `solid 1px ${theme.colors.textDarker}`,
            }}
          />
        )}
      </React.Fragment>
    )
  )

  return (
    <Box p={[0, 3]} sx={{ position: 'relative' }}>
      <MenuButton
        sx={{
          cursor: 'pointer',
          display: ['block', 'none'],
          position: 'absolute',
          top: 2,
          left: 2,
        }}
        onClick={handleMenuClick}
      />

      {/* LARGE LINKS*/}
      <Box sx={{ display: ['none', 'block'] }}>
        <Flex
          as="nav"
          sx={{
            py: 3,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: [1, 1, 2],
            flexDirection: ['column', 'row'],
          }}
        >
          {links}
        </Flex>
      </Box>

      {/*  SMALL LINKS */}
      <Box sx={{ display: ['block', 'none'] }}>
        <AnimateHeight duration={500} height={isOpen ? 'auto' : 0}>
          <Flex
            as="nav"
            sx={{
              py: 3,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: [1, 1, 2],
              flexDirection: ['column', 'row'],
              bg: 'black',
            }}
          >
            {links}
          </Flex>
        </AnimateHeight>
      </Box>
    </Box>
  )
}

export default Nav
