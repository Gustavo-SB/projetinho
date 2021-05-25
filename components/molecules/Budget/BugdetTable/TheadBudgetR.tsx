import {
  Flex,
  IconButton,
  Thead,
  Tr,
  Th,
  Text,
  VStack,
  InputGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import {
  FiSearch,
  FiTrash,
  FiEdit,
  FiList,
  FiClipboard,
  FiSettings,
  FiPlusCircle,
} from 'react-icons/fi';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Input } from '../../../atoms/Form/Input';

export function TheadBudget() {
  return (
    <Thead
      css={{
        th: {
          position: 'sticky',
          width: '100%',
          top: 0,
          background: '#FAFAFA',
          zIndex: 99,
        },
      }}
    >
      <Tr>
        <Th w="1rem">
          <VStack
            css={{
              div: {
                width: 0,
                marginLeft: '-1rem !important',
              },
            }}
          >
            <IconButton
              marginTop="1rem"
              aria-label="lixeira"
              icon={<FiTrash />}
              colorScheme="blue"
              variant="ghost"
            />
          </VStack>
        </Th>
        <Th>
          <VStack alignItems="center" justify="space-between">
            <IconButton
              marginTop="1rem"
              aria-label="confirmar"
              icon={<FiPlusCircle />}
              colorScheme="blue"
              variant="ghost"
            />
            <Text textAlign="center">Item</Text>
          </VStack>
        </Th>
        <Th
          css={{
            div: {
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            },
          }}
        >
          <VStack alignItems="center" justify="space-between">
            <Input
              name="Grupo.Impressão"
              label="Grupo.Impressão"
              placeholder="INVÓLUCRO"
              w="160px"
            />
            <Text>Grupo.Impressão</Text>
          </VStack>
        </Th>
        <Th>
          <VStack alignItems="center" justify="space-between">
            <InputGroup>
              <Flex align="flex-end">
                <Input
                  name="CodProduto"
                  label="CodProduto"
                  placeholder="NPSES..."
                  w="120px"
                />
                <IconButton
                  aria-label="confirmar"
                  icon={<FiSearch />}
                  colorScheme="blue"
                  variant="ghost"
                />
              </Flex>
            </InputGroup>
            <Text textAlign="center">CodProduto</Text>
          </VStack>
        </Th>
        <Th
          css={{
            div: {
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            },
          }}
        >
          <VStack alignItems="center" justify="space-between">
            <Input
              name="Qtde"
              label="Qtde"
              placeholder="01"
              type="number"
              w="50px"
            />
            <Text>Qtde</Text>
          </VStack>
        </Th>
        <Th
          css={{
            div: {
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            },
          }}
        >
          <VStack alignItems="center" justify="space-between">
            <Input
              name="MFC"
              label="MFC"
              placeholder="01"
              type="number"
              w="50px"
            />
            <Text>Produto</Text>
          </VStack>
        </Th>
        <Th position="relative">
          <VStack
            alignItems="center"
            justify="space-between"
            position="absolute"
            bottom="1.5"
            ml="0.625rem"
          >
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="ações"
                icon={<GiHamburgerMenu />}
                variant="outline"
              />
              <MenuList zIndex={99999}>
                <MenuItem
                  aria-label="perfil"
                  icon={<FiList />}
                  colorScheme="blue"
                  variant="ghost"
                >
                  Perfil
                </MenuItem>
                <MenuItem
                  aria-label="observacoes"
                  icon={<FiClipboard />}
                  colorScheme="blue"
                  variant="ghost"
                >
                  Observações
                </MenuItem>
                <MenuItem
                  aria-label="editar"
                  icon={<FiEdit />}
                  colorScheme="blue"
                  variant="ghost"
                >
                  Editar
                </MenuItem>
                <MenuItem
                  aria-label="preferencias"
                  icon={<FiSettings />}
                  colorScheme="blue"
                  variant="ghost"
                >
                  Preferências
                </MenuItem>
              </MenuList>
            </Menu>
            <Text>Custo</Text>
          </VStack>
        </Th>
        <Th>
          <VStack alignItems="center" justify="end" mb="-27px">
            <Text whiteSpace="nowrap" marginTop="1rem" textAlign="center">
              R$ 3.577,50
            </Text>
            <Text textAlign="center">CustoCompras</Text>
          </VStack>
        </Th>
        <Th>
          <VStack alignItems="center" justify="space-between" mb="-27px">
            <Text whiteSpace="nowrap" marginTop="1rem" textAlign="center">
              1,83
            </Text>
            <Text textAlign="center">Indice</Text>
          </VStack>
        </Th>
        <Th>
          <VStack alignItems="center" justify="space-between" mb="-27px">
            <Text whiteSpace="nowrap" marginTop="1rem" textAlign="center">
              R$ 550,00
            </Text>
            <Text textAlign="center">MO</Text>
          </VStack>
        </Th>
        <Th>
          <VStack alignItems="center" justify="space-between" mb="-27px">
            <Text whiteSpace="nowrap" marginTop="1rem" textAlign="center">
              R$ 6.988,60
            </Text>
            <Text textAlign="center">Subtotal</Text>
          </VStack>
        </Th>
        <Th>
          <VStack alignItems="center" justify="space-between" mb="-27px">
            <Text whiteSpace="nowrap" marginTop="1rem" textAlign="center">
              R$ 444,83
            </Text>
            <Text textAlign="center">ICMS</Text>
          </VStack>
        </Th>
        <Th>
          <VStack alignItems="center" justify="space-between" mb="-27px">
            <Text whiteSpace="nowrap" marginTop="1rem" textAlign="center">
              R$ 444,83
            </Text>
            <Text textAlign="center">IPI</Text>
          </VStack>
        </Th>
        <Th>
          <VStack alignItems="center" justify="space-between" mb="-27px">
            <Text whiteSpace="nowrap" marginTop="1rem" textAlign="center">
              55
            </Text>
            <Text textAlign="center">Peso</Text>
          </VStack>
        </Th>
        <Th />
      </Tr>
      <Tr>
        <Th>Teste</Th>
        <Th>Teste</Th>
        <Th>Teste</Th>
        <Th>Teste</Th>
        <Th>Teste</Th>
        <Th>Teste</Th>
        <Th>Teste</Th>
        <Th>Teste</Th>
        <Th>Teste</Th>
        <Th>Teste</Th>
      </Tr>
    </Thead>
  );
}
