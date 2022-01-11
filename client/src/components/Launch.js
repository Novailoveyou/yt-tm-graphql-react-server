import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useSubscription,
  gql
} from '@apollo/client'
import { Link, useParams } from 'react-router-dom'
import cn from 'classnames'

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`

const Launch = () => {
  let { flight_number } = useParams()
  flight_number = +flight_number
  const { data, loading, error } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number }
  })
  if (loading) return <h1>Loading...</h1>
  if (error) return console.log(error)

  const {
    mission_name,
    launch_year,
    launch_success,
    rocket: { rocket_id, rocket_name, rocket_type }
  } = data.launch
  return (
    <>
      <h1 className='display-4 my-3'>
        {' '}
        <span className='text-dark'>Mission:</span> {mission_name}
      </h1>
      <h2 className='mb-3 h4'>Launch Details</h2>
      <ul className='list-group'>
        <li className='list-group-item'>Flight Number: {flight_number}</li>
        <li className='list-group-item'>Launch Year: {launch_year}</li>
        <li className='list-group-item'>
          Launch Successful:{' '}
          <span
            className={cn({
              'text-success': launch_success,
              'text-danger': !launch_success
            })}>
            {launch_success ? 'Yes' : 'No'}
          </span>
        </li>
      </ul>
      <h2 className='my-3 h4'>Rocket Details</h2>
      <ul className='list-group'>
        <li className='list-group-item'>Rocket ID: {rocket_id}</li>
        <li className='list-group-item'>Rocket Name: {rocket_name}</li>
        <li className='list-group-item'>Rocket Type: {rocket_type}</li>
      </ul>
      <hr />
      <Link to='/' className='btn btn-secondary'>
        Home
      </Link>
    </>
  )
}

export default Launch
