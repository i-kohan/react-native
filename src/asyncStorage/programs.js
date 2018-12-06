import { AsyncStorage } from 'react-native'

import { removeItem } from './utils'

const STORE_KEY = '@programs'

export const getPrograms = async () => { 
  const programs = await AsyncStorage.getItem(STORE_KEY)
  return JSON.parse(programs)
}

export const addProgram = async (program) => {
  try {
    const programs = await AsyncStorage.getItem(STORE_KEY)
    let parsedPrograms = JSON.parse(programs)
    if (!parsedPrograms) {
      parsedPrograms = []
    }
    parsedPrograms.push({ ...program, id: `${Math.random() * 100000}`})
    return await AsyncStorage.setItem(STORE_KEY, JSON.stringify(parsedPrograms))
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}

export const removeProgram = async (programId) => {
  console.log(programId)
  try {
    const programs = await AsyncStorage.getItem(STORE_KEY)
    const parsedPrograms = JSON.parse(programs)
    const newPrograms = removeItem(parsedPrograms, programId)
    return await AsyncStorage.setItem(STORE_KEY, JSON.stringify(newPrograms))
  } catch (err) {
    console.error(err)
    throw new Error(err)
  }
}
