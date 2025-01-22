const user = {
    name : 'JoSÉ MARia SOUSA santos', 
    email : 'JOSE.M1@gmail.com',
    age : 23, 
    address : 'X Street'
}

for (const key in user) {
    if (key === 'name') {
        const names = user[key].split(' ')
        user[key] = ''
        
        for (const name of names) {
            const normalizeName = name.toLowerCase()
            const [primeiraletra, ...restoDoNome] = normalizeName

            user[key] = user[key] + ' ' + primeiraletra.toUpperCase() + restoDoNome.join('')
            user[key] = user[key].trim()

    }
}
if (key === 'email'){
    user[key] = user[key].toLowerCase()

}
}
console.log(user)