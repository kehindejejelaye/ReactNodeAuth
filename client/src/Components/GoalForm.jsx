import { useState, useContext } from 'react'
import GoalService from '../Services/GoalService'
import { AuthContext } from '../Context/AuthContext'

function GoalForm() {
  
  const [formData, setFormData] = useState({
    text: '',
  })
  
  const { text } = formData

  const { 
    user, setGoals
  } = useContext( AuthContext )

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const { token } = user
    
    GoalService.createGoal(formData, token)
    .then(data => {
      setGoals(prevState => ({
        ...prevState,
        data
      }))
    })
    
    setFormData({
      text: '',
    })
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Goal</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={onChange}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Goal
          </button>
        </div>
      </form>
    </section>
  ) 
}

export default GoalForm
