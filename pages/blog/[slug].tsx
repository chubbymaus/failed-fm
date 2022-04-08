import Head from "next/head"
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
import {BLOCKS, MARKS} from "@contentful/rich-text-types"
import Moment from "moment"
import SyntaxHighlighter from "react-syntax-highlighter"
import {dracula} from "react-syntax-highlighter/dist/cjs/styles/hljs"
import client from "../../utils/client"
import {GET_ALL_POSTS, GET_SINGLE_POST} from "../../utils/queries"

function renderOptions(links) {
  return {
    renderMark: {
      [MARKS.CODE]: (text) => {
        return (
          <div>
            <SyntaxHighlighter language="javascript" style={dracula}>
              {text}
            </SyntaxHighlighter>
          </div>
        )
      },
    },
  }
}

const BlogIndex = ({post}) => {

  return (
    <>
      <Head>
        <title>{post.title} | Failed FM</title>
        <link rel="icon" href="#"/>
      </Head>
      <div className="bg-slate-50 h-screen">
        <div className="relative py-16 overflow-hidden">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-md mx-12">
              <h1>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              Introducing
            </span>
                <span
                  className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {post.title}
            </span>
              </h1>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                {documentToReactComponents(post.body.json, renderOptions(post?.body.links))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const {data} = await client.query({
    query: GET_ALL_POSTS,
  })

  return {
    paths: data.blogCollection.items.map((post: any) => ({params: {slug: post.slug}})),
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const {data} = await client.query({
    query: GET_SINGLE_POST,
    variables: {slug: context.params.slug},
  })

  return {
    props: {post: data.blogCollection.items[0]},
  }
}

export default BlogIndex
