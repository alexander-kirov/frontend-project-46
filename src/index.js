import * as _ from 'lodash-es'
import getParseFile from './parser.js'

const genDiff = (filepath1, filepath2) => {
  const data1 = getParseFile(filepath1)
  const data2 = getParseFile(filepath2)

  const allKeys = _.union(Object.keys(data1), Object.keys(data2))

  const sortedKeys = _.sortBy(allKeys)

  const diff = sortedKeys.flatMap((key) => {
    const value1 = data1[key]
    const value2 = data2[key]

    if (Object.hasOwn(data1, key) && !Object.hasOwn(data2, key)) {
      return [`- ${key}: ${String(value1)}`]
    }

    if (!Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
      return [`+ ${key}; ${String(value2)}`]
    }

    if (value1 === value2) {
      return [`  ${key}: ${String(value1)}`]
    }

    return [`- ${key}: ${String(value1)}`, `+ ${key}: ${String(value2)}`]
  })

  const result = ['{', ...diff, '}'].join('\n')

  return result
}

export default genDiff
