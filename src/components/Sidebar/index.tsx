import { Flex, Text, Icon, Button } from '@chakra-ui/react'
import { BiLogOutCircle } from 'react-icons/bi'
import {BsSunglasses} from 'react-icons/bs'
import {AiFillFileAdd, AiFillDollarCircle, AiFillDashboard} from 'react-icons/ai'
import {GrGroup} from 'react-icons/gr'
import { signOut, useSession } from 'next-auth/react'

export function Sidebar() {
  const {data: session} = useSession()
  return (
    <Flex w="200px" boxShadow="0 0 10px #bbb" flexDir="column" pt="30px" zIndex="1000">
      <Text color='yellow.500' alignSelf='center' fontSize="35px" fontWeight='600' mb="30px">Logo</Text>
      <Flex flexDir="column" w="100%" pl="20px" fontSize="20px" fontWeight='500' letterSpacing='1px' h="80%">
        <Text color="yellow.500" my="15px" cursor="pointer" _hover={{opacity:"0.7"}} transition='all 0.3s'>
          <Icon as={AiFillDashboard} fontSize='17px' mr="10px"/>
          Dashboard
        </Text>
        <Text color="gray.600" my="15px"  cursor="pointer" _hover={{opacity:"0.7"}} transition='all 0.3s'>
          <Icon as={AiFillFileAdd} fontSize='17px' mr="10px"/>
          Pedidos
        </Text>
        <Text color="gray.600" my="15px"  cursor="pointer" _hover={{opacity:"0.7"}} transition='all 0.3s'>
          <Icon as={BsSunglasses} fontSize='17px' mr="10px"/>
          Produtos
        </Text>
        <Text color="gray.600" my="15px"  cursor="pointer" _hover={{opacity:"0.7"}} transition='all 0.3s'>
          <Icon as={GrGroup} fontSize='17px' mr="10px"/>
          Clientes
        </Text>
        <Text color="gray.600" my="15px"  cursor="pointer" _hover={{opacity:"0.7"}} transition='all 0.3s'>
          <Icon as={AiFillDollarCircle} fontSize='17px' mr="10px"/>
          Financeiro
        </Text>
      </Flex>
      <Flex px="15px">
        {session && (
          <Button
            bg="transparent"
            fontSize='18px'
            d="flex"
            align='center'
            textAlign='center'
            py="10px"
            onClick={()=> signOut()}
            cursor="pointer"
            position='fixed'
            top="90vh"
            left="40px"
          >
            <Icon as={BiLogOutCircle} fontSize="25px" mr="10px"/>
            Sair
          </Button>
        )}
      </Flex>
    </Flex>
  )
}