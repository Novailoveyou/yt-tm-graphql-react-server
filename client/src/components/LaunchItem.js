import cn from 'classnames'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'

const LaunchItem = ({ launch }) => {
  const { flight_number, mission_name, launch_date_local, launch_success } =
    launch
  return (
    <div className='card card-body mb-3'>
      <div className='row'>
        <div className='col-md-9'>
          <h2 className='h4'>
            Mission:{' '}
            <span
              className={cn({
                'text-success': launch_success,
                'text-danger': !launch_success
              })}>
              {mission_name}
            </span>{' '}
          </h2>
          <time>
            Date: {format(new Date(launch_date_local), 'yyyy-MM-dd HH:mm')}
          </time>
        </div>
        <div className='col-md-3'>
          <Link to={`/launch/${flight_number}`} className='btn btn-secondary'>
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LaunchItem
