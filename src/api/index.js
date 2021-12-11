export const BASE_URL = 'https://strangers-things.herokuapp.com/api'
export const COHORT_NAME = '2108-UIC-RM-WEB-PT'
export const API_URL = BASE_URL + COHORT_NAME

export const getPosts = async () => {
  try {
      const response = await fetch(`${API_URL}/posts`, {
          method: "GET",
          headers: {
              'Content-Type': 'application/json'
              // 'Authorization' : Bearer XXXXXXX --> should only be if user is logged in
          }
      })

      const data = await response.json()
      return data.data.posts

  } catch (error) {
      throw error
  }

}

// you would need to add other api calls like POST post, UPDATE etc...
/* Calls that do the following:
- Add a new post
- Update post already there
- delete a post
*/

export const loginUser = async (usernameFromForm, passwordFromForm) => {
  try {
      const response = await fetch(`${API_URL}/users/login`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              user: {
                  username: usernameFromForm,
                  password: passwordFromForm
              }
          })
      })

      const token = await response.json()
      console.log("this is token in API ", token)
      return token.data.token

  } catch (error) {
      throw error
  }

}

export const registerUser = async (usernameFromForm, passwordFromForm) => {
  try {
      const response = await fetch(`${API_URL}/users/register`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              user: {
                  username: usernameFromForm,
                  password: passwordFromForm
              }
          })
      })

      const token = await response.json()
      return token.data.token

  } catch (error) {
      throw error
  }

}

export const getUser = async (token) => {
  if (token === '') {
      return {}
  }

  console.log("this is the token in get User")
  console.log(token)
  try {
      const response = await fetch(`${API_URL}/users/me`, {
          method: "GET",
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
          }
      })

      const data = await response.json()
      return data.data

  } catch (error) {
      throw error
  }
}

export const sendMessage = async (postId, token, messageFromUser) => {
  try {
      const response = await fetch(`${API_URL}/posts/${postId}/messages`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
          },
          body: JSON.stringify({
              message: {
                  content: messageFromUser
              }
          })
      })

      const data = await response.json()
      return data.data.message

  }
  catch (error){
      throw error
  }
}