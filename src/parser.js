import * as fs from 'fs'

export default (path) => {
  const filePath = fs.readFileSync(path, {encoding: "utf-8"})
  return JSON.parse(filePath)
}