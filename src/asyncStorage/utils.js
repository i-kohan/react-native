export const removeItem = (items, itemIdToRemove) => {
  return items.reduce(( acc, cur ) => {
    if (cur.id !== itemIdToRemove) {
      acc.push(cur)
    }
    return acc
  }, [])
}

export const addUniqItem = (items, itemToAdd) => {
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