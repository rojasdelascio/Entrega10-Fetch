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

var cambioCasaJ = document.getElementById("jupiter");
var cambioGradoJ = document.getElementById("gradoJupiter");
var cambioRegenteJ = document.getElementById("regenteJupiter");

var idscheckboxExt = ['checkboxmarte', 'checkboxvenus', 'checkboxsaturno', 'checkboxmercurio', 'checkboxluna', 'checkboxsol', 'checkboxurano', 'checkboxneptuno', 'checkboxjupiter', 'checkboxpluton'];
const [cm, cv, cs, cme, cl, cso, cu, cn, cj, cp] = [document.getElementById(idscheckboxExt[0]), document.getElementById(idscheckboxExt[1]), document.getElementById(idscheckboxExt[2]), document.getElementById(idscheckboxExt[3]), document.getElementById(idscheckboxExt[4]), document.getElementById(idscheckboxExt[5]), document.getElementById(idscheckboxExt[6]), document.getElementById(idscheckboxExt[7]), document.getElementById(idscheckboxExt[8]), document.getElementById(idscheckboxExt[9])];

cm.addEventListener('click', function() {
    if (document.getElementById(idscheckboxExt[0]).checked == false) {
        document.getElementById("gradoMarte").value = "";
        document.getElementById("marte").value = "";
    }
});

cv.addEventListener('click', function() {
    if (document.getElementById(idscheckboxExt[1]).checked == false) {
        document.getElementById("gradoVenus").value = "";
        document.getElementById("venus").value = "";
    }
});

cs.addEventListener('click', function() {
    if (document.getElementById(idscheckboxExt[2]).checked == false) {
        document.getElementById("gradoSaturno").value = "";
        document.getElementById("saturno").value = "";
    }
});

cme.addEventListener('click', function() {
    if (document.getElementById(idscheckboxExt[3]).checked == false) {
        document.getElementById("gradoMercurio").value = "";
        document.getElementById("mercurio").value = "";
    }
});

cl.addEventListener('click', function() {
    if (document.getElementById(idscheckboxExt[4]).checked == false) {
        document.getElementById("gradoLuna").value = "";
        document.getElementById("luna").value = "";
    }
});

cso.addEventListener('click', function() {
    if (document.getElementById(idscheckboxExt[5]).checked == false) {
        document.getElementById("gradoSol").value = "";
        document.getElementById("sol").value = "";
    }
});

cu.addEventListener('click', function() {
    if (document.getElementById(idscheckboxExt[6]).checked == false) {
        document.getElementById("gradoUrano").value = "";
        document.getElementById("urano").value = "";
    }
});

cn.addEventListener('click', function() {
    if (document.getElementById(idscheckboxExt[7]).checked == false) {
        document.getElementById("gradoNeptuno").value = "";
        document.getElementById("neptuno").value = "";
    }
});

cj.addEventListener('click', function() {
    if (document.getElementById(idscheckboxExt[8]).checked == false) {
        document.getElementById("gradoJupiter").value = "";
        document.getElementById("jupiter").value = "";
    }
});

cp.addEventListener('click', function() {
    if (document.getElementById(idscheckboxExt[9]).checked == false) {
        document.getElementById("gradoPluton").value = "";
        document.getElementById("pluton").value = "";
    }
});



//ahora, se añadira un eventListener a cada uno de los inputs de cada planeta, para que si hay algun cambio en...
//...alguno de sus parametros, entonces el contador se haga 0. Si el cont=0, entonces esto permitirà modificar..
//..la tabla de planetas
cambioCasaPl.addEventListener("change", function() {
    cont = 0;
});
cambioGradoPl.addEventListener("change", function() {
    cont = 0;
});
cambioRegentePl.addEventListener("change", function() {
    cont = 0;
});

cambioCasaM.addEventListener("change", function() {
    cont = 0;
});
cambioGradoM.addEventListener("change", function() {
    cont = 0;
});
cambioRegenteM.addEventListener("change", function() {
    cont = 0;
});

