import {
  Box,
  Flex,
  IconButton,
  Text,
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

export function BudgetDiv() {
  return (
    <Flex
      align="flex-end"
      padding="0"
      css={{
        position: 'sticky',
        top: 0,
        background: '#FAFAFA',
        zIndex: 99,
      }}
    >
      <Box ml="0.2rem" padding="0" w="3rem" textAlign="center">
        <IconButton
          marginTop="1rem"
          aria-label="lixeira"
          icon={<FiTrash />}
          colorScheme="blue"
          variant="ghost"
          minW="none"
          w="3rem"
        />
      </Box>
      <Box ml="0.1rem" padding="0" w="4rem" textAlign="center">
        <IconButton
          marginTop="1rem"
          aria-label="confirmar"
          icon={<FiPlusCircle />}
          colorScheme="blue"
          variant="ghost"
          minW="none"
          w="4rem"
        />
      </Box>
      <Box ml="0.8rem" w="8.75rem">
        <Input
          name="Grupo.Impressão"
          label="Grupo.Impressão"
          placeholder="INVÓLUCRO"
          w="8.75rem"
        />
      </Box>
      <Box ml="3rem" w="10.313">
        <InputGroup>
          <Flex align="flex-end">
            <Input
              name="CodProduto"
              label="CodProduto"
              placeholder="NPSES..."
              w="6.25rem"
            />
            <IconButton
              aria-label="pesquisar"
              icon={<FiSearch />}
              colorScheme="blue"
              variant="ghost"
              minW="none"
              ml="0.5rem"
            />
          </Flex>
        </InputGroup>
      </Box>
      <Box ml="2.3rem" w="5.25rem">
        <Input
          name="Qtde"
          label="Qtde"
          placeholder="01"
          type="number"
          w="3.125rem"
        />
      </Box>
      <Box ml="2rem" w="5.25rem">
        <Input
          name="MFC"
          label="MFC"
          placeholder="01"
          type="number"
          w="3.125rem"
        />
      </Box>
      <Box ml="4rem" w="5.25rem">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="ações"
            icon={<GiHamburgerMenu />}
            variant="outline"
            w="3.125rem"
          />
          <MenuList zIndex="999999 !important">
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
      </Box>
      <Box ml="1rem" w="8.5rem">
        <Text whiteSpace="nowrap" textAlign="center" color="#63B3ED">
          R$ 3.577,50
        </Text>
      </Box>
      <Box ml="0.3rem" w="4.75rem">
        <Text
          ml="0.5rem"
          whiteSpace="nowrap"
          textAlign="center"
          color="#63B3ED"
        >
          1,83
        </Text>
      </Box>
      <Box ml="0.5rem" w="5.625rem">
        <Text whiteSpace="nowrap" textAlign="center" color="#63B3ED">
          R$ 550,00
        </Text>
      </Box>
      <Box ml="0.7rem" w="8.5rem">
        <Text whiteSpace="nowrap" textAlign="center" color="#63B3ED">
          R$ 6.988,60
        </Text>
      </Box>
      <Box ml="0.7rem" w="4.688rem">
        <Text whiteSpace="nowrap" textAlign="center" color="#63B3ED">
          R$ 444,83
        </Text>
      </Box>
      <Box ml="1.2rem" w="4.688rem">
        <Text whiteSpace="nowrap" textAlign="center" color="#63B3ED">
          R$ 444,83
        </Text>
      </Box>
      <Box ml="1.9rem" w="2.25rem">
        <Text whiteSpace="nowrap" textAlign="center" color="#63B3ED">
          55
        </Text>
      </Box>
    </Flex>
  );
}
