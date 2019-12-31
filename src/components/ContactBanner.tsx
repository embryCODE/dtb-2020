import React from 'react'
import { Flex, Link, Text } from '@theme-ui/components'

const ContactBanner: React.FC = () => {
  return (
    <Flex
      py={2}
      color="textDark"
      bg="backgroundLight"
      sx={{ justifyContent: 'space-around', fontSize: 11 }}
    >
      <Text sx={{ fontWeight: 700 }}>
        email:{' '}
        <Link color="primaryDark" href="mailto: booking@thedowntownband.com">
          booking@thedowntownband.com
        </Link>
      </Text>

      <Text sx={{ fontWeight: 700 }}>
        phone:{' '}
        <Link color="primaryDark" href="tel: 615.200.8696">
          615.200.TOWN (8696)
        </Link>
      </Text>

      <Text sx={{ fontWeight: 700 }}>
        Corporate Events • Private Parties • Weddings
      </Text>
    </Flex>
  )
}

export default ContactBanner