cambioCasaS.addEventListener("change", function() {
    cont = 0;
});
cambioGradoS.addEventListener("change", function() {
    cont = 0;
});
cambioRegenteS.addEventListener("change", function() {
    cont = 0;
});

cambioCasaL.addEventListener("change", function() {
    cont = 0;
});
cambioGradoL.addEventListener("change", function() {
    cont = 0;
});
cambioRegenteL.addEventListener("change", function() {
    cont = 0;
});

cambioCasaMe.addEventListener("change", function() {
    cont = 0;
});
cambioGradoMe.addEventListener("change", function() {
    cont = 0;
});
cambioRegenteMe.addEventListener("change", function() {
    cont = 0;
});

cambioCasaSo.addEventListener("change", function() {
    cont = 0;
});
cambioGradoSo.addEventListener("change", function() {
    cont = 0;
});
cambioRegenteSo.addEventListener("change", function() {
    cont = 0;
});

cambioCasaV.addEventListener("change", function() {
    cont = 0;
});
cambioGradoV.addEventListener("change", function() {
    cont = 0;
});
cambioRegenteV.addEventListener("change", function() {
    cont = 0;
});

cambioCasaN.addEventListener("change", function() {
    cont = 0;
});
cambioGradoN.addEventListener("change", function() {
    cont = 0;
});
cambioRegenteN.addEventListener("change", function() {
    cont = 0;
});

cambioCasaU.addEventListener("change", function() {
    cont = 0;
});
cambioGradoU.addEventListener("change", function() {
    cont = 0;
});
cambioRegenteU.addEventListener("change", function() {
    cont = 0;
});

cambioCasaJ.addEventListener("change", function() {
    cont = 0;
});
cambioGradoJ.addEventListener("change", function() {
    cont = 0;
});
cambioRegenteJ.addEventListener("change", function() {
    cont = 0;
});


const dibTabla = document.getElementById("dibujartabla");
//el script de abajo ejecutara la función cuando perciba un click en el boton con id "dibujartabla"
dibTabla.addEventListener('click', function() {
    var arrayIdsPlanetas = ["marte", "venus", "saturno", "mercurio", "luna", "sol", "urano", "neptuno", "pluton", "jupiter"];
    var arrayIdregentes = ["regenteMarte", "regenteVenus", "regenteSaturno", "regenteMercurio", "regenteLuna", "regenteSol", "regenteUrano", "regenteNeptuno", "regentePluton", "regenteJupiter"];
    var arrayIdgrados = ["gradoMarte", "gradoVenus", "gradoSaturno", "gradoMercurio", "gradoLuna", "gradoSol", "gradoUrano", "gradoNeptuno", "gradoPluton", "gradoJupiter"];
    var idTabla = "tablaplanetas__tabla";
    dibujarTabla(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados, idTabla);
});

const dibCarta = document.getElementById("dibujarcarta");
//el script de abajo ejecutara la función cuando perciba un click en el boton con id "dibujartabla"
dibCarta.addEventListener('click', function() {
    var arrayIdsPlanetas = ["marte", "venus", "saturno", "mercurio", "luna", "sol", "urano", "neptuno", "pluton", "jupiter"];
    var arrayIdregentes = ["regenteMarte", "regenteVenus", "regenteSaturno", "regenteMercurio", "regenteLuna", "regenteSol", "regenteUrano", "regenteNeptuno", "regentePluton", "regenteJupiter"];
    var arrayIdgrados = ["gradoMarte", "gradoVenus", "gradoSaturno", "gradoMercurio", "gradoLuna", "gradoSol", "gradoUrano", "gradoNeptuno", "gradoPluton", "gradoJupiter"];
    var idascendente = "ascendente";
    var paperid = "paper";
    dibujarCarta(paperid, arrayIdregentes, arrayIdsPlanetas, arrayIdgrados, idascendente);
});

