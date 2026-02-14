#!/usr/bin/env node

const { Command } = require('commander');

const program = new Command();

program
  .name("gendiff")
  .usage("[options]")
  .description("Compares two configuration files and shows a difference.")
  .version('0.0.1', '-V, --version')
  .option('-f, --format [type]', 'output format')
  .parse()