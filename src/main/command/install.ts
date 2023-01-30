var fs = require('fs');
const axios = require('axios')

module.exports = {
    about: {
        name: 'install',
        description: 'Install specified package',
        version: '0.0.1',
        author: 'Brick (JohainDev)',
        alias: ['i']
    },
    
    async Execute(args: string) {

        const url = `https://github.com/brickpm/brick-server/raw/main/packages/${args}.zip`
        const file = fs.createWriteStream(`${args}.zip`)

        axios({
            url,
            method: 'GET',
            responseType: 'stream'
        }).then((res: { data: { pipe: (arg0: any) => void; }; }) => {
            res.data.pipe(file)
            file.on('finish', () => {
                console.log(`brick: ${args}: Package installed.`)
            })
        }).catch(function (Error: { response: { status: number; }; message: any; request: any; }) {
            if (Error.response.status == 404) {
                console.log(`brick: ${args}: Package installation error: Package not found. ${Error.message}`)
            } else {
                console.log(`brick: ${args}: Package installation error. ${Error.message}`)
            }
        })
        
    }
}