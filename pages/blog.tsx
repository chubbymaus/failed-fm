import { GET_ALL_POSTS } from '../utils/queries'
import { useQuery } from '@apollo/client'
import classNames from 'classnames'

export default function Example() {
	const { loading, error, data } = useQuery(GET_ALL_POSTS)
	if (loading) return null

	return (
		<div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
			<div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
				<div>
					<h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Recent publications</h2>
					<p className="mt-3 text-xl text-gray-500 sm:mt-4">
						Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
						arcu.
					</p>
				</div>
				<div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
					{data.blogCollection.items.map((post) => (
						<div key={post.title}>
							<div>
								<a href={"post.topic"} className="inline-block">
									<span
										className={classNames(
											"bg-indigo-100 text-indigo-800",
											'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium'
										)}
									>
										{post.topic}
									</span>
								</a>
							</div>
							<a href={`/blog/${post.slug}`} className="block mt-4">
								<p className="text-xl font-semibold text-gray-900">{post.title}</p>
								<p className="mt-3 text-base text-gray-500">{post.description}</p>
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
