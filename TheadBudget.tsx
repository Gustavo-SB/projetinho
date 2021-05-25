import { Thead, Tr, Th } from '@chakra-ui/react';
import { Checkbox } from '../../../atoms/Form/Checkbox';

export function TheadBudget() {
  return (
    <Thead
      css={{
        th: {
          position: 'sticky',
          top: 72,
          background: '#FAFAFA',
          zIndex: 99,
        },
      }}
    >
      <Tr>
        <Th textAlign="center" w="1rem">
          <Checkbox name="allSelector" label="" />
        </Th>
        <Th textAlign="center" w="4rem">
          Item
        </Th>
        <Th textAlign="center" w="8.75rem">
          Grupo.Impressão
        </Th>
        <Th textAlign="center" w="10.313rem">
          CodProduto
        </Th>
        <Th textAlign="center" w="5.25rem">
          Qtde
        </Th>
        <Th textAlign="center" w="8.75rem">
          Produto
        </Th>
        <Th textAlign="center" w="6.5rem">
          Custo
        </Th>
        <Th textAlign="center" w="6.5rem">
          CustoCompras
        </Th>
        <Th textAlign="center" w="3.125rem">
          Indice
        </Th>
        <Th textAlign="center" w="3.625rem">
          MO
        </Th>
        <Th textAlign="center" w="6.5rem">
          Subtotal
        </Th>
        <Th textAlign="center" w="3.625rem">
          ICMS
        </Th>
        <Th textAlign="center" w="3.625rem">
          IPI
        </Th>
        <Th textAlign="center" w="0.25rem">
          Peso
        </Th>
        <Th />
      </Tr>
    </Thead>
  );
}
