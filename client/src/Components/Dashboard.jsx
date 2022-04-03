import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import GoalForm from './GoalForm'
import GoalItem from './GoalItem'
import Spinner from './Spinner'
import { toast } from 'react-toastify'
import { AuthContext } from '../Context/AuthContext'
import GoalService from '../Services/GoalService'

function Dashboard() {
  const navigate = useNavigate()

  const {
    user,
    goals, setGoals
  } = useContext( AuthContext )
  
  useEffect(() => {
    if (!user) {
      navigate('/login')
    }

    const { token } = user
    GoalService.getGoals(token).then( data => {
      setGoals(data)
    })
  }, [user, navigate,goals])

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>

      <GoalForm />

      <section className='content'>
        {goals.length > 0 ? (
          <div className='goals'>
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
