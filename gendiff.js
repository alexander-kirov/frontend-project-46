#!/usr/bin/env node

import { Command } from 'commander'
import path from 'node:path'
import genDiff from './src/index.js'

const program = new Command();

program
  .name("gendiff")
  .usage("[options]")
  .description("Compares two configuration files and shows a difference.")
  .version('0.0.1', '-V, --version')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>', 'path to first file')
  .argument('<filepath2>', 'path to second file')
  .action((filepath1, filepath2) => {
    const absolutePath1 = path.resolve(process.cwd(), filepath1)
    const absolutePath2 = path.resolve(process.cwd(), filepath2)

    const diffString = genDiff(absolutePath1, absolutePath2)

    console.log(diffString)
  })
  .parse()