import { Flex, Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts'

const Chart = dynamic(()=> import('react-apexcharts'), {
  ssr: false,
})

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: "#777",
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: "#777"
    },
    axisTicks:{
      color: "#777"
    },
    categories: [
      "2020-08-18T:00:00.000Z",
      "2020-09-18T:00:00.000Z",
      "2020-10-18T:00:00.000Z",
      "2020-11-18T:00:00.000Z",
      "2020-12-18T:00:00.000Z",
      "2021-01-18T:00:00.000Z",
      "2021-02-18T:00:00.000Z",
      "2021-03-18T:00:00.000Z",
      "2021-04-18T:00:00.000Z",
      "2021-05-18T:00:00.000Z",
      "2021-06-18T:00:00.000Z",
      "2021-07-18T:00:00.000Z"
    ],
  },
  fill : {
    opacity: 0.3,
  }
}

const series = [
  { name: "Series1", data: [ 150,180,120,230,203, 302, 300, 403,203, 300, 120, 9] },
  { name: "Series3", data: [ 203,203, 32, 42, 120, 29, 300, 203, 320, 203, 10, 200] }
]


export function SalesReport(){
  return(
    <Flex w="100%" bg="white" borderRadius="10px" boxShadow='0 0 10px #ccc' mt="20px" flexDir="column">
      <Flex justifyContent="space-between">
        <Text p="20px" fontSize="20px">Relatório de vendas</Text>
        <Flex mr="30px" justifyContent="space-between" align="center">
          <Flex d="flex" mr="20px">
            <Text color="purple.700" mr="10px">---</Text>
            <Text>Vendas de 2020</Text>
          </Flex>
          <Flex d="flex">
            <Text color="green.200" mr="10px">---</Text>
            <Text> Vendas de 2021</Text>
          </Flex>
        </Flex>
      </Flex>
      <Chart options={options} series={series} type='area' height={400} width="1200px"/>
    </Flex>
  )
}