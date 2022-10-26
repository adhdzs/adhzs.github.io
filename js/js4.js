/* Función con nombre */
function divisoresV1( numero ) {
     let total = 0;

     for ( let i = 1; i < numero; i++ ) {
          if ( numero % i == 0){
               total++;
          }
     }
     return total;
};


/* Funciones anónimas */
const divisoresV2 = function( numero ) {
     let total = 0;

     for ( let i = 1; i < numero; i++ ) {
          if ( numero % i == 0){
               total++;
          }
     }
     return total;
};


// Funciones flecha =>
const divisoresV3 = ( numero ) => {
     let total = 0;
     
     for ( let i = 1; i < numero; i++ ) {
          if ( numero % i == 0){
               total++;
          }
     }
     return total;
};


function calcular() {
     let numero = parseInt( document.getElementById('numero').value );

     let resultado = document.getElementById('resul');
     resultado.value = (divisoresV3(numero));
};

console.log('Total de divisores: ', divisoresV1(32));
console.log('Total de divisores: ', divisoresV2(32));
console.log('Total de divisores: ', divisoresV3(32));


// EJERCICIO DE IMAGENES
function mostrarImg() {
     let noImg = parseInt( document.getElementById('noImagen').value);
     let img = document.getElementById('imagen');

     switch (noImg) {
          case 1:
               img.src = 'https://images.pexels.com/photos/13816113/pexels-photo-13816113.jpeg?cs=srgb&dl=pexels-maria-loznevaya-13816113.jpg&fm=jpg';
               break;
          case 2:
               img.src = 'https://images.pexels.com/photos/13719224/pexels-photo-13719224.jpeg?cs=srgb&dl=pexels-florian-eckerle-13719224.jpg&fm=jpg';
               break;
          case 3:
               img.src = 'https://images.pexels.com/photos/13684830/pexels-photo-13684830.jpeg?cs=srgb&dl=pexels-olena-bohovyk-13684830.jpg&fm=jpg';
               break;
          case 4:
               img.src = 'https://images.pexels.com/photos/13834131/pexels-photo-13834131.jpeg?cs=srgb&dl=pexels-andrea-beltran-13834131.jpg&fm=jpg';
               break;
          case 5:
               img.src = 'https://images.pexels.com/photos/13991777/pexels-photo-13991777.jpeg?cs=srgb&dl=pexels-matheus-bertelli-13991777.jpg&fm=jpg';
               break;
          default:
               img.src = '#';
               break;
     }
}


// EJERCIICO - NUMEROS PERFECTOS
/* function perfecto(limite) {
     let cantidad = 0;
     let numero = 2;
     while (cantidad <= limite) {
          let suma = 0;
          for ( let div = 2; div < numero; div++ ) {
               if ( numero % div == 0) {
                    suma += div;
               }
          }
          if ( suma == numero ) {
              document.write(`${numero}`);
              cantidad += 1;
          }
          numero ++;
     }
}
 */

function procesar () {
     let limite = parseInt(document.getElementById('cantidad').value);
     let cantidad = 0;
     let numero = 2;
     let resultadoTxt = '1';
     
     while (cantidad <= limite) {
          let suma = 1;
          
          for (let divisor = 2; divisor < numero; divisor++) {
               if (n % divisor == 0) {
                    resultadoTxt += ` + ${divisor}`;
                    suma += divisor
               }
          }
          resultadoTxt += ` = ${suma} <br>\n`;
          
          if (suma == n) {
               document.getElementById('resultados').innerHTML = resultadoTxt
          }
     }
}
/* function numPerfecto() {
     let lim = parseInt( document.getElementById('cantidad').value);
     procesar(lim);
} */

function numPerfecto() {
     let limite = parseInt(document.getElementById('cantidad').value);
     let perfectos = 0;
     let resultado = '';
     let div = document.getElementById('resultado');

     for ( let n = 2; perfectos < limite; n++) {
          let suma = 0;
          for ( let divisor = 1; divisor < n; divisor++ ) {
               if ( n % divisor == 0 ) {
                    suma += divisor;
               }
          }
          if ( suma == n ) {
               resultado += `<p>${ n }</p>\n`;
               perfectos ++;
          }
     }
     div.innerHTML = resultado;
}

let numero = 6;

let suma = 0;

for (let d = 1; d < numero; d++) {
     if ( numero % d == 0 ) {
          suma += d
     }
}
if ( suma == numero ) {
     console.log(`Numero perfecto: ${suma}`)
}