//==============FUNCION QUE DIBUJA LA TABLA===============
function dibujarTabla(regente, parametros, grados, idTabla) {

    const AOP = arrayObjetosPlanetas(regente, parametros, grados);
    console.log(AOP);

    //arriba se cambiaba el contador a 0 con cada cambio de los inputs, para que..
    //..precisamente el if de abajo corriese si hubo cambios
    if (cont === 0) {
        //este script reemplazará la tabla actual por una vacia, para que no se repita y agreguen 2 tablas
        var borrador = document.getElementById(idTabla);
        var nodoTexto = borrador.childNodes[0];
        borrador.textContent = nodoTexto.textContent;


        //creando los headers de la tabla nuevamente para que aparezcan cuando hayan cambios
        const header = document.createElement('th');
        header.innerText = 'Planeta';
        header.className = "estilotabla"
        const root1 = document.getElementById(idTabla);
        root1.append(header);

        const header2 = document.createElement('th');
        header2.innerText = 'Grado';
        header2.className = "estilotabla"
        const root2 = document.getElementById(idTabla);
        root2.append(header2);

        const header3 = document.createElement('th');
        header3.innerText = 'Casa';
        header3.className = "estilotabla"
        const root3 = document.getElementById(idTabla);
        root3.append(header3);

        const header4 = document.createElement('th');
        header4.innerText = 'Regente';
        header4.className = "estilotabla"
        const root4 = document.getElementById(idTabla);
        root4.append(header4);

        const header5 = document.createElement('tr');
        const root5 = document.getElementById(idTabla);
        root5.append(header5);


        AOP.forEach(planeta => console.log(planeta.regente));
        const root = document.getElementById(idTabla);
        AOP.forEach(planeta => {

            const nombrePlaneta = document.createElement('td');
            nombrePlaneta.innerText = `${planeta.nombre}`;
            nombrePlaneta.className = "estilotabla"
            root.append(nombrePlaneta);

            const gradoNuevoPlaneta = document.createElement('td');
            gradoNuevoPlaneta.innerText = `${planeta.grado}`
            gradoNuevoPlaneta.className = "estilotabla"
            root.append(gradoNuevoPlaneta);

            const casaNuevoPlaneta = document.createElement('td');
            casaNuevoPlaneta.innerText = `${planeta.casa}`;
            casaNuevoPlaneta.className = "estilotabla"
            root.append(casaNuevoPlaneta);

            const signoNuevoPlaneta = document.createElement('td');
            signoNuevoPlaneta.innerText = `${planeta.regente}`;
            signoNuevoPlaneta.className = "estilotabla"
            root.append(signoNuevoPlaneta);

            const salto = document.createElement('tr');
            root.append(salto);
        })

    }
    cont = 1;
}





//esta funcion buscara si hay conjuncion entre dos planetas (es decir si 2 estan en la misma casa), y dirá que significa esto
//============FUNCION QUE ARROJA ARRAY CON CONJUNCIONES===========



const botoncalculofinal = document.getElementById("botoncalculofinal");
botoncalculofinal.addEventListener('click', function() { totalNoVacio(); });


