import { Box, Heading, Text, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import moment from 'moment';

const Article = ({ data }) => {

    const time = moment.unix(data?.time).format()

    return (
        <Box
            p="16px"
            mb="5px"
            d="flex"
            alignItems="center"
        >
            <Box>
                <Box
                    color="gray.300"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                >
                    {moment(time).fromNow()} &bull; {data?.descendants} comments
                    </Box>
                <Heading
                    fontSize="md"
                    my="8px"
                >
                    <Link href={data?.url} isExternal>
                        {data?.title} <ExternalLinkIcon mx="2" />
                    </Link>
                </Heading>
                <Text
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                >
                    Author: {data?.by}
                </Text>
            </Box>
        </Box>
    )
}

export default Article