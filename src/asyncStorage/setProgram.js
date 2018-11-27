import { AsyncStorage } from 'react-native'
import moment from 'moment'

const STORE_KEY = '@shedule'


// PROBLEM: ["","1","1","1","2","2"]


export const setProgramThatDay = async (program) => {
  const todayName = moment().format('dddd')
  try {
    console.log(await AsyncStorage.getAllKeys())
    let storageItem
    await AsyncStorage.getItem(`${STORE_KEY}:${todayName}`, (err, res) => storageItem = res)
    if (!storageItem) {
      storageItem = []
      await AsyncStorage.setItem(`${STORE_KEY}:${todayName}`, JSON.stringify([]))
    } else {
      storageItem = JSON.parse(storageItem)
    }
    const newStorageItems = [...storageItem, program]
    const jsonStorageItems = JSON.stringify(newStorageItems)
    console.log(jsonStorageItems)
    return await AsyncStorage.setItem(`${STORE_KEY}:${todayName}`, jsonStorageItems)
  } catch (err) {
    console.log(err)
  }
}
