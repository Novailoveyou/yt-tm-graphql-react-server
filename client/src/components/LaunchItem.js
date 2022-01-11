const LaunchItem = ({ launch }) => {
  const { flight_number, mission_name, launch_date_local, launch_success } =
    launch
  return (
    <div className='card card-body mb-3'>
      <div className='row'>
        <div className='col-md-9'>
          <h2>Mission: {mission_name}</h2>
          <time>Date: {launch_date_local}</time>
        </div>
        <div className='col-md-3'>
          <button className='btn btn-secondary'>Launch Details</button>
        </div>
      </div>
    </div>
  )
}

export default LaunchItem
