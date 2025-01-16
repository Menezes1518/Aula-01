const listaDeContatos = ['Paulo', 'Selina', 'Roger', 'Rubens', 'Zeca', 'Josué', 'Natália', 'Bianca']
// const listaDeContatos = ['Paulo', 'Selina', 'Roger', 'Rubens', 'Josué', 'Natália', 'Bianca']
// const listaDeContatos = []

let encontrouUsuarioOuPercorreulista = false 
let IndiceDoUsuario = 0

do {
    const usuarioAtual = listaDeContatos[IndiceDoUsuario]
    if (usuarioAtual && usuarioAtual.startsWith('Z')) {
        encontrouUsuarioOuPercorreulista = true
        console.log(`Usuário encontrado: ${usuarioAtual}`)
    }
    IndiceDoUsuario = IndiceDoUsuario + 1

    if (IndiceDoUsuario >= listaDeContatos.length) {
        encontrouUsuarioOuPercorreulista = true
        console.log('Usuário não foi encontrado')
    }

} while (!encontrouUsuarioOuPercorreulista)
