const yargs = require('yargs')

const Options = yargs
    .usage('Usage: brick <operation> <package>\n<operation>: install | remove | update\n<package>: Package to install')
    .help(true).argv


if (yargs.argv._[0] == null || yargs.argv._[0] == undefined) {
    console.log(Options.usage)
} else {
    try {
        require(`main/command/${yargs.argv._[0].toLowerCase()}.ts`).Execute(['groovy'])
    } catch (FileNotFoundException) {
        console.log(`brick: ${yargs.argv._[0].toLowerCase()}: Command not found.`)
    }
}