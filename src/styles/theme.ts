import { extendTheme} from '@chakra-ui/react';

export const theme = extendTheme({
  colors:{
    yellow: {
      "600": "#EEB83D"
    },
    gray:{
      "700": "#333",
      "200": "#ddd"
    }
  },
  fonts:{
    heading: 'Fira Sans',
    body: 'Fira Sans'
  },
})