function totalNoVacio() {

    var idsPlanetas = ['resultadosExterno__div3__marteUL', 'resultadosExterno__div3__venusUL', 'resultadosExterno__div3__mercurioUL', 'resultadosExterno__div3__saturnoUL', 'resultadosExterno__div3__lunaUL', 'resultadosExterno__div3__solUL', 'resultadosExterno__div3__uranoUL', 'resultadosExterno__div3__neptunoUL', 'resultadosExterno__div3__jupiterUL', 'resultadosExterno__div3__plutonUL'];
    var idsCasas = ['casa1resultadosExternoUL', 'casa2resultadosExternoUL', 'casa3resultadosExternoUL', 'casa4resultadosExternoUL', 'casa5resultadosExternoUL', 'casa6resultadosExternoUL', 'casa7resultadosExternoUL', 'casa8resultadosExternoUL', 'casa9resultadosExternoUL', 'casa10resultadosExternoUL', 'casa11resultadosExternoUL', 'casa12resultadosExternoUL'];
    var idConjunciones = 'resultadosExterno__div3__UL';
    var arrayIdsPlanetas = ["marte", "venus", "saturno", "mercurio", "luna", "sol", "urano", "neptuno", "pluton", "jupiter"];
    var arrayIdregentes = ["regenteMarte", "regenteVenus", "regenteSaturno", "regenteMercurio", "regenteLuna", "regenteSol", "regenteUrano", "regenteNeptuno", "regentePluton", "regenteJupiter"];
    var arrayIdgrados = ["gradoMarte", "gradoVenus", "gradoSaturno", "gradoMercurio", "gradoLuna", "gradoSol", "gradoUrano", "gradoNeptuno", "gradoPluton", "gradoJupiter"];
    // var arrayIdsPlanetas = ['marte', 'venus', 'saturno','mercurio', 'luna', 'sol', 'urano', 'neptuno', 'pluton', 'jupiter'];
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    var idscheckbox = ['checkboxmarte', 'checkboxvenus', 'checkboxsaturno', 'checkboxmercurio', 'checkboxluna', 'checkboxsol', 'checkboxurano', 'checkboxneptuno', 'checkboxjupiter', 'checkboxpluton'];

    //OPERADOR TERNARIO para que no se ejecute el resultado final si no hay nombre y apellido
    (nombre != '' && apellido != '') ? total(idConjunciones, idsPlanetas, idsCasas, arrayIdsPlanetas, arrayIdregentes, arrayIdgrados, idscheckbox): alert('Ingrese un nombre y un apellido');

}


function ischecked(array) {
    // var idscheckbox = ['checkboxmarte', 'checkboxvenus', 'checkboxsaturno', 'checkboxmercurio', 'checkboxluna', 'checkboxsol', 'checkboxurano', 'checkboxneptuno', 'checkboxjupiter', 'checkboxpluton'];
    var idscheckbox = array;

    if (document.getElementById(array[0]).checked == true) {
        console.log(idscheckbox[0].value);
        console.log("marte esta checkeado");
    }

    if (document.getElementById(array[1]).checked == true) {
        console.log(idscheckbox[1].value);
        console.log("venus esta checkeado");
    }

    if (document.getElementById(array[2]).checked == true) {
        console.log(idscheckbox[2].value);
        console.log("saturno esta checkeado");
    }

    if (document.getElementById(idscheckbox[3]).checked == true) {
        console.log(idscheckbox[3].value);
        console.log("mercurio esta checkeado");
    }

    if (document.getElementById(idscheckbox[4]).checked == true) {
        console.log(idscheckbox[4].value);
        console.log("luna esta checkeado");
    }

    if (document.getElementById(idscheckbox[5]).checked == true) {
        console.log(idscheckbox[5].value);
        console.log("sol esta checkeado");
    }

    if (document.getElementById(idscheckbox[6]).checked == true) {
        console.log(idscheckbox[6].value);
        console.log("urano esta checkeado");
    }

    if (document.getElementById(idscheckbox[7]).checked == true) {
        console.log(idscheckbox[7].value);
        console.log("neptuno esta checkeado");
    }

    if (document.getElementById(idscheckbox[9]).checked == true) {
        console.log(idscheckbox[9].value);
        console.log("pluton esta checkeado");
    }

    if (document.getElementById(idscheckbox[8]).checked == true) {
        console.log(idscheckbox[8].value);
        console.log("jupiter esta checkeado");
    }
}





