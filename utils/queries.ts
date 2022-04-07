import { gql } from '@apollo/client'

export const GET_ALL_POSTS = gql`
    query GetAllPosts {
        blogCollection {
            items {
                sys {
                    publishedAt
                }
                title
                slug
                description
                topic
            }
        }
    }
`

export const GET_SINGLE_POST = gql`
    query GetSinglePost($slug: String!) {
        blogCollection(where: { slug: $slug }, limit: 1) {
            items {
                sys {
                    publishedAt
                }
                title
                slug
                topic
                body {
                    json
                }
            }
        }
    }
`
