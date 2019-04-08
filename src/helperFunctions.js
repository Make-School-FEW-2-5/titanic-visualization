export const filterBy = (data, fieldName, value) => {
  return data.filter(passenger => 
    passenger.fields[fieldName] == value
  )
}

export const filterTwiceBy = (data, fieldName, value, fieldName1, value1) => {
  return data.filter(passenger => 
    passenger.fields[fieldName] == value
  ).filter(passenger => 
    passenger.fields[fieldName1] == value1
  )
}

export const getMaxMin = (data, fieldName) => {
  return data.reduce((accum, passenger) => {
    if (passenger.fields[fieldName] > accum.max) {
      accum.max = passenger.fields[fieldName]
    }
    if (passenger.fields[fieldName] < accum.min) {
      accum.min = passenger.fields[fieldName]
    }
    return accum
  }, {"max": data[1].fields[fieldName], "min": data[1].fields[fieldName]})
}

export const getMaxMinWhere = (data, fieldName, checkField, value) => {
  const filteredPassengers = data.filter(passenger => 
    passenger.fields[checkField] == value
    )
  return filteredPassengers.reduce((accum, passenger) => {
    if (passenger.fields[fieldName] > accum.max) {
      accum.max = passenger.fields[fieldName]
    }
    if (passenger.fields[fieldName] < accum.min) {
      accum.min = passenger.fields[fieldName]
    }
    return accum
  }, {"max": data[1].fields[fieldName], "min": data[1].fields[fieldName]})
}