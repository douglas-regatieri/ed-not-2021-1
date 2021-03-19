let comps, divisoes, juncoes

function mergeSort(vetor) {

    function mesclar(vetEsq, vetDir) {
        let pEsq = 0, pDir = 0, vetRes = []
        while(pEsq < vetEsq.length && pDir < vetDir.length){
            if (vetEsq[pEsq] < vetDir[pDir]) {
                vetRes.push(vetEsq[pEsq])
                pEsq++
            }
            else {
                vetRes.push(vetDir[pDir])
                pDir++
            }
            comps++ //Contando a quantidade de comparações
        }
        //Descobrir de qual lado sobrou
        let sobra
        
        //Sobra à esquerda
        if(pEsq < pDir) sobra = vetEsq.slice(pEsq)
        //sobra à direita
        else sobra = vetDir.slice(pDir)

        //Retorna vetor de resultados + sobra
        return [...vetRes, ...sobra]
    }


    if(vetor.length > 1){
        const meio = Math.floor(vetor.length / 2)
       
        let vetEsq = vetor.slice(0, meio)
        let vetDir = vetor.slice(meio)
        divisoes++ //Contando numero de divisões do vetor
        
        //console.log({vetEsq, vetDir})

        vetEsq = mergeSort(vetEsq)
        vetDir = mergeSort(vetDir)
        juncoes++ //Contando numero de junções de vetores

        const vetFinal = mesclar(vetEsq, vetDir)
        //console.log({vetFinal})

        return vetFinal
    }
    return vetor //vetor de 1 elemento, não modificado
}

comps = 0, divisoes = 0, juncoes = 0

//let nums = [7,4,9,0,6,1,8,2,5,3]
//let nums = [9,8,7,6,5,4,3,2,1,0]
let nums = [0,1,2,3,4,5,6,7,8,9]
let numsOrd = mergeSort(nums)
//console.log({numsOrd})
//console.log({comps, divisoes, juncoes})

import {nomes} from './includes/100-mil-nomes.mjs'

comps = 0, divisoes = 0, juncoes = 0

console.time('Ordenando Nomes...')
mergeSort(nomes)
console.timeEnd('Ordenando Nomes...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024 //Memória usada em MegaByte
console.log({comps, divisoes, juncoes, memoria})