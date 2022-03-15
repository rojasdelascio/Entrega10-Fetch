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

function infoMercurio() {
    var signo4 = document.getElementById("regenteMercurio").value;
    var casa4 = document.getElementById("mercurio").value;
    var grado4 = document.getElementById("gradoMercurio").value;
    var nombre4 = 'Mercurio';
    //crear nuevo objeto con la funcion constructora, ingresando los valores..
    //..obtenidos del HTML
    var infoMercurio = new planetas(signo4, grado4, casa4, nombre4);

    return infoMercurio;
}

function infoLuna() {
    var signo5 = document.getElementById("regenteLuna").value;
    var casa5 = document.getElementById("luna").value;
    var grado5 = document.getElementById("gradoLuna").value;
    var nombre5 = 'Luna';
    //crear nuevo objeto con la funcion constructora, ingresando los valores..
    //..obtenidos del HTML
    var infoLuna = new planetas(signo5, grado5, casa5, nombre5);

    return infoLuna;
}

function infoSol() {
    var signo6 = document.getElementById("regenteSol").value;
    var casa6 = document.getElementById("sol").value;
    var grado6 = document.getElementById("gradoSol").value;
    var nombre6 = 'Sol';
    //crear nuevo objeto con la funcion constructora, ingresando los valores..
    //..obtenidos del HTML
    var infoSol = new planetas(signo6, grado6, casa6, nombre6);
    return infoSol;
}

function infoJupiter() {
    var signo7 = document.getElementById("regenteJupiter").value;
    var casa7 = document.getElementById("jupiter").value;
    var grado7 = document.getElementById("gradoJupiter").value;
    var nombre7 = 'Jupiter';
    //crear nuevo objeto con la funcion constructora, ingresando los valores..
    //..obtenidos del HTML
    var infoJupiter = new planetas(signo7, grado7, casa7, nombre7);
    return infoJupiter;
}

function infoUrano() {
    var signo8 = document.getElementById("regenteUrano").value;
    var casa8 = document.getElementById("urano").value;
    var grado8 = document.getElementById("gradoUrano").value;
    var nombre8 = 'Urano';
    //crear nuevo objeto con la funcion constructora, ingresando los valores..
    //..obtenidos del HTML
    var infoUrano = new planetas(signo8, grado8, casa8, nombre8);
    return infoUrano;
}

function infoNeptuno() {
    var signo9 = document.getElementById("regenteNeptuno").value;
    var casa9 = document.getElementById("neptuno").value;
    var grado9 = document.getElementById("gradoNeptuno").value;
    var nombre9 = 'Neptuno';
    //crear nuevo objeto con la funcion constructora, ingresando los valores..
    //..obtenidos del HTML
    var infoNeptuno = new planetas(signo9, grado9, casa9, nombre9);
    return infoNeptuno;
}

function infoPluton() {
    var signo10 = document.getElementById("regentePluton").value;
    var casa10 = document.getElementById("pluton").value;
    var grado10 = document.getElementById("gradoPluton").value;
    var nombre10 = 'Pluton';
    //crear nuevo objeto con la funcion constructora, ingresando los valores..
    //..obtenidos del HTML
    var infoPluton = new planetas(signo10, grado10, casa10, nombre10);
    return infoPluton;
}



//la funcion de abajo crea un array de objetos con los objetos obtenido de las funciones de cada planeta
function arrayObjetosPlanetas() {
    var arrayObjetosPlanetas = [];

    console.log(infoMarte(), infoMarte(), infoMarte());
    arrayObjetosPlanetas.push(infoMarte());
    arrayObjetosPlanetas.push(infoVenus());
    arrayObjetosPlanetas.push(infoMercurio());
    arrayObjetosPlanetas.push(infoLuna());
    arrayObjetosPlanetas.push(infoSol());
    arrayObjetosPlanetas.push(infoUrano());
    arrayObjetosPlanetas.push(infoNeptuno());
    arrayObjetosPlanetas.push(infoPluton());
    return arrayObjetosPlanetas;
}

//===========entrega 14 de marzo 2022
//contador e inputs de planetas; para que se pueda monitorear si la tabla debe ser re-dibujada
//se crean variables por cada input de cada planeta: casa, grado y signo regente
var cont = 0;
var cambioCasaM = document.getElementById("marte");
var cambioGradoM = document.getElementById("gradoMarte");
var cambioRegenteM = document.getElementById("regenteMarte");

var cambioCasaV = document.getElementById("venus");
var cambioGradoV = document.getElementById("gradoVenus");
var cambioRegenteV = document.getElementById("regenteVenus");

var cambioCasaS = document.getElementById("saturno");
var cambioGradoS = document.getElementById("gradoSaturno");
var cambioRegenteS = document.getElementById("regenteSaturno");

var cambioCasaMe = document.getElementById("mercurio");
var cambioGradoMe = document.getElementById("gradoMercurio");
var cambioRegenteMe = document.getElementById("regenteMercurio");

var cambioCasaL = document.getElementById("luna");
var cambioGradoL = document.getElementById("gradoLuna");
var cambioRegenteL = document.getElementById("regenteLuna");

var cambioCasaSo = document.getElementById("sol");
var cambioGradoSo = document.getElementById("gradoSol");
var cambioRegenteSo = document.getElementById("regenteSol");

var cambioCasaU = document.getElementById("urano");
var cambioGradoU = document.getElementById("gradoUrano");
var cambioRegenteU = document.getElementById("regenteUrano");

var cambioCasaN = document.getElementById("neptuno");
var cambioGradoN = document.getElementById("gradoNeptuno");
var cambioRegenteN = document.getElementById("regenteNeptuno");

var cambioCasaPl = document.getElementById("pluton");
var cambioGradoPl = document.getElementById("gradoPluton");
var cambioRegentePl = document.getElementById("regentePluton");

var cambioCasaJ = document.getElementById("pluton");
var cambioGradoJ = document.getElementById("gradoPluton");
var cambioRegenteJ = document.getElementById("regentePluton");


//ahora, se añadira un eventListener a cada uno de los inputs de cada planeta, para que si hay algun cambio en...
//...alguno de sus parametros, entonces el contador se haga 0. Si el cont=0, entonces esto permitirà modificar..
//..la tabla de planetas
cambioCasaPl.addEventListener("change", function() {
    cont = 0;
});
cambioGradoPl.addEventListener("change", function() {
    cont = 0;
});
cambioCasaPl.addEventListener("change", function() {
    cont = 0;
});

cambioCasaM.addEventListener("change", function() {
    cont = 0;
});
cambioGradoM.addEventListener("change", function() {
    cont = 0;
});
cambioCasaM.addEventListener("change", function() {
    cont = 0;
});

cambioCasaS.addEventListener("change", function() {
    cont = 0;
});
cambioGradoS.addEventListener("change", function() {
    cont = 0;
});
cambioCasaS.addEventListener("change", function() {
    cont = 0;
});

cambioCasaL.addEventListener("change", function() {
    cont = 0;
});
cambioGradoL.addEventListener("change", function() {
    cont = 0;
});
cambioCasaL.addEventListener("change", function() {
    cont = 0;
});

cambioCasaMe.addEventListener("change", function() {
    cont = 0;
});
cambioGradoMe.addEventListener("change", function() {
    cont = 0;
});
cambioCasaMe.addEventListener("change", function() {
    cont = 0;
});

cambioCasaSo.addEventListener("change", function() {
    cont = 0;
});
cambioGradoSo.addEventListener("change", function() {
    cont = 0;
});
cambioCasaSo.addEventListener("change", function() {
    cont = 0;
});

cambioCasaV.addEventListener("change", function() {
    cont = 0;
});
cambioGradoV.addEventListener("change", function() {
    cont = 0;
});
cambioCasaV.addEventListener("change", function() {
    cont = 0;
});

cambioCasaN.addEventListener("change", function() {
    cont = 0;
});
cambioGradoN.addEventListener("change", function() {
    cont = 0;
});
cambioCasaN.addEventListener("change", function() {
    cont = 0;
});

cambioCasaU.addEventListener("change", function() {
    cont = 0;
});
cambioGradoU.addEventListener("change", function() {
    cont = 0;
});
cambioCasaU.addEventListener("change", function() {
    cont = 0;
});

cambioCasaJ.addEventListener("change", function() {
    cont = 0;
});
cambioGradoJ.addEventListener("change", function() {
    cont = 0;
});
cambioCasaJ.addEventListener("change", function() {
    cont = 0;
});


const dibTabla = document.getElementById("dibujartabla");
//el script de abajo ejecutara la función cuando perciba un click en el boton con id "dibujartabla"
dibTabla.addEventListener('click', function() { dibujarTabla(); });

