import React from 'react'
import { Image, ImageProps, Link } from '@theme-ui/components'

interface IconLinkProps extends ImageProps {
  href: string
}
const IconLink: React.FC<IconLinkProps> = ({ href, ...otherProps }) => {
  return (
    <Link href={href}>
      {/*
      // @ts-ignore */}
      <Image
        {...otherProps}
        sx={{
          width: 100,
          height: 'auto',
          cursor: 'pointer',
          filter: 'grayscale(70%)',
          opacity: 0.8,
          '&:hover': { filter: 'grayscale(0)', opacity: 1 },
        }}
      />
    </Link>
  )
}

export default IconLink
