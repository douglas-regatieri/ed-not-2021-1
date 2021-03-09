/* >>--> Bubble Sort <--<<

Percorre i cinjunto de dados, comparando o elemento atual com o seu sucessor e promovendo a troca entre eles caso o primeiro 

*/
let totTrocas, pass, comps

function bubbleSort(vetor){
    totTrocas = 0, pass = 0, comps = 0
    let trocas
    do {
        trocas = 0
        pass++

        for(let i=0; i<= vetor.length - 2; i++){
            if(vetor[i] > vetor[i+1]){
                //Troca direta em JS via desestruturação de vetor
                [vetor[i], vetor[i+1]] = [vetor[i+1], vetor[i]]
                trocas++                
            }
            comps++
        }
        totTrocas += trocas

    } while(trocas > 0)
}

import {nomes} from './includes/100-mil-nomes.mjs'

console.log('Antes:', nomes)
console.time('Ordenando Nomes...')
bubbleSort(nomes)
console.timeEnd('Ordenando Nomes...')
console.log('Depois:', nomes)
console.log({totTrocas,pass,comps})