const listaDeContatos = ['Paulo', 'Selina', 'Roger', 'Rubens', 'Zeca', 'Josué', 'Natália', 'Bianca']

//Solução 1
// let encontrouUsuario = false 
// let atingiuFimDaLista = false
// let IndiceDoUsuario = 0

// while (!encontrouUsuario && !atingiuFimDaLista) {
//     const usuarioAtual = listaDeContatos[IndiceDoUsuario]
//     if (usuarioAtual.startsWith('Z')) {
//         encontrouUsuario = true
//         console.log(`Usuário encontrado: ${usuarioAtual}`)
//     }
//     IndiceDoUsuario = IndiceDoUsuario + 1

//     if (IndiceDoUsuario === listaDeContatos.length) {
//         atingiuFimDaLista = true
//         console.log('Usuário não foi encontrado')
//     }

// }

//Solução 2
// let IndiceDoUsuario = 0

// while (true) {
//     const usuarioAtual = listaDeContatos[IndiceDoUsuario]
//     if (usuarioAtual.startsWith('Z')) {
//         console.log(`Usuário encontrado: ${usuarioAtual}`)
//         break
//     }
//     IndiceDoUsuario += 1

//     if (IndiceDoUsuario === listaDeContatos.length) {
//         console.log('Usuário não foi encontrado')
//         break
//     }

//}

//Solução 3
let encontrouUsuarioOuPercorreulista = false 
let IndiceDoUsuario = 0

while (!encontrouUsuarioOuPercorreulista) {
    const usuarioAtual = listaDeContatos[IndiceDoUsuario]
    if (usuarioAtual.startsWith('Z')) {
        encontrouUsuarioOuPercorreulista = true
        console.log(`Usuário encontrado: ${usuarioAtual}`)
    }
    IndiceDoUsuario = IndiceDoUsuario + 1

    if (IndiceDoUsuario === listaDeContatos.length) {
        encontrouUsuarioOuPercorreulista = true
        console.log('Usuário não foi encontrado')
    }

}

