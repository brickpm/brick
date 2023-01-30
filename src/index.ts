const yargs = require('yargs')
var fs = require('fs')

const Options = yargs
    .usage('Usage: brick <operation> <package>\n<operation>: install | remove | update\n<package>: Package to install')
    .help(true).argv


if (yargs.argv._[0] == null || yargs.argv._[0] == undefined) {
    console.log(Options.usage)
} else {
    require(`./main/command/${yargs.argv._[0].toLowerCase()}.ts`).Execute(yargs.argv._[1])
    /*if (fs.existsSync(`./main/command/${yargs.argv._[0]}.ts`)) {
        require(`./main/command/${yargs.argv._[0].toLowerCase()}.ts`).Execute(yargs.argv._[1])
    } else {
        console.log(`brick: ${yargs.argv._[0].toLowerCase()}: Command not found.`)
    }*/
}