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


function infoMarte(regente, parametros, grados) {
    var signo = document.getElementById(regente[0]).value;
    var casa = document.getElementById(parametros[0]).value;
    var grado = document.getElementById(grados[0]).value;
    var nombre = 'Marte';
    var infoMarte = new planetas(signo, grado, casa, nombre);
    //crear nuevo objeto con la funcion constructora, ingresando los valores..
    //..obtenidos del HTML
    // console.log("Objeto Marte: ", infoMarte);
    return infoMarte;
}

function infoVenus(regente, parametros, grados) {
    var signo2 = document.getElementById(regente[1]).value;
    var casa2 = document.getElementById(parametros[1]).value;
    var grado2 = document.getElementById(grados[1]).value;
    var nombre2 = 'Venus';
    //crear nuevo objeto con la funcion constructora, ingresando los valores..
    //..obtenidos del HTML
    var infoVenus = new planetas(signo2, grado2, casa2, nombre2);
    // console.log("Objeto Venus: ", infoVenus);
    return infoVenus;
}

function infoSaturno(regente, parametros, grados) {
    var signo3 = document.getElementById(regente[2]).value;
    var casa3 = document.getElementById(parametros[2]).value;
    var grado3 = document.getElementById(grados[2]).value;
    var nombre3 = 'Saturno';
    //crear nuevo objeto con la funcion constructora, ingresando los valores..
    //..obtenidos del HTML
    var infoSaturno = new planetas(signo3, grado3, casa3, nombre3);
    // console.log("Objeto Saturno: ", infoSaturno);
    return infoSaturno;
}

function infoMercurio(regente, parametros, grados) {
    var signo4 = document.getElementById(regente[3]).value;
    var casa4 = document.getElementById(parametros[3]).value;
    var grado4 = document.getElementById(grados[3]).value;
    var nombre4 = 'Mercurio';
    //crear nuevo objeto con la funcion constructora, ingresando los valores..
    //..obtenidos del HTML
    var infoMercurio = new planetas(signo4, grado4, casa4, nombre4);

    return infoMercurio;
}

function infoLuna(regente, parametros, grados) {
    var signo5 = document.getElementById(regente[4]).value;
    var casa5 = document.getElementById(parametros[4]).value;
    var grado5 = document.getElementById(grados[4]).value;
    var nombre5 = 'Luna';
    //crear nuevo objeto con la funcion constructora, ingresando los valores..
    //..obtenidos del HTML
    var infoLuna = new planetas(signo5, grado5, casa5, nombre5);

    return infoLuna;
}

function infoSol(regente, parametros, grados) {
    var signo6 = document.getElementById(regente[5]).value;
    var casa6 = document.getElementById(parametros[5]).value;
    var grado6 = document.getElementById(grados[5]).value;
    var nombre6 = 'Sol';
    //crear nuevo objeto con la funcion constructora, ingresando los valores..
    //..obtenidos del HTML
    var infoSol = new planetas(signo6, grado6, casa6, nombre6);
    return infoSol;
}

function infoJupiter(regente, parametros, grados) {
    var signo7 = document.getElementById(regente[9]).value;
    var casa7 = document.getElementById(parametros[9]).value;
    var grado7 = document.getElementById(grados[9]).value;
    var nombre7 = 'Jupiter';
    //crear nuevo objeto con la funcion constructora, ingresando los valores..
    //..obtenidos del HTML
    var infoJupiter = new planetas(signo7, grado7, casa7, nombre7);
    return infoJupiter;
}

function infoUrano(regente, parametros, grados) {
    var signo8 = document.getElementById(regente[6]).value;
    var casa8 = document.getElementById(parametros[6]).value;
    var grado8 = document.getElementById(grados[6]).value;
    var nombre8 = 'Urano';
    //crear nuevo objeto con la funcion constructora, ingresando los valores..
    //..obtenidos del HTML
    var infoUrano = new planetas(signo8, grado8, casa8, nombre8);
    return infoUrano;
}

function infoNeptuno(regente, parametros, grados) {
    var signo9 = document.getElementById(regente[7]).value;
    var casa9 = document.getElementById(parametros[7]).value;
    var grado9 = document.getElementById(grados[7]).value;
    var nombre9 = 'Neptuno';
    //crear nuevo objeto con la funcion constructora, ingresando los valores..
    //..obtenidos del HTML
    var infoNeptuno = new planetas(signo9, grado9, casa9, nombre9);
    return infoNeptuno;
}

function infoPluton(regente, parametros, grados) {
    var signo10 = document.getElementById(regente[8]).value;
    var casa10 = document.getElementById(parametros[8]).value;
    var grado10 = document.getElementById(grados[8]).value;
    var nombre10 = 'Pluton';
    //crear nuevo objeto con la funcion constructora, ingresando los valores..
    //..obtenidos del HTML
    var infoPluton = new planetas(signo10, grado10, casa10, nombre10);
    return infoPluton;

}


//la funcion de abajo crea un array de objetos con los objetos obtenido de las funciones de cada planeta
function arrayObjetosPlanetas(regente, parametros, grados) {
    var arrayObjetosPlanetas = [];

    arrayObjetosPlanetas.push(infoMarte(regente, parametros, grados));
    arrayObjetosPlanetas.push(infoVenus(regente, parametros, grados));
    arrayObjetosPlanetas.push(infoSaturno(regente, parametros, grados));
    arrayObjetosPlanetas.push(infoMercurio(regente, parametros, grados));
    arrayObjetosPlanetas.push(infoLuna(regente, parametros, grados));
    arrayObjetosPlanetas.push(infoSol(regente, parametros, grados));
    arrayObjetosPlanetas.push(infoUrano(regente, parametros, grados));
    arrayObjetosPlanetas.push(infoNeptuno(regente, parametros, grados));
    arrayObjetosPlanetas.push(infoPluton(regente, parametros, grados));
    arrayObjetosPlanetas.push(infoJupiter(regente, parametros, grados));
    return arrayObjetosPlanetas;
}


var botonResultadosAnteriores = document.getElementById("resultadosanteriores__div1__button");
botonResultadosAnteriores.addEventListener('click', function() { resultadosAnteriores(); });

function resultadosAnteriores() {
    let resultado2 = [];

    var nombre = document.getElementById("nombrebusqueda").value;
    var apellido = document.getElementById("apellidobusqueda").value;
    var nombreyapellido = `${nombre}` + ' ' + `${apellido}`;
    var nombreyapellidofinal = nombreyapellido.toUpperCase();
    console.log(nombreyapellidofinal);

    if (nombre != '' && apellido != '') {
        var resultado = JSON.parse(localStorage.getItem(nombreyapellidofinal));
        var StringConjunciones = JSON.parse(localStorage.getItem('Conjunciones ' + `${nombreyapellidofinal}`));
        var StringCasas = JSON.parse(localStorage.getItem('Casas ' + `${nombreyapellidofinal}`));
        var StringPlanetas = JSON.parse(localStorage.getItem('Planetas ' + `${nombreyapellidofinal}`));


        // //ME QUEDA PENDIENTE IMPRIMIR LAS CONJUNCIONES CASAS Y PLANETAS BY INPUT E ESCRIBIR EL RESULTADO EN EL HTML
        // //TAMBIEN QUEDA PENDIENTE COMPLETAR LOS PLANETAS FALTANTES ARRIBA
        const pConj = document.getElementById("resArrayConj");
        pConj.innerHTML = '';
        const pCasas = document.getElementById("resArrayCas");
        pCasas.innerHTML = '';
        const pPlan = document.getElementById("resObjPlan");
        pPlan.innerHTML = '';
        const resFinal = document.getElementById("resFinal");
        resFinal.innerHTML = '';


        const nodo1 = document.createElement('p');
        const nodo2 = document.createElement('p');
        const nodo3 = document.createElement('p');
        const nodo4 = document.createElement('p');
        nodo1.className = "resultadosAnterioresBusqueda"
        nodo1.textContent = StringConjunciones;
        nodo2.className = "resultadosAnterioresBusqueda"
        nodo2.textContent = StringCasas;
        nodo3.className = "resultadosAnterioresBusqueda"

        // nodo3.textContent = JSON.stringify(StringPlanetas);

        Object.values(StringPlanetas).forEach(i => { console.log(JSON.stringify(i)); })

        console.log(Object.values(StringPlanetas));

        nodo4.className = "resultadosAnterioresBusqueda"
        nodo4.textContent = resultado;

        pConj.appendChild(nodo1);
        pCasas.appendChild(nodo2);
        // pPlan.appendChild(nodo3);
        resFinal.appendChild(nodo4);
        console.log(StringPlanetas);

        var nombre = '';
        var apellido = '';
        var nombreyapellido = '';
        var nombreyapellidofinal = '';
    } else {
        alert('Ingrese un nombre y un apellido para continuar');
    }
}


//============FUNCION QUE ARROJA ARRAY OF ARRAYS CON TODOS LOS PLANETAS Y CASAS=======
function arraysPlanetasCasas(parametros) {
    var planetasCasa1 = [];
    var planetasCasa2 = [];
    var planetasCasa3 = [];
    var planetasCasa4 = [];
    var planetasCasa5 = [];
    var planetasCasa6 = [];
    var planetasCasa7 = [];
    var planetasCasa8 = [];
    var planetasCasa9 = [];
    var planetasCasa10 = [];
    var planetasCasa11 = [];
    var planetasCasa12 = [];
    var arrayOfArraysPlanetas = [];
    // var arrayIdsPlanetasCasasLocal = arrayPlanetasyCasas;
    console.log(`ABAJO FIJATE`)
    console.log(`${parametros[0]}`);
    console.log(`${parametros[1]}`);
    console.log(`${parametros[2]}`);
    console.log(`${parametros[3]}`);
    console.log(`${parametros[4]}`);
    console.log(`${parametros[5]}`);
    //obtencion de los valores ingresados en el HTML
    // const [marte, venus, saturno, mercurio, luna, sol, urano, neptuno, pluton, jupiter] = [arrayIdsPlanetasCasasLocal[0], arrayIdsPlanetasCasasLocal[1], arrayIdsPlanetasCasasLocal[2], arrayIdsPlanetasCasasLocal[3], arrayIdsPlanetasCasasLocal[4], arrayIdsPlanetasCasasLocal[5], arrayIdsPlanetasCasasLocal[6], arrayIdsPlanetasCasasLocal[7], arrayIdsPlanetasCasasLocal[8], arrayIdsPlanetasCasasLocal[9]];
    var casaMarte = parseInt(document.getElementById(parametros[0]).value);
    var casaVenus = parseInt(document.getElementById(parametros[1]).value);
    var casaSaturno = parseInt(document.getElementById(parametros[2]).value);
    var casaMercurio = parseInt(document.getElementById(parametros[3]).value);
    var casaLuna = parseInt(document.getElementById(parametros[4]).value);
    var casaSol = parseInt(document.getElementById(parametros[5]).value);
    var casaUrano = parseInt(document.getElementById(parametros[6]).value);
    var casaNeptuno = parseInt(document.getElementById(parametros[7]).value);
    var casaPluton = parseInt(document.getElementById(parametros[8]).value);
    var casaJupiter = parseInt(document.getElementById(parametros[9]).value);

    //El switch de abajo ingresa al array de la casa correspondiente, el planeta correspondiente
    switch (casaMarte) {
        case 1 || "1st House":
            planetasCasa1.push('marte');
            break;
        case 2 || "2nd House":
            planetasCasa2.push('marte');
            break;
        case 3 || "3rd House":
            planetasCasa3.push('marte');
            break;
        case 4 || "4th House":
            planetasCasa4.push('marte');
            break;
        case 5 || "5th House":
            planetasCasa5.push('marte');
            break;
        case 6 || "6th House":
            planetasCasa6.push('marte');
            break;
        case 7 || "7th House":
            planetasCasa7.push('marte');
            break;
        case 8 || "8th House":
            planetasCasa8.push('marte');
            break;
        case 9 || "9th House":
            planetasCasa9.push('marte');
            break;
        case 10 || "10th House":
            planetasCasa10.push('marte');
            break;
        case 11 || "11th House":
            planetasCasa11.push('marte');
            break;
        case 12 || "12th House":
            planetasCasa12.push('marte');
            break;
    }

    switch (casaVenus) {
        case 1 || "1st House":
            planetasCasa1.push('venus');
            break;
        case 2 || "2nd House":
            planetasCasa2.push('venus');
            break;
        case 3 || "3rd House":
            planetasCasa3.push('venus');
            break;
        case 4 || "4th House":
            planetasCasa4.push('venus');
            break;
        case 5 || "5th House":
            planetasCasa5.push('venus');
            break;
        case 6 || "6th House":
            planetasCasa6.push('venus');
            break;
        case 7 || "7th House":
            planetasCasa7.push('venus');
            break;
        case 8 || "8th House":
            planetasCasa8.push('venus');
            break;
        case 9 || "9th House":
            planetasCasa9.push('venus');
            break;
        case 10 || "10th House":
            planetasCasa10.push('venus');
            break;
        case 11 || "11th House":
            planetasCasa11.push('venus');
            break;
        case 12 || "12th House":
            planetasCasa12.push('venus');
            break;
    }

    switch (casaSaturno) {
        case 1 || "1st House":
            planetasCasa1.push('saturno');
            break;
        case 2 || "2nd House":
            planetasCasa2.push('saturno');
            break;
        case 3 || "3rd House":
            planetasCasa3.push('saturno');
            break;
        case 4 || "4th House":
            planetasCasa4.push('saturno');
            break;
        case 5 || "5th House":
            planetasCasa5.push('saturno');
            break;
        case 6 || "6th House":
            planetasCasa6.push('saturno');
            break;
        case 7 || "7th House":
            planetasCasa7.push('saturno');
            break;
        case 8 || "8th House":
            planetasCasa8.push('saturno');
            break;
        case 9 || "9th House":
            planetasCasa9.push('saturno');
            break;
        case 10 || "10th House":
            planetasCasa10.push('saturno');
            break;
        case 11 || "11th House":
            planetasCasa11.push('saturno');
            break;
        case 12 || "12th House":
            planetasCasa12.push('saturno');
            break;
    }


    switch (casaMercurio) {
        case 1 || "1st House":
            planetasCasa1.push('mercurio');
            break;
        case 2 || "2nd House":
            planetasCasa2.push('mercurio');
            break;
        case 3 || "3rd House":
            planetasCasa3.push('mercurio');
            break;
        case 4 || "4th House":
            planetasCasa4.push('mercurio');
            break;
        case 5 || "5th House":
            planetasCasa5.push('mercurio');
            break;
        case 6 || "6th House":
            planetasCasa6.push('mercurio');
            break;
        case 7 || "7th House":
            planetasCasa7.push('mercurio');
            break;
        case 8 || "8th House":
            planetasCasa8.push('mercurio');
            break;
        case 9 || "9th House":
            planetasCasa9.push('mercurio');
            break;
        case 10 || "10th House":
            planetasCasa10.push('mercurio');
            break;
        case 11 || "11th House":
            planetasCasa11.push('mercurio');
            break;
        case 12 || "12th House":
            planetasCasa12.push('mercurio');
            break;
    }

    switch (casaLuna) {
        case 1 || "1st House":
            planetasCasa1.push('luna');
            break;
        case 2 || "2nd House":
            planetasCasa2.push('luna');
            break;
        case 3 || "3rd House":
            planetasCasa3.push('luna');
            break;
        case 4 || "4th House":
            planetasCasa4.push('luna');
            break;
        case 5 || "5th House":
            planetasCasa5.push('luna');
            break;
        case 6 || "6th House":
            planetasCasa6.push('luna');
            break;
        case 7 || "7th House":
            planetasCasa7.push('luna');
            break;
        case 8 || "8th House":
            planetasCasa8.push('luna');
            break;
        case 9 || "9th House":
            planetasCasa9.push('luna');
            break;
        case 10 || "10th House":
            planetasCasa10.push('luna');
            break;
        case 11 || "11th House":
            planetasCasa11.push('luna');
            break;
        case 12 || "12th House":
            planetasCasa12.push('luna');
            break;
    }

    switch (casaSol) {
        case 1 || "1st House":
            planetasCasa1.push('sol');
            break;
        case 2 || "2nd House":
            planetasCasa2.push('sol');
            break;
        case 3 || "3rd House":
            planetasCasa3.push('sol');
            break;
        case 4 || "4th House":
            planetasCasa4.push('sol');
            break;
        case 5 || "5th House":
            planetasCasa5.push('sol');
            break;
        case 6 || "6th House":
            planetasCasa6.push('sol');
            break;
        case 7 || "7th House":
            planetasCasa7.push('sol');
            break;
        case 8 || "8th House":
            planetasCasa8.push('sol');
            break;
        case 9 || "9th House":
            planetasCasa9.push('sol');
            break;
        case 10 || "10th House":
            planetasCasa10.push('sol');
            break;
        case 11 || "11th House":
            planetasCasa11.push('sol');
            break;
        case 12 || "12th House":
            planetasCasa12.push('sol');
            break;
    }

    switch (casaUrano) {
        case 1 || "1st House":
            planetasCasa1.push('urano');
            break;
        case 2 || "2nd House":
            planetasCasa2.push('urano');
            break;
        case 3 || "3rd House":
            planetasCasa3.push('urano');
            break;
        case 4 || "4th House":
            planetasCasa4.push('urano');
            break;
        case 5 || "5th House":
            planetasCasa5.push('urano');
            break;
        case 6 || "6th House":
            planetasCasa6.push('urano');
            break;
        case 7 || "7th House":
            planetasCasa7.push('urano');
            break;
        case 8 || "8th House":
            planetasCasa8.push('urano');
            break;
        case 9 || "9th House":
            planetasCasa9.push('urano');
            break;
        case 10 || "10th House":
            planetasCasa10.push('urano');
            break;
        case 11 || "11th House":
            planetasCasa11.push('urano');
            break;
        case 12 || "12th House":
            planetasCasa12.push('urano');
            break;
    }

    switch (casaNeptuno) {
        case 1 || "1st House":
            planetasCasa1.push('neptuno');
            break;
        case 2 || "2nd House":
            planetasCasa2.push('neptuno');
            break;
        case 3 || "3rd House":
            planetasCasa3.push('neptuno');
            break;
        case 4 || "4th House":
            planetasCasa4.push('neptuno');
            break;
        case 5 || "5th House":
            planetasCasa5.push('neptuno');
            break;
        case 6 || "6th House":
            planetasCasa6.push('neptuno');
            break;
        case 7 || "7th House":
            planetasCasa7.push('neptuno');
            break;
        case 8 || "8th House":
            planetasCasa8.push('neptuno');
            break;
        case 9 || "9th House":
            planetasCasa9.push('neptuno');
            break;
        case 10 || "10th House":
            planetasCasa10.push('neptuno');
            break;
        case 11 || "11th House":
            planetasCasa11.push('neptuno');
            break;
        case 12 || "12th House":
            planetasCasa12.push('neptuno');
            break;
    }

    switch (casaPluton) {
        case 1 || "1st House":
            planetasCasa1.push('pluton');
            break;
        case 2 || "2nd House":
            planetasCasa2.push('pluton');
            break;
        case 3 || "3rd House":
            planetasCasa3.push('pluton');
            break;
        case 4 || "4th House":
            planetasCasa4.push('pluton');
            break;
        case 5 || "5th House":
            planetasCasa5.push('pluton');
            break;
        case 6 || "6th House":
            planetasCasa6.push('pluton');
            break;
        case 7 || "7th House":
            planetasCasa7.push('pluton');
            break;
        case 8 || "8th House":
            planetasCasa8.push('pluton');
            break;
        case 9 || "9th House":
            planetasCasa9.push('pluton');
            break;
        case 10 || "10th House":
            planetasCasa10.push('pluton');
            break;
        case 11 || "11th House":
            planetasCasa11.push('pluton');
            break;
        case 12 || "12th House":
            planetasCasa12.push('pluton');
            break;
    }

    switch (casaJupiter) {
        case 1 || "1st House":
            planetasCasa1.push('jupiter');
            break;
        case 2 || "2nd House":
            planetasCasa2.push('jupiter');
            break;
        case 3 || "3rd House":
            planetasCasa3.push('jupiter');
            break;
        case 4 || "4th House":
            planetasCasa4.push('jupiter');
            break;
        case 5 || "5th House":
            planetasCasa5.push('jupiter');
            break;
        case 6 || "6th House":
            planetasCasa6.push('jupiter');
            break;
        case 7 || "7th House":
            planetasCasa7.push('jupiter');
            break;
        case 8 || "8th House":
            planetasCasa8.push('jupiter');
            break;
        case 9 || "9th House":
            planetasCasa9.push('jupiter');
            break;
        case 10 || "10th House":
            planetasCasa10.push('jupiter');
            break;
        case 11 || "11th House":
            planetasCasa11.push('jupiter');
            break;
        case 12 || "12th House":
            planetasCasa12.push('jupiter');
            break;
    }

    arrayOfArraysPlanetas.push(planetasCasa1);
    arrayOfArraysPlanetas.push(planetasCasa2);
    arrayOfArraysPlanetas.push(planetasCasa3);
    arrayOfArraysPlanetas.push(planetasCasa4);
    arrayOfArraysPlanetas.push(planetasCasa5);
    arrayOfArraysPlanetas.push(planetasCasa6);
    arrayOfArraysPlanetas.push(planetasCasa7);
    arrayOfArraysPlanetas.push(planetasCasa8);
    arrayOfArraysPlanetas.push(planetasCasa9);
    arrayOfArraysPlanetas.push(planetasCasa10);
    arrayOfArraysPlanetas.push(planetasCasa11);
    arrayOfArraysPlanetas.push(planetasCasa12);


    console.log(`ESTE ES ARRAY OF ARRYAS PLANETAS$ UNO ${arrayOfArraysPlanetas[0]} DOS ${arrayOfArraysPlanetas[1]} TRES ${arrayOfArraysPlanetas[2]} `);
    return (arrayOfArraysPlanetas);

}


