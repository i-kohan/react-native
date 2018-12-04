import { AsyncStorage } from 'react-native'
const STORE_KEY = '@programs'

export const getPrograms = async () => { 
  const programs = await AsyncStorage.getItem(STORE_KEY)
  return JSON.parse(programs)
}

export const addProgram = async (program) => {
  const programs = await AsyncStorage.getItem(STORE_KEY)
  let parsedPrograms = JSON.parse(programs)
  if (!parsedPrograms) {
    parsedPrograms = []
  }
  parsedPrograms.push(program)
  return await AsyncStorage.setItem(STORE_KEY, JSON.stringify(parsedPrograms))
}
