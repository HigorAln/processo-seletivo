import { Icon, Flex, Input} from '@chakra-ui/react'
import { RiSearch2Line } from 'react-icons/ri'

export function SearchBox(){
  return(
    <Flex
      as='label'
      flex='1'
      py='2'
      px='5'
      maxW={400}
      bg="white"
      alignSelf="center"
      position="relative"
      borderRadius="full"
    >
      <Icon as={RiSearch2Line} fontSize="20"/>
      <Input
        color='gray.700'
        variant="unstyled"
        placeholder="Pesquisar"
        px='4'
        mr='4'
        _placeholder={{color:'gray.400'}} 
        />
      
    </Flex>
  )
}