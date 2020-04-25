/* eslint-disable fp/no-mutating-methods */
/* eslint-disable no-unused-vars */
export const getOrderedListWithOccurences = (festivals, key, growing = false) => {
  const list = festivals.map(item => item[key])
  const uniqueList = [...new Set(list)]
  const elementsAndTimes = new Map(uniqueList.map(item =>
    [item, list.filter(city => city === item).length]
  ))
  const orderedElementsAndTimes = new Map([...elementsAndTimes].sort(([k, v], [k2, v2]) => {
    return (growing) ? (v - v2) : (v2 - v)
  }))
  const orderedList = [...orderedElementsAndTimes]

  return orderedList
}

export const getOrdereDataTopUn = (festivals, indexSentence) => {
  if (indexSentence === '1' || indexSentence === '2') {
    return getOrderedListWithOccurences(festivals, 'city')
  } else if (indexSentence === '3') {
    return getOrderedListWithOccurences(festivals, 'department', true)
  }
}
