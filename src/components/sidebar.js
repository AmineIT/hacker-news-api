import { Box, VStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <Box
            minW="200px"
            w="200px"
            borderRightWidth="2px"
            height="100vh"
            pos="fixed"
            top="80px"
            left="0"
            p="1.25rem 0.75rem"
            color="gray.200"
        >
            <Box
                fontSize="0.95rem"
                lineHeight="1.625"
            >
                <VStack
                    spacing={4}
                    align="stretch"
                >
                    <Link to="/new-posts">
                        <Box
                            marginInlineEnd="0.5rem"
                            display="block"
                            padding="0.25rem 0.75rem"
                            borderRadius="0.375rem"
                            cursor="pointer"
                            fontWeight="500"
                            transition="background 250ms ease-out 0s"
                            _hover={{
                                background: "gray.300",
                                color: "gray.900"
                            }}
                        >
                            <Box
                                d="flex"
                                alignItems="center"
                                flexDir="row"
                            >
                                <Box>
                                    🤩
                                </Box>
                                <Text
                                    marginInlineStart="0.5rem"
                                    mt="0"
                                >
                                    New Posts
                                </Text>
                            </Box>
                        </Box>
                    </Link>

                    <Link to="/top-posts">
                        <Box
                            marginInlineEnd="0.5rem"
                            display="block"
                            padding="0.25rem 0.75rem"
                            borderRadius="0.375rem"
                            cursor="pointer"
                            fontWeight="500"
                            transition="background 250ms ease-out 0s"
                            _hover={{
                                background: "gray.300",
                                color: "gray.900"
                            }}
                        >
                            <Box
                                d="flex"
                                alignItems="center"
                                flexDir="row"
                            >
                                <Box>
                                    🔥
                                </Box>
                                <Text
                                    marginInlineStart="0.5rem"
                                    mt="0"
                                >
                                    Top Posts
                                </Text>
                            </Box>
                        </Box>
                    </Link>
                </VStack>
            </Box>
        </Box>
    )
}

export default Sidebar