import { extendTheme } from '@chakra-ui/react'

import { colors } from './colors'
import { Button } from './components/Button'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'body',
        fontSize: '15px',
      },
      button: {
        _focus: {
          outline: 'none',
        },
      },
      'h1, h2, h3, h4, h5, h6': {
        color: 'body',
        fontWeight: 'semibold',
      },
      '.nested-scope-list': {
        ol: {
          counterReset: 'item',
        },
        'li > ul': {
          paddingLeft: '30px',
        },
        'ol > li': {
          display: 'block',
          indentStyle: 'inherit',
        },
        'ol > li:before': {
          content: `counters(item, ".") "  "`,
          counterIncrement: 'item',
          fontWeight: 'bold',
        },
      },
    },
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif',
    mono: 'Inter, system-ui, sans-serif',
  },
  colors,
  sizes: {
    gutter: {
      sm: '10px',
      md: '20px',
    },
    layout: {
      appPrompt: '64px',
      pageHeader: '60px',
      contentHeader: '65px',
      stickyHeaderTop: '50px',
      stickyContentTop: '135px',
    },
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.8rem',
    md: '0.875rem',
    lg: '1rem',
    xl: '1.125rem',
    '2xl': '1.25rem',
    '3xl': '1.5rem',
    '4xl': '1.875rem',
    '5xl': '2.25rem',
    '6xl': '3rem',
    '7xl': '3.75rem',
    '8xl': '4.5rem',
    '9xl': '6rem',
    '10xl': '8rem',
  },
  components: {
    Button: Button as unknown,
    Input: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
    },
  },
})
