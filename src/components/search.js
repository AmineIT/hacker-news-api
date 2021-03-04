import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Search = () => {
    return (
        <Box w="50%">
            <InputGroup>
                <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300" />}
                />
                <Input type="text" placeholder="Search for posts" />
            </InputGroup>
        </Box>
    )
}

export default Search