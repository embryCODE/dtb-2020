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
        fontSize: [0, 1, 2],
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
              <NavLink as="span" color="inherit">
                {name}
              </NavLink>
            </Link>

            {i < menuLinks.length - 1 && (
              <Box
                mx={3}
                sx={{
                  flexShrink: 0,
                  height: 50,
                  display: 'inline-block',
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
