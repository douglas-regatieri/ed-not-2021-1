let comps, divisoes, juncoes

function mergeSort(vetor, fnComp) {

    function mesclar(vetEsq, vetDir) {
        let pEsq = 0, pDir = 0, vetRes = []
        while(pEsq < vetEsq.length && pDir < vetDir.length){
            // if (vetEsq[pEsq] < vetDir[pDir]) {
            if (fnComp(vetDir[pDir], vetEsq[pEsq])) { //Parâmetros Invertidos
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

        vetEsq = mergeSort(vetEsq, fnComp)
        vetDir = mergeSort(vetDir, fnComp)
        juncoes++ //Contando numero de junções de vetores

        const vetFinal = mesclar(vetEsq, vetDir)
        //console.log({vetFinal})

        return vetFinal
    }
    return vetor //vetor de 1 elemento, não modificado
}

import { candidatos } from './includes/candidatos-2018.mjs'

comps = 0, divisoes = 0, juncoes = 0

//console.log('ANTES:', candidatos)
console.time('Ordenando candidatos...')
// Ordenando pelo nome de urna (NM_URNA_CANDIDATO)
//mergeSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)

// Ordenação por dois níveis: Primeiro por UF (SG_UF) e dentro da UF pelo nº do candidato(NR_CANDIDATO)
mergeSort(candidatos, (obj1, obj2) => {
    if(obj1.SG_UE === obj2.SG_UE){
        return obj1.NR_CANDIDATO > obj2.NR_CANDIDATO
    }
    else return obj1.SG_UE > obj2.SG_UE
})
console.timeEnd('Ordenando candidatos...')
let memoria = process.memoryUsage().heapUsed / 1024 / 1024 //Memória usada em MegaByte
console.log({comps, divisoes, juncoes, memoria})