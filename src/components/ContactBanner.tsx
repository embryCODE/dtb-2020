import React from 'react'
import { Grid, Link, Text } from '@theme-ui/components'

const ContactBanner: React.FC = () => {
  return (
    <Grid
      columns={[1, 1, 3]}
      gap={1}
      px={3}
      py={2}
      color="textDark"
      bg="backgroundLight"
      sx={{ fontSize: 11, textAlign: 'center' }}
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
    </Grid>
  )
}

export default ContactBanner
