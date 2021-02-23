let pessoa = {
    nome: "Douglas Regatieri",
    sexo: 'M',
    dataNasc: '1993-09-14',
    ocupacao: 'estudante',
    'cidade de origem': 'Franca/SP', //Nome da propriedade pode ter espaços e acentos devendo ser entre aspas
    gostos: ['jogos','doces','dormir']
}

console.log(pessoa)
console.table(pessoa)

//Exibir o valor de apenas uma propriedade:
console.log(pessoa.nome)
//Quando o nome da propriedade tem espaços ou acento, não é possível usar a sintaxe de ponto
//É necessário usar a sintaxe de colchetes
console.log(pessoa['cidade de origem'])

//A sintaxe de colchetes SEMPRE funciona, mesmo se o nome da propriedade for uma unica palavra sem acento
console.log(pessoa['nome'])
console.log(pessoa['gostos'][1])

//Outra consequência da sintaxe dos colchetes é a possibilidade de  usar nomes de propriedades 
//que estão dentro de variáveis

//Criar uma nova propriedade para o objeto
pessoa.email = 'douglasregatieri2009@gmail.com'
console.log(pessoa)

//Excluir uma propriedade do objeto
delete pessoa.email
console.log(pessoa)

console.log('---------------- Lista de Propriedades --------------------------')
//Exibir as propriedades de um objeto
// Usar o for...in determina quais as propriedade de um objeto e coloca cada uma delas em uma variável
// Informada pelo usuário a cada iteração do loop
for(let p in pessoa){
    console.log(p)
}

console.log('---------------------------------------------------------------')

