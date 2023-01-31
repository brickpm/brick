const yargs = require('yargs')
var fs = require('fs')

const Options = yargs
    .usage('Usage: brick <operation> <package>\n<operation>: install | remove | update\n<package>: Package to install')
    .help(true).argv

require('./main/handle/commands.ts').Execute(yargs.argv)