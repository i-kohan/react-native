import axios from 'axios'
import data from './data.json'

export const getData = async (dayOfWeek) => {
  return new Promise((res, rej) =>
    setTimeout(() => res(filterResponce(data, dayOfWeek.toLowerCase())), 1000)
  )
}

filterResponce = (res, dayOfWeek) => res[dayOfWeek]
