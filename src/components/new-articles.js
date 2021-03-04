import { Box, Heading, Skeleton, Stack, Text, Button } from '@chakra-ui/react'
import { useEffect } from 'react';
import Article from './article';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, loadMore } from '../actions/postActions';
import Layout from './layout'

const NewArticles = () => {

    const dispatch = useDispatch()
    const { newPosts, isLoading, newLength } = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(fetchPosts('/newstories'))
    }, [dispatch])

    const loadMoreHandle = () => {
        dispatch(loadMore('/newstories'))
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
                    <Heading mb="16px">New Hacker News Posts</Heading>
                    <Text mb="16px" fontSize="sm">showing {newPosts.length} of {newLength}</Text>

                    {isLoading && renderSkeleton()}

                    {
                        newPosts.map((post, i) => (
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

export default NewArticles