import { base } from '@theme-ui/presets'

const theme = {
  ...base,
  fonts: {
    body: 'Verdana, Helvetica, sans-serif',
    heading: 'Verdana, Helvetica, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    ...base.colors,
    text: 'hsl(0, 0%, 92%)',
    textDark: 'hsl(0, 0%, 36%)',
    textDarker: 'hsl(0, 0%, 16%)',
    background: 'black',
    backgroundLight: 'rgb(248,248,248)',
    primary: 'hsl(193, 80%, 50%)',
    primaryDark: 'hsl(193, 80%, 36%)',
    secondary: 'hsl(293, 56%, 36%)',
  },
  buttons: {
    primary: {
      fontWeight: 'bold',
      color: 'white',
      bg: 'primary',
      transition: 'all .2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
    secondary: {
      fontWeight: 'bold',
      color: 'white',
      bg: 'secondary',
      transition: 'all .2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
    tertiary: {
      fontWeight: 'bold',
      color: 'white',
      bg: 'black',
      transition: 'all .2s ease-in-out',
      '&:hover': {
        bg: '#1b1b1b',
        transform: 'scale(1.05)',
      },
    },
  },
  links: {
    nav: {
      fontFamily: 'Caviar Dreams, serif',
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
      color: 'text',
      backgroundColor: 'background',
    },
    a: {
      color: 'primary',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
}

export default theme
