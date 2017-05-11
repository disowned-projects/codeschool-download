import Inquirer from 'inquirer'

export default async () => {
    const answers = await Inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Username:',
            default: process.env.USERNAME || '',
        },
        {
            type: 'password',
            name: 'password',
            message: 'Password:',
            default: process.env.PASSWORD || '',
        },
    ])
    const { username, password } = answers
    return { username, password }
}
