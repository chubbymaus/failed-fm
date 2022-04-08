import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Navbar from '../components/shared/Navbar'
import { ApolloProvider } from '@apollo/client'
import client from '../utils/client'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<Navbar />
			<Component {...pageProps} />
		</ApolloProvider>
	)
}

export default MyApp
