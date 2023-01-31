module.exports = {
    data: {
        name: 'CommandHandler',
        description: 'Handles commands',
        author: 'Brick (JohainDev)',
        version: '0.0.1'
    },

    async Execute(args: string[]) {
        if (args[0] == null || args[0] == undefined) {
            console.log('Options.usage')
            return Error
        } else {
            require(`./main/command/${args[0].toLowerCase()}.ts`).Execute(args[1])
        }
    }
}