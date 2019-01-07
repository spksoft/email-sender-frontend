import axios from 'axios'

export const sendMail = ({ to, from, subject, text }) => {
  return axios.post('http://localhost:8080/v1/email/send', { to, from, subject, text })
}

export const getHistory = (email='') => {
  return axios.get(`http://localhost:8080/v1/email/?email=${email}`)
}