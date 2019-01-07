import axios from 'axios'
import config from '../config'

export const sendMail = ({ to, from, subject, text }) => {
  return axios.post(`${config.API_ENDPOINT}/v1/email/send`, { to, from, subject, text })
}

export const getHistory = (email='') => {
  return axios.get(`${config.API_ENDPOINT}/v1/email/?email=${email}`)
}