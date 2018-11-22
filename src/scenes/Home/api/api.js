import axios from 'axios'
import data from './data.json'

export const getData = async () => {
  return new Promise((res, rej) =>
    setTimeout(() => res(data), 2000)
  )
}
