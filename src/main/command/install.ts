const fs = require('fs')

module.exports = {
    about: {
        name: 'install',
        description: 'Install specified package',
        version: '0.0.1',
        author: 'Brick (JohainDev)',
        alias: ['i']
    },
    
    async exec(args: string[]) {

        args = args.slice(0)

        console.log(args)
        
    }
}