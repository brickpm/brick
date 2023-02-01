/* 
 * This file is part of the Brick Package Manager or BrickPM distribution (https://github.com/brickpm/brick/)
 * Copyright (c) 2023 JohainDev and contributors.
 * 
 * This source code is subject to the terms of the GNU General Public
 * License version 3.0. If a copy of the GPL was not distributed with this
 * file, You can obtain one at: https://www.gnu.org/licenses/gpl-3.0.txt
 */

const fs = require('fs');
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
        const filePath = `${args}.zip`

        
        axios({
            method: 'get',
            url: url,
            responseType: 'stream'
        })
        .then((response: { status: number; data: { pipe: (arg0: any) => void; }; }) => {
            if (response.status === 200) {
                const writeStream = fs.createWriteStream(filePath)
                response.data.pipe(writeStream);
                writeStream.on('finish', () => {
                    console.log(`brick: ${args}: Package installed.`)
                })
            }
        })
        .catch((error: { response: { status: number; }; }) => {
            if (error.response.status === 404) {
                console.log(`brick: ${args}: Package installation error: Package not found. Request failed with status code 404.`)
                return;
            }
            throw error;
        });
    }
}