export const getOrderedCities = (festivals, key) => {
  const citiesArray = festivals.map(item => item[key])
  // console.log(citiesArray)

  const citiesUniqueArray = [...new Set(citiesArray)]
  // console.log(citiesUniqueArray)

  const citiesAntTimes = new Map(citiesUniqueArray.map(item =>
    [item, citiesArray.filter(city => city === item).length]
  ))
  // console.log(citiesAntTimes)

  const orderedCitiesAndTimes = new Map([...citiesAntTimes].sort(([k, v], [k2, v2]) => {
    return -(v - v2)
  }))

  // console.log(orderedCitiesAndTimes)

  const orderedCitiesArray = [...orderedCitiesAndTimes]

  // console.log(orderedCitiesArray)

  return orderedCitiesArray
}