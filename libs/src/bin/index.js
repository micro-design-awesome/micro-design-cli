#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
// import { Chalk } from 'chalk'
var program = new commander_1.Command();
// 配置帮助信息
program.on('--help', function () {
    console.log(
    //     `\r\n Run ${Chalk.green(
    //       `dyi <command> --help`,
    //     )} to understand the details\r\n `,
    );
});
program.parse(process.argv);
