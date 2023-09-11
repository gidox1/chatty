export const colors = {
  body: '#1a1a1a',
  black: '#1a1a1a',
  white: '#ffffff',
  primary: {
    100: '#B3D3FF',
    500: '#0C206A',
  },
  gray: {
    50: '#F8F9FA',
    100: '#F2F3F5',
    300: '#F9F9FD',
    400: '#F4F6FB',
    500: '#4A4A4A',
    700: '#666E79',
    900: '#33373C',
    light: '#F9F9F9',
    border: '#ECECEC',
    font: '#4E4E4E',
    bg: '#F2F2F2'
  },
  green: {
    logo: '#44CC76',
    chat: '#2E9054',
    bg: '#4AAA7D'
  },
}
export const getBgColor = (): string => {
  const defaultColors = [
    'gray',
    'yellow',
    'blue',
    'pink'
  ];
  const index = ~~(Math.random() * 3);
  return defaultColors[index];
}
export type ColorProps = typeof colors
