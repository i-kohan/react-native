import { AsyncStorage } from 'react-native'
import moment from 'moment'

const STORE_KEY = '@shedule'

export const setProgramThatDay = async (program, day = moment().format('dddd')) => {
    console.log(day)
    console.log(await AsyncStorage.getAllKeys())
    try {
      let storageItems = await AsyncStorage.getItem(`${STORE_KEY}:${day}`)
      if (!storageItems) {
        storageItems = []
      } else {
        storageItems = JSON.parse(storageItems)
      }
      const newStorageItems = addToStorage(storageItems, program)
      const jsonStorageItems = JSON.stringify(newStorageItems)
      await timeout()
      return await AsyncStorage.setItem(`${STORE_KEY}:${day}`, jsonStorageItems)
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
}

const timeout = (ms) => new Promise(res => setTimeout(res, 2000)) 

const addToStorage = (items, itemToAdd) => {
  let newItems
  const exists = items.find(i => i.id === itemToAdd.id)
  if (exists) {
    newItems = items.reduce((acc, cur) => {
      if (cur.id === itemToAdd.id) {
        acc.push(itemToAdd)
      } else {
        acc.push(cur)
      }
      return acc
    }, [])
  } else {
    newItems = [ ...items, itemToAdd]
  }
  return newItems
}
