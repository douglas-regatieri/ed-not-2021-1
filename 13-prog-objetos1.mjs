const forma1 = {
   base: 5, 
   altura: 3.7,
   tipo: 'T'   //Triangulo
}

const forma2 = {
   base: 4.8, 
   altura: 6.4,
   tipo: 'E'   //Elipse
}

const forma3 = {
   base: 153.7, 
   altura: 122.1,
   tipo: 'Q'  //Quadrilatero
}

const forma4 = {
   base: 16, 
   altura: 21,
   tipo: 'J'   //Desconhecida
}

function calcularArea(forma){
   switch (forma.tipo) {
      case 'Q':
         return (forma.base * forma.altura).toFixed(2)
      case 'T':
         return (forma.base * forma.altura / 2).toFixed(2)
      case 'E':
         return ((forma.base / 2) * (forma.altura / 2) * Math.PI).toFixed(2)
      default:
         return NaN
   }
}

console.log(forma1, calcularArea(forma1))
console.log(forma2, calcularArea(forma2))
console.log(forma3, calcularArea(forma3))
console.log(forma4, calcularArea(forma4))