//Funcion de alto nivel para calcular el grado total, que consistira en el grado inicial correspondiente a la casa MAS el ingresado por el usuario
function casaMasGrados(p, idascendente) {

    var gradoTotal = 0;
    var gradoPorCasa = cuspPlacement(idascendente);
    console.log('grado por casa es: ' + gradoPorCasa);
    return function(g) {

        switch (p) {
            case '1':
                gradoTotal = gradoPorCasa[0] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case '2':
                gradoTotal = gradoPorCasa[1] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case '3':
                gradoTotal = gradoPorCasa[2] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case '4':
                gradoTotal = gradoPorCasa[3] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case '5':
                gradoTotal = gradoPorCasa[4] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case '6':
                gradoTotal = gradoPorCasa[5] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case '7':
                gradoTotal = gradoPorCasa[6] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case '8':
                gradoTotal = gradoPorCasa[7] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case '9':
                gradoTotal = gradoPorCasa[8] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case '10':
                gradoTotal = gradoPorCasa[9] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case '11':
                gradoTotal = gradoPorCasa[10] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case '12':
                gradoTotal = gradoPorCasa[11] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case "1st House":
                gradoTotal = gradoPorCasa[0] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case "2nd House":
                gradoTotal = gradoPorCasa[1] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case "3rd House":
                gradoTotal = gradoPorCasa[2] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case "4th House":
                gradoTotal = gradoPorCasa[3] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case "5th House":
                gradoTotal = gradoPorCasa[4] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case "6th House":
                gradoTotal = gradoPorCasa[5] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case "7th House":
                gradoTotal = gradoPorCasa[6] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case "8th House":
                gradoTotal = gradoPorCasa[7] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case "9th House":
                gradoTotal = gradoPorCasa[8] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case "10th House":
                gradoTotal = gradoPorCasa[9] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case "11th House":
                gradoTotal = gradoPorCasa[10] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
            case "12th House":
                gradoTotal = gradoPorCasa[11] + g;
                console.log("grado total es: ");
                console.log(gradoTotal);
                return gradoTotal;
        }
    }
}


//LIBRERIAS ENTREGA 28 DE MARZO 2022

function dibujarCarta(paperid, regente, parametros, grados, idascendente) {
    var borrador = document.getElementById(paperid);
    var nodoTexto = borrador.childNodes;
    borrador.textContent = nodoTexto.textContent;

    cuspidesLocal = cuspPlacement(idascendente);

    function totales(f) {
        var gradoCasa = casaMasGrados(f.casa, idascendente);
        var gradoTotal = [gradoCasa(f.grado)];
        console.log("grato total es: ");
        console.log(gradoTotal)
        return gradoTotal;
    }

    // var arrayIdsPlanetas = ["marte", "venus", "saturno", "mercurio", "luna", "sol", "urano", "neptuno", "pluton", "jupiter"];
    // var arrayIdregentes = ["regenteMarte", "regenteVenus", "regenteSaturno", "regenteMercurio", "regenteLuna", "regenteSol", "regenteUrano", "regenteNeptuno", "regentePluton", "regenteJupiter"];
    // var arrayIdgrados = ["gradoMarte", "gradoVenus", "gradoSaturno", "gradoMercurio", "gradoLuna", "gradoSol", "gradoUrano", "gradoNeptuno", "gradoPluton", "gradoJupiter"];
    var arrayIdsPlanetas = parametros;
    var arrayIdregentes = regente;
    var arrayIdgrados = grados;

    var arrayDeObjetosPlanetas = [infoMarte(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados), infoVenus(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados), infoSaturno(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados), infoMercurio(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados), infoLuna(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados), infoSol(arrayIdsPlanetas, arrayIdregentes, arrayIdgrados), infoUrano(arrayIdsPlanetas, arrayIdregentes, arrayIdgrados), infoNeptuno(arrayIdsPlanetas, arrayIdregentes, arrayIdgrados), infoPluton(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados), infoJupiter(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados)];

    var data = {
        "planets": { "Pluto": totales(infoPluton(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados)), "Neptune": totales(infoNeptuno(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados)), "Uranus": totales(infoUrano(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados)), "Saturn": totales(infoSaturno(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados)), "Jupiter": totales(infoJupiter(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados)), "Mars": totales(infoMarte(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados)), "Moon": totales(infoLuna(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados)), "Sun": totales(infoSol(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados)), "Mercury": totales(infoMercurio(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados)), "Venus": totales(infoVenus(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados)) },
        "cusps": cuspPlacement(idascendente)
    };

    console.log(data);

    var radix = new astrology.Chart(paperid, 600, 600).radix(data);

    radix.addPointsOfInterest({ "As": [data.cusps[0]], "Ic": [data.cusps[3]], "Ds": [data.cusps[6]], "Mc": [data.cusps[9]] });
    radix.aspects();

    astrology.SVG(paperid, 300, 300);


}

