#! /usr/bin/env node
​
import { Command } from 'commander'
// import { Chalk } from 'chalk'
​
const program = new Command()
​
// 配置帮助信息
program.on('--help', () => {
  console.log(
//     `\r\n Run ${Chalk.green(
//       `dyi <command> --help`,
//     )} to understand the details\r\n `,
  )
})
program.parse(process.argv)