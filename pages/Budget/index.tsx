import { Box, Heading, Flex } from '@chakra-ui/react';
import { NavBar } from '../../components/organisms/NavBar';
import { Header } from '../../components/organisms/Header';
import { BudgetTable } from '../../components/templates/BudgetTable';

export function Budget() {
  return (
    <Flex>
      <NavBar />
      <Box ml="56" w="100%" overflow="hidden">
        <Header />
        <BudgetTable />
      </Box>
    </Flex>
  );
}
