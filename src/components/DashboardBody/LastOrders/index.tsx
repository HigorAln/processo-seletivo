import {Flex, Text, Avatar, Icon, Table, Thead, Tbody, Tr, Td, Th} from '@chakra-ui/react'
import {BsFillFileEarmarkTextFill, BsPencil} from 'react-icons/bs'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface IUser {
  id:number;
  name: string;
  avatar_url: string;
  email: string;
  data: string;
  hora: string;
  number: number;
  method: string;
}

export function LastOrders(){
  const [list, setList] = useState<IUser[]>([])

  useEffect(()=>{
    axios.get<IUser[]>('/api/users')
      .then(r=> setList(r.data))
  },[])

  return(
    <Flex flexDir="column" bg="white" mt="30px" borderRadius='10px' boxShadow="0 0 10px #ddd">
      <Text fontSize="25px" fontWeight='600' color="gray.700" p="20px" >Ultimos pedidos Realizados</Text>
      
      <Table w="100%">
        <Thead bg="#ddd">
          <Tr>
            <Th fontSize="14px" textTransform="none">Nome</Th>
            <Th fontSize="14px" textTransform="none">Email</Th>
            <Th fontSize="14px" textTransform="none">Data</Th>
            <Th fontSize="14px" textTransform="none">Horario</Th>
            <Th fontSize="14px" textTransform="none">N° do Pedido</Th>
            <Th fontSize="14px" textTransform="none">Método de Pagamento</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody w="100%">
          {list.map((user: IUser) => (
            <Tr my="4px" key={user.id}>
              <Td d="flex" align='center'>
                <Avatar src={user.avatar_url} size="sm" />
                <Text mt="8px" ml="10px">{user.name}</Text>
              </Td>
              <Td>{user.email}</Td>
              <Td>{user.data}</Td>
              <Td>{user.hora}</Td>
              <Td>{user.number}</Td>
              <Td d="flex" >
                <Text mr="10px">{user.method}</Text>
              </Td>
              <Td>
                <Flex>
                  <Icon as={BsPencil} mr="15px" ml="-40px" fontSize="18px" cursor="pointer" _hover={{opacity:"0.7"}}/>
                  <Icon as={BsFillFileEarmarkTextFill} fontSize="18px"  cursor="pointer" _hover={{opacity:"0.7"}}/>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  )
}