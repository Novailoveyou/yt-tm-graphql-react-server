import './App.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from '@apollo/client'
import Launches from './components/Launches'
import logo from './logo.png'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <div className='container'>
      <img
        src={logo}
        alt='SpaceX'
        style={{ width: 300, display: 'block', margin: 'auto' }}
      />
      <Launches />
    </div>
  )
}

const ApolloProviderApp = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}

export default ApolloProviderApp
