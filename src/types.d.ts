declare module '@theme-ui/presets' {
  import { Theme } from 'theme-ui'

  const presets: Record<'base', Theme>

  export = presets
}

// TODO: Get the real types for components
declare module '@theme-ui/components'
