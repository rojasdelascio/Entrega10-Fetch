var planetasCasa1 = [];
var planetascasa2 = [];
var planetascasa3 = [];
var planetascasa4 = [];

class planetas {
    //funcion constructora de objetos con regentes, grados y casas de los 3 planetas usados ahora
    constructor(lord, degree, house, name) {
        this.nombre = name;
        this.regente = lord;
        this.grado = parseInt(degree);
        this.casa = house;

    }

}


function infoMarte() {
    var signo = document.getElementById("regenteMarte").value;
    var casa = document.getElementById("marte").value;
    var grado = document.getElementById("gradoMarte").value;
    var nombre = 'Marte';
    var infoMarte = new planetas(signo, grado, casa, nombre);
    //crear nuevo objeto con la funcion constructora, ingresando los valores..
    //..obtenidos del HTML
    // console.log("Objeto Marte: ", infoMarte);
    return infoMarte;
}

function infoVenus() {
    var signo2 = document.getElementById("regenteVenus").value;
    var casa2 = document.getElementById("venus").value;
    var grado2 = document.getElementById("gradoVenus").value;
    var nombre2 = 'Venus';
    //crear nuevo objeto con la funcion constructora, ingresando los valores..
    //..obtenidos del HTML
    var infoVenus = new planetas(signo2, grado2, casa2, nombre2);
    // console.log("Objeto Venus: ", infoVenus);
    return infoVenus;
}

function infoSaturno() {
    var signo3 = document.getElementById("regenteSaturno").value;
    var casa3 = document.getElementById("saturno").value;
    var grado3 = document.getElementById("gradoSaturno").value;
    var nombre3 = 'Saturno';
    //crear nuevo objeto con la funcion constructora, ingresando los valores..
    //..obtenidos del HTML
    var infoSaturno = new planetas(signo3, grado3, casa3, nombre3);
    // console.log("Objeto Saturno: ", infoSaturno);
    return infoSaturno;
}



function arrayObjetosPlanetas() {
    var arrayObjetosPlanetas = [];

    console.log(infoMarte(), infoMarte(), infoMarte());
    arrayObjetosPlanetas.push(infoMarte());
    arrayObjetosPlanetas.push(infoVenus());
    arrayObjetosPlanetas.push(infoSaturno());

    return arrayObjetosPlanetas;
}


///Entrega 9 de marzo --- Dibujar tabla con boton

var cont = 0;

function dibujarTabla() {

    const AOP = arrayObjetosPlanetas();
    console.log(AOP);


    if (cont === 0) {

        AOP.forEach(planeta => console.log(planeta.regente));
        const root = document.getElementById('tablaplanetas');
        AOP.forEach(planeta => {

            const nombrePlaneta = document.createElement('td');
            nombrePlaneta.innerText = `${planeta.nombre}`;
            root.append(nombrePlaneta);

            const gradoNuevoPlaneta = document.createElement('td');
            gradoNuevoPlaneta.innerText = `${planeta.grado}`
            root.append(gradoNuevoPlaneta);

            const casaNuevoPlaneta = document.createElement('td');
            casaNuevoPlaneta.innerText = `${planeta.casa}`;
            root.append(casaNuevoPlaneta);

            const signoNuevoPlaneta = document.createElement('td');
            signoNuevoPlaneta.innerText = `${planeta.regente}`;
            root.append(signoNuevoPlaneta);

            const salto = document.createElement('tr');
            root.append(salto);
        })

    }
    cont = 1;
}

//hasta aca llega entrega 9 de marzo



