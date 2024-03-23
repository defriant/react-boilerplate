import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    fonts: {
        heading: '"Poppins", sans-serif',
        body: '"Poppins", sans-serif',
        mono: '"Poppins", sans-serif',
    },
    breakpoints: {
        xs: '414px',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
    },
})
