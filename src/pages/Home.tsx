import { Center, Stack, Text } from '@chakra-ui/react'
import ExampleComponent from '@components/Example'

function Home() {
    return (
        <Center h='100vh'>
            <Stack
                spacing='2rem'
                align='center'
            >
                <Text
                    fontSize='xl'
                    fontWeight='semibold'
                >
                    Home Page
                </Text>
                <ExampleComponent />
            </Stack>
        </Center>
    )
}

export default Home
