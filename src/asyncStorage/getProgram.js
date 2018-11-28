import { AsyncStorage } from 'react-native'
import moment from 'moment'

const STORE_KEY = '@shedule'

export const getPrograms = async (day = moment().format('dddd')) => {
  try {
    const storageItems = await AsyncStorage.getItem(`${STORE_KEY}:${day}`)
    return JSON.parse(storageItems)
  } catch (err) {
    throw new Error(err)
  }
} 
