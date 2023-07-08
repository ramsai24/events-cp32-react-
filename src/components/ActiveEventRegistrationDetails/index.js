// Write your code here
import './index.css'

const ActiveEventdRegistrationDetails = props => {
  const {status} = props

  switch (status) {
    case 'INITIAL':
      return (
        <div className="active-container">
          <p>Click on an event, to view its registration details</p>
        </div>
      )
    case 'YET_TO_REGISTER':
      return (
        <div className="active-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
          />
          <p>
            A live performance brings so much to your relationship with
            dance.Seeing dance live can often make you fall totally in love with
            this beautiful art form.
          </p>
          <button type="button">Register Here</button>
        </div>
      )
    case 'REGISTERED':
      return (
        <div className="active-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
          />
          <h1>You have already registered for the event</h1>
        </div>
      )
    case 'REGISTRATIONS_CLOSED':
      return (
        <div className="active-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
          />
          <h1>Registrations Are Closed Now!</h1>
          <p>Stay tuned. We will reopen the registations soon!</p>
        </div>
      )

    default:
      return null
  }
}

export default ActiveEventdRegistrationDetails
