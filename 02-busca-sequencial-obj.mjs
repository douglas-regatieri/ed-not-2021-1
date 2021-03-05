import {objNomes} from './includes/vetor-obj-nomes.mjs'

//Ao invez de fazer a comparação dentro da função de busca "Terceirizamos" essa comparação chamando uma função externa

let cont = 0
function buscaSequencial(vetor, fnComp){
    for(let i = 0; i < vetor.length; i++){
        cont++
        if(fnComp(vetor[i])){
           return i //Retorna a posição onde o valor de busca foi encontrado
        }  
    }
    return -1 // Caso o valor de busca não seja encontrado
}

// const comparaNome = (objNome, valorBusca) => objNome.first_name === valorBusca

// console.log(buscaSequencial(objNomes, 'DOUGLAS', comparaNome))

console.time('Busca Sequencial')
console.log('Posição do nome: ' + buscaSequencial(objNomes, obj => obj.first_name === 'DOUGLAS'))
console.log('Numero de Comparações: ' + cont)
console.timeEnd('Busca Sequencial')


