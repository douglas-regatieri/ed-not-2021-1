/*
BUSCA BINÁRIA

Requer um conjunto de dados ORDENADOS.
Atua dividindo o vetor sucessivamente em metades, até que o valor de busca seja localizado, ou que o ponteiro de fim acabe antes do ponteiro de inícia. Essa última situação indica que o valor de busca não existe no conjunto.

*/
import {nomes} from './includes/vetor-nomes.mjs'

let cont = 0

function buscaBinaria(vetor, valorBusca){
    let ini = 0
    let fim = vetor.length - 1
    let meio = Math.floor((fim+ini)/2) //Arredonda para baixo

    while (fim>=ini) {
        meio = Math.floor((ini + fim)/2)
        if(vetor[meio] === valorBusca) return meio
        else if (valorBusca > vetor[meio]) ini = meio + 1
        else fim = meio - 1   
        cont ++  
    }   
    return -1
}

console.time('Busca Binária')
console.log(buscaBinaria(nomes, 'DOUGLAS'))
console.log(cont)
console.timeEnd('Busca Binária')