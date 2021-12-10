import { Flex, Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex d="grid" placeItems="center" h="100vh" w="100%" bg="gray.200">  
      <Flex h="400px" w="400px" justify='center' align='center'>
        <Button w="200px" p="20px" fontSize="20px" color="yellow.600" bg="gray.700" _hover={{opacity: '0.8'}}>Enter with Github</Button>
      </Flex>
    </Flex>
  )
}
