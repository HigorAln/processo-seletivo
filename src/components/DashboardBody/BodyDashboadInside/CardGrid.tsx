import {Flex, Icon, Text} from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

interface ICardGridProps {
  icon: IconType;
  title: String;
  qtde: number | string;
}

export function CardGrid({icon, title, qtde}: ICardGridProps){
  return(
    <Flex
      w="290px"
      h="6rem"
      borderRadius="10px"
      bg="white"
      boxShadow="0 0 10px #ddd"
      p='17px'
      justifyContent="center"
      align="center"
    >
      <Flex
        color="yellow.500"
        mr="20px"
      >
        <Icon as={icon} fontSize="45px"/>
      </Flex>
      <Flex flexDir="column">
        <Text fontWeight="500" letterSpacing="0.5px">{title}</Text>
        <Text color="yellow.500" fontSize="20px">{qtde}</Text>
      </Flex>
    </Flex>
  )
}