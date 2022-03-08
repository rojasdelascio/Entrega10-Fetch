console.log("desafio complementario #1");
// let dia = prompt('Ingrese su dia de nacimiento en numeros');
// let mes = prompt('Ingrese su mes de nacimiento en numeros');
// let anio = prompt('Ingrese su año de nacimiento en 4 cifras');
output = [];
numDeVida1Array = [];


//Este programa calcula tu número de vida. El número de vida se calcula sumando por separado..
//..cada uno de los valores de una fecha de nacimiento especifica..
//..por ejemplo 17 - 05 - 1993 => el numero de vida será 8

function obtenerFecha() {

    var fecha = document.getElementById("fechanacimiento").value;
    var objetoFecha = new Date(fecha);
    console.log(objetoFecha);
    return objetoFecha;
}


function calcular() {
    var fecha = obtenerFecha();
    var dia = fecha.getDate() + 1;
    var mes = fecha.getMonth() + 1;
    var anio = fecha.getFullYear();
    var arrayFecha = [];
    var resultado = '';

    // PROCESO 1
    // concatena dia, fecha y mes en un solo valor
    var concatTotalNum = `${dia}${mes}${anio}`;


    // convierte el String en un Array
    for (var i = 0, len = concatTotalNum.length; i < len; i += 1) {
        arrayFecha.push(+concatTotalNum.charAt(i));
    }
    console.log(arrayFecha);
    //Toma por separado los valores del array y los suma
    const numDeVida1 = arrayFecha.reduce((acc, item) => {
        return acc += item;
    });

    //PROCESO 2
    //se realiza lo mismo que en PROCESO 1 pero con el resultado de numDeVida1
    numDeVida1String = numDeVida1.toString();
    var numDeVida1Array = [];

    for (var i = 0, len = numDeVida1String.length; i < len; i += 1) {
        numDeVida1Array.push(+numDeVida1String.charAt(i));
    }


    const numDeVidaTotal = numDeVida1Array.reduce((acc, item) => {
        return acc += item;

    });

    console.log(numDeVidaTotal);

    //switch con los resultados por numero

    switch (parseInt(numDeVidaTotal)) {
        case 1:
            resultado = resultado + `Tu número de vida es ${numDeVidaTotal}.Esto significa: --- \n`;
            // console.log(`Tu número de vida es ${numDeVidaTotal}.Esto significa: --- \n`);
            break;
        case 2:
            resultado = resultado + `Tu número de vida es ${numDeVidaTotal}.Esto significa: --- \n`;
            // console.log(`Tu número de vida es ${numDeVidaTotal}.Esto significa: --- \n`);
            break;
        case 4:
            resultado = resultado + `Tu número de vida es ${numDeVidaTotal}.Esto significa: --- \n`;
            // console.log(`Tu número de vida es ${numDeVidaTotal}.Esto significa: --- \n`);
            break;
        case 5:
            resultado = resultado + `Tu número de vida es ${numDeVidaTotal}.Esto significa: --- \n`;
            // console.log(`Tu número de vida es ${numDeVidaTotal}.Esto significa: --- \n`);
            break;
        case 6:
            resultado = resultado + `Tu número de vida es ${numDeVidaTotal}.Esto significa: --- \n`;
            // console.log(`Tu número de vida es ${numDeVidaTotal}.Esto significa: --- \n`);
            break;
        case 7:
            resultado = resultado + `Tu número de vida es ${numDeVidaTotal}.Esto significa: --- \n`;
            // console.log(`Tu número de vida es ${numDeVidaTotal}.Esto significa: --- \n`);
            break;
        case 8:
            resultado = resultado + `Tu número de vida es ${numDeVidaTotal}.Esto significa: --- \n`;
            // console.log(`Tu número de vida es ${numDeVidaTotal}.Esto significa: --- \n`);
            break;
        case 9:
            resultado = resultado + `Tu número de vida es ${numDeVidaTotal}.Esto significa: --- \n`;
            // console.log(`Tu número de vida es ${numDeVidaTotal}.Esto significa: --- \n`);
            break;
    }

    document.getElementById("numerodevida__resultado").innerHTML = `${resultado}`;
    console.log(resultado);
}