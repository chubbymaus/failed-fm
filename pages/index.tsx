import type {NextPage} from "next"
import Head from "next/head"
import {GET_ALL_POSTS} from "../utils/queries"
import Link from "next/link"
import classNames from "classnames"
import client from "../utils/client"

const Home: NextPage = ({posts}) => {
  return (
    <div>
      <Head>
        <title>Failed FM</title>
        <meta name="description" content="Generated by create next app"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div className="bg-slate-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 h-screen">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Recent publications</h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
              arcu.
            </p>
          </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {posts.items.map((post) => (
              <div key={post.title}>
                <div>
                  <a href={"post.topic"} className="inline-block">
									<span
                    className={classNames(
                      "bg-indigo-100 text-indigo-800",
                      "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                    )}
                  >
										{post.topic}
									</span>
                  </a>
                </div>
                <div className="block mt-4">
                  <Link href={`/blog/${post.slug}`}>
                    <a className="text-xl font-semibold text-gray-900">{post.title}</a>
                  </Link>
                  <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

export const getStaticProps = async (context) => {
  const {data} = await client.query({
    query: GET_ALL_POSTS,
  })

  return {
    props: {posts: data.blogCollection},
  }
}