function arraysPlanetasCasas() {
    var planetasCasa1 = [];
    var planetasCasa2 = [];
    var planetasCasa3 = [];
    var planetasCasa4 = [];
    var arrayOfArraysPlanetas = [];
    //obtencion de los valores ingresados en el HTML
    var casaMarte = parseInt(document.getElementById("marte").value);
    var casaVenus = parseInt(document.getElementById("venus").value);
    var casaSaturno = parseInt(document.getElementById("saturno").value);

    //El switch de abajo ingresa al array de la casa correspondiente, el planeta correspondiente
    switch (casaMarte) {
        case 1:
            planetasCasa1.push('marte');
            break;
        case 2:
            planetasCasa2.push('marte');
            break;
        case 3:
            planetasCasa3.push('marte');
            break;
        case 4:
            planetasCasa4.push('marte');
            break;
    }

    switch (casaVenus) {
        case 1:
            planetasCasa1.push('venus');
            break;
        case 2:
            planetasCasa2.push('venus');
            break;
        case 3:
            planetasCasa3.push('venus');
            break;
        case 4:
            planetasCasa4.push('venus');
            break;
    }

    switch (casaSaturno) {
        case 1:
            planetasCasa1.push('saturno');
            break;
        case 2:
            planetasCasa2.push('saturno');
            break;
        case 3:
            planetasCasa3.push('saturno');
            break;
        case 4:
            planetasCasa4.push('saturno');
            break;
    }

    arrayOfArraysPlanetas.push(planetasCasa1);
    arrayOfArraysPlanetas.push(planetasCasa2);
    arrayOfArraysPlanetas.push(planetasCasa3);
    arrayOfArraysPlanetas.push(planetasCasa4);

    // console.log('Planetas en casa 1: ' + planetasCasa1);
    // console.log('Planetas en casa 2: ' + planetasCasa2);
    // console.log('Planetas en casa 3: ' + planetasCasa3);
    // console.log('Planetas en casa 4: ' + planetasCasa4);

    return (arrayOfArraysPlanetas);

}

//esta funcion buscara si hay conjuncion entre dos planetas (es decir si 2 estan en la misma casa), y dirá que significa esto


