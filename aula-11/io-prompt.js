import { createInterface } from 'readline';

const prompt = createInterface({
    input:process.stdin,
    output: process.stdout
})

const promptPromise = {
    question: (pergunta) => new Promise((resolve, reject) => {
        try{
            prompt.question(pergunta, (resposta) => resolve(resposta));
        } catch (error) {
            reject(error)
        }
        
    }),
    close: () => prompt.close()
}

async function askUser () {
    const numero = await promptPromise.question('Qual seu número favorito?: ')
    console.log(`O dobro do seu número favorito é: ${parseInt(numero) * 2}`)

    const cor = await promptPromise.question('Qual sua cor favorita?:')
    console.log(`Sua cor favorita é ${cor}`)
    promptPromise.close()
}

askUser()



// prompt.question('Qual seu número favorito?:' , (resposta) => {
//     console.log(`O dobro do seu número favorito é: ${parseInt(resposta) * 2}`)

//     prompt.question('Qual sua cor favorita?: ', (resposta) => {
//         console.log(`Sua cor favorita é ${resposta}`)
//         prompt.close()
//     })

// })



// promptPromise.question('Qual seu número favorito?:' , (resposta) => {
//     console.log(`O dobro do seu número favorito é: ${parseInt(resposta) * 2}`)

//     prompt.question('Qual sua cor favorita?: ', (resposta) => {
//         console.log(`Sua cor favorita é ${resposta}`)
//         prompt.close()
//     })

// })





