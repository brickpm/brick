/* 
 * This file is part of the Brick Package Manager or BrickPM distribution (https://github.com/brickpm/brick/)
 * Copyright (c) 2023 JohainDev and contributors.
 * 
 * This source code is subject to the terms of the GNU General Public
 * License version 3.0. If a copy of the GPL was not distributed with this
 * file, You can obtain one at: https://www.gnu.org/licenses/gpl-3.0.txt
 */

module.exports = {
    data: {
        name: 'CommandHandler',
        description: 'Handles commands',
        author: 'Brick (JohainDev)',
        version: '0.0.1'
    },

    async Execute(args: string[]) {
        if ((args[0] == null || args[0] == undefined || args[0] == '') || (args[1] == null || args[1] == undefined || args[1] == '')) {
            console.log('Usage: brick <operation> <package>\n<operation>: install | remove | update\n<package>: Package to install')
        } else {
            require(`../command/${args[0].toLowerCase()}.ts`).Execute(args[1])
        }
    }
}