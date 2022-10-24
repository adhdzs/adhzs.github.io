// Calculadora Básica
function calculadora( numero1, numero2, operacion ) {
     let resultado = 0
     switch (operacion) {
          case 1:
               resultado = numero1 + numero2;
               break;
          case 2:
               resultado = numero1 - numero2
               break;
          case 3:
               resultado = numero1 * numero2
               break;
          case 4:
               resultado = numero1 / numero2
               break;
          default:
               resultado = Math.pow(numero1, numero2)
               break;
     }
     return resultado;
}

function calcular() {
     let numero_1 = parseInt( document.getElementById('numero_1').value );
     let numero_2 = parseInt( document.getElementById('numero_2').value );
     let operacion = parseInt( document.getElementById('operaciones').value);
     
     let resultado = calculadora(numero_1, numero_2, operacion);

     let div = document.getElementById('resultado');
     div.textContent = `Resultado: ${resultado}`
}


// Tablas de multiplicar
function tablasM() {
     let tabla = document.getElementById('tabla');
     let base = parseInt(document.getElementById('base').value);
     let longitud = parseInt(document.getElementById('longitud').value);
     let tipo = parseInt(document.getElementById('orden').value)
     let txt = ''
     
     if ( tipo == 1) {
          for ( let n = 1; n <= longitud; n++) {
               txt += `<p>${base} * ${n} = ${base * n}</p>\n`;
          }
     }
     else {
          for (let n = longitud; n > 0; n--) {
               txt += `<p>${base} * ${n} = ${base * n}</p>\n`;
          }
     }
     tabla.innerHTML = txt;
}