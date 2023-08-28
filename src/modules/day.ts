function TimeConversion(timeStamp: number) {
  const ts = timeStamp / 1000
  let converted: string | undefined = undefined

  if (ts < 60) {
    // Less than a minute has passed:
    converted = `${ts} seconds`
  } else if (ts < 3600) {
    // Less than an hour has passed:
    converted = `${Math.floor(ts / 60)} minutes`
  } else if (ts < 86400) {
    // Less than a day has passed:
    converted = `${Math.floor(ts / 3600)} hours`
  } else if (ts < 2620800) {
    // Less than a month has passed:
    converted = `${Math.floor(ts / 86400)} days`
  } else if (ts < 31449600) {
    // Less than a year has passed:
    converted = `${Math.floor(ts / 2620800)} months`
  } else {
    // More than a year has passed:
    converted = `${Math.floor(ts / 31449600)} years`
  }

  return converted
}

function Day(date: string) {
  const now = new Date().getTime()
  const started = new Date(date).getTime()

  let rtnData: string | undefined = undefined

  if ((now - started) < 0) {
    rtnData = 'We are not started yet..'
  } else {
    rtnData = `for ${TimeConversion(now - started)}`
  }

  return rtnData
}

export default Day