//========FUNCION QUE ARROJA RESULTADO=======
function resultadosAspectos(parametros, idscheckbox) {
    //la funcion arraysPlanetasCasas() traera consigo un array de arrays
    var arraysPlanetasCasasLocal = arraysPlanetasCasas(parametros);
    var arrayLocalCheckbox = idscheckbox;

    //DESESTRUCTURACION ARRAYS
    var [arraysPlanetasCasasLocalCasa1, arraysPlanetasCasasLocalCasa2, arraysPlanetasCasasLocalCasa3, arraysPlanetasCasasLocalCasa4, arraysPlanetasCasasLocalCasa5, arraysPlanetasCasasLocalCasa6, arraysPlanetasCasasLocalCasa7, arraysPlanetasCasasLocalCasa8, arraysPlanetasCasasLocalCasa9, arraysPlanetasCasasLocalCasa10, arraysPlanetasCasasLocalCasa11, arraysPlanetasCasasLocalCasa12] = arraysPlanetasCasasLocal;

    var arrayConjunciones = [];

    ///ME FALTA: ABAJO REVISAR QUE ESTE JUPITER EN LA 1 Y COLOCARLA EN EL RESTO DE LAS CASASLUEGO PROBAR

    //============la propiedad include verificara cada planeta esta en Casa 1 y proseguira acorde=======
    //OPERADOR LOGICO AND para ingresar al array los valores correspondientes
    if (document.getElementById(arrayLocalCheckbox[0]).checked == true) {
        if (arraysPlanetasCasasLocalCasa1.includes('marte')) {

            if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('marte') && arraysPlanetasCasasLocalCasa1.includes('venus')) && arrayConjunciones.push('MV1');
            }
            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('marte') && arraysPlanetasCasasLocalCasa1.includes('saturno')) && arrayConjunciones.push('MS1');
            }
            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('marte') && arraysPlanetasCasasLocalCasa1.includes('mercurio')) && arrayConjunciones.push('MMe1');
            }
            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('marte') && arraysPlanetasCasasLocalCasa1.includes('luna')) && arrayConjunciones.push('ML1');
            }
            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('marte') && arraysPlanetasCasasLocalCasa1.includes('sol')) && arrayConjunciones.push('MSo1');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('marte') && arraysPlanetasCasasLocalCasa1.includes('urano')) && arrayConjunciones.push('MU1');
            }
            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('marte') && arraysPlanetasCasasLocalCasa1.includes('neptuno')) && arrayConjunciones.push('MN1');
            }
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('marte') && arraysPlanetasCasasLocalCasa1.includes('pluton')) && arrayConjunciones.push('MP1');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('marte') && arraysPlanetasCasasLocalCasa1.includes('jupiter')) && arrayConjunciones.push('MJ1');
            }


        }
    }

    if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
        if (arraysPlanetasCasasLocalCasa1.includes('venus')) {

            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('venus') && arraysPlanetasCasasLocalCasa1.includes('saturno')) && arrayConjunciones.push('VS1');
            }

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('venus') && arraysPlanetasCasasLocalCasa1.includes('mercurio')) && arrayConjunciones.push('VMe1');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('venus') && arraysPlanetasCasasLocalCasa1.includes('luna')) && arrayConjunciones.push('VL1');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('venus') && arraysPlanetasCasasLocalCasa1.includes('sol')) && arrayConjunciones.push('VSo1');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('venus') && arraysPlanetasCasasLocalCasa1.includes('urano')) && arrayConjunciones.push('VU1');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('venus') && arraysPlanetasCasasLocalCasa1.includes('neptuno')) && arrayConjunciones.push('VN1');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('venus') && arraysPlanetasCasasLocalCasa1.includes('pluton')) && arrayConjunciones.push('VP1');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('venus') && arraysPlanetasCasasLocalCasa1.includes('jupiter')) && arrayConjunciones.push('VJ1');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
        if (arraysPlanetasCasasLocalCasa1.includes('saturno')) {

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('saturno') && arraysPlanetasCasasLocalCasa1.includes('luna')) && arrayConjunciones.push('SL1');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('saturno') && arraysPlanetasCasasLocalCasa1.includes('sol')) && arrayConjunciones.push('SSo1');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('saturno') && arraysPlanetasCasasLocalCasa1.includes('urano')) && arrayConjunciones.push('SU1');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('saturno') && arraysPlanetasCasasLocalCasa1.includes('neptuno')) && arrayConjunciones.push('SN1');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('saturno') && arraysPlanetasCasasLocalCasa1.includes('jupiter')) && arrayConjunciones.push('SJ1');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('saturno') && arraysPlanetasCasasLocalCasa1.includes('pluton')) && arrayConjunciones.push('SP1');
            }

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('saturno') && arraysPlanetasCasasLocalCasa1.includes('mercurio')) && arrayConjunciones.push('SMe1');
            }
        }
    }


    if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
        if (arraysPlanetasCasasLocalCasa1.includes('mercurio')) {
            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('mercurio') && arraysPlanetasCasasLocalCasa1.includes('luna')) && arrayConjunciones.push('MeL1');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('mercurio') && arraysPlanetasCasasLocalCasa1.includes('sol')) && arrayConjunciones.push('MeSo1');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('mercurio') && arraysPlanetasCasasLocalCasa1.includes('urano')) && arrayConjunciones.push('MeU1');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('mercurio') && arraysPlanetasCasasLocalCasa1.includes('neptuno')) && arrayConjunciones.push('MeN1');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('mercurio') && arraysPlanetasCasasLocalCasa1.includes('pluton')) && arrayConjunciones.push('MeP1');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('mercurio') && arraysPlanetasCasasLocalCasa1.includes('jupiter')) && arrayConjunciones.push('MeJ1');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
        if (arraysPlanetasCasasLocalCasa1.includes('luna')) {

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('luna') && arraysPlanetasCasasLocalCasa1.includes('sol')) && arrayConjunciones.push('LSo1');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('luna') && arraysPlanetasCasasLocalCasa1.includes('urano')) && arrayConjunciones.push('LU1');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('luna') && arraysPlanetasCasasLocalCasa1.includes('neptuno')) && arrayConjunciones.push('LN1');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('luna') && arraysPlanetasCasasLocalCasa1.includes('pluton')) && arrayConjunciones.push('LP1');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('luna') && arraysPlanetasCasasLocalCasa1.includes('jupiter')) && arrayConjunciones.push('LJ1');
            }

        }
    }


    if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
        if (arraysPlanetasCasasLocalCasa1.includes('sol')) {
            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('sol') && arraysPlanetasCasasLocalCasa1.includes('urano')) && arrayConjunciones.push('SoU1');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('sol') && arraysPlanetasCasasLocalCasa1.includes('neptuno')) && arrayConjunciones.push('SoN1');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('sol') && arraysPlanetasCasasLocalCasa1.includes('pluton')) && arrayConjunciones.push('SoP1');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('sol') && arraysPlanetasCasasLocalCasa1.includes('jupiter')) && arrayConjunciones.push('SoJ1');
            }


        }
    }

    if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
        if (arraysPlanetasCasasLocalCasa1.includes('urano')) {

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('urano') && arraysPlanetasCasasLocalCasa1.includes('neptuno')) && arrayConjunciones.push('UN1');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('urano') && arraysPlanetasCasasLocalCasa1.includes('pluton')) && arrayConjunciones.push('UP1');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('urano') && arraysPlanetasCasasLocalCasa1.includes('jupiter')) && arrayConjunciones.push('UJ1');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
        if (arraysPlanetasCasasLocalCasa1.includes('neptuno')) {

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('neptuno') && arraysPlanetasCasasLocalCasa1.includes('pluton')) && arrayConjunciones.push('NP1');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('neptuno') && arraysPlanetasCasasLocalCasa1.includes('jupiter')) && arrayConjunciones.push('NJ1');
            }


        }
    }

    if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
        if (arraysPlanetasCasasLocalCasa1.includes('pluton')) {

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa1.includes('pluton') && arraysPlanetasCasasLocalCasa1.includes('jupiter')) && arrayConjunciones.push('PJ1');
            }
        }
    }
    ///ME FALTA: JUPITER NO ESTA EN EL CICLO

    //========la propiedad include verificara cada planeta esta en Casa 2 y proseguira acorde======
    if (document.getElementById(arrayLocalCheckbox[0]).checked == true) {
        if (arraysPlanetasCasasLocalCasa2.includes('marte')) {

            if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('venus')) && arrayConjunciones.push('MV2');
            }

            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('saturno')) && arrayConjunciones.push('MS2');
            }

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('mercurio')) && arrayConjunciones.push('MMe2');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('luna')) && arrayConjunciones.push('ML2');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('sol')) && arrayConjunciones.push('MSo2');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('urano')) && arrayConjunciones.push('MU2');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('neptuno')) && arrayConjunciones.push('MN2');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('pluton')) && arrayConjunciones.push('MP2');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('jupiter')) && arrayConjunciones.push('MJ2');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
        if (arraysPlanetasCasasLocalCasa2.includes('venus')) {

            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('saturno')) && arrayConjunciones.push('VS2');
            }

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('mercurio')) && arrayConjunciones.push('VMe2');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('luna')) && arrayConjunciones.push('VL2');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('sol')) && arrayConjunciones.push('VSo2');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('urano')) && arrayConjunciones.push('VU2');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('neptuno')) && arrayConjunciones.push('VN2');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('pluton')) && arrayConjunciones.push('VP2');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('jupiter')) && arrayConjunciones.push('VJ2');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
        if (arraysPlanetasCasasLocalCasa2.includes('saturno')) {

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('saturno') && arraysPlanetasCasasLocalCasa2.includes('mercurio')) && arrayConjunciones.push('SMe2');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('saturno') && arraysPlanetasCasasLocalCasa2.includes('luna')) && arrayConjunciones.push('SL2');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('saturno') && arraysPlanetasCasasLocalCasa2.includes('sol')) && arrayConjunciones.push('SSo2');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('saturno') && arraysPlanetasCasasLocalCasa2.includes('urano')) && arrayConjunciones.push('SU2');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('saturno') && arraysPlanetasCasasLocalCasa2.includes('neptuno')) && arrayConjunciones.push('SN2');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('saturno') && arraysPlanetasCasasLocalCasa2.includes('pluton')) && arrayConjunciones.push('SP2');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('saturno') && arraysPlanetasCasasLocalCasa2.includes('jupiter')) && arrayConjunciones.push('SJ2');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
        if (arraysPlanetasCasasLocalCasa2.includes('mercurio')) {

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('mercurio') && arraysPlanetasCasasLocalCasa2.includes('luna')) && arrayConjunciones.push('MeL2');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('mercurio') && arraysPlanetasCasasLocalCasa2.includes('sol')) && arrayConjunciones.push('MeSo2');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('mercurio') && arraysPlanetasCasasLocalCasa2.includes('urano')) && arrayConjunciones.push('MeU2');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('mercurio') && arraysPlanetasCasasLocalCasa2.includes('neptuno')) && arrayConjunciones.push('MeN2');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('mercurio') && arraysPlanetasCasasLocalCasa2.includes('pluton')) && arrayConjunciones.push('MeP2');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('mercurio') && arraysPlanetasCasasLocalCasa2.includes('jupiter')) && arrayConjunciones.push('MeJ2');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
        if (arraysPlanetasCasasLocalCasa2.includes('luna')) {

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('luna') && arraysPlanetasCasasLocalCasa2.includes('sol')) && arrayConjunciones.push('LSo2');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('luna') && arraysPlanetasCasasLocalCasa2.includes('urano')) && arrayConjunciones.push('LU2');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('luna') && arraysPlanetasCasasLocalCasa2.includes('neptuno')) && arrayConjunciones.push('LN2');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('luna') && arraysPlanetasCasasLocalCasa2.includes('pluton')) && arrayConjunciones.push('LP2');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('luna') && arraysPlanetasCasasLocalCasa2.includes('jupiter')) && arrayConjunciones.push('LJ2');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
        if (arraysPlanetasCasasLocalCasa2.includes('sol')) {

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('sol') && arraysPlanetasCasasLocalCasa2.includes('urano')) && arrayConjunciones.push('SoU2');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('sol') && arraysPlanetasCasasLocalCasa2.includes('neptuno')) && arrayConjunciones.push('SoN2');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('sol') && arraysPlanetasCasasLocalCasa2.includes('pluton')) && arrayConjunciones.push('SoP2');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('sol') && arraysPlanetasCasasLocalCasa2.includes('jupiter')) && arrayConjunciones.push('SoJ2');
            }
        }
    }


    if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
        if (arraysPlanetasCasasLocalCasa2.includes('urano')) {

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('urano') && arraysPlanetasCasasLocalCasa2.includes('neptuno')) && arrayConjunciones.push('UN2');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('urano') && arraysPlanetasCasasLocalCasa2.includes('pluton')) && arrayConjunciones.push('UP2');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('urano') && arraysPlanetasCasasLocalCasa2.includes('jupiter')) && arrayConjunciones.push('UJ2');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
        if (arraysPlanetasCasasLocalCasa2.includes('neptuno')) {

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('neptuno') && arraysPlanetasCasasLocalCasa2.includes('pluton')) && arrayConjunciones.push('NP2');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('neptuno') && arraysPlanetasCasasLocalCasa2.includes('jupiter')) && arrayConjunciones.push('NJ2');
            }

        }
    }

    if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
        if (arraysPlanetasCasasLocalCasa2.includes('pluton')) {

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa2.includes('pluton') && arraysPlanetasCasasLocalCasa2.includes('jupiter')) && arrayConjunciones.push('PJ2');
            }
        }
    }

    //ME FALTA A PARTIR DE ABAJO EL AND

    //============la propiedad include verificara cada planeta esta en Casa 3 y proseguira acorde========
    if (document.getElementById(arrayLocalCheckbox[0]).checked == true) {
        if (arraysPlanetasCasasLocalCasa3.includes('marte')) {

            if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('venus')) && arrayConjunciones.push('MV3');
            }

            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('saturno')) && arrayConjunciones.push('MS3');
            }

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('mercurio')) && arrayConjunciones.push('MMe3');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('luna')) && arrayConjunciones.push('ML3');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('sol')) && arrayConjunciones.push('MSo3');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('urano')) && arrayConjunciones.push('MU3');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('neptuno')) && arrayConjunciones.push('MN3');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('pluton')) && arrayConjunciones.push('MP3');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('jupiter')) && arrayConjunciones.push('MJ3');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
        if (arraysPlanetasCasasLocalCasa3.includes('venus')) {

            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('saturno')) && arrayConjunciones.push('VS3');
            }

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('mercurio')) && arrayConjunciones.push('VMe3');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('luna')) && arrayConjunciones.push('VL3');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('sol')) && arrayConjunciones.push('VSo3');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('urano')) && arrayConjunciones.push('VU3');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('neptuno')) && arrayConjunciones.push('VN3');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('pluton')) && arrayConjunciones.push('VP3');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('jupiter')) && arrayConjunciones.push('VJ3');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {

        if (arraysPlanetasCasasLocalCasa3.includes('saturno')) {

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('saturno') && arraysPlanetasCasasLocalCasa2.includes('mercurio')) && arrayConjunciones.push('SMe3');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('saturno') && arraysPlanetasCasasLocalCasa2.includes('luna')) && arrayConjunciones.push('SL3');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('saturno') && arraysPlanetasCasasLocalCasa2.includes('sol')) && arrayConjunciones.push('SSo3');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('saturno') && arraysPlanetasCasasLocalCasa2.includes('urano')) && arrayConjunciones.push('SU3');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('saturno') && arraysPlanetasCasasLocalCasa2.includes('neptuno')) && arrayConjunciones.push('SN3');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('saturno') && arraysPlanetasCasasLocalCasa2.includes('pluton')) && arrayConjunciones.push('SP3');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('saturno') && arraysPlanetasCasasLocalCasa2.includes('jupiter')) && arrayConjunciones.push('SJ3');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {

        if (arraysPlanetasCasasLocalCasa3.includes('mercurio')) {

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('mercurio') && arraysPlanetasCasasLocalCasa3.includes('luna')) && arrayConjunciones.push('MeL3');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('mercurio') && arraysPlanetasCasasLocalCasa3.includes('sol')) && arrayConjunciones.push('MeSo3');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('mercurio') && arraysPlanetasCasasLocalCasa3.includes('urano')) && arrayConjunciones.push('MeU3');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('mercurio') && arraysPlanetasCasasLocalCasa3.includes('neptuno')) && arrayConjunciones.push('MeN3');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('mercurio') && arraysPlanetasCasasLocalCasa3.includes('pluton')) && arrayConjunciones.push('MeP3');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('mercurio') && arraysPlanetasCasasLocalCasa3.includes('jupiter')) && arrayConjunciones.push('MeJ3');
            }
        }
    }


    if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
        if (arraysPlanetasCasasLocalCasa3.includes('luna')) {

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('luna') && arraysPlanetasCasasLocalCasa3.includes('sol')) && arrayConjunciones.push('LSo3');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('luna') && arraysPlanetasCasasLocalCasa3.includes('urano')) && arrayConjunciones.push('LU3');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('luna') && arraysPlanetasCasasLocalCasa3.includes('neptuno')) && arrayConjunciones.push('LN3');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('luna') && arraysPlanetasCasasLocalCasa3.includes('pluton')) && arrayConjunciones.push('LP3');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('luna') && arraysPlanetasCasasLocalCasa3.includes('jupiter')) && arrayConjunciones.push('LJ3');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
        if (arraysPlanetasCasasLocalCasa3.includes('sol')) {

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('sol') && arraysPlanetasCasasLocalCasa3.includes('urano')) && arrayConjunciones.push('SoU3');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('sol') && arraysPlanetasCasasLocalCasa3.includes('neptuno')) && arrayConjunciones.push('SoN3');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('sol') && arraysPlanetasCasasLocalCasa3.includes('pluton')) && arrayConjunciones.push('SoP3');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('sol') && arraysPlanetasCasasLocalCasa3.includes('jupiter')) && arrayConjunciones.push('SoJ3');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
        if (arraysPlanetasCasasLocalCasa3.includes('urano')) {

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('urano') && arraysPlanetasCasasLocalCasa3.includes('neptuno')) && arrayConjunciones.push('UN3');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('urano') && arraysPlanetasCasasLocalCasa3.includes('pluton')) && arrayConjunciones.push('UP3');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('urano') && arraysPlanetasCasasLocalCasa3.includes('jupiter')) && arrayConjunciones.push('UJ3');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
        if (arraysPlanetasCasasLocalCasa3.includes('neptuno')) {

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('neptuno') && arraysPlanetasCasasLocalCasa3.includes('pluton')) && arrayConjunciones.push('NP3');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('neptuno') && arraysPlanetasCasasLocalCasa3.includes('jupiter')) && arrayConjunciones.push('NJ3');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
        if (arraysPlanetasCasasLocalCasa3.includes('pluton')) {

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa3.includes('pluton') && arraysPlanetasCasasLocalCasa3.includes('jupiter')) && arrayConjunciones.push('PJ3');
            }
        }
    }


    //========la propiedad include verificara cada planeta esta en Casa 4 y proseguira acorde=======
    if (document.getElementById(arrayLocalCheckbox[0]).checked == true) {
        if (arraysPlanetasCasasLocalCasa4.includes('marte')) {

            if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('marte') && arraysPlanetasCasasLocalCasa4.includes('venus')) && arrayConjunciones.push('MV4');
            }

            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('marte') && arraysPlanetasCasasLocalCasa4.includes('saturno')) && arrayConjunciones.push('MS4');
            }

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('marte') && arraysPlanetasCasasLocalCasa4.includes('mercurio')) && arrayConjunciones.push('MMe4');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('marte') && arraysPlanetasCasasLocalCasa4.includes('luna')) && arrayConjunciones.push('ML4');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('marte') && arraysPlanetasCasasLocalCasa4.includes('sol')) && arrayConjunciones.push('MSo4');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('marte') && arraysPlanetasCasasLocalCasa4.includes('urano')) && arrayConjunciones.push('MU4');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('marte') && arraysPlanetasCasasLocalCasa4.includes('neptuno')) && arrayConjunciones.push('MN4');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('marte') && arraysPlanetasCasasLocalCasa4.includes('pluton')) && arrayConjunciones.push('MP4');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('marte') && arraysPlanetasCasasLocalCasa4.includes('jupiter')) && arrayConjunciones.push('MJ4');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
        if (arraysPlanetasCasasLocalCasa4.includes('venus')) {

            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('venus') && arraysPlanetasCasasLocalCasa4.includes('saturno')) && arrayConjunciones.push('VS4');
            }

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('venus') && arraysPlanetasCasasLocalCasa4.includes('mercurio')) && arrayConjunciones.push('VMe4');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('venus') && arraysPlanetasCasasLocalCasa4.includes('luna')) && arrayConjunciones.push('VL4');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('venus') && arraysPlanetasCasasLocalCasa4.includes('sol')) && arrayConjunciones.push('VSo4');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('venus') && arraysPlanetasCasasLocalCasa4.includes('urano')) && arrayConjunciones.push('VU4');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('venus') && arraysPlanetasCasasLocalCasa4.includes('neptuno')) && arrayConjunciones.push('VN4');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('venus') && arraysPlanetasCasasLocalCasa4.includes('pluton')) && arrayConjunciones.push('VP4');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('venus') && arraysPlanetasCasasLocalCasa4.includes('jupiter')) && arrayConjunciones.push('VJ4');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
        if (arraysPlanetasCasasLocalCasa4.includes('saturno')) {

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('saturno') && arraysPlanetasCasasLocalCasa4.includes('mercurio')) && arrayConjunciones.push('SMe4');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('saturno') && arraysPlanetasCasasLocalCasa4.includes('luna')) && arrayConjunciones.push('SL4');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('saturno') && arraysPlanetasCasasLocalCasa4.includes('sol')) && arrayConjunciones.push('SSo4');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('saturno') && arraysPlanetasCasasLocalCasa4.includes('urano')) && arrayConjunciones.push('SU4');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('saturno') && arraysPlanetasCasasLocalCasa4.includes('neptuno')) && arrayConjunciones.push('SN4');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('saturno') && arraysPlanetasCasasLocalCasa4.includes('pluton')) && arrayConjunciones.push('SP4');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('saturno') && arraysPlanetasCasasLocalCasa4.includes('jupiter')) && arrayConjunciones.push('SJ4');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
        if (arraysPlanetasCasasLocalCasa4.includes('mercurio')) {

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('mercurio') && arraysPlanetasCasasLocalCasa4.includes('luna')) && arrayConjunciones.push('MeL4');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('mercurio') && arraysPlanetasCasasLocalCasa4.includes('sol')) && arrayConjunciones.push('MeSo4');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('mercurio') && arraysPlanetasCasasLocalCasa4.includes('urano')) && arrayConjunciones.push('MeU4');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('mercurio') && arraysPlanetasCasasLocalCasa4.includes('neptuno')) && arrayConjunciones.push('MeN4');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('mercurio') && arraysPlanetasCasasLocalCasa4.includes('pluton')) && arrayConjunciones.push('MeP4');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('mercurio') && arraysPlanetasCasasLocalCasa4.includes('jupiter')) && arrayConjunciones.push('MeJ4');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
        if (arraysPlanetasCasasLocalCasa4.includes('luna')) {

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('luna') && arraysPlanetasCasasLocalCasa4.includes('sol')) && arrayConjunciones.push('LSo4');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('luna') && arraysPlanetasCasasLocalCasa4.includes('urano')) && arrayConjunciones.push('LU4');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('luna') && arraysPlanetasCasasLocalCasa4.includes('neptuno')) && arrayConjunciones.push('LN4');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('luna') && arraysPlanetasCasasLocalCasa4.includes('pluton')) && arrayConjunciones.push('LP4');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('luna') && arraysPlanetasCasasLocalCasa4.includes('jupiter')) && arrayConjunciones.push('LJ4');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
        if (arraysPlanetasCasasLocalCasa4.includes('sol')) {

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('sol') && arraysPlanetasCasasLocalCasa4.includes('urano')) && arrayConjunciones.push('SoU4');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('sol') && arraysPlanetasCasasLocalCasa4.includes('neptuno')) && arrayConjunciones.push('SoN4');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('sol') && arraysPlanetasCasasLocalCasa4.includes('pluton')) && arrayConjunciones.push('SoP4');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('sol') && arraysPlanetasCasasLocalCasa4.includes('jupiter')) && arrayConjunciones.push('SoJ4');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
        if (arraysPlanetasCasasLocalCasa4.includes('urano')) {

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('urano') && arraysPlanetasCasasLocalCasa4.includes('neptuno')) && arrayConjunciones.push('UN4');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('urano') && arraysPlanetasCasasLocalCasa4.includes('pluton')) && arrayConjunciones.push('UP4');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('urano') && arraysPlanetasCasasLocalCasa4.includes('jupiter')) && arrayConjunciones.push('UJ4');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
        if (arraysPlanetasCasasLocalCasa4.includes('neptuno')) {

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('neptuno') && arraysPlanetasCasasLocalCasa4.includes('pluton')) && arrayConjunciones.push('NP4');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('neptuno') && arraysPlanetasCasasLocalCasa4.includes('jupiter')) && arrayConjunciones.push('NJ4');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
        if (arraysPlanetasCasasLocalCasa4.includes('pluton')) {

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa4.includes('pluton') && arraysPlanetasCasasLocalCasa4.includes('jupiter')) && arrayConjunciones.push('PJ4');
            }

        }
    }
    ///=============ME FALTA: JUPITER NO ESTA EN EL CICLO================================


    //========la propiedad include verificara cada planeta esta en Casa 5 y proseguira acorde=======
    if (document.getElementById(arrayLocalCheckbox[0]).checked == true) {
        if (arraysPlanetasCasasLocalCasa5.includes('marte')) {

            if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('marte') && arraysPlanetasCasasLocalCasa5.includes('venus')) && arrayConjunciones.push('MV5');
            }

            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('marte') && arraysPlanetasCasasLocalCasa5.includes('saturno')) && arrayConjunciones.push('MS5');
            }

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('marte') && arraysPlanetasCasasLocalCasa5.includes('mercurio')) && arrayConjunciones.push('MMe5');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('marte') && arraysPlanetasCasasLocalCasa5.includes('luna')) && arrayConjunciones.push('ML5');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('marte') && arraysPlanetasCasasLocalCasa5.includes('sol')) && arrayConjunciones.push('MSo5');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('marte') && arraysPlanetasCasasLocalCasa5.includes('urano')) && arrayConjunciones.push('MU5');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('marte') && arraysPlanetasCasasLocalCasa5.includes('neptuno')) && arrayConjunciones.push('MN5');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('marte') && arraysPlanetasCasasLocalCasa5.includes('pluton')) && arrayConjunciones.push('MP5');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('marte') && arraysPlanetasCasasLocalCasa5.includes('jupiter')) && arrayConjunciones.push('MJ5');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
        if (arraysPlanetasCasasLocalCasa5.includes('venus')) {

            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('venus') && arraysPlanetasCasasLocalCasa5.includes('saturno')) && arrayConjunciones.push('VS5');
            }

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('venus') && arraysPlanetasCasasLocalCasa5.includes('mercurio')) && arrayConjunciones.push('VMe5');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('venus') && arraysPlanetasCasasLocalCasa5.includes('luna')) && arrayConjunciones.push('VL5');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('venus') && arraysPlanetasCasasLocalCasa5.includes('sol')) && arrayConjunciones.push('VSo5');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('venus') && arraysPlanetasCasasLocalCasa5.includes('urano')) && arrayConjunciones.push('VU5');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('venus') && arraysPlanetasCasasLocalCasa5.includes('neptuno')) && arrayConjunciones.push('VN5');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('venus') && arraysPlanetasCasasLocalCasa5.includes('pluton')) && arrayConjunciones.push('VP5');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('venus') && arraysPlanetasCasasLocalCasa5.includes('jupiter')) && arrayConjunciones.push('VJ5');
            }
        }
    }


    if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
        if (arraysPlanetasCasasLocalCasa5.includes('saturno')) {

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('saturno') && arraysPlanetasCasasLocalCasa5.includes('mercurio')) && arrayConjunciones.push('SMe5');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('saturno') && arraysPlanetasCasasLocalCasa5.includes('luna')) && arrayConjunciones.push('SL5');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('saturno') && arraysPlanetasCasasLocalCasa5.includes('sol')) && arrayConjunciones.push('SSo5');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('saturno') && arraysPlanetasCasasLocalCasa5.includes('urano')) && arrayConjunciones.push('SU5');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('saturno') && arraysPlanetasCasasLocalCasa5.includes('neptuno')) && arrayConjunciones.push('SN5');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('saturno') && arraysPlanetasCasasLocalCasa5.includes('pluton')) && arrayConjunciones.push('SP5');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('saturno') && arraysPlanetasCasasLocalCasa5.includes('jupiter')) && arrayConjunciones.push('SJ5');
            }
        }
    }


    if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
        if (arraysPlanetasCasasLocalCasa5.includes('mercurio')) {

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('mercurio') && arraysPlanetasCasasLocalCasa5.includes('luna')) && arrayConjunciones.push('MeL5');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('mercurio') && arraysPlanetasCasasLocalCasa5.includes('sol')) && arrayConjunciones.push('MeSo5');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('mercurio') && arraysPlanetasCasasLocalCasa5.includes('urano')) && arrayConjunciones.push('MeU5');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('mercurio') && arraysPlanetasCasasLocalCasa5.includes('neptuno')) && arrayConjunciones.push('MeN5');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('mercurio') && arraysPlanetasCasasLocalCasa5.includes('pluton')) && arrayConjunciones.push('MeP5');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('mercurio') && arraysPlanetasCasasLocalCasa5.includes('jupiter')) && arrayConjunciones.push('MeJ5');
            }
        }
    }


    if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
        if (arraysPlanetasCasasLocalCasa5.includes('luna')) {

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('luna') && arraysPlanetasCasasLocalCasa5.includes('sol')) && arrayConjunciones.push('LSo5');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('luna') && arraysPlanetasCasasLocalCasa5.includes('urano')) && arrayConjunciones.push('LU5');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('luna') && arraysPlanetasCasasLocalCasa5.includes('neptuno')) && arrayConjunciones.push('LN5');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('luna') && arraysPlanetasCasasLocalCasa5.includes('pluton')) && arrayConjunciones.push('LP5');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('luna') && arraysPlanetasCasasLocalCasa5.includes('jupiter')) && arrayConjunciones.push('LJ5');
            }
        }
    }



    if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
        if (arraysPlanetasCasasLocalCasa5.includes('sol')) {

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('sol') && arraysPlanetasCasasLocalCasa5.includes('urano')) && arrayConjunciones.push('SoU5');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('sol') && arraysPlanetasCasasLocalCasa5.includes('neptuno')) && arrayConjunciones.push('SoN5');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('sol') && arraysPlanetasCasasLocalCasa5.includes('pluton')) && arrayConjunciones.push('SoP5');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('sol') && arraysPlanetasCasasLocalCasa5.includes('jupiter')) && arrayConjunciones.push('SoJ5');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
        if (arraysPlanetasCasasLocalCasa5.includes('urano')) {

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('urano') && arraysPlanetasCasasLocalCasa5.includes('neptuno')) && arrayConjunciones.push('UN5');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('urano') && arraysPlanetasCasasLocalCasa5.includes('pluton')) && arrayConjunciones.push('UP5');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('urano') && arraysPlanetasCasasLocalCasa5.includes('jupiter')) && arrayConjunciones.push('UJ5');
            }
        }
    }


    if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
        if (arraysPlanetasCasasLocalCasa5.includes('neptuno')) {

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('neptuno') && arraysPlanetasCasasLocalCasa5.includes('pluton')) && arrayConjunciones.push('NP5');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('neptuno') && arraysPlanetasCasasLocalCasa5.includes('jupiter')) && arrayConjunciones.push('NJ5');
            }

        }
    }


    if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
        if (arraysPlanetasCasasLocalCasa5.includes('pluton')) {

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa5.includes('pluton') && arraysPlanetasCasasLocalCasa5.includes('jupiter')) && arrayConjunciones.push('PJ5');
            }
        }
    }

    //========la propiedad include verificara cada planeta esta en Casa 6 y proseguira acorde=======

    if (document.getElementById(arrayLocalCheckbox[0]).checked == true) {
        if (arraysPlanetasCasasLocalCasa6.includes('marte')) {

            if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('marte') && arraysPlanetasCasasLocalCasa6.includes('venus')) && arrayConjunciones.push('MV6');
            }

            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('marte') && arraysPlanetasCasasLocalCasa6.includes('saturno')) && arrayConjunciones.push('MS6');
            }

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('marte') && arraysPlanetasCasasLocalCasa6.includes('mercurio')) && arrayConjunciones.push('MMe6');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('marte') && arraysPlanetasCasasLocalCasa6.includes('luna')) && arrayConjunciones.push('ML6');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('marte') && arraysPlanetasCasasLocalCasa6.includes('sol')) && arrayConjunciones.push('MSo6');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('marte') && arraysPlanetasCasasLocalCasa6.includes('urano')) && arrayConjunciones.push('MU6');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('marte') && arraysPlanetasCasasLocalCasa6.includes('neptuno')) && arrayConjunciones.push('MN6');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('marte') && arraysPlanetasCasasLocalCasa6.includes('pluton')) && arrayConjunciones.push('MP6');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('marte') && arraysPlanetasCasasLocalCasa6.includes('jupiter')) && arrayConjunciones.push('MJ6');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
        if (arraysPlanetasCasasLocalCasa6.includes('venus')) {

            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('venus') && arraysPlanetasCasasLocalCasa6.includes('saturno')) && arrayConjunciones.push('VS6');
            }

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('venus') && arraysPlanetasCasasLocalCasa6.includes('mercurio')) && arrayConjunciones.push('VMe6');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('venus') && arraysPlanetasCasasLocalCasa6.includes('luna')) && arrayConjunciones.push('VL6');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('venus') && arraysPlanetasCasasLocalCasa6.includes('sol')) && arrayConjunciones.push('VSo6');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('venus') && arraysPlanetasCasasLocalCasa6.includes('urano')) && arrayConjunciones.push('VU6');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('venus') && arraysPlanetasCasasLocalCasa6.includes('neptuno')) && arrayConjunciones.push('VN6');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('venus') && arraysPlanetasCasasLocalCasa6.includes('pluton')) && arrayConjunciones.push('VP6');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('venus') && arraysPlanetasCasasLocalCasa6.includes('jupiter')) && arrayConjunciones.push('VJ6');
            }
        }
    }


    if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
        if (arraysPlanetasCasasLocalCasa6.includes('saturno')) {

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('saturno') && arraysPlanetasCasasLocalCasa6.includes('mercurio')) && arrayConjunciones.push('SMe6');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('saturno') && arraysPlanetasCasasLocalCasa6.includes('luna')) && arrayConjunciones.push('SL6');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('saturno') && arraysPlanetasCasasLocalCasa6.includes('sol')) && arrayConjunciones.push('SSo6');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('saturno') && arraysPlanetasCasasLocalCasa6.includes('urano')) && arrayConjunciones.push('SU6');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('saturno') && arraysPlanetasCasasLocalCasa6.includes('neptuno')) && arrayConjunciones.push('SN6');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('saturno') && arraysPlanetasCasasLocalCasa6.includes('pluton')) && arrayConjunciones.push('SP6');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('saturno') && arraysPlanetasCasasLocalCasa6.includes('jupiter')) && arrayConjunciones.push('SJ6');
            }
        }
    }


    if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
        if (arraysPlanetasCasasLocalCasa6.includes('mercurio')) {


            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('mercurio') && arraysPlanetasCasasLocalCasa6.includes('luna')) && arrayConjunciones.push('MeL6');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('mercurio') && arraysPlanetasCasasLocalCasa6.includes('sol')) && arrayConjunciones.push('MeSo6');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('mercurio') && arraysPlanetasCasasLocalCasa6.includes('urano')) && arrayConjunciones.push('MeU6');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('mercurio') && arraysPlanetasCasasLocalCasa6.includes('neptuno')) && arrayConjunciones.push('MeN6');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('mercurio') && arraysPlanetasCasasLocalCasa6.includes('pluton')) && arrayConjunciones.push('MeP6');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('mercurio') && arraysPlanetasCasasLocalCasa6.includes('jupiter')) && arrayConjunciones.push('MeJ6');
            }

        }
    }

    if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
        if (arraysPlanetasCasasLocalCasa6.includes('luna')) {

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('luna') && arraysPlanetasCasasLocalCasa6.includes('sol')) && arrayConjunciones.push('LSo6');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('luna') && arraysPlanetasCasasLocalCasa6.includes('urano')) && arrayConjunciones.push('LU6');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('luna') && arraysPlanetasCasasLocalCasa6.includes('neptuno')) && arrayConjunciones.push('LN6');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('luna') && arraysPlanetasCasasLocalCasa6.includes('pluton')) && arrayConjunciones.push('LP6');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('luna') && arraysPlanetasCasasLocalCasa6.includes('jupiter')) && arrayConjunciones.push('LJ6');
            }
        }
    }
    /////////////
    if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
        if (arraysPlanetasCasasLocalCasa6.includes('sol')) {

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('sol') && arraysPlanetasCasasLocalCasa6.includes('urano')) && arrayConjunciones.push('SoU6');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('sol') && arraysPlanetasCasasLocalCasa6.includes('neptuno')) && arrayConjunciones.push('SoN6');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('sol') && arraysPlanetasCasasLocalCasa6.includes('pluton')) && arrayConjunciones.push('SoP6');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('sol') && arraysPlanetasCasasLocalCasa6.includes('jupiter')) && arrayConjunciones.push('SoJ6');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
        if (arraysPlanetasCasasLocalCasa6.includes('urano')) {

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('urano') && arraysPlanetasCasasLocalCasa6.includes('neptuno')) && arrayConjunciones.push('UN6');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('urano') && arraysPlanetasCasasLocalCasa6.includes('pluton')) && arrayConjunciones.push('UP6');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('urano') && arraysPlanetasCasasLocalCasa6.includes('jupiter')) && arrayConjunciones.push('UJ6');
            }

        }
    }

    if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
        if (arraysPlanetasCasasLocalCasa6.includes('neptuno')) {

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('neptuno') && arraysPlanetasCasasLocalCasa6.includes('pluton')) && arrayConjunciones.push('NP6');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('neptuno') && arraysPlanetasCasasLocalCasa6.includes('jupiter')) && arrayConjunciones.push('NJ6');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
        if (arraysPlanetasCasasLocalCasa6.includes('pluton')) {
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa6.includes('pluton') && arraysPlanetasCasasLocalCasa6.includes('jupiter')) && arrayConjunciones.push('PJ6');
            }
        }
    }
    ///ME FALTA: JUPITER NO ESTA EN EL CICLO


    //========la propiedad include verificara cada planeta esta en Casa 7 y proseguira acorde=======
    if (document.getElementById(arrayLocalCheckbox[0]).checked == true) {
        if (arraysPlanetasCasasLocalCasa7.includes('marte')) {

            if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('marte') && arraysPlanetasCasasLocalCasa7.includes('venus')) && arrayConjunciones.push('MV7');
            }

            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('marte') && arraysPlanetasCasasLocalCasa7.includes('saturno')) && arrayConjunciones.push('MS7');
            }

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('marte') && arraysPlanetasCasasLocalCasa7.includes('mercurio')) && arrayConjunciones.push('MMe7');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('marte') && arraysPlanetasCasasLocalCasa7.includes('luna')) && arrayConjunciones.push('ML7');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('marte') && arraysPlanetasCasasLocalCasa7.includes('sol')) && arrayConjunciones.push('MSo7');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('marte') && arraysPlanetasCasasLocalCasa7.includes('urano')) && arrayConjunciones.push('MU7');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('marte') && arraysPlanetasCasasLocalCasa7.includes('neptuno')) && arrayConjunciones.push('MN7');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('marte') && arraysPlanetasCasasLocalCasa7.includes('pluton')) && arrayConjunciones.push('MP7');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('marte') && arraysPlanetasCasasLocalCasa7.includes('jupiter')) && arrayConjunciones.push('MJ7');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
        if (arraysPlanetasCasasLocalCasa7.includes('venus')) {

            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('venus') && arraysPlanetasCasasLocalCasa7.includes('saturno')) && arrayConjunciones.push('VS7');
            }

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('venus') && arraysPlanetasCasasLocalCasa7.includes('mercurio')) && arrayConjunciones.push('VMe7');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('venus') && arraysPlanetasCasasLocalCasa7.includes('luna')) && arrayConjunciones.push('VL7');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('venus') && arraysPlanetasCasasLocalCasa7.includes('sol')) && arrayConjunciones.push('VSo7');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('venus') && arraysPlanetasCasasLocalCasa7.includes('urano')) && arrayConjunciones.push('VU7');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('venus') && arraysPlanetasCasasLocalCasa7.includes('neptuno')) && arrayConjunciones.push('VN7');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('venus') && arraysPlanetasCasasLocalCasa7.includes('pluton')) && arrayConjunciones.push('VP7');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('venus') && arraysPlanetasCasasLocalCasa7.includes('jupiter')) && arrayConjunciones.push('VJ7');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
        if (arraysPlanetasCasasLocalCasa7.includes('saturno')) {

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('saturno') && arraysPlanetasCasasLocalCasa7.includes('mercurio')) && arrayConjunciones.push('SMe7');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('saturno') && arraysPlanetasCasasLocalCasa7.includes('luna')) && arrayConjunciones.push('SL7');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('saturno') && arraysPlanetasCasasLocalCasa7.includes('sol')) && arrayConjunciones.push('SSo7');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('saturno') && arraysPlanetasCasasLocalCasa7.includes('urano')) && arrayConjunciones.push('SU7');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('saturno') && arraysPlanetasCasasLocalCasa7.includes('neptuno')) && arrayConjunciones.push('SN7');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('saturno') && arraysPlanetasCasasLocalCasa7.includes('pluton')) && arrayConjunciones.push('SP7');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('saturno') && arraysPlanetasCasasLocalCasa7.includes('jupiter')) && arrayConjunciones.push('SJ7');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
        if (arraysPlanetasCasasLocalCasa7.includes('mercurio')) {

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('mercurio') && arraysPlanetasCasasLocalCasa7.includes('luna')) && arrayConjunciones.push('MeL7');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('mercurio') && arraysPlanetasCasasLocalCasa7.includes('sol')) && arrayConjunciones.push('MeSo7');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('mercurio') && arraysPlanetasCasasLocalCasa7.includes('urano')) && arrayConjunciones.push('MeU7');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('mercurio') && arraysPlanetasCasasLocalCasa7.includes('neptuno')) && arrayConjunciones.push('MeN7');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('mercurio') && arraysPlanetasCasasLocalCasa7.includes('pluton')) && arrayConjunciones.push('MeP7');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('mercurio') && arraysPlanetasCasasLocalCasa7.includes('jupiter')) && arrayConjunciones.push('MeJ7');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
        if (arraysPlanetasCasasLocalCasa7.includes('luna')) {

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('luna') && arraysPlanetasCasasLocalCasa7.includes('sol')) && arrayConjunciones.push('LSo7');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('luna') && arraysPlanetasCasasLocalCasa7.includes('urano')) && arrayConjunciones.push('LU7');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('luna') && arraysPlanetasCasasLocalCasa7.includes('neptuno')) && arrayConjunciones.push('LN7');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('luna') && arraysPlanetasCasasLocalCasa7.includes('pluton')) && arrayConjunciones.push('LP7');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('luna') && arraysPlanetasCasasLocalCasa7.includes('jupiter')) && arrayConjunciones.push('LJ7');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
        if (arraysPlanetasCasasLocalCasa7.includes('sol')) {

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('sol') && arraysPlanetasCasasLocalCasa7.includes('urano')) && arrayConjunciones.push('SoU7');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('sol') && arraysPlanetasCasasLocalCasa7.includes('neptuno')) && arrayConjunciones.push('SoN7');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('sol') && arraysPlanetasCasasLocalCasa7.includes('pluton')) && arrayConjunciones.push('SoP7');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('sol') && arraysPlanetasCasasLocalCasa7.includes('jupiter')) && arrayConjunciones.push('SoJ7');
            }

        }
    }

    if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
        if (arraysPlanetasCasasLocalCasa7.includes('urano')) {

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('urano') && arraysPlanetasCasasLocalCasa7.includes('neptuno')) && arrayConjunciones.push('UN7');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('urano') && arraysPlanetasCasasLocalCasa7.includes('pluton')) && arrayConjunciones.push('UP7');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('urano') && arraysPlanetasCasasLocalCasa7.includes('jupiter')) && arrayConjunciones.push('UJ7');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
        if (arraysPlanetasCasasLocalCasa7.includes('neptuno')) {

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('neptuno') && arraysPlanetasCasasLocalCasa7.includes('pluton')) && arrayConjunciones.push('NP7');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('neptuno') && arraysPlanetasCasasLocalCasa7.includes('jupiter')) && arrayConjunciones.push('NJ7');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
        if (arraysPlanetasCasasLocalCasa7.includes('pluton')) {

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa7.includes('pluton') && arraysPlanetasCasasLocalCasa7.includes('jupiter')) && arrayConjunciones.push('PJ7');
            }
        }
    }
    ///ME FALTA: JUPITER NO ESTA EN EL CICLO

    //========la propiedad include verificara cada planeta esta en Casa 8 y proseguira acorde=======
    if (document.getElementById(arrayLocalCheckbox[0]).checked == true) {
        if (arraysPlanetasCasasLocalCasa8.includes('marte')) {

            if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('marte') && arraysPlanetasCasasLocalCasa8.includes('venus')) && arrayConjunciones.push('MV8');
            }

            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('marte') && arraysPlanetasCasasLocalCasa8.includes('saturno')) && arrayConjunciones.push('MS8');
            }

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('marte') && arraysPlanetasCasasLocalCasa8.includes('mercurio')) && arrayConjunciones.push('MMe8');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('marte') && arraysPlanetasCasasLocalCasa8.includes('luna')) && arrayConjunciones.push('ML8');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('marte') && arraysPlanetasCasasLocalCasa8.includes('sol')) && arrayConjunciones.push('MSo8');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('marte') && arraysPlanetasCasasLocalCasa8.includes('urano')) && arrayConjunciones.push('MU8');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('marte') && arraysPlanetasCasasLocalCasa8.includes('neptuno')) && arrayConjunciones.push('MN8');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('marte') && arraysPlanetasCasasLocalCasa8.includes('pluton')) && arrayConjunciones.push('MP8');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('marte') && arraysPlanetasCasasLocalCasa8.includes('jupiter')) && arrayConjunciones.push('MJ8');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
        if (arraysPlanetasCasasLocalCasa8.includes('venus')) {

            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('venus') && arraysPlanetasCasasLocalCasa8.includes('saturno')) && arrayConjunciones.push('VS8');
            }

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('venus') && arraysPlanetasCasasLocalCasa8.includes('mercurio')) && arrayConjunciones.push('VMe8');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('venus') && arraysPlanetasCasasLocalCasa8.includes('luna')) && arrayConjunciones.push('VL8');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('venus') && arraysPlanetasCasasLocalCasa8.includes('sol')) && arrayConjunciones.push('VSo8');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('venus') && arraysPlanetasCasasLocalCasa8.includes('urano')) && arrayConjunciones.push('VU8');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('venus') && arraysPlanetasCasasLocalCasa8.includes('neptuno')) && arrayConjunciones.push('VN8');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('venus') && arraysPlanetasCasasLocalCasa8.includes('pluton')) && arrayConjunciones.push('VP8');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('venus') && arraysPlanetasCasasLocalCasa8.includes('jupiter')) && arrayConjunciones.push('VJ8');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
        if (arraysPlanetasCasasLocalCasa8.includes('saturno')) {

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('saturno') && arraysPlanetasCasasLocalCasa8.includes('mercurio')) && arrayConjunciones.push('SMe8');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('saturno') && arraysPlanetasCasasLocalCasa8.includes('luna')) && arrayConjunciones.push('SL8');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('saturno') && arraysPlanetasCasasLocalCasa8.includes('sol')) && arrayConjunciones.push('SSo8');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('saturno') && arraysPlanetasCasasLocalCasa8.includes('urano')) && arrayConjunciones.push('SU8');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('saturno') && arraysPlanetasCasasLocalCasa8.includes('neptuno')) && arrayConjunciones.push('SN8');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('saturno') && arraysPlanetasCasasLocalCasa8.includes('pluton')) && arrayConjunciones.push('SP8');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('saturno') && arraysPlanetasCasasLocalCasa8.includes('jupiter')) && arrayConjunciones.push('SJ8');
            }
        }
    }


    if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
        if (arraysPlanetasCasasLocalCasa8.includes('mercurio')) {

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('mercurio') && arraysPlanetasCasasLocalCasa8.includes('luna')) && arrayConjunciones.push('MeL8');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('mercurio') && arraysPlanetasCasasLocalCasa8.includes('sol')) && arrayConjunciones.push('MeSo8');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('mercurio') && arraysPlanetasCasasLocalCasa8.includes('urano')) && arrayConjunciones.push('MeU8');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('mercurio') && arraysPlanetasCasasLocalCasa8.includes('neptuno')) && arrayConjunciones.push('MeN8');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('mercurio') && arraysPlanetasCasasLocalCasa8.includes('pluton')) && arrayConjunciones.push('MeP8');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('mercurio') && arraysPlanetasCasasLocalCasa8.includes('jupiter')) && arrayConjunciones.push('MeJ8');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
        if (arraysPlanetasCasasLocalCasa8.includes('luna')) {

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('luna') && arraysPlanetasCasasLocalCasa8.includes('sol')) && arrayConjunciones.push('LSo8');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('luna') && arraysPlanetasCasasLocalCasa8.includes('urano')) && arrayConjunciones.push('LU8');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('luna') && arraysPlanetasCasasLocalCasa8.includes('neptuno')) && arrayConjunciones.push('LN8');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('luna') && arraysPlanetasCasasLocalCasa8.includes('pluton')) && arrayConjunciones.push('LP8');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('luna') && arraysPlanetasCasasLocalCasa8.includes('jupiter')) && arrayConjunciones.push('LJ8');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
        if (arraysPlanetasCasasLocalCasa8.includes('sol')) {

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('sol') && arraysPlanetasCasasLocalCasa8.includes('urano')) && arrayConjunciones.push('SoU8');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('sol') && arraysPlanetasCasasLocalCasa8.includes('neptuno')) && arrayConjunciones.push('SoN8');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('sol') && arraysPlanetasCasasLocalCasa8.includes('pluton')) && arrayConjunciones.push('SoP8');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('sol') && arraysPlanetasCasasLocalCasa8.includes('jupiter')) && arrayConjunciones.push('SoJ8');
            }

        }
    }

    if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
        if (arraysPlanetasCasasLocalCasa8.includes('urano')) {

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('urano') && arraysPlanetasCasasLocalCasa8.includes('neptuno')) && arrayConjunciones.push('UN8');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('urano') && arraysPlanetasCasasLocalCasa8.includes('pluton')) && arrayConjunciones.push('UP8');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('urano') && arraysPlanetasCasasLocalCasa8.includes('jupiter')) && arrayConjunciones.push('UJ8');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
        if (arraysPlanetasCasasLocalCasa8.includes('neptuno')) {

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('neptuno') && arraysPlanetasCasasLocalCasa8.includes('pluton')) && arrayConjunciones.push('NP8');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('neptuno') && arraysPlanetasCasasLocalCasa8.includes('jupiter')) && arrayConjunciones.push('NJ8');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
        if (arraysPlanetasCasasLocalCasa8.includes('pluton')) {

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa8.includes('pluton') && arraysPlanetasCasasLocalCasa8.includes('jupiter')) && arrayConjunciones.push('PJ8');
            }
        }
    } ///ME FALTA: JUPITER NO ESTA EN EL CICLO


    //========la propiedad include verificara cada planeta esta en Casa 9 y proseguira acorde=======

    if (document.getElementById(arrayLocalCheckbox[0]).checked == true) {
        if (arraysPlanetasCasasLocalCasa9.includes('marte')) {

            if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('marte') && arraysPlanetasCasasLocalCasa9.includes('venus')) && arrayConjunciones.push('MV9');
            }

            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('marte') && arraysPlanetasCasasLocalCasa9.includes('saturno')) && arrayConjunciones.push('MS9');
            }

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('marte') && arraysPlanetasCasasLocalCasa9.includes('mercurio')) && arrayConjunciones.push('MMe9');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('marte') && arraysPlanetasCasasLocalCasa9.includes('luna')) && arrayConjunciones.push('ML9');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('marte') && arraysPlanetasCasasLocalCasa9.includes('sol')) && arrayConjunciones.push('MSo9');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('marte') && arraysPlanetasCasasLocalCasa9.includes('urano')) && arrayConjunciones.push('MU9');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('marte') && arraysPlanetasCasasLocalCasa9.includes('neptuno')) && arrayConjunciones.push('MN9');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('marte') && arraysPlanetasCasasLocalCasa9.includes('pluton')) && arrayConjunciones.push('MP9');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('marte') && arraysPlanetasCasasLocalCasa9.includes('jupiter')) && arrayConjunciones.push('MJ9');
            }

        }
    }

    if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
        if (arraysPlanetasCasasLocalCasa9.includes('venus')) {

            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('venus') && arraysPlanetasCasasLocalCasa9.includes('saturno')) && arrayConjunciones.push('VS9');
            }

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('venus') && arraysPlanetasCasasLocalCasa9.includes('mercurio')) && arrayConjunciones.push('VMe9');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('venus') && arraysPlanetasCasasLocalCasa9.includes('luna')) && arrayConjunciones.push('VL9');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('venus') && arraysPlanetasCasasLocalCasa9.includes('sol')) && arrayConjunciones.push('VSo9');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('venus') && arraysPlanetasCasasLocalCasa9.includes('urano')) && arrayConjunciones.push('VU9');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('venus') && arraysPlanetasCasasLocalCasa9.includes('neptuno')) && arrayConjunciones.push('VN9');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('venus') && arraysPlanetasCasasLocalCasa9.includes('pluton')) && arrayConjunciones.push('VP9');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('venus') && arraysPlanetasCasasLocalCasa9.includes('jupiter')) && arrayConjunciones.push('VJ9');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
        if (arraysPlanetasCasasLocalCasa9.includes('saturno')) {

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('saturno') && arraysPlanetasCasasLocalCasa9.includes('mercurio')) && arrayConjunciones.push('SMe9');
            }


            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('saturno') && arraysPlanetasCasasLocalCasa9.includes('luna')) && arrayConjunciones.push('SL9');
            }


            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('saturno') && arraysPlanetasCasasLocalCasa9.includes('sol')) && arrayConjunciones.push('SSo9');
            }


            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('saturno') && arraysPlanetasCasasLocalCasa9.includes('urano')) && arrayConjunciones.push('SU9');
            }


            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('saturno') && arraysPlanetasCasasLocalCasa9.includes('neptuno')) && arrayConjunciones.push('SN9');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('saturno') && arraysPlanetasCasasLocalCasa9.includes('pluton')) && arrayConjunciones.push('SP9');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('saturno') && arraysPlanetasCasasLocalCasa9.includes('jupiter')) && arrayConjunciones.push('SJ9');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
        if (arraysPlanetasCasasLocalCasa9.includes('mercurio')) {

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('mercurio') && arraysPlanetasCasasLocalCasa9.includes('luna')) && arrayConjunciones.push('MeL9');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('mercurio') && arraysPlanetasCasasLocalCasa9.includes('sol')) && arrayConjunciones.push('MeSo9');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('mercurio') && arraysPlanetasCasasLocalCasa9.includes('urano')) && arrayConjunciones.push('MeU9');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('mercurio') && arraysPlanetasCasasLocalCasa9.includes('neptuno')) && arrayConjunciones.push('MeN9');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('mercurio') && arraysPlanetasCasasLocalCasa9.includes('pluton')) && arrayConjunciones.push('MeP9');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('mercurio') && arraysPlanetasCasasLocalCasa9.includes('jupiter')) && arrayConjunciones.push('MeJ9');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
        if (arraysPlanetasCasasLocalCasa9.includes('luna')) {

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('luna') && arraysPlanetasCasasLocalCasa9.includes('sol')) && arrayConjunciones.push('LSo9');
            }


            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('luna') && arraysPlanetasCasasLocalCasa9.includes('urano')) && arrayConjunciones.push('LU9');
            }


            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('luna') && arraysPlanetasCasasLocalCasa9.includes('neptuno')) && arrayConjunciones.push('LN9');
            }


            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('luna') && arraysPlanetasCasasLocalCasa9.includes('pluton')) && arrayConjunciones.push('LP9');
            }


            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('luna') && arraysPlanetasCasasLocalCasa9.includes('jupiter')) && arrayConjunciones.push('LJ9');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
        if (arraysPlanetasCasasLocalCasa9.includes('sol')) {

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('sol') && arraysPlanetasCasasLocalCasa9.includes('urano')) && arrayConjunciones.push('SoU9');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('sol') && arraysPlanetasCasasLocalCasa9.includes('neptuno')) && arrayConjunciones.push('SoN9');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('sol') && arraysPlanetasCasasLocalCasa9.includes('pluton')) && arrayConjunciones.push('SoP9');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('sol') && arraysPlanetasCasasLocalCasa9.includes('jupiter')) && arrayConjunciones.push('SoJ9');
            }

        }
    }

    if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
        if (arraysPlanetasCasasLocalCasa9.includes('urano')) {

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('urano') && arraysPlanetasCasasLocalCasa9.includes('neptuno')) && arrayConjunciones.push('UN9');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('urano') && arraysPlanetasCasasLocalCasa9.includes('pluton')) && arrayConjunciones.push('UP9');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('urano') && arraysPlanetasCasasLocalCasa9.includes('jupiter')) && arrayConjunciones.push('UJ9');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
        if (arraysPlanetasCasasLocalCasa9.includes('neptuno')) {

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('neptuno') && arraysPlanetasCasasLocalCasa9.includes('pluton')) && arrayConjunciones.push('NP9');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('neptuno') && arraysPlanetasCasasLocalCasa9.includes('jupiter')) && arrayConjunciones.push('NJ9');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
        if (arraysPlanetasCasasLocalCasa9.includes('pluton')) {

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa9.includes('pluton') && arraysPlanetasCasasLocalCasa9.includes('jupiter')) && arrayConjunciones.push('PJ9');
            }
        }
    }
    ///ME FALTA: JUPITER NO ESTA EN EL CICLO

    //========la propiedad include verificara cada planeta esta en Casa 10 y proseguira acorde=======
    if (document.getElementById(arrayLocalCheckbox[0]).checked == true) {
        if (arraysPlanetasCasasLocalCasa10.includes('marte')) {


            if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('marte') && arraysPlanetasCasasLocalCasa10.includes('venus')) && arrayConjunciones.push('MV10');
            }

            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('marte') && arraysPlanetasCasasLocalCasa10.includes('saturno')) && arrayConjunciones.push('MS10');
            }

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('marte') && arraysPlanetasCasasLocalCasa10.includes('mercurio')) && arrayConjunciones.push('MMe10');
            }

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('marte') && arraysPlanetasCasasLocalCasa10.includes('luna')) && arrayConjunciones.push('ML10');
            }

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('marte') && arraysPlanetasCasasLocalCasa10.includes('sol')) && arrayConjunciones.push('MSo10');
            }

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('marte') && arraysPlanetasCasasLocalCasa10.includes('urano')) && arrayConjunciones.push('MU10');
            }

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('marte') && arraysPlanetasCasasLocalCasa10.includes('neptuno')) && arrayConjunciones.push('MN10');
            }

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('marte') && arraysPlanetasCasasLocalCasa10.includes('pluton')) && arrayConjunciones.push('MP10');
            }

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('marte') && arraysPlanetasCasasLocalCasa10.includes('jupiter')) && arrayConjunciones.push('MJ10');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
        if (arraysPlanetasCasasLocalCasa10.includes('venus')) {

            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('venus') && arraysPlanetasCasasLocalCasa10.includes('saturno')) && arrayConjunciones.push('VS10');
            }
            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('venus') && arraysPlanetasCasasLocalCasa10.includes('mercurio')) && arrayConjunciones.push('VMe10');
            }
            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('venus') && arraysPlanetasCasasLocalCasa10.includes('luna')) && arrayConjunciones.push('VL10');
            }
            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('venus') && arraysPlanetasCasasLocalCasa10.includes('sol')) && arrayConjunciones.push('VSo10');
            }
            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('venus') && arraysPlanetasCasasLocalCasa10.includes('urano')) && arrayConjunciones.push('VU10');
            }
            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('venus') && arraysPlanetasCasasLocalCasa10.includes('neptuno')) && arrayConjunciones.push('VN10');
            }
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('venus') && arraysPlanetasCasasLocalCasa10.includes('pluton')) && arrayConjunciones.push('VP10');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('venus') && arraysPlanetasCasasLocalCasa10.includes('jupiter')) && arrayConjunciones.push('VJ10');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
        if (arraysPlanetasCasasLocalCasa10.includes('saturno')) {

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('saturno') && arraysPlanetasCasasLocalCasa10.includes('mercurio')) && arrayConjunciones.push('SMe10');
            }
            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('saturno') && arraysPlanetasCasasLocalCasa10.includes('luna')) && arrayConjunciones.push('SL10');
            }
            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('saturno') && arraysPlanetasCasasLocalCasa10.includes('sol')) && arrayConjunciones.push('SSo10');
            }
            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('saturno') && arraysPlanetasCasasLocalCasa10.includes('urano')) && arrayConjunciones.push('SU10');
            }
            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('saturno') && arraysPlanetasCasasLocalCasa10.includes('neptuno')) && arrayConjunciones.push('SN10');
            }
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('saturno') && arraysPlanetasCasasLocalCasa10.includes('pluton')) && arrayConjunciones.push('SP10');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('saturno') && arraysPlanetasCasasLocalCasa10.includes('jupiter')) && arrayConjunciones.push('SJ10');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
        if (arraysPlanetasCasasLocalCasa10.includes('mercurio')) {

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('mercurio') && arraysPlanetasCasasLocalCasa10.includes('luna')) && arrayConjunciones.push('MeL10');
            }
            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('mercurio') && arraysPlanetasCasasLocalCasa10.includes('sol')) && arrayConjunciones.push('MeSo10');
            }
            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('mercurio') && arraysPlanetasCasasLocalCasa10.includes('urano')) && arrayConjunciones.push('MeU10');
            }
            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('mercurio') && arraysPlanetasCasasLocalCasa10.includes('neptuno')) & arrayConjunciones.push('MeN10');
            }
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('mercurio') && arraysPlanetasCasasLocalCasa10.includes('pluton')) && arrayConjunciones.push('MeP10');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('mercurio') && arraysPlanetasCasasLocalCasa10.includes('jupiter')) && arrayConjunciones.push('MeJ10');
            }

        }
    }

    if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
        if (arraysPlanetasCasasLocalCasa10.includes('luna')) {

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('luna') && arraysPlanetasCasasLocalCasa10.includes('sol')) && arrayConjunciones.push('LSo10');
            }
            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('luna') && arraysPlanetasCasasLocalCasa10.includes('urano')) && arrayConjunciones.push('LU10');
            }
            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('luna') && arraysPlanetasCasasLocalCasa10.includes('neptuno')) && arrayConjunciones.push('LN10');
            }
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('luna') && arraysPlanetasCasasLocalCasa10.includes('pluton')) && arrayConjunciones.push('LP10');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('luna') && arraysPlanetasCasasLocalCasa10.includes('jupiter')) && arrayConjunciones.push('LJ10');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
        if (arraysPlanetasCasasLocalCasa10.includes('sol')) {

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('sol') && arraysPlanetasCasasLocalCasa10.includes('urano')) && arrayConjunciones.push('SoU10');
            }
            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('sol') && arraysPlanetasCasasLocalCasa10.includes('neptuno')) && arrayConjunciones.push('SoN10');
            }
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('sol') && arraysPlanetasCasasLocalCasa10.includes('pluton')) && arrayConjunciones.push('SoP10');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('sol') && arraysPlanetasCasasLocalCasa10.includes('jupiter')) && arrayConjunciones.push('SoJ10');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
        if (arraysPlanetasCasasLocalCasa10.includes('urano')) {

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('urano') && arraysPlanetasCasasLocalCasa10.includes('neptuno')) && arrayConjunciones.push('UN10');
            }
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('urano') && arraysPlanetasCasasLocalCasa10.includes('pluton')) && arrayConjunciones.push('UP10');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('urano') && arraysPlanetasCasasLocalCasa10.includes('jupiter')) && arrayConjunciones.push('UJ10');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
        if (arraysPlanetasCasasLocalCasa10.includes('neptuno')) {

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('neptuno') && arraysPlanetasCasasLocalCasa10.includes('pluton')) && arrayConjunciones.push('NP10');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('neptuno') && arraysPlanetasCasasLocalCasa10.includes('jupiter')) && arrayConjunciones.push('NJ10');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
        if (arraysPlanetasCasasLocalCasa10.includes('pluton')) {
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa10.includes('pluton') && arraysPlanetasCasasLocalCasa10.includes('jupiter')) && arrayConjunciones.push('PJ10');
            }
        }
    }

    ///ME FALTA: JUPITER NO ESTA EN EL CICLO

    //========la propiedad include verificara cada planeta esta en Casa 11 y proseguira acorde=======

    if (document.getElementById(arrayLocalCheckbox[0]).checked == true) {
        if (arraysPlanetasCasasLocalCasa11.includes('marte')) {

            if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('marte') && arraysPlanetasCasasLocalCasa11.includes('venus')) && arrayConjunciones.push('MV11');
            }
            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('marte') && arraysPlanetasCasasLocalCasa11.includes('saturno')) && arrayConjunciones.push('MS11');
            }
            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('marte') && arraysPlanetasCasasLocalCasa11.includes('mercurio')) && arrayConjunciones.push('MMe11');
            }
            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('marte') && arraysPlanetasCasasLocalCasa11.includes('luna')) && arrayConjunciones.push('ML11');
            }
            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('marte') && arraysPlanetasCasasLocalCasa11.includes('sol')) && arrayConjunciones.push('MSo11');
            }
            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('marte') && arraysPlanetasCasasLocalCasa11.includes('urano')) && arrayConjunciones.push('MU11');
            }
            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('marte') && arraysPlanetasCasasLocalCasa11.includes('neptuno')) && arrayConjunciones.push('MN11');
            }
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('marte') && arraysPlanetasCasasLocalCasa11.includes('pluton')) && arrayConjunciones.push('MP11');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('marte') && arraysPlanetasCasasLocalCasa11.includes('jupiter')) && arrayConjunciones.push('MJ11');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
        if (arraysPlanetasCasasLocalCasa11.includes('venus')) {

            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('venus') && arraysPlanetasCasasLocalCasa11.includes('saturno')) && arrayConjunciones.push('VS11');
            }
            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('venus') && arraysPlanetasCasasLocalCasa11.includes('mercurio')) && arrayConjunciones.push('VMe11');
            }
            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('venus') && arraysPlanetasCasasLocalCasa11.includes('luna')) && arrayConjunciones.push('VL11');
            }
            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('venus') && arraysPlanetasCasasLocalCasa11.includes('sol')) && arrayConjunciones.push('VSo11');
            }
            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('venus') && arraysPlanetasCasasLocalCasa11.includes('urano')) && arrayConjunciones.push('VU11');
            }
            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('venus') && arraysPlanetasCasasLocalCasa11.includes('neptuno')) && arrayConjunciones.push('VN11');
            }
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('venus') && arraysPlanetasCasasLocalCasa11.includes('pluton')) && arrayConjunciones.push('VP11');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('venus') && arraysPlanetasCasasLocalCasa11.includes('jupiter')) && arrayConjunciones.push('VJ11');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
        if (arraysPlanetasCasasLocalCasa11.includes('saturno')) {

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('saturno') && arraysPlanetasCasasLocalCasa11.includes('mercurio')) && arrayConjunciones.push('SMe11');
            }
            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('saturno') && arraysPlanetasCasasLocalCasa11.includes('luna')) && arrayConjunciones.push('SL11');
            }
            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('saturno') && arraysPlanetasCasasLocalCasa11.includes('sol')) && arrayConjunciones.push('SSo11');
            }
            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('saturno') && arraysPlanetasCasasLocalCasa11.includes('urano')) && arrayConjunciones.push('SU11');
            }
            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('saturno') && arraysPlanetasCasasLocalCasa11.includes('neptuno')) && arrayConjunciones.push('SN11');
            }
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('saturno') && arraysPlanetasCasasLocalCasa11.includes('pluton')) && arrayConjunciones.push('SP11');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('saturno') && arraysPlanetasCasasLocalCasa11.includes('jupiter')) && arrayConjunciones.push('SJ11');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
        if (arraysPlanetasCasasLocalCasa11.includes('mercurio')) {

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('mercurio') && arraysPlanetasCasasLocalCasa11.includes('luna')) && arrayConjunciones.push('MeL11');
            }
            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('mercurio') && arraysPlanetasCasasLocalCasa11.includes('sol')) && arrayConjunciones.push('MeSo11');
            }
            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('mercurio') && arraysPlanetasCasasLocalCasa11.includes('urano')) && arrayConjunciones.push('MeU11');
            }
            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('mercurio') && arraysPlanetasCasasLocalCasa11.includes('neptuno')) && arrayConjunciones.push('MeN11');
            }
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('mercurio') && arraysPlanetasCasasLocalCasa11.includes('pluton')) && arrayConjunciones.push('MeP11');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('mercurio') && arraysPlanetasCasasLocalCasa11.includes('jupiter')) && arrayConjunciones.push('MeJ11');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
        if (arraysPlanetasCasasLocalCasa11.includes('luna')) {

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('luna') && arraysPlanetasCasasLocalCasa11.includes('sol')) && arrayConjunciones.push('LSo11');
            }
            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('luna') && arraysPlanetasCasasLocalCasa11.includes('urano')) && arrayConjunciones.push('LU11');
            }
            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('luna') && arraysPlanetasCasasLocalCasa11.includes('neptuno')) && arrayConjunciones.push('LN11');
            }
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('luna') && arraysPlanetasCasasLocalCasa11.includes('pluton')) && arrayConjunciones.push('LP11');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('luna') && arraysPlanetasCasasLocalCasa11.includes('jupiter')) && arrayConjunciones.push('SJ11');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
        if (arraysPlanetasCasasLocalCasa11.includes('sol')) {

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('sol') && arraysPlanetasCasasLocalCasa11.includes('urano')) && arrayConjunciones.push('SoU11');
            }
            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('sol') && arraysPlanetasCasasLocalCasa11.includes('neptuno')) && arrayConjunciones.push('SoN11');
            }
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('sol') && arraysPlanetasCasasLocalCasa11.includes('pluton')) && arrayConjunciones.push('SoP11');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('sol') && arraysPlanetasCasasLocalCasa11.includes('jupiter')) && arrayConjunciones.push('SoJ11');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
        if (arraysPlanetasCasasLocalCasa11.includes('urano')) {

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('urano') && arraysPlanetasCasasLocalCasa11.includes('neptuno')) && arrayConjunciones.push('UN11');
            }
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('urano') && arraysPlanetasCasasLocalCasa11.includes('pluton')) && arrayConjunciones.push('UP11');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('urano') && arraysPlanetasCasasLocalCasa11.includes('jupiter')) && arrayConjunciones.push('UJ11');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
        if (arraysPlanetasCasasLocalCasa11.includes('neptuno')) {

            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('neptuno') && arraysPlanetasCasasLocalCasa11.includes('pluton')) && arrayConjunciones.push('NP11');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('neptuno') && arraysPlanetasCasasLocalCasa11.includes('jupiter')) && arrayConjunciones.push('NJ11');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
        if (arraysPlanetasCasasLocalCasa11.includes('pluton')) {

            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa11.includes('pluton') && arraysPlanetasCasasLocalCasa11.includes('jupiter')) && arrayConjunciones.push('PJ11');
            }
        }
    }
    ///ME FALTA: JUPITER NO ESTA EN EL CICLO

    //========la propiedad include verificara cada planeta esta en Casa 12 y proseguira acorde=======
    if (document.getElementById(arrayLocalCheckbox[0]).checked == true) {
        if (arraysPlanetasCasasLocalCasa12.includes('marte')) {

            if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('marte') && arraysPlanetasCasasLocalCasa12.includes('venus')) && arrayConjunciones.push('MV12');
            }
            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('marte') && arraysPlanetasCasasLocalCasa12.includes('saturno')) && arrayConjunciones.push('MS12');
            }
            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('marte') && arraysPlanetasCasasLocalCasa12.includes('mercurio')) && arrayConjunciones.push('MMe12');
            }
            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('marte') && arraysPlanetasCasasLocalCasa12.includes('luna')) && arrayConjunciones.push('ML12');
            }
            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('marte') && arraysPlanetasCasasLocalCasa12.includes('sol')) && arrayConjunciones.push('MSo12');
            }
            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('marte') && arraysPlanetasCasasLocalCasa12.includes('urano')) && arrayConjunciones.push('MU12');
            }
            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('marte') && arraysPlanetasCasasLocalCasa12.includes('neptuno')) && arrayConjunciones.push('MN12');
            }
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('marte') && arraysPlanetasCasasLocalCasa12.includes('pluton')) && arrayConjunciones.push('MP12');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('marte') && arraysPlanetasCasasLocalCasa12.includes('jupiter')) && arrayConjunciones.push('MJ12');
            }

        }
    }

    if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
        if (arraysPlanetasCasasLocalCasa12.includes('venus')) {

            if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('venus') && arraysPlanetasCasasLocalCasa12.includes('saturno')) && arrayConjunciones.push('VS12');
            }
            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('venus') && arraysPlanetasCasasLocalCasa12.includes('mercurio')) && arrayConjunciones.push('VMe12');
            }
            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('venus') && arraysPlanetasCasasLocalCasa12.includes('luna')) && arrayConjunciones.push('VL12');
            }
            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('venus') && arraysPlanetasCasasLocalCasa12.includes('sol')) && arrayConjunciones.push('VSo12');
            }
            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('venus') && arraysPlanetasCasasLocalCasa12.includes('urano')) && arrayConjunciones.push('VU12');
            }
            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('venus') && arraysPlanetasCasasLocalCasa12.includes('neptuno')) && arrayConjunciones.push('VN12');
            }
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('venus') && arraysPlanetasCasasLocalCasa12.includes('pluton')) && arrayConjunciones.push('VP12');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('venus') && arraysPlanetasCasasLocalCasa12.includes('jupiter')) && arrayConjunciones.push('VJ12');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
        if (arraysPlanetasCasasLocalCasa12.includes('saturno')) {

            if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('saturno') && arraysPlanetasCasasLocalCasa12.includes('mercurio')) && arrayConjunciones.push('SMe12');
            }
            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('saturno') && arraysPlanetasCasasLocalCasa12.includes('luna')) && arrayConjunciones.push('SL12');
            }
            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('saturno') && arraysPlanetasCasasLocalCasa12.includes('sol')) && arrayConjunciones.push('SSo12');
            }
            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('saturno') && arraysPlanetasCasasLocalCasa12.includes('urano')) && arrayConjunciones.push('SU12');
            }
            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('saturno') && arraysPlanetasCasasLocalCasa12.includes('neptuno')) && arrayConjunciones.push('SN12');
            }
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('saturno') && arraysPlanetasCasasLocalCasa12.includes('jupiter')) && arrayConjunciones.push('SJ12');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('saturno') && arraysPlanetasCasasLocalCasa12.includes('pluton')) && arrayConjunciones.push('SP12');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
        if (arraysPlanetasCasasLocalCasa12.includes('mercurio')) {

            if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('mercurio') && arraysPlanetasCasasLocalCasa12.includes('luna')) && arrayConjunciones.push('MeL12');
            }
            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('mercurio') && arraysPlanetasCasasLocalCasa12.includes('sol')) && arrayConjunciones.push('MeSo12');
            }
            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('mercurio') && arraysPlanetasCasasLocalCasa12.includes('urano')) && arrayConjunciones.push('MeU12');
            }
            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('mercurio') && arraysPlanetasCasasLocalCasa12.includes('neptuno')) && arrayConjunciones.push('MeN12');
            }
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('mercurio') && arraysPlanetasCasasLocalCasa12.includes('pluton')) && arrayConjunciones.push('MeP12');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('mercurio') && arraysPlanetasCasasLocalCasa12.includes('jupiter')) && arrayConjunciones.push('MeJ12');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
        if (arraysPlanetasCasasLocalCasa12.includes('luna')) {

            if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('luna') && arraysPlanetasCasasLocalCasa12.includes('sol')) && arrayConjunciones.push('LSo12');
            }
            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('luna') && arraysPlanetasCasasLocalCasa12.includes('urano')) && arrayConjunciones.push('LU12');
            }
            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('luna') && arraysPlanetasCasasLocalCasa12.includes('neptuno')) && arrayConjunciones.push('LN12');
            }
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('luna') && arraysPlanetasCasasLocalCasa12.includes('pluton')) && arrayConjunciones.push('LP12');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('luna') && arraysPlanetasCasasLocalCasa12.includes('jupiter')) && arrayConjunciones.push('LJ12');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
        if (arraysPlanetasCasasLocalCasa12.includes('sol')) {

            if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('sol') && arraysPlanetasCasasLocalCasa12.includes('urano')) && arrayConjunciones.push('SoU12');
            }
            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('sol') && arraysPlanetasCasasLocalCasa12.includes('neptuno')) && arrayConjunciones.push('SoN12');
            }
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('sol') && arraysPlanetasCasasLocalCasa12.includes('pluton')) && arrayConjunciones.push('SoP12');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('sol') && arraysPlanetasCasasLocalCasa12.includes('jupiter')) && arrayConjunciones.push('SoJ12');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
        if (arraysPlanetasCasasLocalCasa12.includes('urano')) {

            if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('urano') && arraysPlanetasCasasLocalCasa12.includes('neptuno')) && arrayConjunciones.push('UN12');
            }
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('urano') && arraysPlanetasCasasLocalCasa12.includes('pluton')) && arrayConjunciones.push('UP12');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('urano') && arraysPlanetasCasasLocalCasa12.includes('jupiter')) && arrayConjunciones.push('UJ12');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
        if (arraysPlanetasCasasLocalCasa12.includes('neptuno')) {
            if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('neptuno') && arraysPlanetasCasasLocalCasa12.includes('pluton')) && arrayConjunciones.push('NP12');
            }
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('neptuno') && arraysPlanetasCasasLocalCasa12.includes('jupiter')) && arrayConjunciones.push('NJ12');
            }
        }
    }

    if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
        if (arraysPlanetasCasasLocalCasa12.includes('pluton')) {
            if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
                (arraysPlanetasCasasLocalCasa12.includes('pluton') && arraysPlanetasCasasLocalCasa12.includes('jupiter')) && arrayConjunciones.push('PJ12');
            }
        }
    }

    // console.log(arrayConjunciones);
    return arrayConjunciones;

}

