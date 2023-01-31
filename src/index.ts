/* 
 * This file is part of Brick Package Manager or BrickPM (https://github.com/brickpm/brick/)
 * Copyright (c) 2023 JohainDev and contributors.
 * 
 * This source code is subject to the terms of the GNU General Public
 * License version 3.0. If a copy of the GPL was not distributed with this
 * file, You can obtain one at: https://www.gnu.org/licenses/gpl-3.0.txt
 */

const yargs = require('yargs')

export const Options = yargs
    .usage('Usage: brick <operation> <package>\n<operation>: install | remove | update\n<package>: Package to install')
    .help(true).argv

console.log(yargs.argv._)
require('./main/handle/commands.ts').Execute(yargs.argv._)