//fin entrega 15 marzo 2022
function dibujarTabla() {
    const AOP = arrayObjetosPlanetas();
    console.log(AOP);

    //arriba se cambiaba el contador a 0 con cada cambio de los inputs, para que..
    //..precisamente el if de abajo corriese si hubo cambios
    if (cont === 0) {
        //este script reemplazará la tabla actual por una vacia, para que no se repita y agreguen 2 tablas
        var borrador = document.getElementById("tablaplanetas");
        var nodoTexto = borrador.childNodes[0];
        borrador.textContent = nodoTexto.textContent;
        //

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


//FIN entrega 14 de marzo 2022===========

function arraysPlanetasCasas() {
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
    //obtencion de los valores ingresados en el HTML
    var casaMarte = parseInt(document.getElementById("marte").value);
    var casaVenus = parseInt(document.getElementById("venus").value);
    var casaSaturno = parseInt(document.getElementById("saturno").value);
    var casaMercurio = parseInt(document.getElementById("mercurio").value);
    var casaLuna = parseInt(document.getElementById("luna").value);
    var casaSol = parseInt(document.getElementById("sol").value);
    var casaUrano = parseInt(document.getElementById("urano").value);
    var casaNeptuno = parseInt(document.getElementById("neptuno").value);
    var casaPluton = parseInt(document.getElementById("pluton").value);

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
        case 5:
            planetasCasa5.push('marte');
            break;
        case 6:
            planetasCasa6.push('marte');
            break;
        case 7:
            planetasCasa7.push('marte');
            break;
        case 8:
            planetasCasa8.push('marte');
            break;
        case 9:
            planetasCasa9.push('marte');
            break;
        case 10:
            planetasCasa10.push('marte');
            break;
        case 11:
            planetasCasa11.push('marte');
            break;
        case 12:
            planetasCasa12.push('marte');
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
        case 5:
            planetasCasa5.push('venus');
            break;
        case 6:
            planetasCasa6.push('venus');
            break;
        case 7:
            planetasCasa7.push('venus');
            break;
        case 8:
            planetasCasa8.push('venus');
            break;
        case 9:
            planetasCasa9.push('venus');
            break;
        case 10:
            planetasCasa10.push('venus');
            break;
        case 11:
            planetasCasa11.push('venus');
            break;
        case 12:
            planetasCasa12.push('venus');
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
        case 5:
            planetasCasa5.push('saturno');
            break;
        case 6:
            planetasCasa6.push('saturno');
            break;
        case 7:
            planetasCasa7.push('saturno');
            break;
        case 8:
            planetasCasa8.push('saturno');
            break;
        case 9:
            planetasCasa9.push('saturno');
            break;
        case 10:
            planetasCasa10.push('saturno');
            break;
        case 11:
            planetasCasa11.push('saturno');
            break;
        case 12:
            planetasCasa12.push('saturno');
            break;
    }


    switch (casaMercurio) {
        case 1:
            planetasCasa1.push('mercurio');
            break;
        case 2:
            planetasCasa2.push('mercurio');
            break;
        case 3:
            planetasCasa3.push('mercurio');
            break;
        case 4:
            planetasCasa4.push('mercurio');
            break;
        case 5:
            planetasCasa5.push('mercurio');
            break;
        case 6:
            planetasCasa6.push('mercurio');
            break;
        case 7:
            planetasCasa7.push('mercurio');
            break;
        case 8:
            planetasCasa8.push('mercurio');
            break;
        case 9:
            planetasCasa9.push('mercurio');
            break;
        case 10:
            planetasCasa10.push('mercurio');
            break;
        case 11:
            planetasCasa11.push('mercurio');
            break;
        case 12:
            planetasCasa12.push('mercurio');
            break;
    }

    switch (casaLuna) {
        case 1:
            planetasCasa1.push('luna');
            break;
        case 2:
            planetasCasa2.push('luna');
            break;
        case 3:
            planetasCasa3.push('luna');
            break;
        case 4:
            planetasCasa4.push('luna');
            break;
        case 5:
            planetasCasa5.push('luna');
            break;
        case 6:
            planetasCasa6.push('luna');
            break;
        case 7:
            planetasCasa7.push('luna');
            break;
        case 8:
            planetasCasa8.push('luna');
            break;
        case 9:
            planetasCasa9.push('luna');
            break;
        case 10:
            planetasCasa10.push('luna');
            break;
        case 11:
            planetasCasa11.push('luna');
            break;
        case 12:
            planetasCasa12.push('luna');
            break;
    }

    switch (casaSol) {
        case 1:
            planetasCasa1.push('sol');
            break;
        case 2:
            planetasCasa2.push('sol');
            break;
        case 3:
            planetasCasa3.push('sol');
            break;
        case 4:
            planetasCasa4.push('sol');
            break;
        case 5:
            planetasCasa5.push('sol');
            break;
        case 6:
            planetasCasa6.push('sol');
            break;
        case 7:
            planetasCasa7.push('sol');
            break;
        case 8:
            planetasCasa8.push('sol');
            break;
        case 9:
            planetasCasa9.push('sol');
            break;
        case 10:
            planetasCasa10.push('sol');
            break;
        case 11:
            planetasCasa11.push('sol');
            break;
        case 12:
            planetasCasa12.push('sol');
            break;
    }

    switch (casaUrano) {
        case 1:
            planetasCasa1.push('urano');
            break;
        case 2:
            planetasCasa2.push('urano');
            break;
        case 3:
            planetasCasa3.push('urano');
            break;
        case 4:
            planetasCasa4.push('urano');
            break;
        case 5:
            planetasCasa5.push('urano');
            break;
        case 6:
            planetasCasa6.push('urano');
            break;
        case 7:
            planetasCasa7.push('urano');
            break;
        case 8:
            planetasCasa8.push('urano');
            break;
        case 9:
            planetasCasa9.push('urano');
            break;
        case 10:
            planetasCasa10.push('urano');
            break;
        case 11:
            planetasCasa11.push('urano');
            break;
        case 12:
            planetasCasa12.push('urano');
            break;
    }

    switch (casaNeptuno) {
        case 1:
            planetasCasa1.push('neptuno');
            break;
        case 2:
            planetasCasa2.push('neptuno');
            break;
        case 3:
            planetasCasa3.push('neptuno');
            break;
        case 4:
            planetasCasa4.push('neptuno');
            break;
        case 5:
            planetasCasa5.push('neptuno');
            break;
        case 6:
            planetasCasa6.push('neptuno');
            break;
        case 7:
            planetasCasa7.push('neptuno');
            break;
        case 8:
            planetasCasa8.push('neptuno');
            break;
        case 9:
            planetasCasa9.push('neptuno');
            break;
        case 10:
            planetasCasa10.push('neptuno');
            break;
        case 11:
            planetasCasa11.push('neptuno');
            break;
        case 12:
            planetasCasa12.push('neptuno');
            break;
    }

    switch (casaPluton) {
        case 1:
            planetasCasa1.push('pluton');
            break;
        case 2:
            planetasCasa2.push('pluton');
            break;
        case 3:
            planetasCasa3.push('pluton');
            break;
        case 4:
            planetasCasa4.push('pluton');
            break;
        case 5:
            planetasCasa5.push('pluton');
            break;
        case 6:
            planetasCasa6.push('pluton');
            break;
        case 7:
            planetasCasa7.push('pluton');
            break;
        case 8:
            planetasCasa8.push('pluton');
            break;
        case 9:
            planetasCasa9.push('pluton');
            break;
        case 10:
            planetasCasa10.push('pluton');
            break;
        case 11:
            planetasCasa11.push('pluton');
            break;
        case 12:
            planetasCasa12.push('pluton');
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
    var arraysPlanetasCasasLocalCasa5 = arraysPlanetasCasasLocal[4];
    var arraysPlanetasCasasLocalCasa6 = arraysPlanetasCasasLocal[5];
    var arraysPlanetasCasasLocalCasa7 = arraysPlanetasCasasLocal[6];
    var arraysPlanetasCasasLocalCasa8 = arraysPlanetasCasasLocal[7];
    var arraysPlanetasCasasLocalCasa9 = arraysPlanetasCasasLocal[8];
    var arraysPlanetasCasasLocalCasa10 = arraysPlanetasCasasLocal[9];
    var arraysPlanetasCasasLocalCasa11 = arraysPlanetasCasasLocal[10];
    var arraysPlanetasCasasLocalCasa12 = arraysPlanetasCasasLocal[11];
    var arrayConjunciones = [];

    //============la propiedad include verificara cada planeta esta en Casa 1 y proseguira acorde=======
    if (arraysPlanetasCasasLocalCasa1.includes('marte')) {
        if (arraysPlanetasCasasLocalCasa1.includes('marte') && arraysPlanetasCasasLocalCasa1.includes('venus')) {
            // console.log('Hay una conjuncion de Marte y Venus en casa 1.');
            arrayConjunciones.push('MV1');
        }
        if (arraysPlanetasCasasLocalCasa1.includes('marte') && arraysPlanetasCasasLocalCasa1.includes('saturno')) {
            // console.log('Hay una conjuncion de Marte y Saturno en casa 1. ');
            arrayConjunciones.push('MS1');
        }
        if (arraysPlanetasCasasLocalCasa1.includes('marte') && arraysPlanetasCasasLocalCasa1.includes('mercurio')) {
            // console.log('Hay una conjuncion de Marte y Mercurio en casa 1. ');
            arrayConjunciones.push('MMe1');
        }
        if (arraysPlanetasCasasLocalCasa1.includes('marte') && arraysPlanetasCasasLocalCasa1.includes('luna')) {
            // console.log('Hay una conjuncion de Marte y Luna en casa 1. ');
            arrayConjunciones.push('ML1');
        }
        if (arraysPlanetasCasasLocalCasa1.includes('marte') && arraysPlanetasCasasLocalCasa1.includes('sol')) {
            // console.log('Hay una conjuncion de Marte y Sol en casa 1. ');
            arrayConjunciones.push('MSo1');
        }
        if (arraysPlanetasCasasLocalCasa1.includes('marte') && arraysPlanetasCasasLocalCasa1.includes('urano')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 1. ');
            arrayConjunciones.push('MU1');
        }
        if (arraysPlanetasCasasLocalCasa1.includes('marte') && arraysPlanetasCasasLocalCasa1.includes('neptuno')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 1. ');
            arrayConjunciones.push('MN1');
        }
        if (arraysPlanetasCasasLocalCasa1.includes('marte') && arraysPlanetasCasasLocalCasa1.includes('pluton')) {
            // console.log('Hay una conjuncion de Marte y Pluton en casa 1. ');
            arrayConjunciones.push('MP1');
        }

        if (arraysPlanetasCasasLocalCasa1.length == 1)
            console.log('Marte esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa1.includes('venus')) {
        if (arraysPlanetasCasasLocalCasa1.includes('venus') && arraysPlanetasCasasLocalCasa1.includes('saturno')) {
            // console.log('Hay una conjuncion de Venus y Saturno en casa 1.');
            arrayConjunciones.push('VS1');
        }
        if (arraysPlanetasCasasLocalCasa1.includes('venus') && arraysPlanetasCasasLocalCasa1.includes('mercurio')) {
            // console.log('Hay una conjuncion de Venus y Mercurio en casa 1.');
            arrayConjunciones.push('VMe1');
        }
        if (arraysPlanetasCasasLocalCasa1.includes('venus') && arraysPlanetasCasasLocalCasa1.includes('luna')) {
            // console.log('Hay una conjuncion de Venus y Luna en casa 1.');
            arrayConjunciones.push('VL1');
        }
        if (arraysPlanetasCasasLocalCasa1.includes('venus') && arraysPlanetasCasasLocalCasa1.includes('sol')) {
            // console.log('Hay una conjuncion de Venus y Sol en casa 1.');
            arrayConjunciones.push('VSo1');
        }
        if (arraysPlanetasCasasLocalCasa1.includes('venus') && arraysPlanetasCasasLocalCasa1.includes('urano')) {
            // console.log('Hay una conjuncion de Venus y Urano en casa 1.');
            arrayConjunciones.push('VU1');
        }
        if (arraysPlanetasCasasLocalCasa1.includes('venus') && arraysPlanetasCasasLocalCasa1.includes('neptuno')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 1.');
            arrayConjunciones.push('VN1');
        }
        if (arraysPlanetasCasasLocalCasa1.includes('venus') && arraysPlanetasCasasLocalCasa1.includes('pluton')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 1.');
            arrayConjunciones.push('VP1');
        }
        if (arraysPlanetasCasasLocalCasa1.length == 1)
            console.log('Venus esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa1.includes('saturno')) {
        if (arraysPlanetasCasasLocalCasa1.includes('saturno') && arraysPlanetasCasasLocalCasa1.includes('mercurio')) {
            // console.log('Hay una conjuncion de Saturno y Mercurio en casa 1.');
            arrayConjunciones.push('SMe1');
        }

        if (arraysPlanetasCasasLocalCasa1.includes('saturno') && arraysPlanetasCasasLocalCasa1.includes('luna')) {
            // console.log('Hay una conjuncion de Saturno y Luna en casa 1.');
            arrayConjunciones.push('SL1');
        }

        if (arraysPlanetasCasasLocalCasa1.includes('saturno') && arraysPlanetasCasasLocalCasa1.includes('sol')) {
            // console.log('Hay una conjuncion de Saturno y Sol en casa 1.');
            arrayConjunciones.push('SSo1');
        }

        if (arraysPlanetasCasasLocalCasa1.includes('saturno') && arraysPlanetasCasasLocalCasa1.includes('urano')) {
            // console.log('Hay una conjuncion de Saturno y Urano en casa 1.');
            arrayConjunciones.push('SU1');
        }

        if (arraysPlanetasCasasLocalCasa1.includes('saturno') && arraysPlanetasCasasLocalCasa1.includes('neptuno')) {
            // console.log('Hay una conjuncion de Saturno y Neptuno en casa 1.');
            arrayConjunciones.push('SN1');
        }
        if (arraysPlanetasCasasLocalCasa1.includes('saturno') && arraysPlanetasCasasLocalCasa1.includes('pluton')) {
            // console.log('Hay una conjuncion de Saturno y Pluton en casa 1.');
            arrayConjunciones.push('SP1');
        }

        if (arraysPlanetasCasasLocalCasa1.length == 1) {
            console.log('Saturno esta solo en esta casa (1). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa1.includes('mercurio')) {
        if (arraysPlanetasCasasLocalCasa1.includes('mercurio') && arraysPlanetasCasasLocalCasa1.includes('luna')) {
            // console.log('Hay una conjuncion de Mercurio y Luna en casa 1.');
            arrayConjunciones.push('MeL1');
        }

        if (arraysPlanetasCasasLocalCasa1.includes('mercurio') && arraysPlanetasCasasLocalCasa1.includes('sol')) {
            // console.log('Hay una conjuncion de Mercurio y Sol en casa 1.');
            arrayConjunciones.push('MeSo1');
        }

        if (arraysPlanetasCasasLocalCasa1.includes('mercurio') && arraysPlanetasCasasLocalCasa1.includes('urano')) {
            // console.log('Hay una conjuncion de Mercurio y Urano en casa 1.');
            arrayConjunciones.push('MeU1');
        }

        if (arraysPlanetasCasasLocalCasa1.includes('mercurio') && arraysPlanetasCasasLocalCasa1.includes('neptuno')) {
            // console.log('Hay una conjuncion de Mercurio y Neptuno en casa 1.');
            arrayConjunciones.push('MeN1');
        }

        if (arraysPlanetasCasasLocalCasa1.includes('mercurio') && arraysPlanetasCasasLocalCasa1.includes('pluton')) {
            // console.log('Hay una conjuncion de Mercurio y Pluton en casa 1.');
            arrayConjunciones.push('MeP1');
        }

        if (arraysPlanetasCasasLocalCasa1.length == 1) {
            console.log('Mercurio esta solo en esta casa (1). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa1.includes('luna')) {
        if (arraysPlanetasCasasLocalCasa1.includes('luna') && arraysPlanetasCasasLocalCasa1.includes('sol')) {
            // console.log('Hay una conjuncion de Luna y Sol en casa 1.');
            arrayConjunciones.push('LSo1');
        }

        if (arraysPlanetasCasasLocalCasa1.includes('luna') && arraysPlanetasCasasLocalCasa1.includes('urano')) {
            // console.log('Hay una conjuncion de Luna y Urano en casa 1.');
            arrayConjunciones.push('LU1');
        }

        if (arraysPlanetasCasasLocalCasa1.includes('luna') && arraysPlanetasCasasLocalCasa1.includes('neptuno')) {
            // console.log('Hay una conjuncion de Luna y Neptuno en casa 1.');
            arrayConjunciones.push('LN1');
        }

        if (arraysPlanetasCasasLocalCasa1.includes('luna') && arraysPlanetasCasasLocalCasa1.includes('pluton')) {
            // console.log('Hay una conjuncion de Luna y Pluton oen casa 1.');
            arrayConjunciones.push('LP1');
        }

        if (arraysPlanetasCasasLocalCasa1.length == 1) {
            console.log('La Luna esta sola en esta casa (1). No hay conjuncion ');
        }
    }


    if (arraysPlanetasCasasLocalCasa1.includes('sol')) {
        if (arraysPlanetasCasasLocalCasa1.includes('sol') && arraysPlanetasCasasLocalCasa1.includes('urano')) {
            // console.log('Hay una conjuncion de el Sol y Urano en casa 1.');
            arrayConjunciones.push('SoU1');
        }

        if (arraysPlanetasCasasLocalCasa1.includes('sol') && arraysPlanetasCasasLocalCasa1.includes('neptuno')) {
            // console.log('Hay una conjuncion de el Sol y Neptuno en casa 1.');
            arrayConjunciones.push('SoN1');
        }

        if (arraysPlanetasCasasLocalCasa1.includes('sol') && arraysPlanetasCasasLocalCasa1.includes('pluton')) {
            // console.log('Hay una conjuncion de el Sol y Pluton en casa 1.');
            arrayConjunciones.push('SoP1');
        }

        if (arraysPlanetasCasasLocalCasa1.length == 1) {
            console.log('El Sol esta solo en esta casa (1). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa1.includes('urano')) {
        if (arraysPlanetasCasasLocalCasa1.includes('urano') && arraysPlanetasCasasLocalCasa1.includes('neptuno')) {
            // console.log('Hay una conjuncion de Urano y Neptuno en casa 1.');
            arrayConjunciones.push('UN1');
        }

        if (arraysPlanetasCasasLocalCasa1.includes('urano') && arraysPlanetasCasasLocalCasa1.includes('pluton')) {
            // console.log('Hay una conjuncion de Urano y Pluton en casa 1.');
            arrayConjunciones.push('UP1');
        }

        if (arraysPlanetasCasasLocalCasa1.length == 1) {
            console.log('Urano esta solo en esta casa (1). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa1.includes('neptuno')) {
        if (arraysPlanetasCasasLocalCasa1.includes('neptuno') && arraysPlanetasCasasLocalCasa1.includes('pluton')) {
            // console.log('Hay una conjuncion de Neptuno y Pluton en casa 1.');
            arrayConjunciones.push('NP1');
        }

        if (arraysPlanetasCasasLocalCasa1.length == 1) {
            console.log('Neptuno esta solo en esta casa (1). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa1.includes('pluton')) {

        if (arraysPlanetasCasasLocalCasa1.length == 1) {
            console.log('Pluton esta solo en esta casa (1). No hay conjuncion ');
        }
    }

    //========la propiedad include verificara cada planeta esta en Casa 2 y proseguira acorde======

    if (arraysPlanetasCasasLocalCasa2.includes('marte')) {
        if (arraysPlanetasCasasLocalCasa2.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('venus')) {
            // console.log('Hay una conjuncion de Marte y Venus en casa 2.');
            arrayConjunciones.push('MV2');
        }
        if (arraysPlanetasCasasLocalCasa2.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('saturno')) {
            // console.log('Hay una conjuncion de Marte y Saturno en casa 2. ');
            arrayConjunciones.push('MS2');
        }
        if (arraysPlanetasCasasLocalCasa2.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('mercurio')) {
            // console.log('Hay una conjuncion de Marte y Mercurio en casa 2. ');
            arrayConjunciones.push('MMe2');
        }
        if (arraysPlanetasCasasLocalCasa2.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('luna')) {
            // console.log('Hay una conjuncion de Marte y Luna en casa 2. ');
            arrayConjunciones.push('ML2');
        }
        if (arraysPlanetasCasasLocalCasa2.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('sol')) {
            // console.log('Hay una conjuncion de Marte y Sol en casa 2. ');
            arrayConjunciones.push('MSo2');
        }
        if (arraysPlanetasCasasLocalCasa2.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('urano')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 2. ');
            arrayConjunciones.push('MU2');
        }
        if (arraysPlanetasCasasLocalCasa2.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('neptuno')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 2. ');
            arrayConjunciones.push('MN2');
        }
        if (arraysPlanetasCasasLocalCasa2.includes('marte') && arraysPlanetasCasasLocalCasa2.includes('pluton')) {
            // console.log('Hay una conjuncion de Marte y Pluton en casa 2. ');
            arrayConjunciones.push('MP2');
        }

        if (arraysPlanetasCasasLocalCasa2.length == 1)
            console.log('Marte esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa2.includes('venus')) {
        if (arraysPlanetasCasasLocalCasa2.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('saturno')) {
            // console.log('Hay una conjuncion de Venus y Saturno en casa 2.');
            arrayConjunciones.push('VS2');
        }
        if (arraysPlanetasCasasLocalCasa2.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('mercurio')) {
            // console.log('Hay una conjuncion de Venus y Mercurio en casa 2.');
            arrayConjunciones.push('VMe2');
        }
        if (arraysPlanetasCasasLocalCasa2.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('luna')) {
            // console.log('Hay una conjuncion de Venus y Luna en casa 2.');
            arrayConjunciones.push('VL2');
        }
        if (arraysPlanetasCasasLocalCasa2.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('sol')) {
            // console.log('Hay una conjuncion de Venus y Sol en casa 2.');
            arrayConjunciones.push('VSo2');
        }
        if (arraysPlanetasCasasLocalCasa2.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('urano')) {
            // console.log('Hay una conjuncion de Venus y Urano en casa 2.');
            arrayConjunciones.push('VU2');
        }
        if (arraysPlanetasCasasLocalCasa2.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('neptuno')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 2.');
            arrayConjunciones.push('VN2');
        }
        if (arraysPlanetasCasasLocalCasa2.includes('venus') && arraysPlanetasCasasLocalCasa2.includes('pluton')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 2.');
            arrayConjunciones.push('VP2');
        }
        if (arraysPlanetasCasasLocalCasa2.length == 1)
            console.log('Venus esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa2.includes('saturno')) {
        if (arraysPlanetasCasasLocalCasa2.includes('saturno') && arraysPlanetasCasasLocalCasa2.includes('mercurio')) {
            // console.log('Hay una conjuncion de Saturno y Mercurio en casa 2.');
            arrayConjunciones.push('SMe2');
        }

        if (arraysPlanetasCasasLocalCasa2.includes('saturno') && arraysPlanetasCasasLocalCasa2.includes('luna')) {
            // console.log('Hay una conjuncion de Saturno y Luna en casa 2.');
            arrayConjunciones.push('SL2');
        }

        if (arraysPlanetasCasasLocalCasa2.includes('saturno') && arraysPlanetasCasasLocalCasa2.includes('sol')) {
            // console.log('Hay una conjuncion de Saturno y Sol en casa 2.');
            arrayConjunciones.push('SSo2');
        }

        if (arraysPlanetasCasasLocalCasa2.includes('saturno') && arraysPlanetasCasasLocalCasa2.includes('urano')) {
            // console.log('Hay una conjuncion de Saturno y Urano en casa 2.');
            arrayConjunciones.push('SU2');
        }

        if (arraysPlanetasCasasLocalCasa2.includes('saturno') && arraysPlanetasCasasLocalCasa2.includes('neptuno')) {
            // console.log('Hay una conjuncion de Saturno y Neptuno en casa 2.');
            arrayConjunciones.push('SN2');
        }
        if (arraysPlanetasCasasLocalCasa2.includes('saturno') && arraysPlanetasCasasLocalCasa2.includes('pluton')) {
            // console.log('Hay una conjuncion de Saturno y Pluton en casa 2.');
            arrayConjunciones.push('SP2');
        }

        if (arraysPlanetasCasasLocalCasa2.length == 1) {
            console.log('Saturno esta solo en esta casa (2). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa2.includes('mercurio')) {
        if (arraysPlanetasCasasLocalCasa2.includes('mercurio') && arraysPlanetasCasasLocalCasa2.includes('luna')) {
            // console.log('Hay una conjuncion de Mercurio y Luna en casa 2.');
            arrayConjunciones.push('MeL2');
        }

        if (arraysPlanetasCasasLocalCasa2.includes('mercurio') && arraysPlanetasCasasLocalCasa2.includes('sol')) {
            // console.log('Hay una conjuncion de Mercurio y Sol en casa 2.');
            arrayConjunciones.push('MeSo2');
        }

        if (arraysPlanetasCasasLocalCasa2.includes('mercurio') && arraysPlanetasCasasLocalCasa2.includes('urano')) {
            // console.log('Hay una conjuncion de Mercurio y Urano en casa 2.');
            arrayConjunciones.push('MeU2');
        }

        if (arraysPlanetasCasasLocalCasa2.includes('mercurio') && arraysPlanetasCasasLocalCasa2.includes('neptuno')) {
            // console.log('Hay una conjuncion de Mercurio y Neptuno en casa 2.');
            arrayConjunciones.push('MeN2');
        }

        if (arraysPlanetasCasasLocalCasa2.includes('mercurio') && arraysPlanetasCasasLocalCasa2.includes('pluton')) {
            // console.log('Hay una conjuncion de Mercurio y Pluton en casa 2.');
            arrayConjunciones.push('MeP2');
        }

        if (arraysPlanetasCasasLocalCasa2.length == 1) {
            console.log('Mercurio esta solo en esta casa (2). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa2.includes('luna')) {
        if (arraysPlanetasCasasLocalCasa2.includes('luna') && arraysPlanetasCasasLocalCasa2.includes('sol')) {
            // console.log('Hay una conjuncion de Luna y Sol en casa 2.');
            arrayConjunciones.push('LSo2');
        }

        if (arraysPlanetasCasasLocalCasa2.includes('luna') && arraysPlanetasCasasLocalCasa2.includes('urano')) {
            // console.log('Hay una conjuncion de Luna y Urano en casa 2.');
            arrayConjunciones.push('LU2');
        }

        if (arraysPlanetasCasasLocalCasa2.includes('luna') && arraysPlanetasCasasLocalCasa2.includes('neptuno')) {
            // console.log('Hay una conjuncion de Luna y Neptuno en casa 2.');
            arrayConjunciones.push('LN2');
        }

        if (arraysPlanetasCasasLocalCasa2.includes('luna') && arraysPlanetasCasasLocalCasa2.includes('pluton')) {
            // console.log('Hay una conjuncion de Luna y Pluton oen casa 2.');
            arrayConjunciones.push('LP2');
        }

        if (arraysPlanetasCasasLocalCasa2.length == 1) {
            console.log('La Luna esta sola en esta casa (2). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa2.includes('sol')) {
        if (arraysPlanetasCasasLocalCasa2.includes('sol') && arraysPlanetasCasasLocalCasa2.includes('urano')) {
            // console.log('Hay una conjuncion de el Sol y Urano en casa 2.');
            arrayConjunciones.push('SoU2');
        }

        if (arraysPlanetasCasasLocalCasa2.includes('sol') && arraysPlanetasCasasLocalCasa2.includes('neptuno')) {
            // console.log('Hay una conjuncion de el Sol y Neptuno en casa 2.');
            arrayConjunciones.push('SoN2');
        }

        if (arraysPlanetasCasasLocalCasa2.includes('sol') && arraysPlanetasCasasLocalCasa2.includes('pluton')) {
            // console.log('Hay una conjuncion de el Sol y Pluton en casa 2.');
            arrayConjunciones.push('SoP2');
        }

        if (arraysPlanetasCasasLocalCasa2.length == 1) {
            console.log('El Sol esta solo en esta casa (2). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa2.includes('urano')) {
        if (arraysPlanetasCasasLocalCasa2.includes('urano') && arraysPlanetasCasasLocalCasa2.includes('neptuno')) {
            // console.log('Hay una conjuncion de Urano y Neptuno en casa 2.');
            arrayConjunciones.push('UN2');
        }

        if (arraysPlanetasCasasLocalCasa2.includes('urano') && arraysPlanetasCasasLocalCasa2.includes('pluton')) {
            // console.log('Hay una conjuncion de Urano y Pluton en casa 2.');
            arrayConjunciones.push('UP2');
        }

        if (arraysPlanetasCasasLocalCasa2.length == 1) {
            console.log('Urano esta solo en esta casa (2). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa2.includes('neptuno')) {
        if (arraysPlanetasCasasLocalCasa2.includes('neptuno') && arraysPlanetasCasasLocalCasa2.includes('pluton')) {
            // console.log('Hay una conjuncion de Neptuno y Pluton en casa 2.');
            arrayConjunciones.push('NP2');
        }

        if (arraysPlanetasCasasLocalCasa2.length == 1) {
            console.log('Neptuno esta solo en esta casa (2). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa2.includes('pluton')) {

        if (arraysPlanetasCasasLocalCasa2.length == 1) {
            console.log('Pluton esta solo en esta casa (2). No hay conjuncion ');
        }
    }



    //============la propiedad include verificara cada planeta esta en Casa 3 y proseguira acorde========
    if (arraysPlanetasCasasLocalCasa3.includes('marte')) {
        if (arraysPlanetasCasasLocalCasa3.includes('marte') && arraysPlanetasCasasLocalCasa3.includes('venus')) {
            // console.log('Hay una conjuncion de Marte y Venus en casa 3.');
            arrayConjunciones.push('MV3');
        }
        if (arraysPlanetasCasasLocalCasa3.includes('marte') && arraysPlanetasCasasLocalCasa3.includes('saturno')) {
            // console.log('Hay una conjuncion de Marte y Saturno en casa 3. ');
            arrayConjunciones.push('MS3');
        }
        if (arraysPlanetasCasasLocalCasa3.includes('marte') && arraysPlanetasCasasLocalCasa3.includes('mercurio')) {
            // console.log('Hay una conjuncion de Marte y Mercurio en casa 3. ');
            arrayConjunciones.push('MMe3');
        }
        if (arraysPlanetasCasasLocalCasa3.includes('marte') && arraysPlanetasCasasLocalCasa3.includes('luna')) {
            // console.log('Hay una conjuncion de Marte y Luna en casa 3. ');
            arrayConjunciones.push('ML3');
        }
        if (arraysPlanetasCasasLocalCasa3.includes('marte') && arraysPlanetasCasasLocalCasa3.includes('sol')) {
            // console.log('Hay una conjuncion de Marte y Sol en casa 3. ');
            arrayConjunciones.push('MSo3');
        }
        if (arraysPlanetasCasasLocalCasa3.includes('marte') && arraysPlanetasCasasLocalCasa3.includes('urano')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 3. ');
            arrayConjunciones.push('MU3');
        }
        if (arraysPlanetasCasasLocalCasa3.includes('marte') && arraysPlanetasCasasLocalCasa3.includes('neptuno')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 3. ');
            arrayConjunciones.push('MN3');
        }
        if (arraysPlanetasCasasLocalCasa3.includes('marte') && arraysPlanetasCasasLocalCasa3.includes('pluton')) {
            // console.log('Hay una conjuncion de Marte y Pluton en casa 3. ');
            arrayConjunciones.push('MP3');
        }

        if (arraysPlanetasCasasLocalCasa3.length == 1)
            console.log('Marte esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa3.includes('venus')) {
        if (arraysPlanetasCasasLocalCasa3.includes('venus') && arraysPlanetasCasasLocalCasa3.includes('saturno')) {
            // console.log('Hay una conjuncion de Venus y Saturno en casa 3.');
            arrayConjunciones.push('VS3');
        }
        if (arraysPlanetasCasasLocalCasa3.includes('venus') && arraysPlanetasCasasLocalCasa3.includes('mercurio')) {
            // console.log('Hay una conjuncion de Venus y Mercurio en casa 3.');
            arrayConjunciones.push('VMe3');
        }
        if (arraysPlanetasCasasLocalCasa3.includes('venus') && arraysPlanetasCasasLocalCasa3.includes('luna')) {
            // console.log('Hay una conjuncion de Venus y Luna en casa 3.');
            arrayConjunciones.push('VL3');
        }
        if (arraysPlanetasCasasLocalCasa3.includes('venus') && arraysPlanetasCasasLocalCasa3.includes('sol')) {
            // console.log('Hay una conjuncion de Venus y Sol en casa 3.');
            arrayConjunciones.push('VSo3');
        }
        if (arraysPlanetasCasasLocalCasa3.includes('venus') && arraysPlanetasCasasLocalCasa3.includes('urano')) {
            // console.log('Hay una conjuncion de Venus y Urano en casa 3.');
            arrayConjunciones.push('VU3');
        }
        if (arraysPlanetasCasasLocalCasa3.includes('venus') && arraysPlanetasCasasLocalCasa3.includes('neptuno')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 3.');
            arrayConjunciones.push('VN3');
        }
        if (arraysPlanetasCasasLocalCasa3.includes('venus') && arraysPlanetasCasasLocalCasa3.includes('pluton')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 3.');
            arrayConjunciones.push('VP3');
        }
        if (arraysPlanetasCasasLocalCasa3.length == 1)
            console.log('Venus esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa3.includes('saturno')) {
        if (arraysPlanetasCasasLocalCasa3.includes('saturno') && arraysPlanetasCasasLocalCasa3.includes('mercurio')) {
            // console.log('Hay una conjuncion de Saturno y Mercurio en casa 3.');
            arrayConjunciones.push('SMe3');
        }

        if (arraysPlanetasCasasLocalCasa3.includes('saturno') && arraysPlanetasCasasLocalCasa3.includes('luna')) {
            // console.log('Hay una conjuncion de Saturno y Luna en casa 3.');
            arrayConjunciones.push('SL3');
        }

        if (arraysPlanetasCasasLocalCasa3.includes('saturno') && arraysPlanetasCasasLocalCasa3.includes('sol')) {
            // console.log('Hay una conjuncion de Saturno y Sol en casa 3.');
            arrayConjunciones.push('SSo3');
        }

        if (arraysPlanetasCasasLocalCasa3.includes('saturno') && arraysPlanetasCasasLocalCasa3.includes('urano')) {
            // console.log('Hay una conjuncion de Saturno y Urano en casa 3.');
            arrayConjunciones.push('SU3');
        }

        if (arraysPlanetasCasasLocalCasa3.includes('saturno') && arraysPlanetasCasasLocalCasa3.includes('neptuno')) {
            // console.log('Hay una conjuncion de Saturno y Neptuno en casa 3.');
            arrayConjunciones.push('SN3');
        }
        if (arraysPlanetasCasasLocalCasa3.includes('saturno') && arraysPlanetasCasasLocalCasa3.includes('pluton')) {
            // console.log('Hay una conjuncion de Saturno y Pluton en casa 3.');
            arrayConjunciones.push('SP3');
        }

        if (arraysPlanetasCasasLocalCasa3.length == 1) {
            console.log('Saturno esta solo en esta casa (3). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa3.includes('mercurio')) {
        if (arraysPlanetasCasasLocalCasa3.includes('mercurio') && arraysPlanetasCasasLocalCasa3.includes('luna')) {
            // console.log('Hay una conjuncion de Mercurio y Luna en casa 3.');
            arrayConjunciones.push('MeL3');
        }

        if (arraysPlanetasCasasLocalCasa3.includes('mercurio') && arraysPlanetasCasasLocalCasa3.includes('sol')) {
            // console.log('Hay una conjuncion de Mercurio y Sol en casa 3.');
            arrayConjunciones.push('MeSo3');
        }

        if (arraysPlanetasCasasLocalCasa3.includes('mercurio') && arraysPlanetasCasasLocalCasa3.includes('urano')) {
            // console.log('Hay una conjuncion de Mercurio y Urano en casa 3.');
            arrayConjunciones.push('MeU3');
        }

        if (arraysPlanetasCasasLocalCasa3.includes('mercurio') && arraysPlanetasCasasLocalCasa3.includes('neptuno')) {
            // console.log('Hay una conjuncion de Mercurio y Neptuno en casa 3.');
            arrayConjunciones.push('MeN3');
        }

        if (arraysPlanetasCasasLocalCasa3.includes('mercurio') && arraysPlanetasCasasLocalCasa3.includes('pluton')) {
            // console.log('Hay una conjuncion de Mercurio y Pluton en casa 3.');
            arrayConjunciones.push('MeP3');
        }

        if (arraysPlanetasCasasLocalCasa3.length == 1) {
            console.log('Mercurio esta solo en esta casa (3). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa3.includes('luna')) {
        if (arraysPlanetasCasasLocalCasa3.includes('luna') && arraysPlanetasCasasLocalCasa3.includes('sol')) {
            // console.log('Hay una conjuncion de Luna y Sol en casa 3.');
            arrayConjunciones.push('LSo3');
        }

        if (arraysPlanetasCasasLocalCasa3.includes('luna') && arraysPlanetasCasasLocalCasa3.includes('urano')) {
            // console.log('Hay una conjuncion de Luna y Urano en casa 3.');
            arrayConjunciones.push('LU3');
        }

        if (arraysPlanetasCasasLocalCasa3.includes('luna') && arraysPlanetasCasasLocalCasa3.includes('neptuno')) {
            // console.log('Hay una conjuncion de Luna y Neptuno en casa 3.');
            arrayConjunciones.push('LN3');
        }

        if (arraysPlanetasCasasLocalCasa3.includes('luna') && arraysPlanetasCasasLocalCasa3.includes('pluton')) {
            // console.log('Hay una conjuncion de Luna y Pluton oen casa 3.');
            arrayConjunciones.push('LP3');
        }

        if (arraysPlanetasCasasLocalCasa3.length == 1) {
            console.log('La Luna esta sola en esta casa (3). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa3.includes('sol')) {
        if (arraysPlanetasCasasLocalCasa3.includes('sol') && arraysPlanetasCasasLocalCasa3.includes('urano')) {
            // console.log('Hay una conjuncion de el Sol y Urano en casa 3.');
            arrayConjunciones.push('SoU3');
        }

        if (arraysPlanetasCasasLocalCasa3.includes('sol') && arraysPlanetasCasasLocalCasa3.includes('neptuno')) {
            // console.log('Hay una conjuncion de el Sol y Neptuno en casa 3.');
            arrayConjunciones.push('SoN3');
        }

        if (arraysPlanetasCasasLocalCasa3.includes('sol') && arraysPlanetasCasasLocalCasa3.includes('pluton')) {
            // console.log('Hay una conjuncion de el Sol y Pluton en casa 3.');
            arrayConjunciones.push('SoP3');
        }

        if (arraysPlanetasCasasLocalCasa3.length == 1) {
            console.log('El Sol esta solo en esta casa (3). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa3.includes('urano')) {
        if (arraysPlanetasCasasLocalCasa3.includes('urano') && arraysPlanetasCasasLocalCasa3.includes('neptuno')) {
            // console.log('Hay una conjuncion de Urano y Neptuno en casa 3.');
            arrayConjunciones.push('UN3');
        }

        if (arraysPlanetasCasasLocalCasa3.includes('urano') && arraysPlanetasCasasLocalCasa3.includes('pluton')) {
            // console.log('Hay una conjuncion de Urano y Pluton en casa 3.');
            arrayConjunciones.push('UP3');
        }

        if (arraysPlanetasCasasLocalCasa3.length == 1) {
            console.log('Urano esta solo en esta casa (3). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa3.includes('neptuno')) {
        if (arraysPlanetasCasasLocalCasa3.includes('neptuno') && arraysPlanetasCasasLocalCasa3.includes('pluton')) {
            // console.log('Hay una conjuncion de Neptuno y Pluton en casa 3.');
            arrayConjunciones.push('NP3');
        }

        if (arraysPlanetasCasasLocalCasa3.length == 1) {
            console.log('Neptuno esta solo en esta casa (3). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa3.includes('pluton')) {

        if (arraysPlanetasCasasLocalCasa3.length == 1) {
            console.log('Pluton esta solo en esta casa (3). No hay conjuncion ');
        }
    }

    //========la propiedad include verificara cada planeta esta en Casa 4 y proseguira acorde=======
    if (arraysPlanetasCasasLocalCasa4.includes('marte')) {
        if (arraysPlanetasCasasLocalCasa4.includes('marte') && arraysPlanetasCasasLocalCasa4.includes('venus')) {
            // console.log('Hay una conjuncion de Marte y Venus en casa 4.');
            arrayConjunciones.push('MV4');
        }
        if (arraysPlanetasCasasLocalCasa4.includes('marte') && arraysPlanetasCasasLocalCasa4.includes('saturno')) {
            // console.log('Hay una conjuncion de Marte y Saturno en casa 4. ');
            arrayConjunciones.push('MS4');
        }
        if (arraysPlanetasCasasLocalCasa4.includes('marte') && arraysPlanetasCasasLocalCasa4.includes('mercurio')) {
            // console.log('Hay una conjuncion de Marte y Mercurio en casa 4. ');
            arrayConjunciones.push('MMe4');
        }
        if (arraysPlanetasCasasLocalCasa4.includes('marte') && arraysPlanetasCasasLocalCasa4.includes('luna')) {
            // console.log('Hay una conjuncion de Marte y Luna en casa 4. ');
            arrayConjunciones.push('ML4');
        }
        if (arraysPlanetasCasasLocalCasa4.includes('marte') && arraysPlanetasCasasLocalCasa4.includes('sol')) {
            // console.log('Hay una conjuncion de Marte y Sol en casa 4. ');
            arrayConjunciones.push('MSo4');
        }
        if (arraysPlanetasCasasLocalCasa4.includes('marte') && arraysPlanetasCasasLocalCasa4.includes('urano')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 4. ');
            arrayConjunciones.push('MU4');
        }
        if (arraysPlanetasCasasLocalCasa4.includes('marte') && arraysPlanetasCasasLocalCasa4.includes('neptuno')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 4. ');
            arrayConjunciones.push('MN4');
        }
        if (arraysPlanetasCasasLocalCasa4.includes('marte') && arraysPlanetasCasasLocalCasa4.includes('pluton')) {
            // console.log('Hay una conjuncion de Marte y Pluton en casa 4. ');
            arrayConjunciones.push('MP4');
        }

        if (arraysPlanetasCasasLocalCasa4.length == 1)
            console.log('Marte esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa4.includes('venus')) {
        if (arraysPlanetasCasasLocalCasa4.includes('venus') && arraysPlanetasCasasLocalCasa4.includes('saturno')) {
            // console.log('Hay una conjuncion de Venus y Saturno en casa 4.');
            arrayConjunciones.push('VS4');
        }
        if (arraysPlanetasCasasLocalCasa4.includes('venus') && arraysPlanetasCasasLocalCasa4.includes('mercurio')) {
            // console.log('Hay una conjuncion de Venus y Mercurio en casa 4.');
            arrayConjunciones.push('VMe4');
        }
        if (arraysPlanetasCasasLocalCasa4.includes('venus') && arraysPlanetasCasasLocalCasa4.includes('luna')) {
            // console.log('Hay una conjuncion de Venus y Luna en casa 4.');
            arrayConjunciones.push('VL4');
        }
        if (arraysPlanetasCasasLocalCasa4.includes('venus') && arraysPlanetasCasasLocalCasa4.includes('sol')) {
            // console.log('Hay una conjuncion de Venus y Sol en casa 4.');
            arrayConjunciones.push('VSo4');
        }
        if (arraysPlanetasCasasLocalCasa4.includes('venus') && arraysPlanetasCasasLocalCasa4.includes('urano')) {
            // console.log('Hay una conjuncion de Venus y Urano en casa 4.');
            arrayConjunciones.push('VU4');
        }
        if (arraysPlanetasCasasLocalCasa4.includes('venus') && arraysPlanetasCasasLocalCasa4.includes('neptuno')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 4.');
            arrayConjunciones.push('VN4');
        }
        if (arraysPlanetasCasasLocalCasa4.includes('venus') && arraysPlanetasCasasLocalCasa4.includes('pluton')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 4.');
            arrayConjunciones.push('VP4');
        }
        if (arraysPlanetasCasasLocalCasa4.length == 1)
            console.log('Venus esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa4.includes('saturno')) {
        if (arraysPlanetasCasasLocalCasa4.includes('saturno') && arraysPlanetasCasasLocalCasa4.includes('mercurio')) {
            // console.log('Hay una conjuncion de Saturno y Mercurio en casa 4.');
            arrayConjunciones.push('SMe4');
        }

        if (arraysPlanetasCasasLocalCasa4.includes('saturno') && arraysPlanetasCasasLocalCasa4.includes('luna')) {
            // console.log('Hay una conjuncion de Saturno y Luna en casa 4.');
            arrayConjunciones.push('SL4');
        }

        if (arraysPlanetasCasasLocalCasa4.includes('saturno') && arraysPlanetasCasasLocalCasa4.includes('sol')) {
            // console.log('Hay una conjuncion de Saturno y Sol en casa 4.');
            arrayConjunciones.push('SSo4');
        }

        if (arraysPlanetasCasasLocalCasa4.includes('saturno') && arraysPlanetasCasasLocalCasa4.includes('urano')) {
            // console.log('Hay una conjuncion de Saturno y Urano en casa 4.');
            arrayConjunciones.push('SU4');
        }

        if (arraysPlanetasCasasLocalCasa4.includes('saturno') && arraysPlanetasCasasLocalCasa4.includes('neptuno')) {
            // console.log('Hay una conjuncion de Saturno y Neptuno en casa 4.');
            arrayConjunciones.push('SN4');
        }
        if (arraysPlanetasCasasLocalCasa4.includes('saturno') && arraysPlanetasCasasLocalCasa4.includes('pluton')) {
            // console.log('Hay una conjuncion de Saturno y Pluton en casa 4.');
            arrayConjunciones.push('SP4');
        }

        if (arraysPlanetasCasasLocalCasa4.length == 1) {
            console.log('Saturno esta solo en esta casa (4). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa4.includes('mercurio')) {
        if (arraysPlanetasCasasLocalCasa4.includes('mercurio') && arraysPlanetasCasasLocalCasa4.includes('luna')) {
            // console.log('Hay una conjuncion de Mercurio y Luna en casa 4.');
            arrayConjunciones.push('MeL4');
        }

        if (arraysPlanetasCasasLocalCasa4.includes('mercurio') && arraysPlanetasCasasLocalCasa4.includes('sol')) {
            // console.log('Hay una conjuncion de Mercurio y Sol en casa 4.');
            arrayConjunciones.push('MeSo4');
        }

        if (arraysPlanetasCasasLocalCasa4.includes('mercurio') && arraysPlanetasCasasLocalCasa4.includes('urano')) {
            // console.log('Hay una conjuncion de Mercurio y Urano en casa 4.');
            arrayConjunciones.push('MeU4');
        }

        if (arraysPlanetasCasasLocalCasa4.includes('mercurio') && arraysPlanetasCasasLocalCasa4.includes('neptuno')) {
            // console.log('Hay una conjuncion de Mercurio y Neptuno en casa 4.');
            arrayConjunciones.push('MeN4');
        }

        if (arraysPlanetasCasasLocalCasa4.includes('mercurio') && arraysPlanetasCasasLocalCasa4.includes('pluton')) {
            // console.log('Hay una conjuncion de Mercurio y Pluton en casa 4.');
            arrayConjunciones.push('MeP4');
        }

        if (arraysPlanetasCasasLocalCasa4.length == 1) {
            console.log('Mercurio esta solo en esta casa (4). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa4.includes('luna')) {
        if (arraysPlanetasCasasLocalCasa4.includes('luna') && arraysPlanetasCasasLocalCasa4.includes('sol')) {
            // console.log('Hay una conjuncion de Luna y Sol en casa 4.');
            arrayConjunciones.push('LSo4');
        }

        if (arraysPlanetasCasasLocalCasa4.includes('luna') && arraysPlanetasCasasLocalCasa4.includes('urano')) {
            // console.log('Hay una conjuncion de Luna y Urano en casa 4.');
            arrayConjunciones.push('LU4');
        }

        if (arraysPlanetasCasasLocalCasa4.includes('luna') && arraysPlanetasCasasLocalCasa4.includes('neptuno')) {
            // console.log('Hay una conjuncion de Luna y Neptuno en casa 4.');
            arrayConjunciones.push('LN4');
        }

        if (arraysPlanetasCasasLocalCasa4.includes('luna') && arraysPlanetasCasasLocalCasa4.includes('pluton')) {
            // console.log('Hay una conjuncion de Luna y Pluton oen casa 4.');
            arrayConjunciones.push('LP4');
        }

        if (arraysPlanetasCasasLocalCasa4.length == 1) {
            console.log('La Luna esta sola en esta casa (4). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa4.includes('sol')) {
        if (arraysPlanetasCasasLocalCasa4.includes('sol') && arraysPlanetasCasasLocalCasa4.includes('urano')) {
            // console.log('Hay una conjuncion de el Sol y Urano en casa 4.');
            arrayConjunciones.push('SoU4');
        }

        if (arraysPlanetasCasasLocalCasa4.includes('sol') && arraysPlanetasCasasLocalCasa4.includes('neptuno')) {
            // console.log('Hay una conjuncion de el Sol y Neptuno en casa 4.');
            arrayConjunciones.push('SoN4');
        }

        if (arraysPlanetasCasasLocalCasa4.includes('sol') && arraysPlanetasCasasLocalCasa4.includes('pluton')) {
            // console.log('Hay una conjuncion de el Sol y Pluton en casa 4.');
            arrayConjunciones.push('SoP4');
        }

        if (arraysPlanetasCasasLocalCasa4.length == 1) {
            console.log('El Sol esta solo en esta casa (4). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa4.includes('urano')) {
        if (arraysPlanetasCasasLocalCasa4.includes('urano') && arraysPlanetasCasasLocalCasa4.includes('neptuno')) {
            // console.log('Hay una conjuncion de Urano y Neptuno en casa 4.');
            arrayConjunciones.push('UN4');
        }

        if (arraysPlanetasCasasLocalCasa4.includes('urano') && arraysPlanetasCasasLocalCasa4.includes('pluton')) {
            // console.log('Hay una conjuncion de Urano y Pluton en casa 4.');
            arrayConjunciones.push('UP4');
        }

        if (arraysPlanetasCasasLocalCasa4.length == 1) {
            console.log('Urano esta solo en esta casa (4). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa4.includes('neptuno')) {
        if (arraysPlanetasCasasLocalCasa4.includes('neptuno') && arraysPlanetasCasasLocalCasa4.includes('pluton')) {
            // console.log('Hay una conjuncion de Neptuno y Pluton en casa 4.');
            arrayConjunciones.push('NP4');
        }

        if (arraysPlanetasCasasLocalCasa4.length == 1) {
            console.log('Neptuno esta solo en esta casa (4). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa4.includes('pluton')) {

        if (arraysPlanetasCasasLocalCasa4.length == 1) {
            console.log('Pluton esta solo en esta casa (4). No hay conjuncion ');
        }
    }

    //========la propiedad include verificara cada planeta esta en Casa 5 y proseguira acorde=======
    if (arraysPlanetasCasasLocalCasa5.includes('marte')) {
        if (arraysPlanetasCasasLocalCasa5.includes('marte') && arraysPlanetasCasasLocalCasa5.includes('venus')) {
            // console.log('Hay una conjuncion de Marte y Venus en casa 5.');
            arrayConjunciones.push('MV5');
        }
        if (arraysPlanetasCasasLocalCasa5.includes('marte') && arraysPlanetasCasasLocalCasa5.includes('saturno')) {
            // console.log('Hay una conjuncion de Marte y Saturno en casa 5. ');
            arrayConjunciones.push('MS5');
        }
        if (arraysPlanetasCasasLocalCasa5.includes('marte') && arraysPlanetasCasasLocalCasa5.includes('mercurio')) {
            // console.log('Hay una conjuncion de Marte y Mercurio en casa 5. ');
            arrayConjunciones.push('MMe5');
        }
        if (arraysPlanetasCasasLocalCasa5.includes('marte') && arraysPlanetasCasasLocalCasa5.includes('luna')) {
            // console.log('Hay una conjuncion de Marte y Luna en casa 5. ');
            arrayConjunciones.push('ML5');
        }
        if (arraysPlanetasCasasLocalCasa5.includes('marte') && arraysPlanetasCasasLocalCasa5.includes('sol')) {
            // console.log('Hay una conjuncion de Marte y Sol en casa 5. ');
            arrayConjunciones.push('MSo5');
        }
        if (arraysPlanetasCasasLocalCasa5.includes('marte') && arraysPlanetasCasasLocalCasa5.includes('urano')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 5. ');
            arrayConjunciones.push('MU5');
        }
        if (arraysPlanetasCasasLocalCasa5.includes('marte') && arraysPlanetasCasasLocalCasa5.includes('neptuno')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 5. ');
            arrayConjunciones.push('MN5');
        }
        if (arraysPlanetasCasasLocalCasa5.includes('marte') && arraysPlanetasCasasLocalCasa5.includes('pluton')) {
            // console.log('Hay una conjuncion de Marte y Pluton en casa 5. ');
            arrayConjunciones.push('MP5');
        }

        if (arraysPlanetasCasasLocalCasa5.length == 1)
            console.log('Marte esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa5.includes('venus')) {
        if (arraysPlanetasCasasLocalCasa5.includes('venus') && arraysPlanetasCasasLocalCasa5.includes('saturno')) {
            // console.log('Hay una conjuncion de Venus y Saturno en casa 5.');
            arrayConjunciones.push('VS5');
        }
        if (arraysPlanetasCasasLocalCasa5.includes('venus') && arraysPlanetasCasasLocalCasa5.includes('mercurio')) {
            // console.log('Hay una conjuncion de Venus y Mercurio en casa 5.');
            arrayConjunciones.push('VMe5');
        }
        if (arraysPlanetasCasasLocalCasa5.includes('venus') && arraysPlanetasCasasLocalCasa5.includes('luna')) {
            // console.log('Hay una conjuncion de Venus y Luna en casa 5.');
            arrayConjunciones.push('VL5');
        }
        if (arraysPlanetasCasasLocalCasa5.includes('venus') && arraysPlanetasCasasLocalCasa5.includes('sol')) {
            // console.log('Hay una conjuncion de Venus y Sol en casa 5.');
            arrayConjunciones.push('VSo5');
        }
        if (arraysPlanetasCasasLocalCasa5.includes('venus') && arraysPlanetasCasasLocalCasa5.includes('urano')) {
            // console.log('Hay una conjuncion de Venus y Urano en casa 5.');
            arrayConjunciones.push('VU5');
        }
        if (arraysPlanetasCasasLocalCasa5.includes('venus') && arraysPlanetasCasasLocalCasa5.includes('neptuno')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 5.');
            arrayConjunciones.push('VN5');
        }
        if (arraysPlanetasCasasLocalCasa5.includes('venus') && arraysPlanetasCasasLocalCasa5.includes('pluton')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 5.');
            arrayConjunciones.push('VP5');
        }
        if (arraysPlanetasCasasLocalCasa5.length == 1)
            console.log('Venus esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa5.includes('saturno')) {
        if (arraysPlanetasCasasLocalCasa5.includes('saturno') && arraysPlanetasCasasLocalCasa5.includes('mercurio')) {
            // console.log('Hay una conjuncion de Saturno y Mercurio en casa 5.');
            arrayConjunciones.push('SMe5');
        }

        if (arraysPlanetasCasasLocalCasa5.includes('saturno') && arraysPlanetasCasasLocalCasa5.includes('luna')) {
            // console.log('Hay una conjuncion de Saturno y Luna en casa 5.');
            arrayConjunciones.push('SL5');
        }

        if (arraysPlanetasCasasLocalCasa5.includes('saturno') && arraysPlanetasCasasLocalCasa5.includes('sol')) {
            // console.log('Hay una conjuncion de Saturno y Sol en casa 5.');
            arrayConjunciones.push('SSo5');
        }

        if (arraysPlanetasCasasLocalCasa5.includes('saturno') && arraysPlanetasCasasLocalCasa5.includes('urano')) {
            // console.log('Hay una conjuncion de Saturno y Urano en casa 5.');
            arrayConjunciones.push('SU5');
        }

        if (arraysPlanetasCasasLocalCasa5.includes('saturno') && arraysPlanetasCasasLocalCasa5.includes('neptuno')) {
            // console.log('Hay una conjuncion de Saturno y Neptuno en casa 5.');
            arrayConjunciones.push('SN5');
        }
        if (arraysPlanetasCasasLocalCasa5.includes('saturno') && arraysPlanetasCasasLocalCasa5.includes('pluton')) {
            // console.log('Hay una conjuncion de Saturno y Pluton en casa 5.');
            arrayConjunciones.push('SP5');
        }

        if (arraysPlanetasCasasLocalCasa5.length == 1) {
            console.log('Saturno esta solo en esta casa (5). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa5.includes('mercurio')) {
        if (arraysPlanetasCasasLocalCasa5.includes('mercurio') && arraysPlanetasCasasLocalCasa5.includes('luna')) {
            // console.log('Hay una conjuncion de Mercurio y Luna en casa 5.');
            arrayConjunciones.push('MeL5');
        }

        if (arraysPlanetasCasasLocalCasa5.includes('mercurio') && arraysPlanetasCasasLocalCasa5.includes('sol')) {
            // console.log('Hay una conjuncion de Mercurio y Sol en casa 5.');
            arrayConjunciones.push('MeSo5');
        }

        if (arraysPlanetasCasasLocalCasa5.includes('mercurio') && arraysPlanetasCasasLocalCasa5.includes('urano')) {
            // console.log('Hay una conjuncion de Mercurio y Urano en casa 5.');
            arrayConjunciones.push('MeU5');
        }

        if (arraysPlanetasCasasLocalCasa5.includes('mercurio') && arraysPlanetasCasasLocalCasa5.includes('neptuno')) {
            // console.log('Hay una conjuncion de Mercurio y Neptuno en casa 5.');
            arrayConjunciones.push('MeN5');
        }

        if (arraysPlanetasCasasLocalCasa5.includes('mercurio') && arraysPlanetasCasasLocalCasa5.includes('pluton')) {
            // console.log('Hay una conjuncion de Mercurio y Pluton en casa 5.');
            arrayConjunciones.push('MeP5');
        }

        if (arraysPlanetasCasasLocalCasa5.length == 1) {
            console.log('Mercurio esta solo en esta casa (5). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa5.includes('luna')) {
        if (arraysPlanetasCasasLocalCasa5.includes('luna') && arraysPlanetasCasasLocalCasa5.includes('sol')) {
            // console.log('Hay una conjuncion de Luna y Sol en casa 5.');
            arrayConjunciones.push('LSo5');
        }

        if (arraysPlanetasCasasLocalCasa5.includes('luna') && arraysPlanetasCasasLocalCasa5.includes('urano')) {
            // console.log('Hay una conjuncion de Luna y Urano en casa 5.');
            arrayConjunciones.push('LU5');
        }

        if (arraysPlanetasCasasLocalCasa5.includes('luna') && arraysPlanetasCasasLocalCasa5.includes('neptuno')) {
            // console.log('Hay una conjuncion de Luna y Neptuno en casa 5.');
            arrayConjunciones.push('LN5');
        }

        if (arraysPlanetasCasasLocalCasa5.includes('luna') && arraysPlanetasCasasLocalCasa5.includes('pluton')) {
            // console.log('Hay una conjuncion de Luna y Pluton oen casa 5.');
            arrayConjunciones.push('LP5');
        }

        if (arraysPlanetasCasasLocalCasa5.length == 1) {
            console.log('La Luna esta sola en esta casa (5). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa5.includes('sol')) {
        if (arraysPlanetasCasasLocalCasa5.includes('sol') && arraysPlanetasCasasLocalCasa5.includes('urano')) {
            // console.log('Hay una conjuncion de el Sol y Urano en casa 5.');
            arrayConjunciones.push('SoU5');
        }

        if (arraysPlanetasCasasLocalCasa5.includes('sol') && arraysPlanetasCasasLocalCasa5.includes('neptuno')) {
            // console.log('Hay una conjuncion de el Sol y Neptuno en casa 5.');
            arrayConjunciones.push('SoN5');
        }

        if (arraysPlanetasCasasLocalCasa5.includes('sol') && arraysPlanetasCasasLocalCasa5.includes('pluton')) {
            // console.log('Hay una conjuncion de el Sol y Pluton en casa 5.');
            arrayConjunciones.push('SoP5');
        }

        if (arraysPlanetasCasasLocalCasa5.length == 1) {
            console.log('El Sol esta solo en esta casa (5). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa5.includes('urano')) {
        if (arraysPlanetasCasasLocalCasa5.includes('urano') && arraysPlanetasCasasLocalCasa5.includes('neptuno')) {
            // console.log('Hay una conjuncion de Urano y Neptuno en casa 5.');
            arrayConjunciones.push('UN5');
        }

        if (arraysPlanetasCasasLocalCasa5.includes('urano') && arraysPlanetasCasasLocalCasa5.includes('pluton')) {
            // console.log('Hay una conjuncion de Urano y Pluton en casa 5.');
            arrayConjunciones.push('UP5');
        }

        if (arraysPlanetasCasasLocalCasa5.length == 1) {
            console.log('Urano esta solo en esta casa (5). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa5.includes('neptuno')) {
        if (arraysPlanetasCasasLocalCasa5.includes('neptuno') && arraysPlanetasCasasLocalCasa5.includes('pluton')) {
            // console.log('Hay una conjuncion de Neptuno y Pluton en casa 5.');
            arrayConjunciones.push('NP5');
        }

        if (arraysPlanetasCasasLocalCasa5.length == 1) {
            console.log('Neptuno esta solo en esta casa (5). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa5.includes('pluton')) {

        if (arraysPlanetasCasasLocalCasa5.length == 1) {
            console.log('Pluton esta solo en esta casa (5). No hay conjuncion ');
        }
    }

    //========la propiedad include verificara cada planeta esta en Casa 6 y proseguira acorde=======
    if (arraysPlanetasCasasLocalCasa6.includes('marte')) {
        if (arraysPlanetasCasasLocalCasa6.includes('marte') && arraysPlanetasCasasLocalCasa6.includes('venus')) {
            // console.log('Hay una conjuncion de Marte y Venus en casa 6.');
            arrayConjunciones.push('MV6');
        }
        if (arraysPlanetasCasasLocalCasa6.includes('marte') && arraysPlanetasCasasLocalCasa6.includes('saturno')) {
            // console.log('Hay una conjuncion de Marte y Saturno en casa 6. ');
            arrayConjunciones.push('MS6');
        }
        if (arraysPlanetasCasasLocalCasa6.includes('marte') && arraysPlanetasCasasLocalCasa6.includes('mercurio')) {
            // console.log('Hay una conjuncion de Marte y Mercurio en casa 6. ');
            arrayConjunciones.push('MMe6');
        }
        if (arraysPlanetasCasasLocalCasa6.includes('marte') && arraysPlanetasCasasLocalCasa6.includes('luna')) {
            // console.log('Hay una conjuncion de Marte y Luna en casa 6. ');
            arrayConjunciones.push('ML6');
        }
        if (arraysPlanetasCasasLocalCasa6.includes('marte') && arraysPlanetasCasasLocalCasa6.includes('sol')) {
            // console.log('Hay una conjuncion de Marte y Sol en casa 6. ');
            arrayConjunciones.push('MSo6');
        }
        if (arraysPlanetasCasasLocalCasa6.includes('marte') && arraysPlanetasCasasLocalCasa6.includes('urano')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 6. ');
            arrayConjunciones.push('MU6');
        }
        if (arraysPlanetasCasasLocalCasa6.includes('marte') && arraysPlanetasCasasLocalCasa6.includes('neptuno')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 6. ');
            arrayConjunciones.push('MN6');
        }
        if (arraysPlanetasCasasLocalCasa6.includes('marte') && arraysPlanetasCasasLocalCasa6.includes('pluton')) {
            // console.log('Hay una conjuncion de Marte y Pluton en casa 6. ');
            arrayConjunciones.push('MP6');
        }

        if (arraysPlanetasCasasLocalCasa6.length == 1)
            console.log('Marte esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa6.includes('venus')) {
        if (arraysPlanetasCasasLocalCasa6.includes('venus') && arraysPlanetasCasasLocalCasa6.includes('saturno')) {
            // console.log('Hay una conjuncion de Venus y Saturno en casa 6.');
            arrayConjunciones.push('VS6');
        }
        if (arraysPlanetasCasasLocalCasa6.includes('venus') && arraysPlanetasCasasLocalCasa6.includes('mercurio')) {
            // console.log('Hay una conjuncion de Venus y Mercurio en casa 6.');
            arrayConjunciones.push('VMe6');
        }
        if (arraysPlanetasCasasLocalCasa6.includes('venus') && arraysPlanetasCasasLocalCasa6.includes('luna')) {
            // console.log('Hay una conjuncion de Venus y Luna en casa 6.');
            arrayConjunciones.push('VL6');
        }
        if (arraysPlanetasCasasLocalCasa6.includes('venus') && arraysPlanetasCasasLocalCasa6.includes('sol')) {
            // console.log('Hay una conjuncion de Venus y Sol en casa 6.');
            arrayConjunciones.push('VSo6');
        }
        if (arraysPlanetasCasasLocalCasa6.includes('venus') && arraysPlanetasCasasLocalCasa6.includes('urano')) {
            // console.log('Hay una conjuncion de Venus y Urano en casa 6.');
            arrayConjunciones.push('VU6');
        }
        if (arraysPlanetasCasasLocalCasa6.includes('venus') && arraysPlanetasCasasLocalCasa6.includes('neptuno')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 6.');
            arrayConjunciones.push('VN6');
        }
        if (arraysPlanetasCasasLocalCasa6.includes('venus') && arraysPlanetasCasasLocalCasa6.includes('pluton')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 6.');
            arrayConjunciones.push('VP6');
        }
        if (arraysPlanetasCasasLocalCasa6.length == 1)
            console.log('Venus esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa6.includes('saturno')) {
        if (arraysPlanetasCasasLocalCasa6.includes('saturno') && arraysPlanetasCasasLocalCasa6.includes('mercurio')) {
            // console.log('Hay una conjuncion de Saturno y Mercurio en casa 6.');
            arrayConjunciones.push('SMe6');
        }

        if (arraysPlanetasCasasLocalCasa6.includes('saturno') && arraysPlanetasCasasLocalCasa6.includes('luna')) {
            // console.log('Hay una conjuncion de Saturno y Luna en casa 6.');
            arrayConjunciones.push('SL6');
        }

        if (arraysPlanetasCasasLocalCasa6.includes('saturno') && arraysPlanetasCasasLocalCasa6.includes('sol')) {
            // console.log('Hay una conjuncion de Saturno y Sol en casa 6.');
            arrayConjunciones.push('SSo6');
        }

        if (arraysPlanetasCasasLocalCasa6.includes('saturno') && arraysPlanetasCasasLocalCasa6.includes('urano')) {
            // console.log('Hay una conjuncion de Saturno y Urano en casa 6.');
            arrayConjunciones.push('SU6');
        }

        if (arraysPlanetasCasasLocalCasa6.includes('saturno') && arraysPlanetasCasasLocalCasa6.includes('neptuno')) {
            // console.log('Hay una conjuncion de Saturno y Neptuno en casa 6.');
            arrayConjunciones.push('SN6');
        }
        if (arraysPlanetasCasasLocalCasa6.includes('saturno') && arraysPlanetasCasasLocalCasa6.includes('pluton')) {
            // console.log('Hay una conjuncion de Saturno y Pluton en casa 6.');
            arrayConjunciones.push('SP6');
        }

        if (arraysPlanetasCasasLocalCasa6.length == 1) {
            console.log('Saturno esta solo en esta casa (6). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa6.includes('mercurio')) {
        if (arraysPlanetasCasasLocalCasa6.includes('mercurio') && arraysPlanetasCasasLocalCasa6.includes('luna')) {
            // console.log('Hay una conjuncion de Mercurio y Luna en casa 6.');
            arrayConjunciones.push('MeL6');
        }

        if (arraysPlanetasCasasLocalCasa6.includes('mercurio') && arraysPlanetasCasasLocalCasa6.includes('sol')) {
            // console.log('Hay una conjuncion de Mercurio y Sol en casa 6.');
            arrayConjunciones.push('MeSo6');
        }

        if (arraysPlanetasCasasLocalCasa6.includes('mercurio') && arraysPlanetasCasasLocalCasa6.includes('urano')) {
            // console.log('Hay una conjuncion de Mercurio y Urano en casa 6.');
            arrayConjunciones.push('MeU6');
        }

        if (arraysPlanetasCasasLocalCasa6.includes('mercurio') && arraysPlanetasCasasLocalCasa6.includes('neptuno')) {
            // console.log('Hay una conjuncion de Mercurio y Neptuno en casa 6.');
            arrayConjunciones.push('MeN6');
        }

        if (arraysPlanetasCasasLocalCasa6.includes('mercurio') && arraysPlanetasCasasLocalCasa6.includes('pluton')) {
            // console.log('Hay una conjuncion de Mercurio y Pluton en casa 6.');
            arrayConjunciones.push('MeP6');
        }

        if (arraysPlanetasCasasLocalCasa6.length == 1) {
            console.log('Mercurio esta solo en esta casa (6). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa6.includes('luna')) {
        if (arraysPlanetasCasasLocalCasa6.includes('luna') && arraysPlanetasCasasLocalCasa6.includes('sol')) {
            // console.log('Hay una conjuncion de Luna y Sol en casa 6.');
            arrayConjunciones.push('LSo6');
        }

        if (arraysPlanetasCasasLocalCasa6.includes('luna') && arraysPlanetasCasasLocalCasa6.includes('urano')) {
            // console.log('Hay una conjuncion de Luna y Urano en casa 6.');
            arrayConjunciones.push('LU6');
        }

        if (arraysPlanetasCasasLocalCasa6.includes('luna') && arraysPlanetasCasasLocalCasa6.includes('neptuno')) {
            // console.log('Hay una conjuncion de Luna y Neptuno en casa 6.');
            arrayConjunciones.push('LN6');
        }

        if (arraysPlanetasCasasLocalCasa6.includes('luna') && arraysPlanetasCasasLocalCasa6.includes('pluton')) {
            // console.log('Hay una conjuncion de Luna y Pluton oen casa 6.');
            arrayConjunciones.push('LP6');
        }

        if (arraysPlanetasCasasLocalCasa6.length == 1) {
            console.log('La Luna esta sola en esta casa (6). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa6.includes('sol')) {
        if (arraysPlanetasCasasLocalCasa6.includes('sol') && arraysPlanetasCasasLocalCasa6.includes('urano')) {
            // console.log('Hay una conjuncion de el Sol y Urano en casa 6.');
            arrayConjunciones.push('SoU6');
        }

        if (arraysPlanetasCasasLocalCasa6.includes('sol') && arraysPlanetasCasasLocalCasa6.includes('neptuno')) {
            // console.log('Hay una conjuncion de el Sol y Neptuno en casa 6.');
            arrayConjunciones.push('SoN6');
        }

        if (arraysPlanetasCasasLocalCasa6.includes('sol') && arraysPlanetasCasasLocalCasa6.includes('pluton')) {
            // console.log('Hay una conjuncion de el Sol y Pluton en casa 6.');
            arrayConjunciones.push('SoP6');
        }

        if (arraysPlanetasCasasLocalCasa6.length == 1) {
            console.log('El Sol esta solo en esta casa (6). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa6.includes('urano')) {
        if (arraysPlanetasCasasLocalCasa6.includes('urano') && arraysPlanetasCasasLocalCasa6.includes('neptuno')) {
            // console.log('Hay una conjuncion de Urano y Neptuno en casa 6.');
            arrayConjunciones.push('UN6');
        }

        if (arraysPlanetasCasasLocalCasa6.includes('urano') && arraysPlanetasCasasLocalCasa6.includes('pluton')) {
            // console.log('Hay una conjuncion de Urano y Pluton en casa 6.');
            arrayConjunciones.push('UP6');
        }

        if (arraysPlanetasCasasLocalCasa6.length == 1) {
            console.log('Urano esta solo en esta casa (6). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa6.includes('neptuno')) {
        if (arraysPlanetasCasasLocalCasa6.includes('neptuno') && arraysPlanetasCasasLocalCasa6.includes('pluton')) {
            // console.log('Hay una conjuncion de Neptuno y Pluton en casa 6.');
            arrayConjunciones.push('NP6');
        }

        if (arraysPlanetasCasasLocalCasa6.length == 1) {
            console.log('Neptuno esta solo en esta casa (6). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa6.includes('pluton')) {

        if (arraysPlanetasCasasLocalCasa6.length == 1) {
            console.log('Pluton esta solo en esta casa (6). No hay conjuncion ');
        }
    }


    //ME QUEDE ACA REVISANDO LOS Me para cambiarlos

    //========la propiedad include verificara cada planeta esta en Casa 7 y proseguira acorde=======
    if (arraysPlanetasCasasLocalCasa7.includes('marte')) {
        if (arraysPlanetasCasasLocalCasa7.includes('marte') && arraysPlanetasCasasLocalCasa7.includes('venus')) {
            // console.log('Hay una conjuncion de Marte y Venus en casa 7.');
            arrayConjunciones.push('MV7');
        }
        if (arraysPlanetasCasasLocalCasa7.includes('marte') && arraysPlanetasCasasLocalCasa7.includes('saturno')) {
            // console.log('Hay una conjuncion de Marte y Saturno en casa 7. ');
            arrayConjunciones.push('MS7');
        }
        if (arraysPlanetasCasasLocalCasa7.includes('marte') && arraysPlanetasCasasLocalCasa7.includes('mercurio')) {
            // console.log('Hay una conjuncion de Marte y Mercurio en casa 7. ');
            arrayConjunciones.push('MM7');
        }
        if (arraysPlanetasCasasLocalCasa7.includes('marte') && arraysPlanetasCasasLocalCasa7.includes('luna')) {
            // console.log('Hay una conjuncion de Marte y Luna en casa 7. ');
            arrayConjunciones.push('ML7');
        }
        if (arraysPlanetasCasasLocalCasa7.includes('marte') && arraysPlanetasCasasLocalCasa7.includes('sol')) {
            // console.log('Hay una conjuncion de Marte y Sol en casa 7. ');
            arrayConjunciones.push('MSo7');
        }
        if (arraysPlanetasCasasLocalCasa7.includes('marte') && arraysPlanetasCasasLocalCasa7.includes('urano')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 7. ');
            arrayConjunciones.push('MU7');
        }
        if (arraysPlanetasCasasLocalCasa7.includes('marte') && arraysPlanetasCasasLocalCasa7.includes('neptuno')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 7. ');
            arrayConjunciones.push('MN7');
        }
        if (arraysPlanetasCasasLocalCasa7.includes('marte') && arraysPlanetasCasasLocalCasa7.includes('pluton')) {
            // console.log('Hay una conjuncion de Marte y Pluton en casa 7. ');
            arrayConjunciones.push('MP7');
        }

        if (arraysPlanetasCasasLocalCasa7.length == 1)
            console.log('Marte esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa7.includes('venus')) {
        if (arraysPlanetasCasasLocalCasa7.includes('venus') && arraysPlanetasCasasLocalCasa7.includes('saturno')) {
            // console.log('Hay una conjuncion de Venus y Saturno en casa 7.');
            arrayConjunciones.push('VS7');
        }
        if (arraysPlanetasCasasLocalCasa7.includes('venus') && arraysPlanetasCasasLocalCasa7.includes('mercurio')) {
            // console.log('Hay una conjuncion de Venus y Mercurio en casa 7.');
            arrayConjunciones.push('VM7');
        }
        if (arraysPlanetasCasasLocalCasa7.includes('venus') && arraysPlanetasCasasLocalCasa7.includes('luna')) {
            // console.log('Hay una conjuncion de Venus y Luna en casa 7.');
            arrayConjunciones.push('VL7');
        }
        if (arraysPlanetasCasasLocalCasa7.includes('venus') && arraysPlanetasCasasLocalCasa7.includes('sol')) {
            // console.log('Hay una conjuncion de Venus y Sol en casa 7.');
            arrayConjunciones.push('VSo7');
        }
        if (arraysPlanetasCasasLocalCasa7.includes('venus') && arraysPlanetasCasasLocalCasa7.includes('urano')) {
            // console.log('Hay una conjuncion de Venus y Urano en casa 7.');
            arrayConjunciones.push('VU7');
        }
        if (arraysPlanetasCasasLocalCasa7.includes('venus') && arraysPlanetasCasasLocalCasa7.includes('neptuno')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 7.');
            arrayConjunciones.push('VN7');
        }
        if (arraysPlanetasCasasLocalCasa7.includes('venus') && arraysPlanetasCasasLocalCasa7.includes('pluton')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 7.');
            arrayConjunciones.push('VP7');
        }
        if (arraysPlanetasCasasLocalCasa7.length == 1)
            console.log('Venus esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa7.includes('saturno')) {
        if (arraysPlanetasCasasLocalCasa7.includes('saturno') && arraysPlanetasCasasLocalCasa7.includes('mercurio')) {
            // console.log('Hay una conjuncion de Saturno y Mercurio en casa 7.');
            arrayConjunciones.push('SM7');
        }

        if (arraysPlanetasCasasLocalCasa7.includes('saturno') && arraysPlanetasCasasLocalCasa7.includes('luna')) {
            // console.log('Hay una conjuncion de Saturno y Luna en casa 7.');
            arrayConjunciones.push('SL7');
        }

        if (arraysPlanetasCasasLocalCasa7.includes('saturno') && arraysPlanetasCasasLocalCasa7.includes('sol')) {
            // console.log('Hay una conjuncion de Saturno y Sol en casa 7.');
            arrayConjunciones.push('SSo7');
        }

        if (arraysPlanetasCasasLocalCasa7.includes('saturno') && arraysPlanetasCasasLocalCasa7.includes('urano')) {
            // console.log('Hay una conjuncion de Saturno y Urano en casa 7.');
            arrayConjunciones.push('SU7');
        }

        if (arraysPlanetasCasasLocalCasa7.includes('saturno') && arraysPlanetasCasasLocalCasa7.includes('neptuno')) {
            // console.log('Hay una conjuncion de Saturno y Neptuno en casa 7.');
            arrayConjunciones.push('SN7');
        }
        if (arraysPlanetasCasasLocalCasa7.includes('saturno') && arraysPlanetasCasasLocalCasa7.includes('pluton')) {
            // console.log('Hay una conjuncion de Saturno y Pluton en casa 7.');
            arrayConjunciones.push('SP7');
        }

        if (arraysPlanetasCasasLocalCasa7.length == 1) {
            console.log('Saturno esta solo en esta casa (7). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa7.includes('mercurio')) {
        if (arraysPlanetasCasasLocalCasa7.includes('mercurio') && arraysPlanetasCasasLocalCasa7.includes('luna')) {
            // console.log('Hay una conjuncion de Mercurio y Luna en casa 7.');
            arrayConjunciones.push('ML7');
        }

        if (arraysPlanetasCasasLocalCasa7.includes('mercurio') && arraysPlanetasCasasLocalCasa7.includes('sol')) {
            // console.log('Hay una conjuncion de Mercurio y Sol en casa 7.');
            arrayConjunciones.push('MSo7');
        }

        if (arraysPlanetasCasasLocalCasa7.includes('mercurio') && arraysPlanetasCasasLocalCasa7.includes('urano')) {
            // console.log('Hay una conjuncion de Mercurio y Urano en casa 7.');
            arrayConjunciones.push('MU7');
        }

        if (arraysPlanetasCasasLocalCasa7.includes('mercurio') && arraysPlanetasCasasLocalCasa7.includes('neptuno')) {
            // console.log('Hay una conjuncion de Mercurio y Neptuno en casa 7.');
            arrayConjunciones.push('MN7');
        }

        if (arraysPlanetasCasasLocalCasa7.includes('mercurio') && arraysPlanetasCasasLocalCasa7.includes('pluton')) {
            // console.log('Hay una conjuncion de Mercurio y Pluton en casa 7.');
            arrayConjunciones.push('MP7');
        }

        if (arraysPlanetasCasasLocalCasa7.length == 1) {
            console.log('Mercurio esta solo en esta casa (7). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa7.includes('luna')) {
        if (arraysPlanetasCasasLocalCasa7.includes('luna') && arraysPlanetasCasasLocalCasa7.includes('sol')) {
            // console.log('Hay una conjuncion de Luna y Sol en casa 7.');
            arrayConjunciones.push('LSo7');
        }

        if (arraysPlanetasCasasLocalCasa7.includes('luna') && arraysPlanetasCasasLocalCasa7.includes('urano')) {
            // console.log('Hay una conjuncion de Luna y Urano en casa 7.');
            arrayConjunciones.push('LU7');
        }

        if (arraysPlanetasCasasLocalCasa7.includes('luna') && arraysPlanetasCasasLocalCasa7.includes('neptuno')) {
            // console.log('Hay una conjuncion de Luna y Neptuno en casa 7.');
            arrayConjunciones.push('LN7');
        }

        if (arraysPlanetasCasasLocalCasa7.includes('luna') && arraysPlanetasCasasLocalCasa7.includes('pluton')) {
            // console.log('Hay una conjuncion de Luna y Pluton oen casa 7.');
            arrayConjunciones.push('LP7');
        }

        if (arraysPlanetasCasasLocalCasa7.length == 1) {
            console.log('La Luna esta sola en esta casa (7). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa7.includes('sol')) {
        if (arraysPlanetasCasasLocalCasa7.includes('sol') && arraysPlanetasCasasLocalCasa7.includes('urano')) {
            // console.log('Hay una conjuncion de el Sol y Urano en casa 7.');
            arrayConjunciones.push('SoU7');
        }

        if (arraysPlanetasCasasLocalCasa7.includes('sol') && arraysPlanetasCasasLocalCasa7.includes('neptuno')) {
            // console.log('Hay una conjuncion de el Sol y Neptuno en casa 7.');
            arrayConjunciones.push('SoN7');
        }

        if (arraysPlanetasCasasLocalCasa7.includes('sol') && arraysPlanetasCasasLocalCasa7.includes('pluton')) {
            // console.log('Hay una conjuncion de el Sol y Pluton en casa 7.');
            arrayConjunciones.push('SoP7');
        }

        if (arraysPlanetasCasasLocalCasa7.length == 1) {
            console.log('El Sol esta solo en esta casa (7). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa7.includes('urano')) {
        if (arraysPlanetasCasasLocalCasa7.includes('urano') && arraysPlanetasCasasLocalCasa7.includes('neptuno')) {
            // console.log('Hay una conjuncion de Urano y Neptuno en casa 7.');
            arrayConjunciones.push('UN7');
        }

        if (arraysPlanetasCasasLocalCasa7.includes('urano') && arraysPlanetasCasasLocalCasa7.includes('pluton')) {
            // console.log('Hay una conjuncion de Urano y Pluton en casa 7.');
            arrayConjunciones.push('UP7');
        }

        if (arraysPlanetasCasasLocalCasa7.length == 1) {
            console.log('Urano esta solo en esta casa (7). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa7.includes('neptuno')) {
        if (arraysPlanetasCasasLocalCasa7.includes('neptuno') && arraysPlanetasCasasLocalCasa7.includes('pluton')) {
            // console.log('Hay una conjuncion de Neptuno y Pluton en casa 7.');
            arrayConjunciones.push('NP7');
        }

        if (arraysPlanetasCasasLocalCasa7.length == 1) {
            console.log('Neptuno esta solo en esta casa (7). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa7.includes('pluton')) {

        if (arraysPlanetasCasasLocalCasa7.length == 1) {
            console.log('Pluton esta solo en esta casa (7). No hay conjuncion ');
        }
    }

    //========la propiedad include verificara cada planeta esta en Casa 8 y proseguira acorde=======
    if (arraysPlanetasCasasLocalCasa8.includes('marte')) {
        if (arraysPlanetasCasasLocalCasa8.includes('marte') && arraysPlanetasCasasLocalCasa8.includes('venus')) {
            // console.log('Hay una conjuncion de Marte y Venus en casa 8.');
            arrayConjunciones.push('MV8');
        }
        if (arraysPlanetasCasasLocalCasa8.includes('marte') && arraysPlanetasCasasLocalCasa8.includes('saturno')) {
            // console.log('Hay una conjuncion de Marte y Saturno en casa 8. ');
            arrayConjunciones.push('MS8');
        }
        if (arraysPlanetasCasasLocalCasa8.includes('marte') && arraysPlanetasCasasLocalCasa8.includes('mercurio')) {
            // console.log('Hay una conjuncion de Marte y Mercurio en casa 8. ');
            arrayConjunciones.push('MM8');
        }
        if (arraysPlanetasCasasLocalCasa8.includes('marte') && arraysPlanetasCasasLocalCasa8.includes('luna')) {
            // console.log('Hay una conjuncion de Marte y Luna en casa 8. ');
            arrayConjunciones.push('ML8');
        }
        if (arraysPlanetasCasasLocalCasa8.includes('marte') && arraysPlanetasCasasLocalCasa8.includes('sol')) {
            // console.log('Hay una conjuncion de Marte y Sol en casa 8. ');
            arrayConjunciones.push('MSo8');
        }
        if (arraysPlanetasCasasLocalCasa8.includes('marte') && arraysPlanetasCasasLocalCasa8.includes('urano')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 8. ');
            arrayConjunciones.push('MU8');
        }
        if (arraysPlanetasCasasLocalCasa8.includes('marte') && arraysPlanetasCasasLocalCasa8.includes('neptuno')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 8. ');
            arrayConjunciones.push('MN8');
        }
        if (arraysPlanetasCasasLocalCasa8.includes('marte') && arraysPlanetasCasasLocalCasa8.includes('pluton')) {
            // console.log('Hay una conjuncion de Marte y Pluton en casa 8. ');
            arrayConjunciones.push('MP8');
        }

        if (arraysPlanetasCasasLocalCasa8.length == 1)
            console.log('Marte esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa8.includes('venus')) {
        if (arraysPlanetasCasasLocalCasa8.includes('venus') && arraysPlanetasCasasLocalCasa8.includes('saturno')) {
            // console.log('Hay una conjuncion de Venus y Saturno en casa 8.');
            arrayConjunciones.push('VS8');
        }
        if (arraysPlanetasCasasLocalCasa8.includes('venus') && arraysPlanetasCasasLocalCasa8.includes('mercurio')) {
            // console.log('Hay una conjuncion de Venus y Mercurio en casa 8.');
            arrayConjunciones.push('VM8');
        }
        if (arraysPlanetasCasasLocalCasa8.includes('venus') && arraysPlanetasCasasLocalCasa8.includes('luna')) {
            // console.log('Hay una conjuncion de Venus y Luna en casa 8.');
            arrayConjunciones.push('VL8');
        }
        if (arraysPlanetasCasasLocalCasa8.includes('venus') && arraysPlanetasCasasLocalCasa8.includes('sol')) {
            // console.log('Hay una conjuncion de Venus y Sol en casa 8.');
            arrayConjunciones.push('VSo8');
        }
        if (arraysPlanetasCasasLocalCasa8.includes('venus') && arraysPlanetasCasasLocalCasa8.includes('urano')) {
            // console.log('Hay una conjuncion de Venus y Urano en casa 8.');
            arrayConjunciones.push('VU8');
        }
        if (arraysPlanetasCasasLocalCasa8.includes('venus') && arraysPlanetasCasasLocalCasa8.includes('neptuno')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 8.');
            arrayConjunciones.push('VN8');
        }
        if (arraysPlanetasCasasLocalCasa8.includes('venus') && arraysPlanetasCasasLocalCasa8.includes('pluton')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 8.');
            arrayConjunciones.push('VP8');
        }
        if (arraysPlanetasCasasLocalCasa8.length == 1)
            console.log('Venus esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa8.includes('saturno')) {
        if (arraysPlanetasCasasLocalCasa8.includes('saturno') && arraysPlanetasCasasLocalCasa8.includes('mercurio')) {
            // console.log('Hay una conjuncion de Saturno y Mercurio en casa 8.');
            arrayConjunciones.push('SM8');
        }

        if (arraysPlanetasCasasLocalCasa8.includes('saturno') && arraysPlanetasCasasLocalCasa8.includes('luna')) {
            // console.log('Hay una conjuncion de Saturno y Luna en casa 8.');
            arrayConjunciones.push('SL8');
        }

        if (arraysPlanetasCasasLocalCasa8.includes('saturno') && arraysPlanetasCasasLocalCasa8.includes('sol')) {
            // console.log('Hay una conjuncion de Saturno y Sol en casa 8.');
            arrayConjunciones.push('SSo8');
        }

        if (arraysPlanetasCasasLocalCasa8.includes('saturno') && arraysPlanetasCasasLocalCasa8.includes('urano')) {
            // console.log('Hay una conjuncion de Saturno y Urano en casa 8.');
            arrayConjunciones.push('SU8');
        }

        if (arraysPlanetasCasasLocalCasa8.includes('saturno') && arraysPlanetasCasasLocalCasa8.includes('neptuno')) {
            // console.log('Hay una conjuncion de Saturno y Neptuno en casa 8.');
            arrayConjunciones.push('SN8');
        }
        if (arraysPlanetasCasasLocalCasa8.includes('saturno') && arraysPlanetasCasasLocalCasa8.includes('pluton')) {
            // console.log('Hay una conjuncion de Saturno y Pluton en casa 8.');
            arrayConjunciones.push('SP8');
        }

        if (arraysPlanetasCasasLocalCasa8.length == 1) {
            console.log('Saturno esta solo en esta casa (8). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa8.includes('mercurio')) {
        if (arraysPlanetasCasasLocalCasa8.includes('mercurio') && arraysPlanetasCasasLocalCasa8.includes('luna')) {
            // console.log('Hay una conjuncion de Mercurio y Luna en casa 8.');
            arrayConjunciones.push('ML8');
        }

        if (arraysPlanetasCasasLocalCasa8.includes('mercurio') && arraysPlanetasCasasLocalCasa8.includes('sol')) {
            // console.log('Hay una conjuncion de Mercurio y Sol en casa 8.');
            arrayConjunciones.push('MSo8');
        }

        if (arraysPlanetasCasasLocalCasa8.includes('mercurio') && arraysPlanetasCasasLocalCasa8.includes('urano')) {
            // console.log('Hay una conjuncion de Mercurio y Urano en casa 8.');
            arrayConjunciones.push('MU8');
        }

        if (arraysPlanetasCasasLocalCasa8.includes('mercurio') && arraysPlanetasCasasLocalCasa8.includes('neptuno')) {
            // console.log('Hay una conjuncion de Mercurio y Neptuno en casa 8.');
            arrayConjunciones.push('MN8');
        }

        if (arraysPlanetasCasasLocalCasa8.includes('mercurio') && arraysPlanetasCasasLocalCasa8.includes('pluton')) {
            // console.log('Hay una conjuncion de Mercurio y Pluton en casa 8.');
            arrayConjunciones.push('MP8');
        }

        if (arraysPlanetasCasasLocalCasa8.length == 1) {
            console.log('Mercurio esta solo en esta casa (8). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa8.includes('luna')) {
        if (arraysPlanetasCasasLocalCasa8.includes('luna') && arraysPlanetasCasasLocalCasa8.includes('sol')) {
            // console.log('Hay una conjuncion de Luna y Sol en casa 8.');
            arrayConjunciones.push('LSo8');
        }

        if (arraysPlanetasCasasLocalCasa8.includes('luna') && arraysPlanetasCasasLocalCasa8.includes('urano')) {
            // console.log('Hay una conjuncion de Luna y Urano en casa 8.');
            arrayConjunciones.push('LU8');
        }

        if (arraysPlanetasCasasLocalCasa8.includes('luna') && arraysPlanetasCasasLocalCasa8.includes('neptuno')) {
            // console.log('Hay una conjuncion de Luna y Neptuno en casa 8.');
            arrayConjunciones.push('LN8');
        }

        if (arraysPlanetasCasasLocalCasa8.includes('luna') && arraysPlanetasCasasLocalCasa8.includes('pluton')) {
            // console.log('Hay una conjuncion de Luna y Pluton oen casa 8.');
            arrayConjunciones.push('LP8');
        }

        if (arraysPlanetasCasasLocalCasa8.length == 1) {
            console.log('La Luna esta sola en esta casa (8). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa8.includes('sol')) {
        if (arraysPlanetasCasasLocalCasa8.includes('sol') && arraysPlanetasCasasLocalCasa8.includes('urano')) {
            // console.log('Hay una conjuncion de el Sol y Urano en casa 8.');
            arrayConjunciones.push('SoU8');
        }

        if (arraysPlanetasCasasLocalCasa8.includes('sol') && arraysPlanetasCasasLocalCasa8.includes('neptuno')) {
            // console.log('Hay una conjuncion de el Sol y Neptuno en casa 8.');
            arrayConjunciones.push('SoN8');
        }

        if (arraysPlanetasCasasLocalCasa8.includes('sol') && arraysPlanetasCasasLocalCasa8.includes('pluton')) {
            // console.log('Hay una conjuncion de el Sol y Pluton en casa 8.');
            arrayConjunciones.push('SoP8');
        }

        if (arraysPlanetasCasasLocalCasa8.length == 1) {
            console.log('El Sol esta solo en esta casa (8). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa8.includes('urano')) {
        if (arraysPlanetasCasasLocalCasa8.includes('urano') && arraysPlanetasCasasLocalCasa8.includes('neptuno')) {
            // console.log('Hay una conjuncion de Urano y Neptuno en casa 8.');
            arrayConjunciones.push('UN8');
        }

        if (arraysPlanetasCasasLocalCasa8.includes('urano') && arraysPlanetasCasasLocalCasa8.includes('pluton')) {
            // console.log('Hay una conjuncion de Urano y Pluton en casa 8.');
            arrayConjunciones.push('UP8');
        }

        if (arraysPlanetasCasasLocalCasa8.length == 1) {
            console.log('Urano esta solo en esta casa (8). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa8.includes('neptuno')) {
        if (arraysPlanetasCasasLocalCasa8.includes('neptuno') && arraysPlanetasCasasLocalCasa8.includes('pluton')) {
            // console.log('Hay una conjuncion de Neptuno y Pluton en casa 8.');
            arrayConjunciones.push('NP8');
        }

        if (arraysPlanetasCasasLocalCasa8.length == 1) {
            console.log('Neptuno esta solo en esta casa (8). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa8.includes('pluton')) {

        if (arraysPlanetasCasasLocalCasa8.length == 1) {
            console.log('Pluton esta solo en esta casa (8). No hay conjuncion ');
        }
    }

    //========la propiedad include verificara cada planeta esta en Casa 9 y proseguira acorde=======

    if (arraysPlanetasCasasLocalCasa9.includes('marte')) {
        if (arraysPlanetasCasasLocalCasa9.includes('marte') && arraysPlanetasCasasLocalCasa9.includes('venus')) {
            // console.log('Hay una conjuncion de Marte y Venus en casa 9.');
            arrayConjunciones.push('MV9');
        }
        if (arraysPlanetasCasasLocalCasa9.includes('marte') && arraysPlanetasCasasLocalCasa9.includes('saturno')) {
            // console.log('Hay una conjuncion de Marte y Saturno en casa 9. ');
            arrayConjunciones.push('MS9');
        }
        if (arraysPlanetasCasasLocalCasa9.includes('marte') && arraysPlanetasCasasLocalCasa9.includes('mercurio')) {
            // console.log('Hay una conjuncion de Marte y Mercurio en casa 9. ');
            arrayConjunciones.push('MM9');
        }
        if (arraysPlanetasCasasLocalCasa9.includes('marte') && arraysPlanetasCasasLocalCasa9.includes('luna')) {
            // console.log('Hay una conjuncion de Marte y Luna en casa 9. ');
            arrayConjunciones.push('ML9');
        }
        if (arraysPlanetasCasasLocalCasa9.includes('marte') && arraysPlanetasCasasLocalCasa9.includes('sol')) {
            // console.log('Hay una conjuncion de Marte y Sol en casa 9. ');
            arrayConjunciones.push('MSo9');
        }
        if (arraysPlanetasCasasLocalCasa9.includes('marte') && arraysPlanetasCasasLocalCasa9.includes('urano')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 9. ');
            arrayConjunciones.push('MU9');
        }
        if (arraysPlanetasCasasLocalCasa9.includes('marte') && arraysPlanetasCasasLocalCasa9.includes('neptuno')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 9. ');
            arrayConjunciones.push('MN9');
        }
        if (arraysPlanetasCasasLocalCasa9.includes('marte') && arraysPlanetasCasasLocalCasa9.includes('pluton')) {
            // console.log('Hay una conjuncion de Marte y Pluton en casa 9. ');
            arrayConjunciones.push('MP9');
        }

        if (arraysPlanetasCasasLocalCasa9.length == 1)
            console.log('Marte esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa9.includes('venus')) {
        if (arraysPlanetasCasasLocalCasa9.includes('venus') && arraysPlanetasCasasLocalCasa9.includes('saturno')) {
            // console.log('Hay una conjuncion de Venus y Saturno en casa 9.');
            arrayConjunciones.push('VS9');
        }
        if (arraysPlanetasCasasLocalCasa9.includes('venus') && arraysPlanetasCasasLocalCasa9.includes('mercurio')) {
            // console.log('Hay una conjuncion de Venus y Mercurio en casa 9.');
            arrayConjunciones.push('VM9');
        }
        if (arraysPlanetasCasasLocalCasa9.includes('venus') && arraysPlanetasCasasLocalCasa9.includes('luna')) {
            // console.log('Hay una conjuncion de Venus y Luna en casa 9.');
            arrayConjunciones.push('VL9');
        }
        if (arraysPlanetasCasasLocalCasa9.includes('venus') && arraysPlanetasCasasLocalCasa9.includes('sol')) {
            // console.log('Hay una conjuncion de Venus y Sol en casa 9.');
            arrayConjunciones.push('VSo9');
        }
        if (arraysPlanetasCasasLocalCasa9.includes('venus') && arraysPlanetasCasasLocalCasa9.includes('urano')) {
            // console.log('Hay una conjuncion de Venus y Urano en casa 9.');
            arrayConjunciones.push('VU9');
        }
        if (arraysPlanetasCasasLocalCasa9.includes('venus') && arraysPlanetasCasasLocalCasa9.includes('neptuno')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 9.');
            arrayConjunciones.push('VN9');
        }
        if (arraysPlanetasCasasLocalCasa9.includes('venus') && arraysPlanetasCasasLocalCasa9.includes('pluton')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 9.');
            arrayConjunciones.push('VP9');
        }
        if (arraysPlanetasCasasLocalCasa9.length == 1)
            console.log('Venus esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa9.includes('saturno')) {
        if (arraysPlanetasCasasLocalCasa9.includes('saturno') && arraysPlanetasCasasLocalCasa9.includes('mercurio')) {
            // console.log('Hay una conjuncion de Saturno y Mercurio en casa 9.');
            arrayConjunciones.push('SM9');
        }

        if (arraysPlanetasCasasLocalCasa9.includes('saturno') && arraysPlanetasCasasLocalCasa9.includes('luna')) {
            // console.log('Hay una conjuncion de Saturno y Luna en casa 9.');
            arrayConjunciones.push('SL9');
        }

        if (arraysPlanetasCasasLocalCasa9.includes('saturno') && arraysPlanetasCasasLocalCasa9.includes('sol')) {
            // console.log('Hay una conjuncion de Saturno y Sol en casa 9.');
            arrayConjunciones.push('SSo9');
        }

        if (arraysPlanetasCasasLocalCasa9.includes('saturno') && arraysPlanetasCasasLocalCasa9.includes('urano')) {
            // console.log('Hay una conjuncion de Saturno y Urano en casa 9.');
            arrayConjunciones.push('SU9');
        }

        if (arraysPlanetasCasasLocalCasa9.includes('saturno') && arraysPlanetasCasasLocalCasa9.includes('neptuno')) {
            // console.log('Hay una conjuncion de Saturno y Neptuno en casa 9.');
            arrayConjunciones.push('SN9');
        }
        if (arraysPlanetasCasasLocalCasa9.includes('saturno') && arraysPlanetasCasasLocalCasa9.includes('pluton')) {
            // console.log('Hay una conjuncion de Saturno y Pluton en casa 9.');
            arrayConjunciones.push('SP9');
        }

        if (arraysPlanetasCasasLocalCasa9.length == 1) {
            console.log('Saturno esta solo en esta casa (9). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa9.includes('mercurio')) {
        if (arraysPlanetasCasasLocalCasa9.includes('mercurio') && arraysPlanetasCasasLocalCasa9.includes('luna')) {
            // console.log('Hay una conjuncion de Mercurio y Luna en casa 9.');
            arrayConjunciones.push('ML9');
        }

        if (arraysPlanetasCasasLocalCasa9.includes('mercurio') && arraysPlanetasCasasLocalCasa9.includes('sol')) {
            // console.log('Hay una conjuncion de Mercurio y Sol en casa 9.');
            arrayConjunciones.push('MSo9');
        }

        if (arraysPlanetasCasasLocalCasa9.includes('mercurio') && arraysPlanetasCasasLocalCasa9.includes('urano')) {
            // console.log('Hay una conjuncion de Mercurio y Urano en casa 9.');
            arrayConjunciones.push('MU9');
        }

        if (arraysPlanetasCasasLocalCasa9.includes('mercurio') && arraysPlanetasCasasLocalCasa9.includes('neptuno')) {
            // console.log('Hay una conjuncion de Mercurio y Neptuno en casa 9.');
            arrayConjunciones.push('MN9');
        }

        if (arraysPlanetasCasasLocalCasa9.includes('mercurio') && arraysPlanetasCasasLocalCasa9.includes('pluton')) {
            // console.log('Hay una conjuncion de Mercurio y Pluton en casa 9.');
            arrayConjunciones.push('MP9');
        }

        if (arraysPlanetasCasasLocalCasa9.length == 1) {
            console.log('Mercurio esta solo en esta casa (9). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa9.includes('luna')) {
        if (arraysPlanetasCasasLocalCasa9.includes('luna') && arraysPlanetasCasasLocalCasa9.includes('sol')) {
            // console.log('Hay una conjuncion de Luna y Sol en casa 9.');
            arrayConjunciones.push('LSo9');
        }

        if (arraysPlanetasCasasLocalCasa9.includes('luna') && arraysPlanetasCasasLocalCasa9.includes('urano')) {
            // console.log('Hay una conjuncion de Luna y Urano en casa 9.');
            arrayConjunciones.push('LU9');
        }

        if (arraysPlanetasCasasLocalCasa9.includes('luna') && arraysPlanetasCasasLocalCasa9.includes('neptuno')) {
            // console.log('Hay una conjuncion de Luna y Neptuno en casa 9.');
            arrayConjunciones.push('LN9');
        }

        if (arraysPlanetasCasasLocalCasa9.includes('luna') && arraysPlanetasCasasLocalCasa9.includes('pluton')) {
            // console.log('Hay una conjuncion de Luna y Pluton oen casa 9.');
            arrayConjunciones.push('LP9');
        }

        if (arraysPlanetasCasasLocalCasa9.length == 1) {
            console.log('La Luna esta sola en esta casa (9). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa9.includes('sol')) {
        if (arraysPlanetasCasasLocalCasa9.includes('sol') && arraysPlanetasCasasLocalCasa9.includes('urano')) {
            // console.log('Hay una conjuncion de el Sol y Urano en casa 9.');
            arrayConjunciones.push('SoU9');
        }

        if (arraysPlanetasCasasLocalCasa9.includes('sol') && arraysPlanetasCasasLocalCasa9.includes('neptuno')) {
            // console.log('Hay una conjuncion de el Sol y Neptuno en casa 9.');
            arrayConjunciones.push('SoN9');
        }

        if (arraysPlanetasCasasLocalCasa9.includes('sol') && arraysPlanetasCasasLocalCasa9.includes('pluton')) {
            // console.log('Hay una conjuncion de el Sol y Pluton en casa 9.');
            arrayConjunciones.push('SoP9');
        }

        if (arraysPlanetasCasasLocalCasa9.length == 1) {
            console.log('El Sol esta solo en esta casa (9). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa9.includes('urano')) {
        if (arraysPlanetasCasasLocalCasa9.includes('urano') && arraysPlanetasCasasLocalCasa9.includes('neptuno')) {
            // console.log('Hay una conjuncion de Urano y Neptuno en casa 9.');
            arrayConjunciones.push('UN9');
        }

        if (arraysPlanetasCasasLocalCasa9.includes('urano') && arraysPlanetasCasasLocalCasa9.includes('pluton')) {
            // console.log('Hay una conjuncion de Urano y Pluton en casa 9.');
            arrayConjunciones.push('UP9');
        }

        if (arraysPlanetasCasasLocalCasa9.length == 1) {
            console.log('Urano esta solo en esta casa (9). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa9.includes('neptuno')) {
        if (arraysPlanetasCasasLocalCasa9.includes('neptuno') && arraysPlanetasCasasLocalCasa9.includes('pluton')) {
            // console.log('Hay una conjuncion de Neptuno y Pluton en casa 9.');
            arrayConjunciones.push('NP9');
        }

        if (arraysPlanetasCasasLocalCasa9.length == 1) {
            console.log('Neptuno esta solo en esta casa (9). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa9.includes('pluton')) {

        if (arraysPlanetasCasasLocalCasa9.length == 1) {
            console.log('Pluton esta solo en esta casa (9). No hay conjuncion ');
        }
    }

    //========la propiedad include verificara cada planeta esta en Casa 10 y proseguira acorde=======

    if (arraysPlanetasCasasLocalCasa10.includes('marte')) {
        if (arraysPlanetasCasasLocalCasa10.includes('marte') && arraysPlanetasCasasLocalCasa10.includes('venus')) {
            // console.log('Hay una conjuncion de Marte y Venus en casa 10.');
            arrayConjunciones.push('MV10');
        }
        if (arraysPlanetasCasasLocalCasa10.includes('marte') && arraysPlanetasCasasLocalCasa10.includes('saturno')) {
            // console.log('Hay una conjuncion de Marte y Saturno en casa 10. ');
            arrayConjunciones.push('MS10');
        }
        if (arraysPlanetasCasasLocalCasa10.includes('marte') && arraysPlanetasCasasLocalCasa10.includes('mercurio')) {
            // console.log('Hay una conjuncion de Marte y Mercurio en casa 10. ');
            arrayConjunciones.push('MM10');
        }
        if (arraysPlanetasCasasLocalCasa10.includes('marte') && arraysPlanetasCasasLocalCasa10.includes('luna')) {
            // console.log('Hay una conjuncion de Marte y Luna en casa 10. ');
            arrayConjunciones.push('ML10');
        }
        if (arraysPlanetasCasasLocalCasa10.includes('marte') && arraysPlanetasCasasLocalCasa10.includes('sol')) {
            // console.log('Hay una conjuncion de Marte y Sol en casa 10. ');
            arrayConjunciones.push('MSo10');
        }
        if (arraysPlanetasCasasLocalCasa10.includes('marte') && arraysPlanetasCasasLocalCasa10.includes('urano')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 10. ');
            arrayConjunciones.push('MU10');
        }
        if (arraysPlanetasCasasLocalCasa10.includes('marte') && arraysPlanetasCasasLocalCasa10.includes('neptuno')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 10. ');
            arrayConjunciones.push('MN10');
        }
        if (arraysPlanetasCasasLocalCasa10.includes('marte') && arraysPlanetasCasasLocalCasa10.includes('pluton')) {
            // console.log('Hay una conjuncion de Marte y Pluton en casa 10. ');
            arrayConjunciones.push('MP10');
        }

        if (arraysPlanetasCasasLocalCasa10.length == 1)
            console.log('Marte esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa10.includes('venus')) {
        if (arraysPlanetasCasasLocalCasa10.includes('venus') && arraysPlanetasCasasLocalCasa10.includes('saturno')) {
            // console.log('Hay una conjuncion de Venus y Saturno en casa 10.');
            arrayConjunciones.push('VS10');
        }
        if (arraysPlanetasCasasLocalCasa10.includes('venus') && arraysPlanetasCasasLocalCasa10.includes('mercurio')) {
            // console.log('Hay una conjuncion de Venus y Mercurio en casa 10.');
            arrayConjunciones.push('VM10');
        }
        if (arraysPlanetasCasasLocalCasa10.includes('venus') && arraysPlanetasCasasLocalCasa10.includes('luna')) {
            // console.log('Hay una conjuncion de Venus y Luna en casa 10.');
            arrayConjunciones.push('VL10');
        }
        if (arraysPlanetasCasasLocalCasa10.includes('venus') && arraysPlanetasCasasLocalCasa10.includes('sol')) {
            // console.log('Hay una conjuncion de Venus y Sol en casa 10.');
            arrayConjunciones.push('VSo10');
        }
        if (arraysPlanetasCasasLocalCasa10.includes('venus') && arraysPlanetasCasasLocalCasa10.includes('urano')) {
            // console.log('Hay una conjuncion de Venus y Urano en casa 10.');
            arrayConjunciones.push('VU10');
        }
        if (arraysPlanetasCasasLocalCasa10.includes('venus') && arraysPlanetasCasasLocalCasa10.includes('neptuno')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 10.');
            arrayConjunciones.push('VN10');
        }
        if (arraysPlanetasCasasLocalCasa10.includes('venus') && arraysPlanetasCasasLocalCasa10.includes('pluton')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 10.');
            arrayConjunciones.push('VP10');
        }
        if (arraysPlanetasCasasLocalCasa10.length == 1)
            console.log('Venus esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa10.includes('saturno')) {
        if (arraysPlanetasCasasLocalCasa10.includes('saturno') && arraysPlanetasCasasLocalCasa10.includes('mercurio')) {
            // console.log('Hay una conjuncion de Saturno y Mercurio en casa 10.');
            arrayConjunciones.push('SM10');
        }

        if (arraysPlanetasCasasLocalCasa10.includes('saturno') && arraysPlanetasCasasLocalCasa10.includes('luna')) {
            // console.log('Hay una conjuncion de Saturno y Luna en casa 10.');
            arrayConjunciones.push('SL10');
        }

        if (arraysPlanetasCasasLocalCasa10.includes('saturno') && arraysPlanetasCasasLocalCasa10.includes('sol')) {
            // console.log('Hay una conjuncion de Saturno y Sol en casa 10.');
            arrayConjunciones.push('SSo10');
        }

        if (arraysPlanetasCasasLocalCasa10.includes('saturno') && arraysPlanetasCasasLocalCasa10.includes('urano')) {
            // console.log('Hay una conjuncion de Saturno y Urano en casa 10.');
            arrayConjunciones.push('SU10');
        }

        if (arraysPlanetasCasasLocalCasa10.includes('saturno') && arraysPlanetasCasasLocalCasa10.includes('neptuno')) {
            // console.log('Hay una conjuncion de Saturno y Neptuno en casa 10.');
            arrayConjunciones.push('SN10');
        }
        if (arraysPlanetasCasasLocalCasa10.includes('saturno') && arraysPlanetasCasasLocalCasa10.includes('pluton')) {
            // console.log('Hay una conjuncion de Saturno y Pluton en casa 10.');
            arrayConjunciones.push('SP10');
        }

        if (arraysPlanetasCasasLocalCasa10.length == 1) {
            console.log('Saturno esta solo en esta casa (10). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa10.includes('mercurio')) {
        if (arraysPlanetasCasasLocalCasa10.includes('mercurio') && arraysPlanetasCasasLocalCasa10.includes('luna')) {
            // console.log('Hay una conjuncion de Mercurio y Luna en casa 10.');
            arrayConjunciones.push('ML10');
        }

        if (arraysPlanetasCasasLocalCasa10.includes('mercurio') && arraysPlanetasCasasLocalCasa10.includes('sol')) {
            // console.log('Hay una conjuncion de Mercurio y Sol en casa 10.');
            arrayConjunciones.push('MSo10');
        }

        if (arraysPlanetasCasasLocalCasa10.includes('mercurio') && arraysPlanetasCasasLocalCasa10.includes('urano')) {
            // console.log('Hay una conjuncion de Mercurio y Urano en casa 10.');
            arrayConjunciones.push('MU10');
        }

        if (arraysPlanetasCasasLocalCasa10.includes('mercurio') && arraysPlanetasCasasLocalCasa10.includes('neptuno')) {
            // console.log('Hay una conjuncion de Mercurio y Neptuno en casa 10.');
            arrayConjunciones.push('MN10');
        }

        if (arraysPlanetasCasasLocalCasa10.includes('mercurio') && arraysPlanetasCasasLocalCasa10.includes('pluton')) {
            // console.log('Hay una conjuncion de Mercurio y Pluton en casa 10.');
            arrayConjunciones.push('MP10');
        }

        if (arraysPlanetasCasasLocalCasa10.length == 1) {
            console.log('Mercurio esta solo en esta casa (10). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa10.includes('luna')) {
        if (arraysPlanetasCasasLocalCasa10.includes('luna') && arraysPlanetasCasasLocalCasa10.includes('sol')) {
            // console.log('Hay una conjuncion de Luna y Sol en casa 10.');
            arrayConjunciones.push('LSo10');
        }

        if (arraysPlanetasCasasLocalCasa10.includes('luna') && arraysPlanetasCasasLocalCasa10.includes('urano')) {
            // console.log('Hay una conjuncion de Luna y Urano en casa 10.');
            arrayConjunciones.push('LU10');
        }

        if (arraysPlanetasCasasLocalCasa10.includes('luna') && arraysPlanetasCasasLocalCasa10.includes('neptuno')) {
            // console.log('Hay una conjuncion de Luna y Neptuno en casa 10.');
            arrayConjunciones.push('LN10');
        }

        if (arraysPlanetasCasasLocalCasa10.includes('luna') && arraysPlanetasCasasLocalCasa10.includes('pluton')) {
            // console.log('Hay una conjuncion de Luna y Pluton oen casa 10.');
            arrayConjunciones.push('LP10');
        }

        if (arraysPlanetasCasasLocalCasa10.length == 1) {
            console.log('La Luna esta sola en esta casa (10). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa10.includes('sol')) {
        if (arraysPlanetasCasasLocalCasa10.includes('sol') && arraysPlanetasCasasLocalCasa10.includes('urano')) {
            // console.log('Hay una conjuncion de el Sol y Urano en casa 10.');
            arrayConjunciones.push('SoU10');
        }

        if (arraysPlanetasCasasLocalCasa10.includes('sol') && arraysPlanetasCasasLocalCasa10.includes('neptuno')) {
            // console.log('Hay una conjuncion de el Sol y Neptuno en casa 10.');
            arrayConjunciones.push('SoN10');
        }

        if (arraysPlanetasCasasLocalCasa10.includes('sol') && arraysPlanetasCasasLocalCasa10.includes('pluton')) {
            // console.log('Hay una conjuncion de el Sol y Pluton en casa 10.');
            arrayConjunciones.push('SoP10');
        }

        if (arraysPlanetasCasasLocalCasa10.length == 1) {
            console.log('El Sol esta solo en esta casa (10). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa10.includes('urano')) {
        if (arraysPlanetasCasasLocalCasa10.includes('urano') && arraysPlanetasCasasLocalCasa10.includes('neptuno')) {
            // console.log('Hay una conjuncion de Urano y Neptuno en casa 10.');
            arrayConjunciones.push('UN10');
        }

        if (arraysPlanetasCasasLocalCasa10.includes('urano') && arraysPlanetasCasasLocalCasa10.includes('pluton')) {
            // console.log('Hay una conjuncion de Urano y Pluton en casa 10.');
            arrayConjunciones.push('UP10');
        }

        if (arraysPlanetasCasasLocalCasa10.length == 1) {
            console.log('Urano esta solo en esta casa (10). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa10.includes('neptuno')) {
        if (arraysPlanetasCasasLocalCasa10.includes('neptuno') && arraysPlanetasCasasLocalCasa10.includes('pluton')) {
            // console.log('Hay una conjuncion de Neptuno y Pluton en casa 10.');
            arrayConjunciones.push('NP10');
        }

        if (arraysPlanetasCasasLocalCasa10.length == 1) {
            console.log('Neptuno esta solo en esta casa (10). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa10.includes('pluton')) {

        if (arraysPlanetasCasasLocalCasa10.length == 1) {
            console.log('Pluton esta solo en esta casa (10). No hay conjuncion ');
        }
    }


    //========la propiedad include verificara cada planeta esta en Casa 11 y proseguira acorde=======

    if (arraysPlanetasCasasLocalCasa11.includes('marte')) {
        if (arraysPlanetasCasasLocalCasa11.includes('marte') && arraysPlanetasCasasLocalCasa11.includes('venus')) {
            // console.log('Hay una conjuncion de Marte y Venus en casa 11.');
            arrayConjunciones.push('MV11');
        }
        if (arraysPlanetasCasasLocalCasa11.includes('marte') && arraysPlanetasCasasLocalCasa11.includes('saturno')) {
            // console.log('Hay una conjuncion de Marte y Saturno en casa 11. ');
            arrayConjunciones.push('MS11');
        }
        if (arraysPlanetasCasasLocalCasa11.includes('marte') && arraysPlanetasCasasLocalCasa11.includes('mercurio')) {
            // console.log('Hay una conjuncion de Marte y Mercurio en casa 11. ');
            arrayConjunciones.push('MM11');
        }
        if (arraysPlanetasCasasLocalCasa11.includes('marte') && arraysPlanetasCasasLocalCasa11.includes('luna')) {
            // console.log('Hay una conjuncion de Marte y Luna en casa 11. ');
            arrayConjunciones.push('ML11');
        }
        if (arraysPlanetasCasasLocalCasa11.includes('marte') && arraysPlanetasCasasLocalCasa11.includes('sol')) {
            // console.log('Hay una conjuncion de Marte y Sol en casa 11. ');
            arrayConjunciones.push('MSo11');
        }
        if (arraysPlanetasCasasLocalCasa11.includes('marte') && arraysPlanetasCasasLocalCasa11.includes('urano')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 11. ');
            arrayConjunciones.push('MU11');
        }
        if (arraysPlanetasCasasLocalCasa11.includes('marte') && arraysPlanetasCasasLocalCasa11.includes('neptuno')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 11. ');
            arrayConjunciones.push('MN11');
        }
        if (arraysPlanetasCasasLocalCasa11.includes('marte') && arraysPlanetasCasasLocalCasa11.includes('pluton')) {
            // console.log('Hay una conjuncion de Marte y Pluton en casa 11. ');
            arrayConjunciones.push('MP11');
        }

        if (arraysPlanetasCasasLocalCasa11.length == 1)
            console.log('Marte esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa11.includes('venus')) {
        if (arraysPlanetasCasasLocalCasa11.includes('venus') && arraysPlanetasCasasLocalCasa11.includes('saturno')) {
            // console.log('Hay una conjuncion de Venus y Saturno en casa 11.');
            arrayConjunciones.push('VS11');
        }
        if (arraysPlanetasCasasLocalCasa11.includes('venus') && arraysPlanetasCasasLocalCasa11.includes('mercurio')) {
            // console.log('Hay una conjuncion de Venus y Mercurio en casa 11.');
            arrayConjunciones.push('VM11');
        }
        if (arraysPlanetasCasasLocalCasa11.includes('venus') && arraysPlanetasCasasLocalCasa11.includes('luna')) {
            // console.log('Hay una conjuncion de Venus y Luna en casa 11.');
            arrayConjunciones.push('VL11');
        }
        if (arraysPlanetasCasasLocalCasa11.includes('venus') && arraysPlanetasCasasLocalCasa11.includes('sol')) {
            // console.log('Hay una conjuncion de Venus y Sol en casa 11.');
            arrayConjunciones.push('VSo11');
        }
        if (arraysPlanetasCasasLocalCasa11.includes('venus') && arraysPlanetasCasasLocalCasa11.includes('urano')) {
            // console.log('Hay una conjuncion de Venus y Urano en casa 11.');
            arrayConjunciones.push('VU11');
        }
        if (arraysPlanetasCasasLocalCasa11.includes('venus') && arraysPlanetasCasasLocalCasa11.includes('neptuno')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 11.');
            arrayConjunciones.push('VN11');
        }
        if (arraysPlanetasCasasLocalCasa11.includes('venus') && arraysPlanetasCasasLocalCasa11.includes('pluton')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 11.');
            arrayConjunciones.push('VP11');
        }
        if (arraysPlanetasCasasLocalCasa11.length == 1)
            console.log('Venus esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa11.includes('saturno')) {
        if (arraysPlanetasCasasLocalCasa11.includes('saturno') && arraysPlanetasCasasLocalCasa11.includes('mercurio')) {
            // console.log('Hay una conjuncion de Saturno y Mercurio en casa 11.');
            arrayConjunciones.push('SM11');
        }

        if (arraysPlanetasCasasLocalCasa11.includes('saturno') && arraysPlanetasCasasLocalCasa11.includes('luna')) {
            // console.log('Hay una conjuncion de Saturno y Luna en casa 11.');
            arrayConjunciones.push('SL11');
        }

        if (arraysPlanetasCasasLocalCasa11.includes('saturno') && arraysPlanetasCasasLocalCasa11.includes('sol')) {
            // console.log('Hay una conjuncion de Saturno y Sol en casa 11.');
            arrayConjunciones.push('SSo11');
        }

        if (arraysPlanetasCasasLocalCasa11.includes('saturno') && arraysPlanetasCasasLocalCasa11.includes('urano')) {
            // console.log('Hay una conjuncion de Saturno y Urano en casa 11.');
            arrayConjunciones.push('SU11');
        }

        if (arraysPlanetasCasasLocalCasa11.includes('saturno') && arraysPlanetasCasasLocalCasa11.includes('neptuno')) {
            // console.log('Hay una conjuncion de Saturno y Neptuno en casa 11.');
            arrayConjunciones.push('SN11');
        }
        if (arraysPlanetasCasasLocalCasa11.includes('saturno') && arraysPlanetasCasasLocalCasa11.includes('pluton')) {
            // console.log('Hay una conjuncion de Saturno y Pluton en casa 11.');
            arrayConjunciones.push('SP11');
        }

        if (arraysPlanetasCasasLocalCasa11.length == 1) {
            console.log('Saturno esta solo en esta casa (11). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa11.includes('mercurio')) {
        if (arraysPlanetasCasasLocalCasa11.includes('mercurio') && arraysPlanetasCasasLocalCasa11.includes('luna')) {
            // console.log('Hay una conjuncion de Mercurio y Luna en casa 11.');
            arrayConjunciones.push('ML11');
        }

        if (arraysPlanetasCasasLocalCasa11.includes('mercurio') && arraysPlanetasCasasLocalCasa11.includes('sol')) {
            // console.log('Hay una conjuncion de Mercurio y Sol en casa 11.');
            arrayConjunciones.push('MSo11');
        }

        if (arraysPlanetasCasasLocalCasa11.includes('mercurio') && arraysPlanetasCasasLocalCasa11.includes('urano')) {
            // console.log('Hay una conjuncion de Mercurio y Urano en casa 11.');
            arrayConjunciones.push('MU11');
        }

        if (arraysPlanetasCasasLocalCasa11.includes('mercurio') && arraysPlanetasCasasLocalCasa11.includes('neptuno')) {
            // console.log('Hay una conjuncion de Mercurio y Neptuno en casa 11.');
            arrayConjunciones.push('MN11');
        }

        if (arraysPlanetasCasasLocalCasa11.includes('mercurio') && arraysPlanetasCasasLocalCasa11.includes('pluton')) {
            // console.log('Hay una conjuncion de Mercurio y Pluton en casa 11.');
            arrayConjunciones.push('MP11');
        }

        if (arraysPlanetasCasasLocalCasa11.length == 1) {
            console.log('Mercurio esta solo en esta casa (11). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa11.includes('luna')) {
        if (arraysPlanetasCasasLocalCasa11.includes('luna') && arraysPlanetasCasasLocalCasa11.includes('sol')) {
            // console.log('Hay una conjuncion de Luna y Sol en casa 11.');
            arrayConjunciones.push('LSo11');
        }

        if (arraysPlanetasCasasLocalCasa11.includes('luna') && arraysPlanetasCasasLocalCasa11.includes('urano')) {
            // console.log('Hay una conjuncion de Luna y Urano en casa 11.');
            arrayConjunciones.push('LU11');
        }

        if (arraysPlanetasCasasLocalCasa11.includes('luna') && arraysPlanetasCasasLocalCasa11.includes('neptuno')) {
            // console.log('Hay una conjuncion de Luna y Neptuno en casa 11.');
            arrayConjunciones.push('LN11');
        }

        if (arraysPlanetasCasasLocalCasa11.includes('luna') && arraysPlanetasCasasLocalCasa11.includes('pluton')) {
            // console.log('Hay una conjuncion de Luna y Pluton oen casa 11.');
            arrayConjunciones.push('LP11');
        }

        if (arraysPlanetasCasasLocalCasa11.length == 1) {
            console.log('La Luna esta sola en esta casa (11). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa11.includes('sol')) {
        if (arraysPlanetasCasasLocalCasa11.includes('sol') && arraysPlanetasCasasLocalCasa11.includes('urano')) {
            // console.log('Hay una conjuncion de el Sol y Urano en casa 11.');
            arrayConjunciones.push('SoU11');
        }

        if (arraysPlanetasCasasLocalCasa11.includes('sol') && arraysPlanetasCasasLocalCasa11.includes('neptuno')) {
            // console.log('Hay una conjuncion de el Sol y Neptuno en casa 11.');
            arrayConjunciones.push('SoN11');
        }

        if (arraysPlanetasCasasLocalCasa11.includes('sol') && arraysPlanetasCasasLocalCasa11.includes('pluton')) {
            // console.log('Hay una conjuncion de el Sol y Pluton en casa 11.');
            arrayConjunciones.push('SoP11');
        }

        if (arraysPlanetasCasasLocalCasa11.length == 1) {
            console.log('El Sol esta solo en esta casa (11). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa11.includes('urano')) {
        if (arraysPlanetasCasasLocalCasa11.includes('urano') && arraysPlanetasCasasLocalCasa11.includes('neptuno')) {
            // console.log('Hay una conjuncion de Urano y Neptuno en casa 11.');
            arrayConjunciones.push('UN11');
        }

        if (arraysPlanetasCasasLocalCasa11.includes('urano') && arraysPlanetasCasasLocalCasa11.includes('pluton')) {
            // console.log('Hay una conjuncion de Urano y Pluton en casa 11.');
            arrayConjunciones.push('UP11');
        }

        if (arraysPlanetasCasasLocalCasa11.length == 1) {
            console.log('Urano esta solo en esta casa (11). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa11.includes('neptuno')) {
        if (arraysPlanetasCasasLocalCasa11.includes('neptuno') && arraysPlanetasCasasLocalCasa11.includes('pluton')) {
            // console.log('Hay una conjuncion de Neptuno y Pluton en casa 11.');
            arrayConjunciones.push('NP11');
        }

        if (arraysPlanetasCasasLocalCasa11.length == 1) {
            console.log('Neptuno esta solo en esta casa (11). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa11.includes('pluton')) {

        if (arraysPlanetasCasasLocalCasa11.length == 1) {
            console.log('Pluton esta solo en esta casa (11). No hay conjuncion ');
        }
    }


    //========la propiedad include verificara cada planeta esta en Casa 12 y proseguira acorde=======

    if (arraysPlanetasCasasLocalCasa12.includes('marte')) {
        if (arraysPlanetasCasasLocalCasa12.includes('marte') && arraysPlanetasCasasLocalCasa12.includes('venus')) {
            // console.log('Hay una conjuncion de Marte y Venus en casa 12.');
            arrayConjunciones.push('MV12');
        }
        if (arraysPlanetasCasasLocalCasa12.includes('marte') && arraysPlanetasCasasLocalCasa12.includes('saturno')) {
            // console.log('Hay una conjuncion de Marte y Saturno en casa 12. ');
            arrayConjunciones.push('MS12');
        }
        if (arraysPlanetasCasasLocalCasa12.includes('marte') && arraysPlanetasCasasLocalCasa12.includes('mercurio')) {
            // console.log('Hay una conjuncion de Marte y Mercurio en casa 12. ');
            arrayConjunciones.push('MMe12');
        }
        if (arraysPlanetasCasasLocalCasa12.includes('marte') && arraysPlanetasCasasLocalCasa12.includes('luna')) {
            // console.log('Hay una conjuncion de Marte y Luna en casa 12. ');
            arrayConjunciones.push('ML12');
        }
        if (arraysPlanetasCasasLocalCasa12.includes('marte') && arraysPlanetasCasasLocalCasa12.includes('sol')) {
            // console.log('Hay una conjuncion de Marte y Sol en casa 12. ');
            arrayConjunciones.push('MSo12');
        }
        if (arraysPlanetasCasasLocalCasa12.includes('marte') && arraysPlanetasCasasLocalCasa12.includes('urano')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 12. ');
            arrayConjunciones.push('MU12');
        }
        if (arraysPlanetasCasasLocalCasa12.includes('marte') && arraysPlanetasCasasLocalCasa12.includes('neptuno')) {
            // console.log('Hay una conjuncion de Marte y Urano en casa 12. ');
            arrayConjunciones.push('MN12');
        }
        if (arraysPlanetasCasasLocalCasa12.includes('marte') && arraysPlanetasCasasLocalCasa12.includes('pluton')) {
            // console.log('Hay una conjuncion de Marte y Pluton en casa 12. ');
            arrayConjunciones.push('MP12');
        }

        if (arraysPlanetasCasasLocalCasa12.length == 1)
            console.log('Marte esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa12.includes('venus')) {
        if (arraysPlanetasCasasLocalCasa12.includes('venus') && arraysPlanetasCasasLocalCasa12.includes('saturno')) {
            // console.log('Hay una conjuncion de Venus y Saturno en casa 12.');
            arrayConjunciones.push('VS12');
        }
        if (arraysPlanetasCasasLocalCasa12.includes('venus') && arraysPlanetasCasasLocalCasa12.includes('mercurio')) {
            // console.log('Hay una conjuncion de Venus y Mercurio en casa 12.');
            arrayConjunciones.push('VMe12');
        }
        if (arraysPlanetasCasasLocalCasa12.includes('venus') && arraysPlanetasCasasLocalCasa12.includes('luna')) {
            // console.log('Hay una conjuncion de Venus y Luna en casa 12.');
            arrayConjunciones.push('VL12');
        }
        if (arraysPlanetasCasasLocalCasa12.includes('venus') && arraysPlanetasCasasLocalCasa12.includes('sol')) {
            // console.log('Hay una conjuncion de Venus y Sol en casa 12.');
            arrayConjunciones.push('VSo12');
        }
        if (arraysPlanetasCasasLocalCasa12.includes('venus') && arraysPlanetasCasasLocalCasa12.includes('urano')) {
            // console.log('Hay una conjuncion de Venus y Urano en casa 12.');
            arrayConjunciones.push('VU12');
        }
        if (arraysPlanetasCasasLocalCasa12.includes('venus') && arraysPlanetasCasasLocalCasa12.includes('neptuno')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 12.');
            arrayConjunciones.push('VN12');
        }
        if (arraysPlanetasCasasLocalCasa12.includes('venus') && arraysPlanetasCasasLocalCasa12.includes('pluton')) {
            // console.log('Hay una conjuncion de Venus y Neptuno en casa 12.');
            arrayConjunciones.push('VP12');
        }
        if (arraysPlanetasCasasLocalCasa12.length == 1)
            console.log('Venus esta solo en esta casa. No hay conjuncion ');
    }

    if (arraysPlanetasCasasLocalCasa12.includes('saturno')) {
        if (arraysPlanetasCasasLocalCasa12.includes('saturno') && arraysPlanetasCasasLocalCasa12.includes('mercurio')) {
            // console.log('Hay una conjuncion de Saturno y Mercurio en casa 12.');
            arrayConjunciones.push('SMe12');
        }

        if (arraysPlanetasCasasLocalCasa12.includes('saturno') && arraysPlanetasCasasLocalCasa12.includes('luna')) {
            // console.log('Hay una conjuncion de Saturno y Luna en casa 12.');
            arrayConjunciones.push('SL12');
        }

        if (arraysPlanetasCasasLocalCasa12.includes('saturno') && arraysPlanetasCasasLocalCasa12.includes('sol')) {
            // console.log('Hay una conjuncion de Saturno y Sol en casa 12.');
            arrayConjunciones.push('SSo12');
        }

        if (arraysPlanetasCasasLocalCasa12.includes('saturno') && arraysPlanetasCasasLocalCasa12.includes('urano')) {
            // console.log('Hay una conjuncion de Saturno y Urano en casa 12.');
            arrayConjunciones.push('SU12');
        }

        if (arraysPlanetasCasasLocalCasa12.includes('saturno') && arraysPlanetasCasasLocalCasa12.includes('neptuno')) {
            // console.log('Hay una conjuncion de Saturno y Neptuno en casa 12.');
            arrayConjunciones.push('SN12');
        }
        if (arraysPlanetasCasasLocalCasa12.includes('saturno') && arraysPlanetasCasasLocalCasa12.includes('pluton')) {
            // console.log('Hay una conjuncion de Saturno y Pluton en casa 12.');
            arrayConjunciones.push('SP12');
        }

        if (arraysPlanetasCasasLocalCasa12.length == 1) {
            console.log('Saturno esta solo en esta casa (12). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa12.includes('mercurio')) {
        if (arraysPlanetasCasasLocalCasa12.includes('mercurio') && arraysPlanetasCasasLocalCasa12.includes('luna')) {
            // console.log('Hay una conjuncion de Mercurio y Luna en casa 12.');
            arrayConjunciones.push('MeL12');
        }

        if (arraysPlanetasCasasLocalCasa12.includes('mercurio') && arraysPlanetasCasasLocalCasa12.includes('sol')) {
            // console.log('Hay una conjuncion de Mercurio y Sol en casa 12.');
            arrayConjunciones.push('MeSo12');
        }

        if (arraysPlanetasCasasLocalCasa12.includes('mercurio') && arraysPlanetasCasasLocalCasa12.includes('urano')) {
            // console.log('Hay una conjuncion de Mercurio y Urano en casa 12.');
            arrayConjunciones.push('MeU12');
        }

        if (arraysPlanetasCasasLocalCasa12.includes('mercurio') && arraysPlanetasCasasLocalCasa12.includes('neptuno')) {
            // console.log('Hay una conjuncion de Mercurio y Neptuno en casa 12.');
            arrayConjunciones.push('MeN12');
        }

        if (arraysPlanetasCasasLocalCasa12.includes('mercurio') && arraysPlanetasCasasLocalCasa12.includes('pluton')) {
            // console.log('Hay una conjuncion de Mercurio y Pluton en casa 12.');
            arrayConjunciones.push('MeP12');
        }

        if (arraysPlanetasCasasLocalCasa12.length == 1) {
            console.log('Mercurio esta solo en esta casa (12). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa12.includes('luna')) {
        if (arraysPlanetasCasasLocalCasa12.includes('luna') && arraysPlanetasCasasLocalCasa12.includes('sol')) {
            // console.log('Hay una conjuncion de Luna y Sol en casa 12.');
            arrayConjunciones.push('LSo12');
        }

        if (arraysPlanetasCasasLocalCasa12.includes('luna') && arraysPlanetasCasasLocalCasa12.includes('urano')) {
            // console.log('Hay una conjuncion de Luna y Urano en casa 12.');
            arrayConjunciones.push('LU12');
        }

        if (arraysPlanetasCasasLocalCasa12.includes('luna') && arraysPlanetasCasasLocalCasa12.includes('neptuno')) {
            // console.log('Hay una conjuncion de Luna y Neptuno en casa 12.');
            arrayConjunciones.push('LN12');
        }

        if (arraysPlanetasCasasLocalCasa12.includes('luna') && arraysPlanetasCasasLocalCasa12.includes('pluton')) {
            // console.log('Hay una conjuncion de Luna y Pluton oen casa 12.');
            arrayConjunciones.push('LP12');
        }

        if (arraysPlanetasCasasLocalCasa12.length == 1) {
            console.log('La Luna esta sola en esta casa (12). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa12.includes('sol')) {
        if (arraysPlanetasCasasLocalCasa12.includes('sol') && arraysPlanetasCasasLocalCasa12.includes('urano')) {
            // console.log('Hay una conjuncion de el Sol y Urano en casa 12.');
            arrayConjunciones.push('SoU12');
        }

        if (arraysPlanetasCasasLocalCasa12.includes('sol') && arraysPlanetasCasasLocalCasa12.includes('neptuno')) {
            // console.log('Hay una conjuncion de el Sol y Neptuno en casa 12.');
            arrayConjunciones.push('SoN12');
        }

        if (arraysPlanetasCasasLocalCasa12.includes('sol') && arraysPlanetasCasasLocalCasa12.includes('pluton')) {
            // console.log('Hay una conjuncion de el Sol y Pluton en casa 12.');
            arrayConjunciones.push('SoP12');
        }

        if (arraysPlanetasCasasLocalCasa12.length == 1) {
            console.log('El Sol esta solo en esta casa (12). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa12.includes('urano')) {
        if (arraysPlanetasCasasLocalCasa12.includes('urano') && arraysPlanetasCasasLocalCasa12.includes('neptuno')) {
            // console.log('Hay una conjuncion de Urano y Neptuno en casa 12.');
            arrayConjunciones.push('UN12');
        }

        if (arraysPlanetasCasasLocalCasa12.includes('urano') && arraysPlanetasCasasLocalCasa12.includes('pluton')) {
            // console.log('Hay una conjuncion de Urano y Pluton en casa 12.');
            arrayConjunciones.push('UP12');
        }

        if (arraysPlanetasCasasLocalCasa12.length == 1) {
            console.log('Urano esta solo en esta casa (12). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa12.includes('neptuno')) {
        if (arraysPlanetasCasasLocalCasa12.includes('neptuno') && arraysPlanetasCasasLocalCasa12.includes('pluton')) {
            // console.log('Hay una conjuncion de Neptuno y Pluton en casa 12.');
            arrayConjunciones.push('NP12');
        }

        if (arraysPlanetasCasasLocalCasa12.length == 1) {
            console.log('Neptuno esta solo en esta casa (12). No hay conjuncion ');
        }
    }

    if (arraysPlanetasCasasLocalCasa12.includes('pluton')) {

        if (arraysPlanetasCasasLocalCasa12.length == 1) {
            console.log('Pluton esta solo en esta casa (12). No hay conjuncion ');
        }
    }

    // console.log(arrayConjunciones);
    return arrayConjunciones;

}

const botoncalculofinal = document.getElementById("botoncalculofinal");
botoncalculofinal.addEventListener('click', function() { total(); });


function total() {
    var arrayConj = resultadosAspectos();
    resultado = '';
    MV = 0;
    MS = 0;
    VS = 0;
    MMe = 0;

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

        if (arrayConj[i].indexOf('MMe') != -1) {
            if (MMe != 1) {
                resultado = resultado + 'Hay una conjunción de Mercurio y Marte en tu carta. El significado es:--- \n';
                MM = 1;
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