function total(idConjunciones, idsPlanetas, idsCasas, parametros, regente, grados, idscheckbox) {
    var idConjuncionesLocal = idConjunciones;
    var idsPlanetasLocal = idsPlanetas;
    var idsCasasLocal = idsCasas;
    var arrayConjLocal = resultadosAspectos(parametros, idscheckbox);
    // var arrayConjLocal = arrayConj;
    resultado = '';
    var ceros = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var [MV, MS, VS, MMe, MJ, MP, MU, MN, ML, MSo, SU, SN, SMe, SP, SL, SSo, VMe, VU, VN, VL, VSo, VP, MeU, MeN, MeL, MeSo, MeP, UL, USo, UP, UL, UN, NL, NP, NSo, LP, LSo, SoP, JM, JV, JS, JU, JN, JMe, JL, JSo, JP] = ceros;

    var arrayLocalCheckbox = idscheckbox;
    var punto;
    var li;
    var punto2;
    var li2;
    var punto3;
    var li3;
    console.log(`EL STRING DE CONJUNCIONES ES ASIIIII ${arrayConjLocal}`);

    punto = document.getElementById(idConjuncionesLocal);
    punto.innerHTML = "";
    punto2 = document.getElementById(idsCasasLocal[0]);
    punto2.innerHTML = "";
    punto2 = document.getElementById(idsCasasLocal[1]);
    punto2.innerHTML = "";
    punto2 = document.getElementById(idsCasasLocal[2]);
    punto2.innerHTML = "";
    punto2 = document.getElementById(idsCasasLocal[3]);
    punto2.innerHTML = "";
    punto2 = document.getElementById(idsCasasLocal[4]);
    punto2.innerHTML = "";
    punto2 = document.getElementById(idsCasasLocal[5]);
    punto2.innerHTML = "";
    punto2 = document.getElementById(idsCasasLocal[6]);
    punto2.innerHTML = "";
    punto2 = document.getElementById(idsCasasLocal[7]);
    punto2.innerHTML = "";
    punto2 = document.getElementById(idsCasasLocal[8]);
    punto2.innerHTML = "";
    punto2 = document.getElementById(idsCasasLocal[9]);
    punto2.innerHTML = "";
    punto2 = document.getElementById(idsCasasLocal[10]);
    punto2.innerHTML = "";
    punto2 = document.getElementById(idsCasasLocal[11]);
    punto2.innerHTML = "";



    //el for de abajo recorrera el array retornado con todas las conjunciones de la funcion resultadosAspectos()..
    //..luego verificará si alguno de los elementos del array contienen MV o MS o VS y accionara de acuerdo a esto..
    for (i = 0; i < arrayConjLocal.length; i++) {

        // // ======mARTE=======

        if (arrayConjLocal[i].indexOf('MV') != -1 || arrayConjLocal[i].indexOf('VM') != -1) {
            if ((arrayConjLocal[i].indexOf('MeV') == -1) || (arrayConjLocal[i].indexOf('VMe') == -1)) {
                if (MV != 1) {
                    //ME QUEDE ACA 12 04 . necesito creat un li por cada resultado que agregue
                    punto = document.getElementById(idConjuncionesLocal);
                    li = document.createElement('li');
                    li.innerHTML = "Hay una conjunción de Marte y Venus en tu carta. El significado es: ESTA USANDO RESULT EXT";
                    punto.append(li);
                    resultado = resultado + 'Hay una conjunción de Marte y Venus en tu carta. El significado es:---\n';
                    MV = 1;
                }
            }
        }

        if (arrayConjLocal[i].indexOf('MMe') != -1 || arrayConjLocal[i].indexOf('MeM') != -1) {

            if (MMe != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Marte y Mercurio en tu carta. El significado es:---\n";
                punto.append(li);
                resultado = resultado + 'Hay una conjunción de Marte y Mercurio en tu carta. El significado es:---\n';
                MMe = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('MJ') != -1 || arrayConjLocal[i].indexOf('JM') != -1) {
            if ((arrayConjLocal[i].indexOf('MeJ') == -1) || (arrayConjLocal[i].indexOf('MeJ') == -1)) {
                if (MJ != 1) {
                    punto = document.getElementById(idConjuncionesLocal);
                    li = document.createElement('li');
                    li.innerHTML = "Hay una conjunción de Marte y Jupiter en tu carta. El significado es:---\n";
                    punto.append(li);
                    resultado = resultado + 'Hay una conjunción de Marte y Jupiter en tu carta. El significado es:---\n';
                    MJ = 1;
                }
            }
        }

        if (arrayConjLocal[i].indexOf('MP') != -1 || arrayConjLocal[i].indexOf('PM') != -1) {
            if ((arrayConjLocal[i].indexOf('MeP') == -1) || (arrayConjLocal[i].indexOf('PMe') == -1)) {
                if (MP != 1) {
                    punto = document.getElementById(idConjuncionesLocal);
                    li = document.createElement('li');
                    li.innerHTML = "Hay una conjunción de Marte y Pluton en tu carta. El significado es:---\n";
                    punto.append(li);
                    resultado = resultado + 'Hay una conjunción de Marte y Pluton en tu carta. El significado es:---\n';
                    MP = 1;
                }
            }
        }

        if (arrayConjLocal[i].indexOf('MU') != -1 || arrayConjLocal[i].indexOf('UM') != -1) {
            if ((arrayConjLocal[i].indexOf('MeU') == -1) || (arrayConjLocal[i].indexOf('UMe') == -1)) {
                if (MU != 1) {
                    punto = document.getElementById(idConjuncionesLocal);
                    li = document.createElement('li');
                    li.innerHTML = "Hay una conjunción de Marte y Urano en tu carta. El significado es:---\n";
                    punto.append(li);
                    resultado = resultado + 'Hay una conjunción de Marte y Urano en tu carta. El significado es:---\n';
                    MU = 1;
                }
            }
        }

        if (arrayConjLocal[i].indexOf('MN') != -1 || arrayConjLocal[i].indexOf('NM') != -1) {
            if ((arrayConjLocal[i].indexOf('MeN') == -1) || (arrayConjLocal[i].indexOf('NMe') == -1)) {
                if (MN != 1) {
                    punto = document.getElementById(idConjuncionesLocal);
                    li = document.createElement('li');
                    li.innerHTML = "Hay una conjunción de Marte y Neptuno en tu carta. El significado es:---\n";
                    punto.append(li);
                    resultado = resultado + 'Hay una conjunción de Marte y Neptuno en tu carta. El significado es:---\n';
                    MN = 1;
                }
            }
        }

        if (arrayConjLocal[i].indexOf('ML') != -1 || arrayConjLocal[i].indexOf('LM') != -1) {
            if (arrayConjLocal[i].indexOf('LMe') == -1) {
                if (ML != 1) {
                    punto = document.getElementById(idConjuncionesLocal);
                    li = document.createElement('li');
                    li.innerHTML = "Hay una conjunción de Marte y la Luna en tu carta. El significado es:---\n";
                    punto.append(li);
                    resultado = resultado + 'Hay una conjunción de Marte y la Luna en tu carta. El significado es:---\n';
                    ML = 1;
                }
            }
        }

        if (arrayConjLocal[i].indexOf('MSo') != -1 || arrayConjLocal[i].indexOf('SoM') != -1) {

            if (MSo != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Marte y el Sol en tu carta. El significado es:---\n";
                punto.append(li);
                resultado = resultado + 'Hay una conjunción de Marte y el Sol en tu carta. El significado es:---\n';
                MSo = 1;
            }
        }
        // // ======VENUS=======

        if (arrayConjLocal[i].indexOf('VMe') != -1 || arrayConjLocal[i].indexOf('MeV') != -1) {
            if (VMe != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Venus y Mercurio en tu carta. El significado es:---\n";
                punto.append(li);
                resultado = resultado + 'Hay una conjunción de Venus y Mercurio en tu carta. El significado es:---\n';
                VMe = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('VU') != -1 || arrayConjLocal[i].indexOf('UV') != -1) {
            if (VU != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Venus y Urano en tu carta. El significado es:---\n";
                punto.append(li);
                resultado = resultado + 'Hay una conjunción de Venus y Urano en tu carta. El significado es:---\n';
                VU = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('VN') != -1 || arrayConjLocal[i].indexOf('NV') != -1) {
            if (VN != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Venus y Neptuno en tu carta. El significado es:---\n";
                punto.append(li);
                resultado = resultado + 'Hay una conjunción de Venus y Neptuno en tu carta. El significado es:---\n';
                VN = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('VL') != -1 || arrayConjLocal[i].indexOf('LV') != -1) {
            if (VL != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Venus y La Luna en tu carta. El significado es:---\n";
                punto.append(li);
                resultado = resultado + 'Hay una conjunción de Venus y La Luna en tu carta. El significado es:---\n';
                VL = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('VSo') != -1 || arrayConjLocal[i].indexOf('SoV') != -1) {
            if (VSo != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Venus y El Sol en tu carta. El significado es:---\n";
                punto.append(li);
                resultado = resultado + 'Hay una conjunción de Venus y El Sol en tu carta. El significado es:---\n';
                VSo = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('VP') != -1 || arrayConjLocal[i].indexOf('PV') != -1) {
            if (VP != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Venus y Pluton en tu carta. El significado es:---\n";
                punto.append(li);
                resultado = resultado + 'Hay una conjunción de Venus y Pluton en tu carta. El significado es:---\n';
                VP = 1;
            }
        }

        // // ======SATURNO=======
        if (arrayConjLocal[i].indexOf('SV') != -1 || arrayConjLocal[i].indexOf('VS') != -1) {
            if (arrayConjLocal[i].indexOf('VSo') == -1) {
                if (VS != 1) {
                    punto = document.getElementById(idConjuncionesLocal);
                    li = document.createElement('li');
                    li.innerHTML = "Hay una conjunción de Saturno y Venus en tu carta. El significado es:---\n";
                    punto.append(li);
                    resultado = resultado + 'Hay una conjunción de Saturno y Venus en tu carta. El significado es:---\n';
                    VS = 1;
                }
            }
        }

        if (arrayConjLocal[i].indexOf('SM') != -1 || arrayConjLocal[i].indexOf('MS') != -1) {
            if (arrayConjLocal[i].indexOf('MSo') == -1) {
                if (arrayConjLocal[i].indexOf('SMe') == -1) {
                    if (MS != 1) {
                        punto = document.getElementById(idConjuncionesLocal);
                        li = document.createElement('li');
                        li.innerHTML = "Hay una conjunción de Saturno y Marte en tu carta. El significado es:---\n";
                        punto.append(li);

                        resultado = resultado + 'Hay una conjunción de Saturno y Marte en tu carta. El significado es:---\n';
                        MS = 1;
                    }
                }
            }
        }

        if (arrayConjLocal[i].indexOf('SMe') != -1 || arrayConjLocal[i].indexOf('MeS') != -1) {
            if (arrayConjLocal[i].indexOf('MeSo') == -1) {
                if (MeSo != 1) {
                    punto = document.getElementById(idConjuncionesLocal);
                    li = document.createElement('li');
                    li.innerHTML = "Hay una conjunción de Saturno y Mercurio en tu carta. El significado es:---\n'";
                    punto.append(li);

                    resultado = resultado + 'Hay una conjunción de Saturno y Mercurio en tu carta. El significado es:---\n';
                    MeSo = 1;
                }
            }
        }

        if (arrayConjLocal[i].indexOf('SU') != -1 || arrayConjLocal[i].indexOf('US') != -1) {
            if (arrayConjLocal[i].indexOf('USo') == -1) {
                if (SU != 1) {
                    punto = document.getElementById(idConjuncionesLocal);
                    li = document.createElement('li');
                    li.innerHTML = "Hay una conjunción de Saturno y Urano en tu carta. El significado es:---\n";
                    punto.append(li);


                    resultado = resultado + 'Hay una conjunción de Saturno y Urano en tu carta. El significado es:---\n';
                    SU = 1;
                }
            }
        }

        if (arrayConjLocal[i].indexOf('SN') != -1 || arrayConjLocal[i].indexOf('NS') != -1) {
            if (arrayConjLocal[i].indexOf('NSo') == -1) {
                if (SN != 1) {
                    punto = document.getElementById(idConjuncionesLocal);
                    li = document.createElement('li');
                    li.innerHTML = "Hay una conjunción de Saturno y Neptuno en tu carta. El significado es:---\n";
                    punto.append(li);


                    resultado = resultado + 'Hay una conjunción de Saturno y Neptuno en tu carta. El significado es:---\n';
                    SN = 1;
                }
            }
        }

        if (arrayConjLocal[i].indexOf('SSo') != -1 || arrayConjLocal[i].indexOf('SoS') != -1) {
            if (SSo != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Saturno y el Sol en tu carta. El significado es:---\n";
                punto.append(li);


                resultado = resultado + 'Hay una conjunción de Saturno y el Sol en tu carta. El significado es:---\n';
                SSo = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('SL') != -1 || arrayConjLocal[i].indexOf('LS') != -1) {
            if (arrayConjLocal[i].indexOf('LSo') == -1) {
                if (SL != 1) {
                    punto21 = document.getElementById(idConjuncionesLocal);
                    li = document.createElement('li');
                    li.innerHTML = "Hay una conjunción de Saturno y la Luna en tu carta. El significado es:---\n";
                    punto.append(li);

                    resultado = resultado + 'Hay una conjunción de Saturno y la Luna en tu carta. El significado es:---\n';
                    SL = 1;
                }
            }
        }

        if (arrayConjLocal[i].indexOf('SP') != -1 || arrayConjLocal[i].indexOf('PS') != -1) {
            if (arrayConjLocal[i].indexOf('PSo') == -1) {
                if (SP != 1) {
                    punto = document.getElementById(idConjuncionesLocal);
                    li = document.createElement('li');
                    li.innerHTML = "Hay una conjunción de Saturno y Pluton en tu carta. El significado es:---\n";
                    punto.append(li);

                    resultado = resultado + 'Hay una conjunción de Saturno y Pluton en tu carta. El significado es:---\n';
                    SP = 1;
                }
            }
        }

        // // ======Mercurio=======
        if (arrayConjLocal[i].indexOf('MeU') != -1 || arrayConjLocal[i].indexOf('UMe') != -1) {
            if (MeU != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Mercurio y Urano en tu carta. El significado es:---\n";
                punto.append(li);

                resultado = resultado + 'Hay una conjunción de Mercurio y Urano en tu carta. El significado es:---\n';
                MeU = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('MeN') != -1 || arrayConjLocal[i].indexOf('NMe') != -1) {
            if (MeN != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Mercurio y Neptuno en tu carta. El significado es:---\n";
                punto.append(li);

                resultado = resultado + 'Hay una conjunción de Mercurio y Neptuno en tu carta. El significado es:---\n';
                MeN = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('MeL') != -1 || arrayConjLocal[i].indexOf('LMe') != -1) {
            if (MeL != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Mercurio y la Luna en tu carta. El significado es:---\n";
                punto.append(li);

                resultado = resultado + 'Hay una conjunción de Mercurio y la Luna en tu carta. El significado es:---\n';
                MeL = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('MeSo') != -1 || arrayConjLocal[i].indexOf('SoMe') != -1) {
            if (MeSo != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Mercurio y El Sol en tu carta. El significado es:---\n";
                punto.append(li);

                resultado = resultado + 'Hay una conjunción de Mercurio y El Sol en tu carta. El significado es:---\n';
                MeSo = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('MeP') != -1 || arrayConjLocal[i].indexOf('PMe') != -1) {
            if (MeP != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Mercurio y Pluton en tu carta. El significado es:---\n";
                punto.append(li);

                resultado = resultado + 'Hay una conjunción de Mercurio y Pluton en tu carta. El significado es:---\n';
                MeP = 1;
            }
        }

        // // ======Urano=======

        if (arrayConjLocal[i].indexOf('UL') != -1 || arrayConjLocal[i].indexOf('LU') != -1) {
            if (UL != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Urano y la Luna en tu carta. El significado es:---\n";
                punto.append(li);

                resultado = resultado + 'Hay una conjunción de Urano y la Luna en tu carta. El significado es:---\n';
                UL = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('USo') != -1 || arrayConjLocal[i].indexOf('SoU') != -1) {
            if (USo != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Urano y El Sol en tu carta. El significado es:---\n";
                punto.append(li);

                resultado = resultado + 'Hay una conjunción de Urano y El Sol en tu carta. El significado es:---\n';
                USo = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('UN') != -1 || arrayConjLocal[i].indexOf('NU') != -1) {
            if (UN != 1) {
                var punto = document.getElementById(idConjuncionesLocal);
                var li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Urano y Neptuno en tu carta. El significado es:---\n";
                punto.append(li);

                resultado = resultado + 'Hay una conjunción de Urano y Neptuno en tu carta. El significado es:---\n';
                UN = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('UP') != -1 || arrayConjLocal[i].indexOf('PU') != -1) {
            if (UP != 1) {
                var punto = document.getElementById(idConjuncionesLocal);
                var li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Urano y Pluton en tu carta. El significado es:---\n";
                punto.append(li);
                resultado = resultado + 'Hay una conjunción de Urano y Pluton en tu carta. El significado es:---\n';
                UP = 1;
            }
        }

        // // ======Neptuno=======

        if (arrayConjLocal[i].indexOf('NL') != -1 || arrayConjLocal[i].indexOf('LN') != -1) {
            if (NL != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Neptuno y La Luna en tu carta. El significado es:---\n";
                punto.append(li);

                resultado = resultado + 'Hay una conjunción de Neptuno y La Luna en tu carta. El significado es:---\n';
                NL = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('NSo') != -1 || arrayConjLocal[i].indexOf('SoN') != -1) {
            if (NSo != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Neptuno y El Sol en tu carta. El significado es:---\n";
                punto.append(li);

                resultado = resultado + 'Hay una conjunción de Neptuno y El Sol en tu carta. El significado es:---\n';
                NSo = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('NP') != -1 || arrayConjLocal[i].indexOf('PN') != -1) {
            if (NP != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Neptuno y Pluton en tu carta. El significado es:---\n";
                punto.append(li);

                resultado = resultado + 'Hay una conjunción de Neptuno y Pluton en tu carta. El significado es:---\n';
                NP = 1;
            }
        }

        // // ======Luna=======

        if (arrayConjLocal[i].indexOf('LP') != -1 || arrayConjLocal[i].indexOf('PL') != -1) {
            if (LP != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Luna y Pluton en tu carta. El significado es:---\n";
                punto.append(li);

                resultado = resultado + 'Hay una conjunción de Luna y Pluton en tu carta. El significado es:---\n';
                LP = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('LSo') != -1 || arrayConjLocal[i].indexOf('SoL') != -1) {
            if (LSo != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Luna y Sol en tu carta. El significado es:---\n";
                punto.append(li);

                resultado = resultado + 'Hay una conjunción de Luna y Sol en tu carta. El significado es:---\n';
                LSo = 1;
            }
        }


        // // ======Sol=======

        if (arrayConjLocal[i].indexOf('SoP') != -1 || arrayConjLocal[i].indexOf('PSo') != -1) {
            if (SoP != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Sol y Pluton en tu carta. El significado es:---\n";
                punto.append(li);
                resultado = resultado + 'Hay una conjunción de Sol y Pluton en tu carta. El significado es:---\n';
                SoP = 1;
            }
        }

        // //=======Jupiter=====

        if (arrayConjLocal[i].indexOf('JM') != -1 || arrayConjLocal[i].indexOf('MJ') != -1) {
            if (arrayConjLocal[i].indexOf('JMe') == -1) {
                if (JM != 1) {
                    punto = document.getElementById(idConjuncionesLocal);
                    li = document.createElement('li');
                    li.innerHTML = "Hay una conjunción de Jupiter y Marte en tu carta. El significado es:---\n";
                    punto.append(li);

                    resultado = resultado + 'Hay una conjunción de Jupiter y Marte en tu carta. El significado es:---\n';
                    JM = 1;
                }
            }
        }

        if (arrayConjLocal[i].indexOf('JV') != -1 || arrayConjLocal[i].indexOf('VJ') != -1) {
            if (JV != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Jupiter y Venus en tu carta. El significado es:---\n";
                punto.append(li);
                resultado = resultado + 'Hay una conjunción de Jupiter y Venus en tu carta. El significado es:---\n';
                JV = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('JS') != -1 || arrayConjLocal[i].indexOf('SJ') != -1) {
            if (arrayConjLocal[i].indexOf('JSo') == -1) {
                if (JS != 1) {
                    punto = document.getElementById(idConjuncionesLocal);
                    li = document.createElement('li');
                    li.innerHTML = "Hay una conjunción de Jupiter y Saturno en tu carta. El significado es:---\n";
                    punto.append(li);

                    resultado = resultado + 'Hay una conjunción de Jupiter y Saturno en tu carta. El significado es:---\n';
                    JS = 1;
                }
            }
        }

        if (arrayConjLocal[i].indexOf('JU') != -1 || arrayConjLocal[i].indexOf('UJ') != -1) {
            if (JU != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Jupiter y Urano en tu carta. El significado es:---\n";
                punto.append(li);

                resultado = resultado + 'Hay una conjunción de Jupiter y Urano en tu carta. El significado es:---\n';
                JU = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('JMe') != -1 || arrayConjLocal[i].indexOf('MeJ') != -1) {
            if (JMe != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Jupiter y Mercurio en tu carta. El significado es:---\n";
                punto.append(li);

                resultado = resultado + 'Hay una conjunción de Jupiter y Mercurio en tu carta. El significado es:---\n';
                JMe = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('JN') != -1 || arrayConjLocal[i].indexOf('NJ') != -1) {
            if (JN != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Jupiter y Neptuno en tu carta. El significado es:---\n'";
                resultado = resultado + 'Hay una conjunción de Jupiter y Neptuno en tu carta. El significado es:---\n';
                JN = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('JL') != -1 || arrayConjLocal[i].indexOf('LJ') != -1) {
            if (JL != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Jupiter y Luna en tu carta. El significado es:---\n";
                punto.append(li);

                resultado = resultado + 'Hay una conjunción de Jupiter y Luna en tu carta. El significado es:---\n';
                JL = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('JSo') != -1 || arrayConjLocal[i].indexOf('SoJ') != -1) {
            if (JSo != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Jupiter y Sol en tu carta. El significado es:---\n";
                punto.append(li);

                resultado = resultado + 'Hay una conjunción de Jupiter y Sol en tu carta. El significado es:---\n';
                JSo = 1;
            }
        }

        if (arrayConjLocal[i].indexOf('JP') != -1 || arrayConjLocal[i].indexOf('PJ') != -1) {
            if (JP != 1) {
                punto = document.getElementById(idConjuncionesLocal);
                li = document.createElement('li');
                li.innerHTML = "Hay una conjunción de Jupiter y Pluton en tu carta. El significado es:---\n";
                punto.append(li);

                resultado = resultado + 'Hay una conjunción de Jupiter y Pluton en tu carta. El significado es:---\n';
                JP = 1;
            }
        }

    }

    // var arrayIdsPlanetas2 = ["marte", "venus", "saturno", "mercurio", "luna", "sol", "urano", "neptuno", "pluton", "jupiter"];
    //el ofr
    //ACA CAMBIE EL 16 4 22 A LAS 8:48 PM   
    // arrayCasas = arraysPlanetasCasas(arrayIdsPlanetas2);
    arrayCasas = arraysPlanetasCasas(parametros);
    //DESESTRUCTURACION DE ARRAYS
    var [arraysCasa1, arraysCasa2, arraysCasa3, arraysCasa4, arraysCasa5, arraysCasa6, arraysCasa7, arraysCasa8, arraysCasa9, arraysCasa10, arraysCasa11, arraysCasa12] = arrayCasas;


    var venus = infoVenus(regente, parametros, grados);
    var saturno = infoSaturno(regente, parametros, grados);
    var marte = infoMarte(regente, parametros, grados);
    var jupiter = infoJupiter(regente, parametros, grados);
    var mercurio = infoMercurio(regente, parametros, grados);
    var urano = infoUrano(regente, parametros, grados);
    var neptuno = infoNeptuno(regente, parametros, grados);
    var sol = infoSol(regente, parametros, grados);
    var luna = infoLuna(regente, parametros, grados);
    var pluton = infoPluton(regente, parametros, grados);


    console.log(`los arrays de planetas basados en DOM son as:`);
    console.log(marte);
    console.log(venus);
    console.log(saturno);
    console.log(mercurio);
    console.log(luna);
    console.log(sol);
    console.log(urano);
    console.log(neptuno);
    console.log(jupiter);
    console.log(pluton);

    var arrayDeinfoPlanetas = [];

    arrayDeinfoPlanetas.push(venus);
    arrayDeinfoPlanetas.push(saturno);
    arrayDeinfoPlanetas.push(marte);
    arrayDeinfoPlanetas.push(jupiter);
    arrayDeinfoPlanetas.push(mercurio);
    arrayDeinfoPlanetas.push(urano);
    arrayDeinfoPlanetas.push(neptuno);
    arrayDeinfoPlanetas.push(sol);
    arrayDeinfoPlanetas.push(luna);
    arrayDeinfoPlanetas.push(pluton);

    console.log(`ASI SE VE MARTE.CASA PARSEADO EN INT ` + `${parseInt(marte.casa)}`);

    if (document.getElementById(arrayLocalCheckbox[0]).checked == true) {
        switch (parseInt(marte.casa)) {
            case 1 || "1st House":
                punto2 = document.getElementById(idsCasasLocal[0]);
                li2 = document.createElement('li');
                li2.innerHTML = `Marte está en casa ${marte.casa}. Esto significa: ESTA USANDO RESULTADOSEXT\\n`;
                punto2.append(li2);
                resultado = resultado + `Marte está en casa ${marte.casa}. Esto significa: ESTA USANDO RESULTADOSEXT\n`;
                break;
            case 2 || "2nd House":
                punto2 = document.getElementById(idsCasasLocal[1]);
                li2 = document.createElement('li');
                li2.innerHTML = `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
                break;
            case 3 || "3rd House":
                punto2 = document.getElementById(idsCasasLocal[2]);
                li2 = document.createElement('li');
                li2.innerHTML = `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
                break;
            case 4 || "4th House":
                punto2 = document.getElementById(idsCasasLocal[3]);
                li2 = document.createElement('li');
                li2.innerHTML = `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
                break;
            case 5 || "5th House":
                punto2 = document.getElementById(idsCasasLocal[4]);
                li2 = document.createElement('li');
                li2.innerHTML = `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
                break;
            case 6 || "6th House":
                punto2 = document.getElementById(idsCasasLocal[5]);
                li2 = document.createElement('li');
                li2.innerHTML = `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
                break;
            case 7 || "7th House":
                punto2 = document.getElementById(idsCasasLocal[6]);
                li2 = document.createElement('li');
                li2.innerHTML = `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
                break;
            case 8 || "8th House":
                punto2 = document.getElementById(idsCasasLocal[7]);
                li2 = document.createElement('li');
                li2.innerHTML = `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
                break;
            case 9 || "9th House":
                punto2 = document.getElementById(idsCasasLocal[8]);
                li2 = document.createElement('li');
                li2.innerHTML = `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
                break;
            case 10 || "10th House":
                punto2 = document.getElementById(idsCasasLocal[9]);
                li2 = document.createElement('li');
                li2.innerHTML = `Marte está en casa ${marte.casa}. Esto significa: MARTE ESTA USANDO EL RESULTADOS.EXT\n`;
                punto2.append(li2);
                resultado = resultado + `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
                break;
            case 11 || "11th House":
                punto2 = document.getElementById(idsCasasLocal[10]);
                li2 = document.createElement('li');
                li2.innerHTML = `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
                break;
            case 12 || "12th House":
                punto2 = document.getElementById(idsCasasLocal[11]);
                li2 = document.createElement('li');
                li2.innerHTML = `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Marte está en casa ${marte.casa}. Esto significa: ---\n`;
                break;


        }
    }

    if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
        switch (parseInt(venus.casa)) {
            case 1 || "1st House":
                punto2 = document.getElementById(idsCasasLocal[0]);
                li2 = document.createElement('li');
                li2.innerHTML = `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                punto2.append(li2);

                resultado = resultado + `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                break;
            case 2 || "2nd House":
                punto2 = document.getElementById(idsCasasLocal[1]);
                li2 = document.createElement('li');
                li2.innerHTML = `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                break;
            case 3 || "3rd House":
                punto2 = document.getElementById(idsCasasLocal[2]);
                li2 = document.createElement('li');
                li2.innerHTML = `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                break;
            case 4 || "4th House":
                punto2 = document.getElementById(idsCasasLocal[3]);
                li2 = document.createElement('li');
                li2.innerHTML = `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                break;
            case 5 || "5th House":
                punto2 = document.getElementById(idsCasasLocal[4]);
                li2 = document.createElement('li');
                li2.innerHTML = `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                break;
            case 6 || "6th House":
                punto2 = document.getElementById(idsCasasLocal[5]);
                li2 = document.createElement('li');
                li2.innerHTML = `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                break;
            case 7 || "7th House":
                punto2 = document.getElementById(idsCasasLocal[6]);
                li2 = document.createElement('li');
                li2.innerHTML = `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                break;
            case 8 || "8th House":
                punto2 = document.getElementById(idsCasasLocal[7]);
                li2 = document.createElement('li');
                li2.innerHTML = `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                break;
            case 9 || "9th House":
                punto2 = document.getElementById(idsCasasLocal[8]);
                li2 = document.createElement('li');
                li2.innerHTML = `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                break;
            case 10 || "10th House":
                punto2 = document.getElementById(idsCasasLocal[9]);
                li2 = document.createElement('li');
                li2.innerHTML = `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                break;
            case 11 || "11th House":
                punto2 = document.getElementById(idsCasasLocal[10]);
                li2 = document.createElement('li');
                li2.innerHTML = `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                break;
            case 12 || "12th House":
                punto2 = document.getElementById(idsCasasLocal[11]);
                li2 = document.createElement('li');
                li2.innerHTML = `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Venus está en casa ${venus.casa}. Esto significa: ---\n`;
                break;

        }
    }

    if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
        switch (parseInt(saturno.casa)) {
            case 1 || "1st House":
                punto2 = document.getElementById(idsCasasLocal[0]);
                li2 = document.createElement('li');
                li2.innerHTML = `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                break;
            case 2 || "2nd House":
                punto2 = document.getElementById(idsCasasLocal[1]);
                li2 = document.createElement('li');
                li2.innerHTML = `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                break;
            case 3 || "3rd House":
                punto2 = document.getElementById(idsCasasLocal[2]);
                li2 = document.createElement('li');
                li2.innerHTML = `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                break;
            case 4 || "4th House":
                punto2 = document.getElementById(idsCasasLocal[3]);
                li2 = document.createElement('li');
                li2.innerHTML = `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                break;
            case 5 || "5th House":
                punto2 = document.getElementById(idsCasasLocal[4]);
                li2 = document.createElement('li');
                li2.innerHTML = `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                break;
            case 6 || "6th House":
                punto2 = document.getElementById(idsCasasLocal[5]);
                li2 = document.createElement('li');
                li2.innerHTML = `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                break;
            case 7 || "7th House":
                punto2 = document.getElementById(idsCasasLocal[6]);
                li2 = document.createElement('li');
                li2.innerHTML = `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                break;
            case 8 || "8th House":
                punto2 = document.getElementById(idsCasasLocal[7]);
                li2 = document.createElement('li');
                li2.innerHTML = `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                break;
            case 9 || "9th House":
                punto2 = document.getElementById(idsCasasLocal[8]);
                li2 = document.createElement('li');
                li2.innerHTML = `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                break;
            case 10 || "10th House":
                punto2 = document.getElementById(idsCasasLocal[9]);
                li2 = document.createElement('li');
                li2.innerHTML = `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                break;
            case 11 || "11th House":
                punto2 = document.getElementById(idsCasasLocal[10]);
                li2 = document.createElement('li');
                li2.innerHTML = `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                break;
            case 12 || "12th House":
                punto2 = document.getElementById(idsCasasLocal[11]);
                li2 = document.createElement('li');
                li2.innerHTML = `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Saturno está en casa ${saturno.casa}. Esto significa: ---\n`;
                break;
        }
    }

    if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
        switch (parseInt(mercurio.casa)) {
            case 1 || "1st House":
                punto2 = document.getElementById(idsCasasLocal[0]);
                li2 = document.createElement('li');
                li2.innerHTML = `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                break;
            case 2 || "2nd House":
                punto2 = document.getElementById(idsCasasLocal[1]);
                li2 = document.createElement('li');
                li2.innerHTML = `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                break;
            case 3 || "3rd House":
                punto2 = document.getElementById(idsCasasLocal[2]);
                li2 = document.createElement('li');
                li2.innerHTML = `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                break;
            case 4 || "4th House":
                punto2 = document.getElementById(idsCasasLocal[3]);
                li2 = document.createElement('li');
                li2.innerHTML = `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                break;
            case 5 || "5th House":
                punto2 = document.getElementById(idsCasasLocal[4]);
                li2 = document.createElement('li');
                li2.innerHTML = `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                break;
            case 6 || "6th House":
                punto2 = document.getElementById(idsCasasLocal[5]);
                li2 = document.createElement('li');
                li2.innerHTML = `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                break;
            case 7 || "7th House":
                punto2 = document.getElementById(idsCasasLocal[6]);
                li2 = document.createElement('li');
                li2.innerHTML = `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                break;
            case 8 || "8th House":
                punto2 = document.getElementById(idsCasasLocal[7]);
                li2 = document.createElement('li');
                li2.innerHTML = `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                break;
            case 9 || "9th House":
                punto2 = document.getElementById(idsCasasLocal[8]);
                li2 = document.createElement('li');
                li2.innerHTML = `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                break;
            case 10 || "10th House":
                punto2 = document.getElementById(idsCasasLocal[9]);
                li2 = document.createElement('li');
                li2.innerHTML = `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                break;
            case 11 || "11th House":
                punto2 = document.getElementById(idsCasasLocal[10]);
                li2 = document.createElement('li');
                li2.innerHTML = `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                break;
            case 12 || "12th House":
                punto2 = document.getElementById(idsCasasLocal[11]);
                li2 = document.createElement('li');
                li2.innerHTML = `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Mercurio está en casa ${mercurio.casa}. Esto significa: ---\n`;
                break;
        }
    }


    if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
        switch (parseInt(urano.casa)) {
            case 1 || "1st House":
                punto2 = document.getElementById(idsCasasLocal[0]);
                li2 = document.createElement('li');
                li2.innerHTML = `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                break;
            case 2 || "2nd House":
                punto2 = document.getElementById(idsCasasLocal[1]);
                li2 = document.createElement('li');
                li2.innerHTML = `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                break;
            case 3 || "3rd House":
                punto2 = document.getElementById(idsCasasLocal[2]);
                li2 = document.createElement('li');
                li2.innerHTML = `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                break;
            case 4 || "4th House":
                punto2 = document.getElementById(idsCasasLocal[3]);
                li2 = document.createElement('li');
                li2.innerHTML = `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                break;
            case 5 || "5th House":
                punto2 = document.getElementById(idsCasasLocal[4]);
                li2 = document.createElement('li');
                li2.innerHTML = `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                break;
            case 6 || "6th House":
                punto2 = document.getElementById(idsCasasLocal[5]);
                li2 = document.createElement('li');
                li2.innerHTML = `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                break;
            case 7 || "7th House":
                punto2 = document.getElementById(idsCasasLocal[6]);
                li2 = document.createElement('li');
                li2.innerHTML = `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                break;
            case 8 || "8th House":
                punto2 = document.getElementById(idsCasasLocal[7]);
                li2 = document.createElement('li');
                li2.innerHTML = `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                break;
            case 9 || "9th House":
                punto2 = document.getElementById(idsCasasLocal[8]);
                li2 = document.createElement('li');
                li2.innerHTML = `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                break;
            case 10 || "10th House":
                punto2 = document.getElementById(idsCasasLocal[9]);
                li2 = document.createElement('li');
                li2.innerHTML = `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                break;
            case 11 || "11th House":
                punto2 = document.getElementById(idsCasasLocal[10]);
                li2 = document.createElement('li');
                li2.innerHTML = `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                break;
            case 12 || "12th House":
                punto2 = document.getElementById(idsCasasLocal[11]);
                li2 = document.createElement('li');
                li2.innerHTML = `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Urano está en casa ${urano.casa}. Esto significa: ---\n`;
                break;
        }
    }

    if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
        switch (parseInt(neptuno.casa)) {
            case 1 || "1st House":
                punto2 = document.getElementById(idsCasasLocal[0]);
                li2 = document.createElement('li');
                li2.innerHTML = `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                break;
            case 2 || "2nd House":
                punto2 = document.getElementById(idsCasasLocal[1]);
                li2 = document.createElement('li');
                li2.innerHTML = `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                break;
            case 3 || "3rd House":
                punto2 = document.getElementById(idsCasasLocal[2]);
                li2 = document.createElement('li');
                li2.innerHTML = `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                break;
            case 4 || "4th House":
                punto2 = document.getElementById(idsCasasLocal[3]);
                li2 = document.createElement('li');
                li2.innerHTML = `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                break;
            case 5 || "5th House":
                punto2 = document.getElementById(idsCasasLocal[4]);
                li2 = document.createElement('li');
                li2.innerHTML = `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                break;
            case 6 || "6th House":
                punto2 = document.getElementById(idsCasasLocal[5]);
                li2 = document.createElement('li');
                li2.innerHTML = `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                break;
            case 7 || "7th House":
                punto2 = document.getElementById(idsCasasLocal[6]);
                li2 = document.createElement('li');
                li2.innerHTML = `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                break;
            case 8 || "8th House":
                punto2 = document.getElementById(idsCasasLocal[7]);
                li2 = document.createElement('li');
                li2.innerHTML = `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                break;
            case 9 || "9th House":
                punto2 = document.getElementById(idsCasasLocal[8]);
                li2 = document.createElement('li');
                li2.innerHTML = `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                break;
            case 10 || "10th House":
                punto2 = document.getElementById(idsCasasLocal[9]);
                li2 = document.createElement('li');
                li2.innerHTML = `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                break;
            case 11 || "11th House":
                punto2 = document.getElementById(idsCasasLocal[10]);
                li2 = document.createElement('li');
                li2.innerHTML = `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                break;
            case 12 || "12th House":
                punto2 = document.getElementById(idsCasasLocal[11]);
                li2 = document.createElement('li');
                li2.innerHTML = `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Neptuno está en casa ${neptuno.casa}. Esto significa: ---\n`;
                break;
        }
    }

    if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
        switch (parseInt(luna.casa)) {
            case 1 || "1st House":
                punto2 = document.getElementById(idsCasasLocal[0]);
                li2 = document.createElement('li');
                li2.innerHTML = `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                break;
            case 2 || "2nd House":
                punto2 = document.getElementById(idsCasasLocal[1]);
                li2 = document.createElement('li');
                li2.innerHTML = `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                break;
            case 3 || "3rd House":
                punto2 = document.getElementById(idsCasasLocal[2]);
                li2 = document.createElement('li');
                li2.innerHTML = `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                break;
            case 4 || "4th House":
                punto2 = document.getElementById(idsCasasLocal[3]);
                li2 = document.createElement('li');
                li2.innerHTML = `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                break;
            case 5 || "5th House":
                punto2 = document.getElementById(idsCasasLocal[4]);
                li2 = document.createElement('li');
                li2.innerHTML = `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                break;
            case 6 || "6th House":
                punto2 = document.getElementById(idsCasasLocal[5]);
                li2 = document.createElement('li');
                li2.innerHTML = `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                break;
            case 7 || "7th House":
                punto2 = document.getElementById(idsCasasLocal[6]);
                li2 = document.createElement('li');
                li2.innerHTML = `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                break;
            case 8 || "8th House":
                punto2 = document.getElementById(idsCasasLocal[7]);
                li2 = document.createElement('li');
                li2.innerHTML = `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                break;
            case 9 || "9th House":
                punto2 = document.getElementById(idsCasasLocal[8]);
                li2 = document.createElement('li');
                li2.innerHTML = `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                break;
            case 10 || "10th House":
                punto2 = document.getElementById(idsCasasLocal[9]);
                li2 = document.createElement('li');
                li2.innerHTML = `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                break;
            case 11 || "11th House":
                punto2 = document.getElementById(idsCasasLocal[10]);
                li2 = document.createElement('li');
                li2.innerHTML = `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                break;
            case 12 || "12th House":
                punto2 = document.getElementById(idsCasasLocal[11]);
                li2 = document.createElement('li');
                li2.innerHTML = `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Luna está en casa ${luna.casa}. Esto significa: ---\n`;
                break;
        }
    }

    if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
        switch (parseInt(sol.casa)) {
            case 1 || "1st House":
                punto2 = document.getElementById(idsCasasLocal[0]);
                li2 = document.createElement('li');
                li2.innerHTML = `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                break;
            case 2 || "2nd House":
                punto2 = document.getElementById(idsCasasLocal[1]);
                li2 = document.createElement('li');
                li2.innerHTML = `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                break;
            case 3 || "3rd House":
                punto2 = document.getElementById(idsCasasLocal[2]);
                li2 = document.createElement('li');
                li2.innerHTML = `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                break;
            case 4 || "4th House":
                punto2 = document.getElementById(idsCasasLocal[3]);
                li2 = document.createElement('li');
                li2.innerHTML = `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                break;
            case 5 || "5th House":
                punto2 = document.getElementById(idsCasasLocal[4]);
                li2 = document.createElement('li');
                li2.innerHTML = `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                break;
            case 6 || "6th House":
                punto2 = document.getElementById(idsCasasLocal[5]);
                li2 = document.createElement('li');
                li2.innerHTML = `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                break;
            case 7 || "7th House":
                punto2 = document.getElementById(idsCasasLocal[6]);
                li2 = document.createElement('li');
                li2.innerHTML = `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                break;
            case 8 || "8th House":
                punto2 = document.getElementById(idsCasasLocal[7]);
                li2 = document.createElement('li');
                li2.innerHTML = `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                break;
            case 9 || "9th House":
                punto2 = document.getElementById(idsCasasLocal[8]);
                li2 = document.createElement('li');
                li2.innerHTML = `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                break;
            case 10 || "10th House":
                punto2 = document.getElementById(idsCasasLocal[9]);
                li2 = document.createElement('li');
                li2.innerHTML = `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                break;
            case 11 || "11th House":
                punto2 = document.getElementById(idsCasasLocal[10]);
                li2 = document.createElement('li');
                li2.innerHTML = `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                break;
            case 12 || "12th House":
                punto2 = document.getElementById(idsCasasLocal[11]);
                li2 = document.createElement('li');
                li2.innerHTML = `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Sol está en casa ${sol.casa}. Esto significa: ---\n`;
                break;
        }
    }

    if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
        switch (parseInt(jupiter.casa)) {
            case 1 || "1st House":
                punto2 = document.getElementById(idsCasasLocal[0]);
                li2 = document.createElement('li');
                li2.innerHTML = `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                break;
            case 2 || "2nd House":
                punto2 = document.getElementById(idsCasasLocal[1]);
                li2 = document.createElement('li');
                li2.innerHTML = `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                break;
            case 3 || "3rd House":
                punto2 = document.getElementById(idsCasasLocal[2]);
                li2 = document.createElement('li');
                li2.innerHTML = `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                break;
            case 4 || "4th House":
                punto2 = document.getElementById(idsCasasLocal[3]);
                li2 = document.createElement('li');
                li2.innerHTML = `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                break;
            case 5 || "5th House":
                punto2 = document.getElementById(idsCasasLocal[4]);
                li2 = document.createElement('li');
                li2.innerHTML = `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                break;
            case 6 || "6th House":
                punto2 = document.getElementById(idsCasasLocal[5]);
                li2 = document.createElement('li');
                li2.innerHTML = `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                resultado = resultado + `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                break;
            case 7 || "7th House":
                punto2 = document.getElementById(idsCasasLocal[6]);
                li2 = document.createElement('li');
                li2.innerHTML = `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                break;
            case 8 || "8th House":
                punto2 = document.getElementById(idsCasasLocal[7]);
                li2 = document.createElement('li');
                li2.innerHTML = `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                break;
            case 9 || "9th House":
                punto2 = document.getElementById(idsCasasLocal[8]);
                li2 = document.createElement('li');
                li2.innerHTML = `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                break;
            case 10 || "10th House":
                punto2 = document.getElementById(idsCasasLocal[9]);
                li2 = document.createElement('li');
                li2.innerHTML = `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                break;
            case 11 || "11th House":
                punto2 = document.getElementById(idsCasasLocal[10]);
                li2 = document.createElement('li');
                li2.innerHTML = `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                break;
            case 12 || "12th House":
                punto2 = document.getElementById(idsCasasLocal[11]);
                li2 = document.createElement('li');
                li2.innerHTML = `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Jupiter está en casa ${jupiter.casa}. Esto significa: ---\n`;
                break;
        }
    }

    if (document.getElementById(arrayLocalCheckbox[9]).checked == true) {
        switch (parseInt(pluton.casa)) {
            case 1 || "1st House":
                punto2 = document.getElementById(idsCasasLocal[0]);
                li2 = document.createElement('li');
                li2.innerHTML = `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                break;
            case 2 || "2nd House":
                punto2 = document.getElementById(idsCasasLocal[1]);
                li2 = document.createElement('li');
                li2.innerHTML = `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                break;
            case 3 || "3rd House":
                punto2 = document.getElementById(idsCasasLocal[2]);
                li2 = document.createElement('li');
                li2.innerHTML = `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                break;
            case 4 || "4th House":
                punto2 = document.getElementById(idsCasasLocal[3]);
                li2 = document.createElement('li');
                li2.innerHTML = `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                break;
            case 5 || "5th House":
                punto2 = document.getElementById(idsCasasLocal[4]);
                li2 = document.createElement('li');
                li2.innerHTML = `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                break;
            case 6 || "6th House":
                punto2 = document.getElementById(idsCasasLocal[5]);
                li2 = document.createElement('li');
                li2.innerHTML = `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                break;
            case 7 || "7th House":
                punto2 = document.getElementById(idsCasasLocal[6]);
                li2 = document.createElement('li');
                li2.innerHTML = `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                break;
            case 8 || "8th House":
                punto2 = document.getElementById(idsCasasLocal[7]);
                li2 = document.createElement('li');
                li2.innerHTML = `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                break;
            case 9 || "9th House":
                punto2 = document.getElementById(idsCasasLocal[8]);
                li2 = document.createElement('li');
                li2.innerHTML = `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                break;
            case 10 || "10th House":
                punto2 = document.getElementById(idsCasasLocal[9]);
                li2 = document.createElement('li');
                li2.innerHTML = `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                break;
            case 11 || "11th House":
                punto2 = document.getElementById(idsCasasLocal[10]);
                li2 = document.createElement('li');
                li2.innerHTML = `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                break;
            case 12 || "12th House":
                punto2 = document.getElementById(idsCasasLocal[11]);
                li2 = document.createElement('li');
                li2.innerHTML = `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                punto2.append(li2);
                resultado = resultado + `Pluton está en casa ${pluton.casa}. Esto significa: ---\n`;
                break;
        }
    }


    console.log(`regentes  ${marte.regente} ${venus.regente} ${saturno.regente} ${urano.regente} ${sol.regente} ${marte.regente} ${urano.regente}`);
    //Los switchs de abajo agregan la informacion correspondiente al regente de cada signo a la variable resultado


    if (document.getElementById(arrayLocalCheckbox[0]).checked == true) {
        switch (marte.regente) {
            case 'aries':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;
            case 'tauro':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;
            case 'geminis':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;
            case 'cancer':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;

            case 'leo':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;

            case 'virgo':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;

            case 'libra':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;

            case 'escorpio':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;

            case 'sagitario':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;

            case 'capricornio':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;

            case 'acuario':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;

            case 'piscis':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;

                //ahora adaptado a cartaPorAPI

            case 'Ari':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;
            case 'Tau':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;
            case 'Gem':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;
            case 'Can':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;

            case 'Leo':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;

            case 'Vir':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;

            case 'Lib':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;

            case 'Sco':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;

            case 'Sag':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;

            case 'Cap':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;

            case 'Aqu':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;

            case 'Pis':
                punto3 = document.getElementById(idsPlanetasLocal[0]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Marte es el signo ${marte.regente}. Esto significa: ---\n`;
                break;




        }
    }

    if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
        switch (saturno.regente) {
            case 'aries':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;
            case 'tauro':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;
            case 'geminis':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;
            case 'cancer':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;

            case 'leo':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;

            case 'virgo':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;

            case 'libra':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;

            case 'escorpio':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;

            case 'sagitario':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;

            case 'capricornio':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;

            case 'acuario':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;

            case 'piscis':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;

                //adaptado a CartaPorAPI

            case 'Ari':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;
            case 'Tau':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;
            case 'Gem':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;
            case 'Can':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;

            case 'Leo':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;

            case 'Vir':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;

            case 'Lib':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;

            case 'Sco':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;

            case 'Sag':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;

            case 'Cap':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;

            case 'Aqu':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;

            case 'Pis':
                punto3 = document.getElementById(idsPlanetasLocal[3]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Saturno es el signo ${saturno.regente}. Esto significa: ---\n`;
                break;



        }
    }

    if (document.getElementById(arrayLocalCheckbox[3]).checked == true) {
        switch (mercurio.regente) {
            case 'aries':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;
            case 'tauro':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;
            case 'geminis':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;
            case 'cancer':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;

            case 'leo':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;

            case 'virgo':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;

            case 'libra':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;

            case 'escorpio':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;

            case 'sagitario':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;

            case 'capricornio':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;

            case 'acuario':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;

            case 'piscis':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;

                //Adaptado a cartaPorAPI

            case 'Ari':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;
            case 'Tau':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;
            case 'Gem':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;
            case 'Can':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;

            case 'Leo':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;

            case 'Vir':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;

            case 'Lib':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;

            case 'Sco':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;

            case 'Sag':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;

            case 'Cap':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;

            case 'Aqu':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;

            case 'Pis':
                punto3 = document.getElementById(idsPlanetasLocal[2]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Mercurio es el signo ${mercurio.regente}. Esto significa: ---\n`;
                break;

        }
    }

    if (document.getElementById(arrayLocalCheckbox[1]).checked == true) {
        switch (venus.regente) {
            case 'aries':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;
            case 'tauro':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;
            case 'geminis':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;
            case 'cancer':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;

            case 'leo':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;

            case 'virgo':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;

            case 'libra':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;

            case 'escorpio':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;

            case 'sagitario':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;

            case 'capricornio':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;

            case 'acuario':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;

            case 'piscis':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;

                //ahora adaptado a Carta por API

            case 'Ari':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;
            case 'Tau':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;
            case 'Gem':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;
            case 'Can':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;

            case 'Leo':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;

            case 'Vir':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;

            case 'Lib':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;

            case 'Sco':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;

            case 'Sag':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;

            case 'Cap':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;

            case 'Aqu':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;

            case 'Pis':
                punto3 = document.getElementById(idsPlanetasLocal[1]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Venus es el signo ${venus.regente}. Esto significa: ---\n`;
                break;


        }
    }


    if (document.getElementById(arrayLocalCheckbox[4]).checked == true) {
        switch (sol.regente) {
            case 'aries':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;
            case 'tauro':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;
            case 'geminis':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;
            case 'cancer':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;

            case 'leo':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;

            case 'virgo':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;

            case 'libra':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;

            case 'escorpio':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;

            case 'sagitario':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;

            case 'capricornio':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;

            case 'acuario':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;

            case 'piscis':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;

                //Adaptado a CartaPorAPI

            case 'Ari':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;
            case 'Tau':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;
            case 'Gem':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;
            case 'Can':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;

            case 'Leo':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;

            case 'Vir':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;

            case 'Lib':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;

            case 'Sco':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;

            case 'Sag':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;

            case 'Cap':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;

            case 'Aqu':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;

            case 'Pis':
                punto3 = document.getElementById(idsPlanetasLocal[5]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Sol es el signo ${sol.regente}. Esto significa: ---\n`;
                break;


        }
    }

    if (document.getElementById(arrayLocalCheckbox[5]).checked == true) {
        switch (luna.regente) {

            case 'aries':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;
            case 'tauro':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;
            case 'geminis':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;
            case 'cancer':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;

            case 'leo':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;

            case 'virgo':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;

            case 'libra':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;

            case 'escorpio':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;

            case 'sagitario':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;

            case 'capricornio':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;

            case 'acuario':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;

            case 'piscis':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;

                //adaptado a CartaPorAPI

            case 'Ari':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;
            case 'Tau':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;
            case 'Gem':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;
            case 'Can':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;

            case 'Leo':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;

            case 'Vir':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;

            case 'Lib':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;

            case 'Sco':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;

            case 'Sag':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;

            case 'Cap':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;

            case 'Aqu':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;

            case 'Pis':
                punto3 = document.getElementById(idsPlanetasLocal[4]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Luna es el signo ${luna.regente}. Esto significa: ---\n`;
                break;


        }
    }

    if (document.getElementById(arrayLocalCheckbox[6]).checked == true) {
        switch (urano.regente) {

            case 'aries':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;
            case 'tauro':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;
            case 'geminis':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;
            case 'cancer':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;

            case 'leo':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;

            case 'virgo':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;

            case 'libra':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;

            case 'escorpio':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;

            case 'sagitario':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;

            case 'capricornio':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;

            case 'acuario':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;

            case 'piscis':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;


                //adaptado a cartaPorAPI

            case 'Ari':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;
            case 'Tau':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;
            case 'Gem':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;
            case 'Can':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;

            case 'Leo':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;

            case 'Vir':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;

            case 'Lib':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;

            case 'Sco':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;

            case 'Sag':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;

            case 'Cap':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;

            case 'Aqu':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;

            case 'Pis':
                punto3 = document.getElementById(idsPlanetasLocal[6]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Urano es el signo ${urano.regente}. Esto significa: ---\n`;
                break;



        }
    }

    if (document.getElementById(arrayLocalCheckbox[7]).checked == true) {
        switch (neptuno.regente) {
            case 'aries':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;
            case 'tauro':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;
            case 'geminis':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;
            case 'cancer':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;

            case 'leo':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;

            case 'virgo':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;

            case 'libra':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;

            case 'escorpio':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;

            case 'sagitario':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;

            case 'capricornio':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;

            case 'acuario':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;

            case 'piscis':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;

                //adaptado a CartaPorAPI

            case 'Ari':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;
            case 'Tau':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;
            case 'Gem':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;
            case 'Can':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;

            case 'Leo':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;

            case 'Vir':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;

            case 'Lib':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;

            case 'Sco':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;

            case 'Sag':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;

            case 'Cap':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;

            case 'Aqu':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;

            case 'Pis':
                punto3 = document.getElementById(idsPlanetasLocal[7]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Neptuno es el signo ${neptuno.regente}. Esto significa: ---\n`;
                break;

        }
    }

    if (document.getElementById(arrayLocalCheckbox[2]).checked == true) {
        switch (pluton.regente) {
            case 'aries':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;
            case 'tauro':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;
            case 'geminis':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;
            case 'cancer':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;

            case 'leo':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;

            case 'virgo':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;

            case 'libra':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;

            case 'escorpio':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;

            case 'sagitario':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;

            case 'capricornio':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;

            case 'acuario':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;

            case 'piscis':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;

                //adaptado a CartaPorAPI
            case 'Ari':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;
            case 'Tau':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;
            case 'Gem':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;
            case 'Can':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;

            case 'Leo':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;

            case 'Vir':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;

            case 'Lib':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;

            case 'Sco':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;

            case 'Sag':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;

            case 'Cap':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;

            case 'Aqu':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;

            case 'Pis':
                punto3 = document.getElementById(idsPlanetasLocal[9]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Pluton es el signo ${pluton.regente}. Esto significa: ---\n`;
                break;

        }
    }

    if (document.getElementById(arrayLocalCheckbox[8]).checked == true) {
        switch (jupiter.regente) {
            case 'aries':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;
            case 'tauro':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;
            case 'geminis':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;
            case 'cancer':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;

            case 'leo':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;

            case 'virgo':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;

            case 'libra':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;

            case 'escorpio':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;

            case 'sagitario':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;

            case 'capricornio':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;

            case 'acuario':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;

            case 'piscis':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;

                //adaptado a CartaPorAPI

            case 'Ari':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;
            case 'Tau':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;
            case 'Gem':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;
            case 'Can':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;

            case 'Leo':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;

            case 'Vir':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;

            case 'Lib':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;

            case 'Sco':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;

            case 'Sag':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;

            case 'Cap':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;

            case 'Aqu':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;

            case 'Pis':
                punto3 = document.getElementById(idsPlanetasLocal[8]);
                punto3.innerHTML = "";
                li3 = document.createElement('li');
                li3.innerHTML = `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                punto3.append(li3);
                resultado = resultado + `El regente de Jupiter es el signo ${jupiter.regente}. Esto significa: ---\n`;
                break;

        }
    }

    //
    document.getElementById("texto__resultado").innerHTML = `${resultado}`;
    console.log(resultado);



    var nombre1 = document.getElementById("nombre").value;
    var apellido1 = document.getElementById("apellido").value;
    var nombreyapellido1 = `${nombre1}` + ' ' + `${apellido1}`;
    var nombreyapellido2 = nombreyapellido1.toUpperCase();
    console.log(nombreyapellido2);
    if (nombre1 != '' && apellido1 != '') {
        localStorage.setItem(`${nombreyapellido2}`, JSON.stringify(resultado));
        localStorage.setItem('Conjunciones ' + `${nombreyapellido2}`, JSON.stringify(arrayConjLocal));
        localStorage.setItem('Casas ' + `${nombreyapellido2}`, JSON.stringify(arraysPlanetasCasas(parametros)));
        localStorage.setItem('Planetas ' + `${nombreyapellido2}`, JSON.stringify(arrayDeinfoPlanetas));
        var nombre1 = '';
        var apellido1 = '';

    } else {
        alert("ingrese un nombre y apellido para poder guardar su resultado en los logs")
    }
}


// function descartarPlanetas() {
//     var marte = document.getElementById("checkboxmarte");
//     var venus = document.getElementById("checkboxvenus");
//     var saturno = document.getElementById("checkboxsaturno");
//     var mercurio = document.getElementById("checkboxmercurio");
//     var luna = document.getElementById("checkboxluna");
//     var sol = document.getElementById("checkboxsol");
//     var urano = document.getElementById("checkboxurano");
//     var neptuno = document.getElementById("checkboxneptuno");
//     var pluton = document.getElementById("checkboxpluton");
//     var jupiter = document.getElementById("checkboxjupiter");


//     console.log(marte)
//     console.log(venus)
//     console.log(saturno)
//     console.log(mercurio)
//     console.log(luna)
//     console.log(sol)
//     console.log(urano)
//     console.log(neptuno)
//     console.log(jupiter)
//     console.log(pluton)


//     if (marte.checked == false) {

//         document.getElementById("resultadosExterno__div3__marte").value = "";
//     }


// };