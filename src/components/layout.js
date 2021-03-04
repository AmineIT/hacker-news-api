import { Box } from '@chakra-ui/react';
import Sidebar from './sidebar';
import Search from './search';

const Layout = ({ children }) => {
    return (
        <Box>

            <Box
                h="80px"
                w="100vw"
                borderBottomWidth="2px"
                d="flex"
                alignItems="center"
                justifyContent="center"
                bg="gray.900"
                pos="fixed"
                top="0"
            >
                <Search />
            </Box>

            <Box
                d="flex"
                alignItems="end"
            >
                <Sidebar />
                <Box
                    flex="1"
                    ml="200px"
                    mt="90px"
                >
                    {children}
                </Box>
            </Box>

        </Box>
    )
}

export default Layout