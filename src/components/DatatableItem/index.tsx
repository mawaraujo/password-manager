import { useState } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';
import { Password } from '../../core/types/reducers';
import { DetailsModalComponent } from '../DetailsModal';

declare type Props = {
  item: Password,
  onDelete: CallableFunction,
  onEdit: CallableFunction
};

/**
 *
 * @param {Props} props
 * @return {JSX.Element} Datatable Item Component
 */
export function DatatableItemComponent(props: Props): JSX.Element {
  const { item, onDelete, onEdit } = props;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      {
        showDetails &&
        <DetailsModalComponent
          handleClose={() => setShowDetails(false)}
          password={item} />
      }

      <Box
        mb={3}
        py={2}
        px={3}
        borderColor="gray.300"
        borderWidth="1px"
        borderRadius="lg"
        width="100%"
        display="flex"
        justifyContent="space-between"
        transition=".2s"
        _hover={{
          shadow: 'md',
        }}>

        <Box
          class="left-items"
          display="flex"
          flexWrap="nowrap"
          cursor="pointer"
          width="100%"
          onClick={() => setShowDetails(true)}>

          <Box my="auto" mr={2}>
            <img width="20px" height="20px" src={item.url ?
              `http://www.google.com/s2/favicons?domain=${item.url}` :
              'https://github.com/'
            } />
          </Box>

          <Box>
            <Text fontWeight="bold">{item.name}</Text>

            <Text fontSize="xs" color="gray.500" fontWeight="medium">
              {item.username ? item.username : item.email}
            </Text>
          </Box>
        </Box>

        <Box class="right-items" my="auto" display="flex">
          <Button
            mr={1}
            size="sm"
            borderRadius="md"
            px={3}
            background="gray.50"
            color="gray.600"
            _hover={{ background: 'gray.100' }}
            onClick={() => onEdit(item)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="app-icon-table-size" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </Button>

          <Button
            size="sm"
            borderRadius="md"
            px={3}
            background="red.50"
            color="red.600"
            _hover={{ background: 'red.100' }}
            onClick={() => onDelete(item)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="app-icon-table-size" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </Button>
        </Box>
      </Box>
    </>
  );
}
