const nomesDeUsuarios = ['Joana', 'Renata', 'Cleber', 'Zeca', 'Carla']

// console.log('Olá', nomesDeUsuarios[0])
// console.log('Olá', nomesDeUsuarios[1])
// console.log('Olá', nomesDeUsuarios[2])
// console.log('Olá', nomesDeUsuarios[3])

let IndiceDoUsuario = 0
const IndiceAtual = nomesDeUsuarios.length
console.log({IndiceAtual })

while (IndiceDoUsuario < IndiceAtual) { 
    console.log('Olá', nomesDeUsuarios [IndiceDoUsuario])
    //IndiceDoUsuario = IndiceDoUsuario + 1
    IndiceDoUsuario += 1
}