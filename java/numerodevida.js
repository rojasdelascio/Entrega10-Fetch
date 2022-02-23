console.log("desafio complementario #1");
let dia = prompt('Ingrese su dia de nacimiento en numeros');
let mes = prompt('Ingrese su mes de nacimiento en numeros');
let anio = prompt('Ingrese su año de nacimiento en 4 cifras');
output = [];
numDeVida1Array = [];

//Este programa calcula tu número de vida. El número de vida se calcula sumando por separado..
//..cada uno de los valores de una fecha de nacimiento especifica..
//..por ejemplo 17 - 05 - 1993 => el numero de vida será 8


//PROCESO 1
//concatena dia, fecha y mes en un solo valor
const concatTotalNum = `${dia}${mes}${anio}`;

console.log(concatTotalNum);

//convierte el valor concatenado de dia, fecha y mes en un String
concatTotalString = concatTotalNum.toString();

//convierte el String en un Array
for (var i = 0, len = concatTotalString.length; i < len; i += 1) {
    output.push(+concatTotalString.charAt(i));
}

console.log(output);

//Toma por separado los valores del array y los suma
const numDeVida1 = output.reduce((acc, item) => {
    return acc += item;

});
console.log(numDeVida1);


//PROCESO 2
//se realiza lo mismo que en PROCESO 1 pero con el resultado de numDeVida1
numDeVida1String = numDeVida1.toString();

for (var i = 0, len = numDeVida1String.length; i < len; i += 1) {
    numDeVida1Array.push(+numDeVida1String.charAt(i));
}

console.log(numDeVida1Array);

const numDeVidaTotal = numDeVida1Array.reduce((acc, item) => {
    return acc += item;

});

//imprime el resultado final 
alert('Tu número de vida es: ' + numDeVidaTotal);