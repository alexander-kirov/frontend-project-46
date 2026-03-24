import { expect, test } from '@jest/globals'
import genDiff from '../src/index.js'

test('Сравнение плоских JSON-файлов', () => {
  const expected = `{
  - follow: false
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`

  expect(genDiff('file1.json', 'file2.json')).toBe(expected)
})