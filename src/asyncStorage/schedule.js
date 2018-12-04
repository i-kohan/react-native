import { AsyncStorage } from 'react-native'
import moment from 'moment'

const STORE_KEY = '@schedule'

const timeout = (ms = 2000) => new Promise(res => setTimeout(res, ms))

const addItem = (items, itemToAdd) => {
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

const removeItem = (items, itemIdToRemove) => {
  return items.reduce(( acc, cur ) => {
    if (cur.id !== itemIdToRemove) {
      acc.push(cur)
    }
    return acc
  }, [])
}
  

export const getProgramsForDay = async (day = moment().format('dddd')) => {
  try {
    const storageItems = await AsyncStorage.getItem(`${STORE_KEY}:${day}`)
    return JSON.parse(storageItems)
  } catch (err) {
    throw new Error(err)
  }
}


export const setProgramToSchedule = async (program, day = moment().format('dddd')) => {
  try {
    let storageItems = await AsyncStorage.getItem(`${STORE_KEY}:${day}`)
    if (!storageItems) {
      storageItems = []
    } else {
      storageItems = JSON.parse(storageItems)
    }
    const newStorageItems = addItem(storageItems, program)
    return await AsyncStorage.setItem(`${STORE_KEY}:${day}`, JSON.stringify(newStorageItems))
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}

export const removeProgram = async (programId, day = moment().format('dddd')) => {
  try {
    const storageItems = await AsyncStorage.getItem(`${STORE_KEY}:${day}`)
    const parsedItems = JSON.parse(storageItems)
    const newItems = removeItem(parsedItems, programId)
    await timeout()
    return await AsyncStorage.setItem(`${STORE_KEY}:${day}`, JSON.stringify(newItems))
  } catch (err) {
    throw new Error(err)
  }
}