function cuspPlacement(idascendente) {
    var cuspides = [];
    var ascendenteLocal = document.getElementById(idascendente).value;
    console.log(ascendenteLocal);
    switch (ascendenteLocal) {
        case "aries":
            cuspides = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
            return cuspides;
        case "tauro":
            cuspides = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 0];
            return cuspides;
        case "geminis":
            cuspides = [60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 0, 30];
            return cuspides;
        case "cancer":
            cuspides = [90, 120, 150, 180, 210, 240, 270, 300, 330, 0, 30, 60];
            return cuspides;
        case "leo":
            cuspides = [120, 150, 180, 210, 240, 270, 300, 330, 0, 30, 60, 90];
            return cuspides;
        case "virgo":
            cuspides = [150, 180, 210, 240, 270, 300, 330, 0, 30, 60, 90, 120];
            return cuspides;
        case "libra":
            cuspides = [180, 210, 240, 270, 300, 330, 0, 30, 60, 90, 120, 150];
            return cuspides;
        case "escorpio":
            cuspides = [210, 240, 270, 300, 330, 0, 30, 60, 90, 120, 150, 180];
            return cuspides;
        case "sagitario":
            cuspides = [240, 270, 300, 330, 0, 30, 60, 90, 120, 150, 180, 210];
            return cuspides;
        case "capricornio":
            cuspides = [270, 300, 330, 0, 30, 60, 90, 120, 150, 180, 210, 240];
            return cuspides;
        case "acuario":
            cuspides = [300, 330, 0, 30, 60, 90, 120, 150, 180, 210, 240, 270];
            return cuspides;
        case "piscis":
            cuspides = [330, 0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300];
            return cuspides;
            //ahora con los de calculadoraAPI

        case "Ari":
            cuspides = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
            return cuspides;
        case "Tau":
            cuspides = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 0];
            return cuspides;
        case "Gem":
            cuspides = [60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 0, 30];
            return cuspides;
        case "Can":
            cuspides = [90, 120, 150, 180, 210, 240, 270, 300, 330, 0, 30, 60];
            return cuspides;
        case "Leo":
            cuspides = [120, 150, 180, 210, 240, 270, 300, 330, 0, 30, 60, 90];
            return cuspides;
        case "Vir":
            cuspides = [150, 180, 210, 240, 270, 300, 330, 0, 30, 60, 90, 120];
            return cuspides;
        case "Lib":
            cuspides = [180, 210, 240, 270, 300, 330, 0, 30, 60, 90, 120, 150];
            return cuspides;
        case "Sco":
            cuspides = [210, 240, 270, 300, 330, 0, 30, 60, 90, 120, 150, 180];
            return cuspides;
        case "Sag":
            cuspides = [240, 270, 300, 330, 0, 30, 60, 90, 120, 150, 180, 210];
            return cuspides;
        case "Cap":
            cuspides = [270, 300, 330, 0, 30, 60, 90, 120, 150, 180, 210, 240];
            return cuspides;
        case "Aqu":
            cuspides = [300, 330, 0, 30, 60, 90, 120, 150, 180, 210, 240, 270];
            return cuspides;
        case "Pis":
            cuspides = [330, 0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300];
            return cuspides;
    }


}


