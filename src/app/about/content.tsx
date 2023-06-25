'use client'

import { Flex, Heading, Text } from "@chakra-ui/react";

export default function Content() {
  return (
    <Flex flex={1} bgColor="green" flexDirection="column" alignItems="center" justifyContent="center">
      <Heading as="h1" size="xl" mb={4}>Quem somos</Heading>
      <Text fontSize="lg" textAlign="center">O projeto é uma solução consiste na criação de uma site que irá auxiliar o centro Crenvi no processo de recuperação de dependentes químicos. O objetivo principal é proporcionar um ambiente virtual para que o centro de reabilitação e os pacientes possam acompanhar seu progresso durante a terapia, além de oferecer aos funcionários da organização uma ferramenta para assessorar os pacientes durante o processo.</Text>
    </Flex>
  )
}



