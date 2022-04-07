import { ApolloClient, InMemoryCache } from '@apollo/client'

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`

const client = new ApolloClient({
    uri: endpoint,
    cache: new InMemoryCache(),
    connectToDevTools: process.env.NODE_ENV === 'development',
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    },
})

export default client
