/*
SELECTION SORT

Trata-se de uma otimização do bubble sort, diminuindo drasticamente o número de trocas necessárias para fazer a ordenação

Isola um dos valores do vetor e procura pelo menor valor entre os restantes, promovendo a troca caso o primeiro valor seja maio que o segundo
*/

import {nomes} from './includes/100-mil-nomes.mjs'

let totTrocas, pass, comps

function selectionSort(vetor){
    totTrocas = 0, pass = 0, comps = 0

    function encontrarMenor(inicio){
        let menor = inicio
        for(let j = inicio + 1; j < vetor.length; j++){
            if(vetor[j] < vetor[menor]) menor = j
            comps++
        }
        return menor
    }
    for(let i = 0; i <= vetor.length - 2; i++){
        let menor = encontrarMenor(i+1)
        if(vetor[menor] < vetor[i]) [vetor[menor], vetor[i]] = [vetor[i], vetor[menor]]
        
    }
}

// let nums = [7,4,9,0,6,1,8,2,5,3]
// selectionSort(nums)
// console.log(nums)


console.time('Ordenando Nomes...')
selectionSort(nomes)
console.timeEnd('Ordenando Nomes...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024 //Memória usada em MegaByte
console.log({totTrocas, pass, comps, memoria})