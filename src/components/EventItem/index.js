// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveId, isActive} = props
  const {id, imageUrl, name, location} = eventDetails
  const imageClassName = isActive ? 'image active' : 'image'

  const onClick = () => {
    setActiveId(id)
  }

  return (
    <li className="list">
      <button className="button" type="button" onClick={onClick}>
        <img src={imageUrl} alt="event" className={imageClassName} />
      </button>
      <p className="name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