function asignacionSignos(idascendente) {

    var cuspides = cuspPlacement(idascendente);
    var cuspide1 = cuspides[0];
    console.log(cuspide1);
    var arraySignos = [];


    switch (cuspide1) {

        case 0:
            arraySignos = ["aries", "tauro", "geminis", "cancer", "leo", "virgo", "libra", "escorpio", "sagitario", "capricornio", "acuario", "piscis"];
            return arraySignos;
        case 30:
            arraySignos = ["tauro", "geminis", "cancer", "leo", "virgo", "libra", "escorpio", "sagitario", "capricornio", "acuario", "piscis", "aries"];
            return arraySignos;
        case 60:
            arraySignos = ["geminis", "cancer", "leo", "virgo", "libra", "escorpio", "sagitario", "capricornio", "acuario", "piscis", "aries", "tauro"];
            return arraySignos;
        case 90:
            arraySignos = ["cancer", "leo", "virgo", "libra", "escorpio", "sagitario", "capricornio", "acuario", "piscis", "aries", "tauro", "geminis"];
            return arraySignos;
        case 120:
            arraySignos = ["leo", "virgo", "libra", "escorpio", "sagitario", "capricornio", "acuario", "piscis", "aries", "tauro", "geminis", "cancer"];
            return arraySignos;
        case 150:
            arraySignos = ["virgo", "libra", "escorpio", "sagitario", "capricornio", "acuario", "piscis", "aries", "tauro", "geminis", "cancer", "leo"];
            return arraySignos;
        case 180:
            arraySignos = ["libra", "escorpio", "sagitario", "capricornio", "acuario", "piscis", "aries", "tauro", "geminis", "cancer", "leo", "virgo"];
            return arraySignos;
        case 210:
            arraySignos = ["escorpio", "sagitario", "capricornio", "acuario", "piscis", "aries", "tauro", "geminis", "cancer", "leo", "virgo", "libra"];
            return arraySignos;
        case 240:
            arraySignos = ["sagitario", "capricornio", "acuario", "piscis", "aries", "tauro", "geminis", "cancer", "leo", "virgo", "libra", "escorpio"];
            return arraySignos;
        case 270:
            arraySignos = ["capricornio", "acuario", "piscis", "aries", "tauro", "geminis", "cancer", "leo", "virgo", "libra", "escorpio", "sagitario"];
            return arraySignos;
        case 300:
            arraySignos = ["acuario", "piscis", "aries", "tauro", "geminis", "cancer", "leo", "virgo", "libra", "escorpio", "sagitario", "capricornio"];
            return arraySignos;
        case 330:
            arraySignos = ["piscis", "aries", "tauro", "geminis", "cancer", "leo", "virgo", "libra", "escorpio", "sagitario", "capricornio", "acuario"];
            return arraySignos;
    }
}

