import { Box, Heading, Text, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import moment from 'moment';

const Article = () => {

    // Testing Data
    const data = {
        by: "Crash0v3rid3",
        descendants: 1,
        id: 26321407,
        kids: [
            26321423
        ],
        score: 2,
        time: 1614723974,
        title: "Facebook, TikTok least trusted by Americans, Google most trusted, says survey",
        type: "story",
        url: "https://www.zdnet.com/article/facebook-tiktok-least-trusted-by-americans-google-most-trusted-says-survey/#ftag=RSSbaffb68"
    }

    const time = moment.unix(data.time).format()

    return (
        <Box
            borderBottomWidth="2px"
            pb="16px"
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
                    {moment(time).fromNow()} &bull; {data.descendants} comments
                </Box>
                <Heading
                    fontSize="md"
                    my="8px"
                >
                    <Link href={data.url} isExternal>
                        {data.title} <ExternalLinkIcon mx="2" />
                    </Link>
                </Heading>
                <Text
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                >
                    Author: {data.by}
                </Text>
            </Box>
        </Box>
    )
}

export default Article