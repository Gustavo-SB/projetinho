// eslint-disable-next-line object-curly-newline
import { Box, Flex, Heading, IconButton, Button } from '@chakra-ui/react';
import { FiPrinter, FiFilter, FiSearch } from 'react-icons/fi';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

export function BudgetHeader() {
  return (
    <Box mx={4} mb="0.8rem">
      <Flex alignItems="flex-end" justifyContent="space-between">
        <Flex alignItems="flex-end" justifyContent="center">
          <Flex alignItems="center" justifyContent="center">
            <IconButton
              aria-label="voltar"
              icon={<MdKeyboardArrowLeft />}
              colorScheme="blue"
              variant="ghost"
            />
            <p>1 de 3</p>
            <IconButton
              aria-label="avancar"
              icon={<MdKeyboardArrowRight />}
              colorScheme="blue"
              variant="ghost"
            />
          </Flex>
          <Heading as="h1" size="lg" mt={6} textTransform="capitalize">
            Produto - Qtde - Tag
          </Heading>
        </Flex>
        <Flex>
          <IconButton
            aria-label="imprimir"
            icon={<FiPrinter />}
            colorScheme="blue"
            variant="ghost"
          />
          <IconButton
            aria-label="filtro"
            icon={<FiFilter />}
            colorScheme="blue"
            variant="ghost"
          />
          <Button leftIcon={<FiSearch />} colorScheme="blue" variant="ghost">
            Pesquisa
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
