import { Flex } from '@chakra-ui/react'
import { BodyDashboadInside } from './BodyDashboadInside'
import { HeadDashboad } from './HeadDashboad'

export function DashboardBody(){
  return(
    <Flex w="calc(100% - 200px)" px="25px" py="20px" bg="#eee" flexDir="column">
      <HeadDashboad />
      <BodyDashboadInside />
    </Flex>
  )
}