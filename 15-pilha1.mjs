const texto = 'Socorram-me, subi no ônibus em Marrocos'

const pilha = []

// Empilhamento
for (let i = 0; i < texto.length; i++) {
   pilha.push(texto.charAt(i))
}

console.log(pilha)

let textoRev = ''

// Desempilhamento
while (pilha.length) {
   textoRev += pilha.pop().toUpperCase()
}
console.log(textoRev)