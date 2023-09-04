import { ComponentStyleConfig } from '@chakra-ui/theme'

export const Button: ComponentStyleConfig = {
  baseStyle: {
    bg: '#1C348A',
    fontWeight: 'bold',
    borderRadius: 24,
    color: 'white',
  },
  sizes: {
    sm: {
      fontSize: 'md',
      height: '34px',
    },
  },
  variants: {
    primary: {
      bg: '#1C348A',
      color: 'white',
      px: '2rem',
    },
    link: {
      _hover: {
        textDecoration: 'none',
      },
    },
  },
}
