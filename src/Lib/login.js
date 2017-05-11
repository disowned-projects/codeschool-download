export const login = async (nightmare, username, password) => {
    await nightmare
        .type('#user_login', username)
        .type('#user_password', password)
        .click('#sign-in-form > form > div > div > button')
        .wait('#account-dropdown > img')
        .catch(console.log)
}

export const openLoginPage = async nightmare => {
    await nightmare
        .goto('https://www.codeschool.com/users/sign_in')
        .wait('#user_login')
        .inject('js', 'node_modules/jquery/dist/jquery.js')
        .catch(console.log)
}
