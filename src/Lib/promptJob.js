import Inquirer from 'inquirer'

export default async () => {
    const { job } = await Inquirer.prompt([
        {
            type: 'list',
            choices: ['Extract Courses Information', 'Download Videos'],
            name: 'job',
            message: 'What do you want to do?',
        },
    ])
    return job
}
