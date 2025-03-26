function returnHour(date) {
  if (date && !(date instanceof Date)) {
    throw new TypeError('date must be a instance of Date object.')
  }

  if (!date){
    date = new Date()
  }

  return date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  })
}
try {
  const hour = returnHour()
  const oldHour = returnHour(new Date('2024-10-10T10:10:30.000Z'))
  const errHour = returnHour('dd')

  console.log(hour);
  console.log(oldHour);
  console.log(errHour);
} catch (e) {
  console.log('Error!')
} finally {
  console.log('Finishing program...')
}