var arrayIdsPlanetas = ["marte", "venus", "saturno", "mercurio", "luna", "sol", "urano", "neptuno", "pluton", "jupiter"];
var arrayIdregentes = ["regenteMarte", "regenteVenus", "regenteSaturno", "regenteMercurio", "regenteLuna", "regenteSol", "regenteUrano", "regenteNeptuno", "regentePluton", "regenteJupiter"];
var arrayIdgrados = ["gradoMarte", "gradoVenus", "gradoSaturno", "gradoMercurio", "gradoLuna", "gradoSol", "gradoUrano", "gradoNeptuno", "gradoPluton", "gradoJupiter"];
var idAscendenteL = "ascendente";
var rectificarCasaMarte = document.getElementById("marte");
rectificarCasaMarte.addEventListener('change', function() { cambiarValores(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados, idAscendenteL) });
var rectificarCasaSaturno = document.getElementById("saturno");
rectificarCasaSaturno.addEventListener('change', function() { cambiarValores(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados, idAscendenteL) });
var rectificarCasaVenus = document.getElementById("venus");
rectificarCasaVenus.addEventListener('change', function() { cambiarValores(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados, idAscendenteL) });
var rectificarCasaMercurio = document.getElementById("mercurio");
rectificarCasaMercurio.addEventListener('change', function() { cambiarValores(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados, idAscendenteL) });
var rectificarCasaUrano = document.getElementById("urano");
rectificarCasaUrano.addEventListener('change', function() { cambiarValores(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados, idAscendenteL) });
var rectificarCasaNeptuno = document.getElementById("neptuno");
rectificarCasaNeptuno.addEventListener('change', function() { cambiarValores(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados, idAscendenteL) });
var rectificarCasaLuna = document.getElementById("luna");
rectificarCasaLuna.addEventListener('change', function() { cambiarValores(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados, idAscendenteL) });
var rectificarCasaSol = document.getElementById("sol");
rectificarCasaSol.addEventListener('change', function() { cambiarValores(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados, idAscendenteL) });
var rectificarCasaPluton = document.getElementById("pluton");
rectificarCasaPluton.addEventListener('change', function() { cambiarValores(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados, idAscendenteL) });
var rectificarCasaJupiter = document.getElementById("jupiter");
rectificarCasaJupiter.addEventListener('change', function() { cambiarValores(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados, idAscendenteL) });
var rectificarCasaJupiter = document.getElementById("jupiter");
rectificarCasaJupiter.addEventListener('change', function() { cambiarValores(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados, idAscendenteL) });
var rectificarOnAscendente = document.getElementById("ascendente");
rectificarOnAscendente.addEventListener('change', function() { cambiarValores(arrayIdregentes, arrayIdsPlanetas, arrayIdgrados, idAscendenteL) });

function cambiarValores(regente, parametros, grados, idascendente) {

    arrayDeObjetosLocal = arrayObjetosPlanetas(regente, parametros, grados);
    arraySignosLocal = asignacionSignos(idascendente);

    idSignoMarteLocal = parseInt((arrayDeObjetosLocal[0].casa)) - 1;
    idSignoVenusLocal = parseInt((arrayDeObjetosLocal[1].casa)) - 1;
    idSignoSaturnoLocal = parseInt((arrayDeObjetosLocal[2].casa)) - 1;
    idSignoMercurioLocal = parseInt((arrayDeObjetosLocal[3].casa)) - 1;
    idSignoLunaLocal = parseInt((arrayDeObjetosLocal[4].casa)) - 1;
    idSignoSolLocal = parseInt((arrayDeObjetosLocal[5].casa)) - 1;
    idSignoUranoLocal = parseInt((arrayDeObjetosLocal[6].casa)) - 1;
    idSignoNeptunoLocal = parseInt((arrayDeObjetosLocal[7].casa)) - 1;
    idSignoPlutonLocal = parseInt((arrayDeObjetosLocal[8].casa)) - 1;
    idSignoJupiterLocal = parseInt((arrayDeObjetosLocal[9].casa)) - 1;

    console.log('EL SIGNO DE MARTE ES' + arraySignosLocal[idSignoMarteLocal]);

    document.getElementById(regente[0]).value = arraySignosLocal[idSignoMarteLocal];
    document.getElementById(regente[1]).value = arraySignosLocal[idSignoVenusLocal];
    document.getElementById(regente[2]).value = arraySignosLocal[idSignoSaturnoLocal];
    document.getElementById(regente[3]).value = arraySignosLocal[idSignoMercurioLocal];
    document.getElementById(regente[4]).value = arraySignosLocal[idSignoLunaLocal];
    document.getElementById(regente[5]).value = arraySignosLocal[idSignoSolLocal];
    document.getElementById(regente[6]).value = arraySignosLocal[idSignoUranoLocal];
    document.getElementById(regente[7]).value = arraySignosLocal[idSignoNeptunoLocal];
    document.getElementById(regente[8]).value = arraySignosLocal[idSignoPlutonLocal];
    document.getElementById(regente[9]).value = arraySignosLocal[idSignoJupiterLocal];

}