export const getOrderedCities = (festivals, key) => {
  const citiesArray = festivals.map(item => item[key])
  const citiesUniqueArray = [...new Set(citiesArray)]
  const citiesAntTimes = new Map(citiesUniqueArray.map(item =>
    [item, citiesArray.filter(city => city === item).length]
  ))
  const orderedCitiesAndTimes = new Map([...citiesAntTimes].sort(([k, v], [k2, v2]) => {
    return -(v - v2)
  }))
  const orderedCitiesArray = [...orderedCitiesAndTimes]

  return orderedCitiesArray
}

export const getOrdereDataTopUn = (festivals, indexSentence) => {

  if (indexSentence === '1' || indexSentence === '2') {
    const citiesArray = festivals.map(item => item.city)
    const citiesUniqueArray = [...new Set(citiesArray)]
    const citiesAntTimes = new Map(citiesUniqueArray.map(item =>
      [item, citiesArray.filter(city => city === item).length]
    ))
    // eslint-disable-next-line fp/no-mutating-methods
    const orderedCitiesAndTimes = new Map([...citiesAntTimes].sort(([k, v], [k2, v2]) => {
      return -(v - v2)
    }))
    const orderedCitiesArray = [...orderedCitiesAndTimes]
    return orderedCitiesArray
  }

  else if (indexSentence === '3') {
    const departmentArray = festivals.map(item => item.department)
    const departmentUniqueArray = [...new Set(departmentArray)]
    const departmentAntTimes = new Map(departmentUniqueArray.map(item =>
      [item, departmentArray.filter(department => department === item).length]
    ))
    // eslint-disable-next-line fp/no-mutating-methods
    const orderedDepartmentAndTimes = new Map([...departmentAntTimes].sort(([k, v], [k2, v2]) => {
      return (v - v2)
    }))
    const getOrdereInverse = [...orderedDepartmentAndTimes]
    return getOrdereInverse
  }
}
