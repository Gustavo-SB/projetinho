// eslint-disable-next-line object-curly-newline
import { IconButton, Tbody, Tr, Td } from '@chakra-ui/react';
import { FiEye } from 'react-icons/fi';
import { Checkbox } from '../../../atoms/Form/Checkbox';

export function TbodyBudget() {
  return (
    <Tbody
      css={{
        td: {
          padding: 0,
        },
      }}
    >
      <Tr>
        <Td textAlign="center" w="1rem">
          <Checkbox name="itemSelector" label="" />
        </Td>
        <Td textAlign="center" w="4rem">
          01
        </Td>
        <Td textAlign="center" w="8.75rem">
          Entrada
        </Td>
        <Td textAlign="center" w="10.313rem">
          A2A22150590110001CBA
        </Td>
        <Td textAlign="center" w="5.25rem">
          01
        </Td>
        <Td textAlign="center" w="8.75rem">
          DISJUNTOR
        </Td>
        <Td textAlign="center" whiteSpace="nowrap" w="8.5rem">
          R$ 1.000.000,00
        </Td>
        <Td textAlign="center" whiteSpace="nowrap" w="8.5rem">
          R$ 451,80
        </Td>
        <Td textAlign="center" w="4.75rem">
          1,35
        </Td>
        <Td textAlign="center" w="5.625rem">
          1.000,00
        </Td>
        <Td textAlign="center" w="8.5rem">
          R$ 451,80
        </Td>
        <Td textAlign="center" w="5.625rem">
          12%
        </Td>
        <Td textAlign="center" w="5.625rem">
          15%
        </Td>
        <Td textAlign="center" w="2.25">
          3
        </Td>
        <Td textAlign="center" w="1rem">
          <IconButton
            aria-label="ocultarDetalhes"
            icon={<FiEye />}
            colorScheme="blue"
            variant="ghost"
          />
        </Td>
      </Tr>
    </Tbody>
  );
}
