import React from 'react'
import { Box, Link, IconButton, Image, Flex } from '@theme-ui/components'
import weddingWire from '../assets/images/weddingwire.svg'
import Nav from './Nav'

const Footer: React.FC = () => {
  return (
    <Box
      bg="black"
      pt={4}
      pb={3}
      px={3}
      as="footer"
      sx={{ textAlign: 'center' }}
    >
      <Box
        mx="auto"
        sx={{
          maxWidth: 650,
          display: ['none', 'block'],
        }}
      >
        <Nav />
      </Box>

      <Flex
        mt={5}
        mx="auto"
        sx={{
          width: 200,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Link href="https://www.facebook.com/thedowntownband" target="_blank">
          <IconButton color="textDark" sx={{ cursor: 'pointer' }}>
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="currentcolor"
            >
              <title>Facebook icon</title>
              <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
            </svg>
          </IconButton>
        </Link>

        <Link href="https://www.youtube.com/thedowntownband" target="_blank">
          <IconButton color="textDark" sx={{ cursor: 'pointer' }}>
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              fill="currentcolor"
            >
              <title>YouTube icon</title>
              <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
            </svg>
          </IconButton>
        </Link>

        <Link
          href="https://www.linkedin.com/pub/justin-caldwell/34/505/404"
          target="_blank"
        >
          <IconButton color="textDark" sx={{ cursor: 'pointer' }}>
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="currentcolor"
            >
              <title>LinkedIn icon</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </IconButton>
        </Link>
        <Link
          href="http://www.weddingwire.com/biz/the-downtown-band/d9121df3a5650432.html"
          target="_blank"
        >
          <Image src={weddingWire} alt="WeddingWire icon" sx={{ height: 24 }} />
        </Link>
      </Flex>

      <Box mt={2} sx={{ fontSize: 11 }}>
        © {new Date().getFullYear()} The Downtown Band |{' '}
        <Link href="http://embrycode.com">embrycode</Link>
      </Box>
    </Box>
  )
}

export default Footer
