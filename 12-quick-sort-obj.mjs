let pass, trocas, comps;

function quickSort(vetor, fnComp, ini = 0, fim = vetor.length - 1) {
   if (fim > ini) {
      pass++;
      const pivot = fim;
      let div = ini - 1;
      for (let i = ini; i < fim; i++) {
         //if(vetor[i]<vetor[pivot]){
         if (fnComp(vetor[pivot], vetor[i])) {
            //Parametros invetidos
            comps++;
            div++;
            if (i != div) {
               [vetor[i], vetor[div]] = [vetor[div], vetor[i]];
               trocas++;
            }
         }
      }
      div++;
      //Colocando o pivot no lugar definitivo
      if (fnComp(vetor[div], vetor[pivot])) {
         //Parametros invertidos
         [vetor[pivot], vetor[div]] = [vetor[div], vetor[pivot]];
         trocas++;
      }
      comps++;
      //Ordena o subvetor à esquerda do pivô

      quickSort(vetor, fnComp, ini, div - 1)
      quickSort(vetor, fnComp, div + 1, fim)
   }
}

import { candidatos } from "./includes/candidatos-2018.mjs"

pass = 0, comps = 0, trocas = 0;

console.time("Ordenando Candidatos...");
quickSort(candidatos, (obj1, obj2) => obj1.NM_URNA_CANDIDATO > obj2.NM_URNA_CANDIDATO)
console.timeEnd("Ordenando Candidatos...");
let memoria = process.memoryUsage().heapUsed / 1024 / 1024; //Memória usada em MegaByte
console.log({ trocas, comps, pass, memoria });
