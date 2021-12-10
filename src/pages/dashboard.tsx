import { Sidebar } from "../components/Sidebar";
import { Flex } from '@chakra-ui/react'
import { DashboardBody } from '../components/DashboardBody/index';

export default function Dashboard() {
  return (
    <Flex h="100%">
      <Sidebar />
      <DashboardBody />
    </Flex>
  )
}
