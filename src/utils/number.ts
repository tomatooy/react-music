export const useNumberFormat = (number: number): string | number => {
  if (number > 100000000) {
    return Number((number / 10000000).toFixed(1)) + ' B'
  }

  if (number > 1000000) {
    return Number((number / 1000000).toFixed(1)) + ' M'
  }

  if (number > 1000) {
    return Number((number / 10000).toFixed(1)) + ' K'
  }

  return number
}

export const useFormatDuring = (during: number): string => {
  const s = Math.floor(during) % 60
  during = Math.floor(during / 60)
  const i = during % 60

  const ii = i < 10 ? `0${i}` : i
  const ss = s < 10 ? `0${s}` : s

  return ii + ':' + ss
}

export const useTimeStampToDate = (timestamp: number): string => {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return `${year}-${month}-${day}`
}
