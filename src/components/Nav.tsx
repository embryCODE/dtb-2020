import React from 'react'
import { Box, Flex, NavLink } from '@theme-ui/components'
import { graphql, useStaticQuery, Link } from 'gatsby'
import theme from '../gatsby-plugin-theme-ui'

const Nav: React.FC = () => {
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

  return (
    <Flex
      as="nav"
      sx={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: [1, 1, 2],
        flexDirection: ['column', 'row'],
      }}
    >
      {menuLinks.map(
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
              <NavLink as="span" color="inherit" mt={[1, 0]}>
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
      )}
    </Flex>
  )
}

export default Nav
