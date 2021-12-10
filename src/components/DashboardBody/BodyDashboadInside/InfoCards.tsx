import  { Flex} from '@chakra-ui/react'
import { CardGrid } from './CardGrid'
import { AiTwotoneShop } from 'react-icons/ai'
import {HiUserGroup} from 'react-icons/hi'
import { BsBank, BsFillFileCheckFill } from 'react-icons/bs'

export function InfoCards(){
  return(
    <Flex w="100%" mt="30px" justifyContent="space-between">
      <CardGrid icon={AiTwotoneShop} title="Unidades Registradas" qtde={1}/>
      <CardGrid icon={HiUserGroup} title="Novos Cliente" qtde={104}/>
      <CardGrid icon={BsFillFileCheckFill} title="Vendas Realizadas" qtde={7270}/>
      <CardGrid icon={BsBank} title="Lucro Liquido (Geral)" qtde={`R$ 427.300,50`}/>
    </Flex>
  )
}