import { Fragment } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useSubscription,
  gql
} from '@apollo/client'
import LaunchItem from './LaunchItem'

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`

const Launches = () => {
  const { data, loading, error } = useQuery(LAUNCHES_QUERY)

  if (loading) return <h1>Loading...</h1>

  if (error) console.log(error)

  return (
    <>
      <h1 className='display-4 my-3'>Launches</h1>
      {data?.launches?.map((launch, idx) => (
        <LaunchItem key={`${launch.launch_number}-${idx}`} launch={launch} />
      ))}
    </>
  )
}

export default Launches
