const fs = require('fs')

module.exports = {
    about: {
        name: 'install',
        description: 'Install specified package',
        version: '0.0.1',
        author: 'Brick (JohainDev)',
        alias: ['i']
    },
    
    async Execute(args: string[]) {

        console.log(args)
        
    }
}