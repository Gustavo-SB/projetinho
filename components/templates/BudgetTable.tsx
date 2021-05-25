import {
  Box,
  Flex,
  Heading,
  IconButton,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Text,
  TableCaption,
  Stack,
  HStack,
  VStack,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { TableBudget } from '../organisms/TableBudget';

export function BudgetTable() {
  return (
    <Box>
      <TableBudget />
    </Box>
  );
}
