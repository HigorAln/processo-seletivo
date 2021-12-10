import  { Flex} from '@chakra-ui/react'
import { InfoCards } from './InfoCards'
import { LastOrders } from '../LastOrders'
import { SalesReport } from './SalesReport'
import { SalesReportWeekly } from './SalesReportWeekly'
import { SalesReportMonthly } from './SalesReportMonthly';


export function BodyDashboadInside(){
  return(
    <Flex flexDir="column">
      <InfoCards />
      <SalesReport />
      <Flex w="100%" mt="20px" justifyContent='space-between'>
        <SalesReportWeekly />
        <SalesReportMonthly />
      </Flex>
      <LastOrders />
    </Flex>
  )
}