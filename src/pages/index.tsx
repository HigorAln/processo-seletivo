import { Flex, Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function Home() {
  return (
    <Flex w="100%" h="100vh" justifyContent='center' align='center' flexDir="column">
    <h1>no have nothing here...</h1>
    <h3>access /dashboard or 
      <Link href="/dashboard">
        <a style={{color:'blue'}}> click here</a>
      </Link>
    </h3>
    
    </Flex>
  )
}
