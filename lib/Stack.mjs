/*
   ESTRUTUA DE DADOS - PILHA | STACK

   - Pilha é uma linear de acesso restrito, que permite apenas as operações de inserção (push) e retirada (pop), ambas ocorrendo no final da estrutura.
   - Como consequência, a pilha funciona pelo princípio LIFO (Last In, First Out - ùltimo a entrar, primeiro a sair).
   - A principal aplicação das pilhas são tarefas que envolvem a inversão de um sequência de dados.
*/

export class Stack {
   #data
   constructor(){
      this.#data = [] // Inicializa o vetor vázio
   }
   //Operação de inserção
   push(val){
      this.#data.push(val)
   }
   //Operação de Retirada
   pop(){
      return this.#data.pop()
   }
   // A pilha está vazia (true/false) - PROPRIEDADE CALCULADA (9)só getter)   
   get empty(){
      return this.#data.length === 0
   }
   // "Espiadinha" (peek): retorna o valor que está no topo da pilha, mas sem retirá-lo de lá
   peek(){
      return this.#data[this.#data.length-1]
   }
   print(){
      return JSON.stringify(this.#data)
   }
}
/*
let nomeSeparado = new Stack()

let nome = 'Douglas'

for (let i = 0; i < nome.length; i++) {
   nomeSeparado.push(nome.charAt(i))
}
console.log(nomeSeparado.print())
*/
