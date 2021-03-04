import { Box, Button, Heading, Skeleton, Stack, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, loadMore } from '../actions/postActions';
import Article from './article';
import Layout from './layout';

const TopArticles = () => {

    const dispatch = useDispatch()
    const { topPosts, isLoading, topLength } = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(fetchPosts('/topstories'))
    }, [dispatch])

    const loadMoreHandle = () => {
        dispatch(loadMore('/topstories'))
    }

    const renderSkeleton = () => {
        return (
            <Stack>
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
            </Stack>
        )
    }

    return (
        <>
            <Layout>
                <Box
                    p="1.25rem"
                >
                    <Heading mb="24px">Top Hacker News Posts</Heading>
                    <Text mb="16px" fontSize="sm">showing {topPosts.length} of {topLength}</Text>

                    {isLoading && renderSkeleton()}

                    {
                        topPosts.map((post, i) => (
                            <Box
                                bg="gray.900"
                                key={i}
                            >
                                <Article data={post} />
                            </Box>
                        ))
                    }

                    <Button w="100%" mt="16px" onClick={loadMoreHandle}>Load More</Button>
                </Box>
            </Layout>
        </>
    )
}

export default TopArticles