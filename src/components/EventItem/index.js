// Write your code here
import './index.css'

const EventItem = props => {
  const {eventItem, eventStatus} = props
  const {imageUrl, name, location, registrationStatus} = eventItem

  const eventRegistrationStatus = () => {
    eventStatus(registrationStatus)
  }

  return (
    <li>
      <button type="button" onClick={eventRegistrationStatus}>
        <img src={imageUrl} alt="event" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
