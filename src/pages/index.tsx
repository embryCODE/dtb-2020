import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import {
  Box,
  Button,
  Grid,
  Heading,
  Link,
  Text,
  Flex,
  Card,
} from '@theme-ui/components'
import { Link as RouterLink } from 'gatsby'
import { APP_MAX_WIDTH } from '../config'
import Videos from '../components/Videos'
import southwest from '../assets/images/southwest-trans.png'
import coke from '../assets/images/coke-trans.png'
import ford from '../assets/images/ford-trans.png'
import frito from '../assets/images/frito-trans.png'
import microsoft from '../assets/images/microsoft-trans1.png'
import nbc from '../assets/images/nbc-trans1.png'
import ritz from '../assets/images/ritz-trans.png'
import IconLink from '../components/IconLink'

const Home = () => (
  <Layout>
    <SEO title="Home" />

    <Box
      mx="auto"
      py={4}
      px={3}
      sx={{
        width: '100%',
        maxWidth: APP_MAX_WIDTH,
      }}
    >
      <Box mx="auto" mt={4} mb={5} sx={{ maxWidth: 800 }}>
        <Videos links={['https://www.youtube.com/embed/I6hmxc4fGXk']} />
      </Box>

      <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <RouterLink
          to="/contact"
          style={{
            color: 'inherit',
            textDecoration: 'none',
            maxWidth: '100%',
          }}
        >
          <Button
            as="div"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 100,
              width: 400,
              fontSize: 4,
              maxWidth: '100%',
            }}
          >
            Contact us!
          </Button>
        </RouterLink>
      </Flex>

      <Text
        mt={5}
        mx="auto"
        sx={{ maxWidth: 800, fontSize: 4, textAlign: 'center' }}
      >
        Voted{' '}
        <Box as="span" color="primary">
          &ldquo;Best Live Band in Tennessee&rdquo;
        </Box>{' '}
        &{' '}
        <Box as="span" color="primary">
          &ldquo;Top 10 Best Live Band in United States&rdquo;
        </Box>{' '}
        three years in a row by The Industry Expert Awards!
      </Text>

      <Grid mt={5} columns={[1, 2]} gap={4}>
        <Card bg="black" p={4} sx={{ fontSize: 4, textTransform: 'uppercase' }}>
          <Heading mb={3} sx={{ textAlign: 'center' }}>
            Performed for
          </Heading>{' '}
          <Link href="http://www.eltonjohn.com/">Elton John</Link>,{' '}
          <Link href="http://www.sting.com/">Sting</Link>,{' '}
          <Link href="https://en.wikipedia.org/wiki/David_Letterman#External_links">
            David Letterman
          </Link>
          , <Link href="http://www.seal.com/">Seal</Link>,{' '}
          <Link href="http://www.jimmyfallon.com/">Jimmy Fallon</Link>,{' '}
          <Link href="https://www.robinthicke.com/">Robin Thicke</Link>,{' '}
          <Link href="https://lanadelrey.com/">Lana Del Rey</Link>,{' '}
          <Link href="https://enriqueiglesias.com/">Enrique Iglesias</Link>,{' '}
          <Link href="https://timmcgraw.com/">Tim McGraw</Link>,{' '}
          <Link href="https://www.rascalflatts.com/">Rascal Flatts</Link>, and
          YOU!
        </Card>

        <Card bg="black" p={4}>
          <Heading
            sx={{
              textAlign: 'center',
              fontSize: '36px',
              textTransform: 'uppercase',
            }}
          >
            Corporate Events
          </Heading>

          <Grid
            mt={4}
            columns={[3, 4]}
            gap={[3, 4]}
            sx={{ alignItems: 'center' }}
          >
            <IconLink
              alt="Southwest Airlines icon"
              src={southwest}
              href="http://www.southwest.com/"
            />
            <IconLink
              alt="Frito Lay icon"
              src={frito}
              href="http://www.fritolay.com/"
            />
            <IconLink
              alt="Coca Cola icon"
              src={coke}
              href="http://coca-cola.com/"
            />
            <IconLink alt="Ford icon" src={ford} href="http://www.ford.com/" />
            <IconLink
              alt="Microsoft icon"
              src={microsoft}
              href="https://www.microsoft.com/"
            />
            <IconLink alt="NBC icon" src={nbc} href="http://www.nbc.com/" />
            <IconLink
              alt="Ritz-Carlton icon"
              src={ritz}
              href="http://www.ritzcarlton.com/"
            />
          </Grid>
        </Card>
      </Grid>
    </Box>
  </Layout>
)

export default Home
