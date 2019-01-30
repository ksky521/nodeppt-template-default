module.exports = {
    complete: (data, {chalk}) => {
        /* eslint-disable*/
        console.log(
            chalk.cyan(`
     ┌────────────────────────────────${`─`.repeat(data.filename.length)}──┐
     │  To get started: ${chalk.yellow(`nodeppt serve ${data.filename}`)}  │
     └────────────────────────────────${`─`.repeat(data.filename.length)}──┘
        
        `)
        );
        /* eslint-enable*/
    },
    prompts: {
        title: {
            type: 'string',
            required: true,
            label: 'Input your presentation topic: '
        },

        speaker: {
            type: 'string',
            label: 'Input your name: ',
            default: '{{username}}'
        }
    }
};
