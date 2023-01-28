const yargs = require('yargs');

const Options = yargs
    .usage('Usage: brick <operation> <package>\n<operation>: install | remove | update\n<package>: Package to install')
    .help(true).argv


if (yargs.argv._[0] == null || yargs.argv._[0] == undefined) {
    console.log(Options.usage)
} else {
    switch (yargs.argv._[0].toLowerCase()) {
        case 'install':
            console.log('Logged install')
            break
        case 'remove':
            console.log('Logged remove')
            break
        case 'update':
            console.log('Logged update')
            break
        default:
            console.log('Unknown option')
    }
}