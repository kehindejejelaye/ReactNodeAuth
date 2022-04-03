const API_URL = 'http://localhost:9000/api/goals/'

const GoalService = {
  createGoal : (goalData, token) => {
    return fetch(API_URL, {
      method: 'post',
      body: JSON.stringify(goalData),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(data => {
      return data
    })
  },

  getGoals : token => {
    return fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then(res => res.json())
    .then(data => {
      return data
    })
  },

  deleteGoal : (goalId, token) => {
    return fetch(API_URL, {
      method: 'delete',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      // return data
    })
  }

}

export default GoalService