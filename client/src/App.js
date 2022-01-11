import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Launches from './components/Launches'
import Launch from './components/Launch'
import logo from './logo.png'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <img
          src={logo}
          alt='SpaceX'
          style={{ width: 300, display: 'block', margin: 'auto' }}
        />
        <Routes>
          <Route path='/' element={<Launches />} />
          <Route path='/launch/:flight_number' element={<Launch />} />
        </Routes>
      </div>
    </BrowserRouter>
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
//
