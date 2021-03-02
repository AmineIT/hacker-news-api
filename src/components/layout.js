import { Heading, Box, Container, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import NewArticles from './new-articles';
import TopArticles from './top-articles';

const Layout = () => {
    return (
        <Box>
            <Container maxW="container.xl">

                <Box
                    my="60px"
                >
                    <Heading
                        mb="16px"
                    >
                        Hacker News
                    </Heading>
                </Box>

                <Tabs
                    bg="gray.900"
                    isFitted
                >

                    <TabList mb="1em">
                        <Tab
                            fontWeight="600"
                            _active={{
                                backgroundColor: 'inherit'
                            }}
                        >
                            New Articles
                        </Tab>
                        <Tab
                            fontWeight="600"
                            _active={{
                                backgroundColor: 'inherit'
                            }}
                        >
                            Top Articles
                        </Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            {/* New Articles Component */}
                            <NewArticles />
                        </TabPanel>
                        <TabPanel>
                            {/* Top Articles Component */}
                            <TopArticles />
                        </TabPanel>
                    </TabPanels>

                </Tabs>

            </Container>
        </Box>
    )
}

export default Layout