import * as fs from 'node:fs'

const getParseFile = (path) => {
  const filePath = fs.readFileSync(path, { encoding: 'utf-8' })
  return JSON.parse(filePath)
}
export default getParseFile
