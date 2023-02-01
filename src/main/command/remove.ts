/* 
 * This file is part of the Brick Package Manager or BrickPM distribution (https://github.com/brickpm/brick/)
 * Copyright (c) 2023 JohainDev and contributors.
 * 
 * This source code is subject to the terms of the GNU General Public
 * License version 3.0. If a copy of the GPL was not distributed with this
 * file, You can obtain one at: https://www.gnu.org/licenses/gpl-3.0.txt
 */

module.exports = {
    about: {
        alias: 'r',
        type: 'string',
        description: 'Remove specified package',
        demandOption: false,
    },

    async getAbout() {
        return this.about
    },

    async Execute(args: string) {
        console.log('work in progress')
    }
}