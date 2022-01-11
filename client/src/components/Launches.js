import { Fragment } from 'react'
import { useQuery, gql } from '@apollo/client'
import LaunchItem from './LaunchItem'
import MissionKey from './MissionKey'

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
      <MissionKey />
      {[...data?.launches]
        .sort(
          (a, b) =>
            Date.parse(b.launch_date_local) - Date.parse(a.launch_date_local)
        )
        .map((launch, idx) => (
          <LaunchItem key={`${launch.launch_number}-${idx}`} launch={launch} />
        ))}
    </>
  )
}

export default Launches
