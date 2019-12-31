import { base } from '@theme-ui/presets'

export default {
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
    text: 'hsl(0, 0%, 86%)',
    textDark: 'hsl(0, 0%, 36%)',
    textDarker: 'hsl(0, 0%, 16%)',
    background: 'black',
    backgroundLight: 'rgb(248,248,248)',
    primary: 'hsl(193, 80%, 50%)',
    primaryDark: 'hsl(193, 80%, 36%)',
    secondary: 'hsl(293, 56%, 36%)',
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
