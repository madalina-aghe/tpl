import axios from 'axios'

const baseUrl = 'http://164.92.211.246:8080'

export const getRoutes = async () => {
  try {
    return (await axios.get(`${baseUrl}/routes/`)).data
  } catch (error) {
    console.log(error)
    return []
  }
}
export const getNews = async () => {
  try {
    return (await axios.get(`${baseUrl}/news/`)).data
  } catch (error) {
    console.log(error)
    return []
  }
}
