import { Flex, Box, Button, Avatar, Icon } from '@chakra-ui/react'
import { signIn, useSession } from 'next-auth/react'
import {BiBell} from 'react-icons/bi'
import { SearchBox } from './SearchBox'

export function HeadDashboad(){
  const { data: session } = useSession()
  
  
  return(
    <Flex w="100%" h="3rem" justifyContent="space-between">
      <Box>
        <SearchBox />
      </Box>
      <Flex h="100%"   align='center'>
        {session ? (
          <>
            <Icon as={BiBell} fontSize="32px" mr="15px"/>
            <Avatar src={session.user.image} size="md" border='1px solid #ddd'/>
          </>
        ) : (
          <Button onClick={() => signIn('github')}>Sign in with github</Button>
        )}
      </Flex>
    </Flex>
  )
}