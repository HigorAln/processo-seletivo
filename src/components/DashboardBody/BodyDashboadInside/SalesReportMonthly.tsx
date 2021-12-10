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
      "2020-07-15T:00:00.000Z",
      "2020-08-15T:00:00.000Z",
      "2020-09-15T:00:00.000Z",
      "2020-10-15T:00:00.000Z",
      "2020-11-15T:00:00.000Z",
      "2020-12-15T:00:00.000Z",
    ],
  },
  stroke: {
    curve:"smooth",
    colors: ["#BF991B"]  
  },
  fill : {
    opacity: 0.3,
  }
}

const series = [
  { name: "Series1", data: [ 
    "150,00",
    "260,00",
    "180,00",
    "220,00",
    "170,00",
    "300,00",
  ] },
]

export function SalesReportMonthly() {
  return (
    <Flex w="47%" flexDir="column" bg="white" boxShadow="0 0 10px #ccc" borderRadius="10px">
      <Flex justifyContent="space-between" px="20px">
        <Text p="15px" fontSize="24px" fontWeight="400">R$ 27.000,00</Text>
        <Text p="15px" fontSize="16px" color="gray">Relatório de Vendas Mensal</Text>
      </Flex>
      <Chart options={options} series={series} type='line' height={250} width="550px"/>
    </Flex>
  )
}