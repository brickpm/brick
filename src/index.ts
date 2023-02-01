/* 
 * This file is part of the Brick Package Manager or BrickPM distribution (https://github.com/brickpm/brick/)
 * Copyright (c) 2023 JohainDev and contributors.
 * 
 * This source code is subject to the terms of the GNU General Public
 * License version 3.0. If a copy of the GPL was not distributed with this
 * file, You can obtain one at: https://www.gnu.org/licenses/gpl-3.0.txt
 */

const yargs = require('yargs')

const options = yargs
    .usage('Usage: brick <operation> <package>\n<operation>: install | remove | update\n<package>: Package to install')
    .options({
        install: require('./main/command/install').getAbout(),
        remove: require('./main/command/remove').getAbout(),
    })
    .help(true).argv

if (yargs.argv.install != ('' || undefined || null )) {
    require('./main/command/install').Execute(yargs.argv.install)
} else if (yargs.argv.remove != ('' || undefined || null)) {
    require('./main/command/remove').Execute(yargs.argv.remove)
}
//require('./main/handle/commands.ts').Execute(yargs.argv._)