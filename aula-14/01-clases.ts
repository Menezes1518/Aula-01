type Produto = {
    nome: string
    valor: number
}

// class EstabelecimentoBase {
//     private endereco: string
//     private setor: string
//     private produtos: Produto[]
//     constructor(endereco: string, setor: string,  p: Produto[]){
//         this.endereco = endereco
//         this.setor = setor
//         this.produtos = p

//     }
// }
class EstabelecimentoBase {
    private _filaDeEspera = 10
    

    constructor(
         public endereco: string,
         public setor: string,
         private produtos: Produto[],
         filaDeEspera?: number
    ){
        this.filaDeEspera  = filaDeEspera ?? this._filaDeEspera
    }

    public RetornaNomeDosProdutos() {
        
        return this.produtos.map(produto => produto.nome)
    }

    get filaDeEspera() {
        return this._filaDeEspera
    }

    set filaDeEspera(fila: number) {
        if (fila <= 0){
            return
        }

        this._filaDeEspera = fila
    }

    diminuiFilaDeEspera (){
        if (this._filaDeEspera === 0){
            return
        }
        this._filaDeEspera -=1
    }
}

const padaria = {
    endereco: 'Rua Dos Laranjais, 1320 - bloco D',
    setor: 'alimentação',
    produtos: [
        {nome: 'pão', valor: 0.8},
        {nome: 'arroz', valor: 10},
        {nome: 'leite', valor: 5},
        {nome: 'brigadeiro', valor: 1.5},
        {nome: 'pão', valor: -20},
    ],

    RetornaNomeDosProdutos() {
        return this.produtos.map(produto => produto.nome)
    }
}

    const padaria2 = {
        endereco: 'Rua Dos abacates, 1320 - bloco D',
        setor: 'alimentação',
        produtos: [
            {nome: 'pão', valor: 0.8},
            {nome: 'arroz', valor: 10},
            {nome: 'leite', valor: 5},
            {nome: 'brigadeiro', valor: 1.5},
            {nome: 'pão', valor: -20},
        ],
    }

const padaria3 = new EstabelecimentoBase(
     'Rua Dos abacates, 1320 - bloco A', 'alimentação',
 [
        {nome: 'salsicha', valor: 12},
        {nome: 'pipoca', valor: 6},
        {nome: 'danone', valor: 5},
        {nome: 'beijinho', valor: 1.5},
        {nome: 'carne-moida', valor: 20},
    ], -3
)

    const padaria4 = new EstabelecimentoBase(
        'Rua Dos Morangos, 1320 - bloco A', 'alimentação',
    [],
    27
)



console.log(padaria)
console.log(padaria.RetornaNomeDosProdutos())
// console.log(padaria2.nomeDosProdutos())
console.log(padaria3.RetornaNomeDosProdutos())
padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
padaria3.diminuiFilaDeEspera()
padaria4.filaDeEspera = -100
padaria4.filaDeEspera = 20
console.log(padaria4.filaDeEspera)
console.log(padaria3.endereco)
console.log(padaria3.filaDeEspera)