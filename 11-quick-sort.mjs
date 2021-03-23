let pass, trocas, comps

function quickSort(vetor, ini=0, fim = vetor.length-1){
    if (fim > ini) {
        pass++
        const pivot = fim
        let div = ini -1
        for (let i = ini; i < fim; i++) {
            if(vetor[i]<vetor[pivot]){
                comps++
                div++
                if(i != div){
                    [vetor[i], vetor[div]] = [vetor[div], vetor[i]] 
                    trocas++
                } 
            } 
        }
        div++
        //Colocando o pivot no lugar definitivo
        if(vetor[pivot] < vetor[div]){
            [vetor[pivot],vetor[div]] = [vetor[div],vetor[pivot]]
            trocas++
        }
        comps++
        //Ordena o subvetor à esquerda do pivô
        
        quickSort(vetor, ini, div-1)
        quickSort(vetor, div +1, fim)
    }
}
/*
pass=0, comps=0, trocas=0

let nums = [7,4,9,0,6,1,8,2,5,3]
quickSort(nums)
console.log(nums)
console.log({trocas,comps,pass})
*/

import {nomes} from './includes/100-mil-nomes.mjs'

pass=0, comps=0, trocas=0

console.time('Ordenando Nomes...')
quickSort(nomes)
console.timeEnd('Ordenando Nomes...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024 //Memória usada em MegaByte
console.log({trocas,comps,pass,memoria})
