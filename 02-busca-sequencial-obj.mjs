//Ao invez de fazer a comparação dentro da função de busca "Terceirizamos" essa comparação chamando uma função externa

function buscaSequencial(vetor, valorBusca, fnComp){
    for(let i = 0; i < vetor.length; i++){
        if(fnComp(vetor[i], valorBusca)) return i //Retorna a posição onde o valor de busca foi encontrado
    }
    return -1 // Caso o valor de busca não seja encontrado
}

const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca

import {objNomes} from './includes/vetor-obj-nomes.mjs'

console.log(buscaSequencial(objNomes, 'DOUGLAS', comparaNome))