function resultadosAspectos() {
    //la funcion arraysPlanetasCasas() traera consigo un array de arrays
    var arraysPlanetasCasasLocal = arraysPlanetasCasas();
    //abajo se separara el array de arrays en arrays individuales
    var arraysPlanetasCasasLocalCasa1 = arraysPlanetasCasasLocal[0];
    var arraysPlanetasCasasLocalCasa2 = arraysPlanetasCasasLocal[1];
    var arraysPlanetasCasasLocalCasa3 = arraysPlanetasCasasLocal[2];
    var arraysPlanetasCasasLocalCasa4 = arraysPlanetasCasasLocal[3];
    var arrayConjunciones = [];

    //la propiedad include verificara cada planeta esta en Casa 1 y proseguira acorde
    if (arraysPlanetasCasasLocalCasa1.includes('marte')) {
        if (arraysPlanetasCasasLocalCasa1.includes('marte') && arraysPlanetasCasasLocalCasa1.includes('venus')) {
            // console.log('Hay una conjuncion de Marte y Venus en casa 1.');
            arrayConjunciones.push('MV1');
        }
        if (arraysPlanetasCasasLocalCasa1.includes('marte') && arraysPlanetasCasasLocalCasa1.includes('saturno')) {
            // console.log('Hay una conjuncion de Marte y Saturno en casa 1. ');
            arrayConjunciones.push('MS1');
        }

        if (arraysPlanetasCasasLocalCasa1.length == 1)
            console.log('Marte esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa1.includes('venus')) {
        if (arraysPlanetasCasasLocalCasa1.includes('venus') && arraysPlanetasCasasLocalCasa1.includes('saturno')) {
            // console.log('Hay una conjuncion de Venus y Saturno en casa 1.');
            arrayConjunciones.push('VS1');
        }
        if (arraysPlanetasCasasLocalCasa1.length == 1)
            console.log('Venus esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa1.includes('saturno') && arraysPlanetasCasasLocalCasa1.length == 1) {
        console.log('Saturno esta solo en esta casa (1). No hay conjuncion ');
    }


    //la propiedad include verificara cada planeta esta en Casa 2 y proseguira acorde
    if (arraysPlanetasCasasLocalCasa2.includes('marte')) {
        if (arraysPlanetasCasasLocalCasa2.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('venus')) {
            // console.log('Hay una conjuncion de Marte y Venus en casa 2.');
            arrayConjunciones.push('MV2');
        }

        if (arraysPlanetasCasasLocalCasa2.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('saturno')) {
            // console.log('Hay una conjuncion de Marte y Saturno en casa 2. ');
            arrayConjunciones.push('MS2');
        }

        if (arraysPlanetasCasasLocalCasa2.length == 1)
            console.log('Marte esta solo en esta casa(1). No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa2.includes('venus')) {
        if (arraysPlanetasCasasLocalCasa2.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('saturno')) {
            // console.log('Hay una conjuncion de Venus y Saturno en casa 2.');
            arrayConjunciones.push('VS2');
        }

        if (arraysPlanetasCasasLocalCasa2.length == 1)
            console.log('Venus esta solo en esta casa(2). No hay conjuncion ');

    }

    if (arraysPlanetasCasasLocalCasa2.includes('saturno') && arraysPlanetasCasasLocalCasa2.length == 1) {
        console.log('Saturno esta solo en esta casa(2). No hay conjuncion ');
    }


    //la propiedad include verificara cada planeta esta en Casa 3 y proseguira acorde
    if (arraysPlanetasCasasLocalCasa3.includes('marte')) {
        if (arraysPlanetasCasasLocalCasa3.includes('marte') && arraysPlanetasCasasLocalCasa3.includes('venus')) {
            // console.log('Hay una conjuncion de Marte y Venus en casa 3.');
            arrayConjunciones.push('VM3');
        }
        if (arraysPlanetasCasasLocalCasa3.includes('marte') && arraysPlanetasCasasLocalCasa3.includes('saturno')) {
            // console.log('Hay una conjuncion de Marte y Saturno en casa 3. ');
            arrayConjunciones.push('MS3');
        }
        if (arraysPlanetasCasasLocalCasa3.length == 1)
            console.log('Marte esta solo en esta casa(3). No hay conjuncion ');

    }

    if (arraysPlanetasCasasLocalCasa3.includes('venus')) {
        if (arraysPlanetasCasasLocalCasa3.includes('venus') && arraysPlanetasCasasLocalCasa3.includes('saturno')) {
            // console.log('hay una conjuncion de Venus y Saturno en casa 3.');
            arrayConjunciones.push('VS3');
        }
        if (arraysPlanetasCasasLocalCasa3.length == 1)
            console.log('Venus esta solo en esta casa(3). No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa3.includes('saturno') && arraysPlanetasCasasLocalCasa3.length == 1) {
        console.log('Saturno esta solo en esta casa(3). No hay conjuncion ');
    }

    //la propiedad include verificara cada planeta esta en Casa 4 y proseguira acorde
    if (arraysPlanetasCasasLocalCasa4.includes('marte')) {
        if (arraysPlanetasCasasLocalCasa4.includes('marte') && arraysPlanetasCasasLocalCasa4.includes('venus')) {
            // console.log('Hay una conjuncion de Marte y Venus en casa 4.');
            arrayConjunciones.push('MV4');
        }
        if (arraysPlanetasCasasLocalCasa4.includes('marte') && arraysPlanetasCasasLocalCasa4.includes('saturno')) {
            // console.log('Hay una conjuncion de Marte y Saturno en casa 4. ');
            arrayConjunciones.push('MS4');
        }
        if (arraysPlanetasCasasLocalCasa4.length == 1)
            console.log('Marte esta solo en esta casa(4). No hay conjuncion ');

    }

    if (arraysPlanetasCasasLocalCasa4.includes('venus')) {
        if (arraysPlanetasCasasLocalCasa4.includes('venus') && arraysPlanetasCasasLocalCasa4.includes('saturno')) {
            // console.log('hay una conjuncion de Venus y Saturno en casa 4.');
            arrayConjunciones.push('VS4');
        }
        if (arraysPlanetasCasasLocalCasa4.length == 1)
            console.log('Venus esta solo en esta casa(4). No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa4.includes('saturno') && arraysPlanetasCasasLocalCasa4.length == 1) {
        console.log('Saturn esta solo en esta casa(4). No hay conjuncion ');
    }

    // console.log(arrayConjunciones);
    return arrayConjunciones;

}

function total() {
    var arrayConj = resultadosAspectos();
    resultado = '';
    MV = 0;
    MS = 0;
    VS = 0;

    //el for de abajo recorrera el array retornado con todas las conjunciones de la funcion resultadosAspectos()..
    //..luego verificará si alguno de los elementos del array contienen MV o MS o VS y accionara de acuerdo a esto..
    for (i = 0; i < arrayConj.length; i++) {

        if (arrayConj[i].indexOf('MV') != -1 || arrayConj[i].indexOf('VM') != -1) {

            if (MV != 1) {
                resultado = resultado + 'Hay una conjunción de Marte y Venus en tu carta. El significado es:--- \n';
                MV = 1;
            }
        }

        if (arrayConj[i].indexOf('SV') != -1 || arrayConj[i].indexOf('VS') != -1) {
            if (VS != 1) {
                resultado = resultado + 'Hay una conjunción de Saturno y Venus en tu carta. El significado es:--- \n';
                VS = 1;
            }
        }

        if (arrayConj[i].indexOf('SM') != -1 || arrayConj[i].indexOf('MS') != -1) {
            if (MS != 1) {
                resultado = resultado + 'Hay una conjunción de Saturno y Marte en tu carta. El significado es:--- \n';
                MS = 1;
            }
        }
    }

    //el ofr
    arrayCasas = arraysPlanetasCasas();
    var arraysCasa1 = arrayCasas[0];
    var arraysCasa2 = arrayCasas[1];
    var arraysCasa3 = arrayCasas[2];
    var arraysCasa4 = arrayCasas[3];

    var venus = infoVenus();
    var saturno = infoSaturno();
    var marte = infoMarte();

    switch (parseInt(marte.casa)) {
        case 1:
            resultado = resultado + `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
            break;
        case 2:
            resultado = resultado + `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
            break;
        case 3:
            resultado = resultado + `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
            break;
        case 4:
            resultado = resultado + `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
            break;
    }


    switch (parseInt(venus.casa)) {
        case 1:
            resultado = resultado + `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
            break;
        case 2:
            resultado = resultado + `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
            break;
        case 3:
            resultado = resultado + `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
            break;
        case 4:
            resultado = resultado + `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
            break;
    }

    switch (parseInt(saturno.casa)) {
        case 1:
            resultado = resultado + `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
            break;
        case 2:
            resultado = resultado + `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
            break;
        case 3:
            resultado = resultado + `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
            break;
        case 4:
            resultado = resultado + `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
            break;
    }

    //Los switchs de abajo agregan la informacion correspondiente al regente de cada signo a la variable resultado

    switch (marte.regente) {
        case 'aries':
            resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
            break;
        case 'tauro':
            resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
            break;
        case 'geminis':
            resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
            break;
        case 'cancer':
            resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
            break;
    }

    switch (saturno.regente) {
        case 'aries':
            resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
            break;
        case 'tauro':
            resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
            break;
        case 'geminis':
            resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
            break;
        case 'cancer':
            resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
            break;
    }

    switch (venus.regente) {
        case 'aries':
            resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
            break;
        case 'tauro':
            resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
            break;
        case 'geminis':
            resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
            break;
        case 'cancer':
            resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
            break;
    }

    document.getElementById("texto__resultado").innerHTML = `${resultado}`;
    console.log(resultado);
}

function tabla() {





}