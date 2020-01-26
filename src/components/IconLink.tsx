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
        }}
      />
    </Link>
  )
}

export default IconLink
