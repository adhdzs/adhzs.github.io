let medicamento = prompt('Ingrese nombre del medicamento: ');
let frecuencia = Number(prompt('Indique la frecuencia de consumo del medicamento:'));
let hr_ini = Number(prompt('Indique la hora de consumo de su primer dosis (Formato de 24 hrs): '));

let dosis = 24 / frecuencia;

let horas = [hr_ini];

let hora = horas[0];
for ( let i = 1; i < dosis; i++) {
     hora = (hora + frecuencia);

     if (hora > 23) {
          hora = hora - 24
     }
     horas.push(hora)
}

console.log(`Dosis para medicamento: ${medicamento}`)
for (let h = 0; h < horas.length; h++ ) {
     console.log(`Dosis ${h + 1}: ${horas[h]} hrs`)
}

