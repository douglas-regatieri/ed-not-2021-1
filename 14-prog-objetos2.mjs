class FormaGometrica {
   constructor(base, altura, tipo){
      if(isNaN(base)||base<=0) 
         throw new Error('A base deve ser numérica e maior que zero.')
      if(isNaN(altura)||altura<=0) 
         throw new Error('A altura deve ser numérica e maior que zero.')
      if(!['Q','T','E'].includes(tipo)) 
         throw new Error('O tipo deve ser Q, T ou E.')

      this.base = base
      this.altura = altura
      this.tipo = tipo
   }
}

let forma2, forma3

let forma1 = new FormaGometrica(8,4,'Q')
console.log(forma1)

try{
   forma2 = new FormaGometrica('cebola','alho','X')
   console.log(forma2)
}
catch(erro){   //O bloco catch() recebe o erro que foi gerado no bloco try
   //Tratamento de exceção. Nesse caso, simplismente exibiremos a mensagem de erro.
   console.log('ERRO: '+ erro.message)   
}