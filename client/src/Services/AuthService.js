const apiUrl = "http://localhost:9000/api/users"

const AuthService = {
  login : user => {
    return fetch(apiUrl + '/login', {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('user', JSON.stringify(data))
      return data
    })
  },

  register : user => {
    return fetch(apiUrl + '/register', {
      method: 'post',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem('user', JSON.stringify(data))
      return data
    })
  },

  logout : () => {
    localStorage.removeItem('user')
  },

  // isAuthenticated : () => {
  //   return fetch(apiUrl + '/user/authenticated')
  //   .then(res => {
  //     if (res.status !== 401) {
  //       return res.json().then(
  //         data => data
  //       )
  //     } else {
  //       return {
  //         isAuthenticated: false,
  //         user : {
  //           username: "",
  //           role: ""
  //         }
  //       }
  //     }
  //   })
  // }

}

export default AuthService