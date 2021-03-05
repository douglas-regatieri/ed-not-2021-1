// A função de comparação para a busca binária precisa retornar um de trê valores:
// Retorna 0: O valor de busca e o valor no objeto são IGUAIS
// Retorna -1: o valor de busca é MENOR que o valor no objeto
// Retorna 1: O valor de busca é MAIOR que o valor no objeto

import {objNomes} from './includes/vetor-obj-nomes.mjs'

let cont

function buscaBinaria(vetor, fnComp){
    cont = 0
    let ini = 0
    let fim = vetor.length - 1
    let meio

    while (fim>=ini) {
        meio = Math.floor((ini + fim)/2)
        switch(fnComp(vetor[meio])){
            case 0:
                cont++
                return meio
            case 1:
                cont+=2
                ini = meio + 1
                break
            default:
                cont +=2
                fim = meio -1
        }
    }
    return -1
}

const comparaNome = (obj, busca ='DOUGLAS') => {
    if(busca === obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1
}

console.time('Buscando Nome')
console.log(buscaBinaria(objNomes, (obj, busca = 'DOUGLAS') => {
    if(busca === obj.first_name) return 0
    else if(busca < obj.first_name) return -1
    else return 1    
}),{cont})
console.timeEnd('Buscando Nome')
