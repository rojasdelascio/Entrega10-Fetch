function ResPlanetasCasas(planetas, i) {



    console.log('Cuando recien llega a resultados arraydeobjcore llega asi:');
    console.log(planetas);

    var arrayObjPlanetas = planetas;

    console.log('arrayObjPlanetas es:');
    console.log(arrayObjPlanetas);
    var cont = 0;



    arrayObjPlanetas.forEach(element => {


        console.log('En cada iteracion sale asi:');
        console.log(element);

        nuevosCondicionales(element, i);
        modificarPlanetasDom(element);

    })


    // borrador(cont, i);
}




// function borrador(cont, i) {

//     if (cont === 1) {

//         var borrador = document.getElementById("resultados2__div2");
//         var nodoTexto = borrador.childNodes[0];

//     }

//     if (i = 2) {

//         borrador.innerText = nodoTexto.innerText;
//     }

// }

var botonClick = document.getElementById("resultadosAPIBoton");
botonClick.addEventListener('click', function() {


});

// botonClick.addEventListener('click', function() {
//     cont++;

// var cont = 0;


// const reiniciarCont1 = document.getElementById("paises");
// const reiniciarCont2 = document.getElementById("ciudades");
// const reiniciarCont3 = document.getElementById("day");
// const reiniciarCont4 = document.getElementById("month");
// const reiniciarCont5 = document.getElementById("hora");
// const reiniciarCont6 = document.getElementById("minutos");

// reiniciarCont1.addEventListener('click', function() { reiniciarCont(); });
// reiniciarCont2.addEventListener('click', function() { reiniciarCont(); });
// reiniciarCont3.addEventListener('click', function() { reiniciarCont(); });
// reiniciarCont4.addEventListener('click', function() { reiniciarCont(); });
// reiniciarCont5.addEventListener('click', function() { reiniciarCont(); });
// reiniciarCont6.addEventListener('click', function() { reiniciarCont(); });


// cont = window.onload = function() {
//     var cont = 0;
//     return cont;
// }
// console.log(`CONT ESSSSSSS  ${cont}`)

// var botonClick = document.getElementById("resultadosAPIBoton");
// botonClick.addEventListener('click', function() {
//     cont++;

// });


function nuevosCondicionales(array, i) {


    //si se cliquea al boton ObtenerResultados por 2da vez, y no han habido cambios, entonces cont sera.. 
    //..mayor que 10 y dara un error a propósito para que no se repitan resultados


    console.log('ASI LLEGA A NUEVOS CONDICIONALES')
    var arrayLocal = {...array }
    console.log(arrayLocal);
    var arrayLocalNombre = JSON.stringify(arrayLocal.nombre);
    console.log(arrayLocalNombre);




    if (arrayLocal.casa == "1st House") {
        //========CASA 1=========================================================================
        if (arrayLocal.nombre == "Mars") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento1 = document.createElement('p');
            elemento1.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento12 = document.getElementById('casa1resultados2div');
            elemento12.append(elemento1);

        } else if (arrayLocal.nombre == "Venus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento1 = document.createElement('p');
            elemento1.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento12 = document.getElementById('casa1resultados2div');
            elemento12.append(elemento1);

        } else if (arrayLocal.nombre == "Saturn") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento1 = document.createElement('p');
            elemento1.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento12 = document.getElementById('casa1resultados2div');
            elemento12.append(elemento1);

        } else if (arrayLocal.nombre == "Mercury") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento1 = document.createElement('p');
            elemento1.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento12 = document.getElementById('casa1resultados2div');
            elemento12.append(elemento1);

        } else if (arrayLocal.nombre == "Sun") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento1 = document.createElement('p');
            elemento1.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento12 = document.getElementById('casa1resultados2div');
            elemento12.append(elemento1);

        } else if (arrayLocal.nombre == "Moon") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento1 = document.createElement('p');
            elemento1.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento12 = document.getElementById('casa1resultados2div');
            elemento12.append(elemento1);

        } else if (arrayLocal.nombre == "Uranus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento1 = document.createElement('p');
            elemento1.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento12 = document.getElementById('casa1resultados2div');
            elemento12.append(elemento1);

        } else if (arrayLocal.nombre == "Neptune") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento1 = document.createElement('p');
            elemento1.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento12 = document.getElementById('casa1resultados2div');
            elemento12.append(elemento1);

        } else if (arrayLocal.nombre == "Pluto") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento1 = document.createElement('p');
            elemento1.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento12 = document.getElementById('casa1resultados2div2');
            elemento12.append(elemento1);

        } else if (arrayLocal.nombre == "Jupiter") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento1 = document.createElement('p');
            elemento1.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento12 = document.getElementById('casa1resultados2div');
            elemento12.append(elemento1);
        }

    }
    if (arrayLocal.casa == "2nd House") {
        //========CASA 2=========================================================================
        if (arrayLocal.nombre == "Mars") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento1 = document.createElement('p');
            elemento1.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento21 = document.getElementById('casa2resultados2div');
            elemento21.append(elemento1);

        } else if (arrayLocal.nombre == "Venus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento1 = document.createElement('p');
            elemento1.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento21 = document.getElementById('casa2resultados2div');
            elemento21.append(elemento1);

        } else if (arrayLocal.nombre == "Saturn") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento1 = document.createElement('p');
            elemento1.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento21 = document.getElementById('casa2resultados2div');
            elemento21.append(elemento1);

        } else if (arrayLocal.nombre == "Mercury") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento1 = document.createElement('p');
            elemento1.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento21 = document.getElementById('casa2resultados2div');
            elemento21.append(elemento1);

        } else if (arrayLocal.nombre == "Sun") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento1 = document.createElement('p');
            elemento1.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento21 = document.getElementById('casa2resultados2div');
            elemento21.append(elemento1);

        } else if (arrayLocal.nombre == "Moon") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento1 = document.createElement('p');
            elemento1.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento21 = document.getElementById('casa2resultados2div');
            elemento21.append(elemento1);

        } else if (arrayLocal.nombre == "Uranus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento1 = document.createElement('p');
            elemento1.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento21 = document.getElementById('casa2resultados2div');
            elemento21.append(elemento1);

        } else if (arrayLocal.nombre == "Neptune") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento1 = document.createElement('p');
            elemento1.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento21 = document.getElementById('casa2resultados2div');
            elemento21.append(elemento1);

        } else if (arrayLocal.nombre == "Pluto") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento1 = document.createElement('p');
            elemento1.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento21 = document.getElementById('casa2resultados2div');
            elemento21.append(elemento1);

        } else if (arrayLocal.nombre == "Jupiter") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento1 = document.createElement('p');
            elemento1.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento21 = document.getElementById('casa2resultados2div');
            elemento21.append(elemento1);
        }

    }
    if (arrayLocal.casa == "3rd House") {
        //========CASA 3=========================================================================
        if (arrayLocal.nombre == "Mars") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento3 = document.createElement('p');
            elemento3.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento23 = document.getElementById('casa3resultados2div');
            elemento23.append(elemento3);

        } else if (arrayLocal.nombre == "Venus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento3 = document.createElement('p');
            elemento3.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento23 = document.getElementById('casa3resultados2div');
            elemento23.append(elemento3);

        } else if (arrayLocal.nombre == "Saturn") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento3 = document.createElement('p');
            elemento3.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento23 = document.getElementById('casa3resultados2div');
            elemento23.append(elemento3);

        } else if (arrayLocal.nombre == "Mercury") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento3 = document.createElement('p');
            elemento3.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento23 = document.getElementById('casa3resultados2div');
            elemento23.append(elemento3);

        } else if (arrayLocal.nombre == "Sun") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento3 = document.createElement('p');
            elemento3.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento23 = document.getElementById('casa3resultados2div');
            elemento23.append(elemento3);

        } else if (arrayLocal.nombre == "Moon") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento3 = document.createElement('p');
            elemento3.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento23 = document.getElementById('casa3resultados2div');
            elemento23.append(elemento3);

        } else if (arrayLocal.nombre == "Uranus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento3 = document.createElement('p');
            elemento3.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento23 = document.getElementById('casa3resultados2div');
            elemento23.append(elemento3);

        } else if (arrayLocal.nombre == "Neptune") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento3 = document.createElement('p');
            elemento3.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento23 = document.getElementById('casa3resultados2div');
            elemento23.append(elemento3);

        } else if (arrayLocal.nombre == "Pluto") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento3 = document.createElement('p');
            elemento3.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento23 = document.getElementById('casa3resultados2div');
            elemento23.append(elemento3);

        } else if (arrayLocal.nombre == "Jupiter") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento3 = document.createElement('p');
            elemento3.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento23 = document.getElementById('casa3resultados2div');
            elemento23.append(elemento3);
        }

    }

    if (arrayLocal.casa == "4th House") {
        //========CASA 4=========================================================================
        if (arrayLocal.nombre == "Mars") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento4 = document.createElement('p');
            elemento4.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento24 = document.getElementById('casa4resultados2div');
            elemento24.append(elemento4);

        } else if (arrayLocal.nombre == "Venus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento4 = document.createElement('p');
            elemento4.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento24 = document.getElementById('casa4resultados2div');
            elemento24.append(elemento4);

        } else if (arrayLocal.nombre == "Saturn") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento4 = document.createElement('p');
            elemento4.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento24 = document.getElementById('casa4resultados2div');
            elemento24.append(elemento4);

        } else if (arrayLocal.nombre == "Mercury") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento4 = document.createElement('p');
            elemento4.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento24 = document.getElementById('casa4resultados2div');
            elemento24.append(elemento4);

        } else if (arrayLocal.nombre == "Sun") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento4 = document.createElement('p');
            elemento4.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento24 = document.getElementById('casa4resultados2div');
            elemento24.append(elemento4);

        } else if (arrayLocal.nombre == "Moon") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento4 = document.createElement('p');
            elemento4.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento24 = document.getElementById('casa4resultados2div');
            elemento24.append(elemento4);

        } else if (arrayLocal.nombre == "Uranus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento4 = document.createElement('p');
            elemento4.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento24 = document.getElementById('casa4resultados2div');
            elemento24.append(elemento4);

        } else if (arrayLocal.nombre == "Neptune") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento4 = document.createElement('p');
            elemento4.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento24 = document.getElementById('casa4resultados2div');
            elemento24.append(elemento4);

        } else if (arrayLocal.nombre == "Pluto") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento4 = document.createElement('p');
            elemento4.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento24 = document.getElementById('casa4resultados2div');
            elemento24.append(elemento4);

        } else if (arrayLocal.nombre == "Jupiter") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento4 = document.createElement('p');
            elemento4.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento24 = document.getElementById('casa4resultados2div');
            elemento24.append(elemento4);
        }

    }

    if (arrayLocal.casa == "5th House") {
        //========CASA 5=========================================================================
        if (arrayLocal.nombre == "Mars") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento5 = document.createElement('p');
            elemento5.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento25 = document.getElementById('casa5resultados2div');
            elemento25.append(elemento5);

        } else if (arrayLocal.nombre == "Venus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento5 = document.createElement('p');
            elemento5.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento25 = document.getElementById('casa5resultados2div');
            elemento25.append(elemento5);

        } else if (arrayLocal.nombre == "Saturn") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento5 = document.createElement('p');
            elemento5.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento25 = document.getElementById('casa5resultados2div');
            elemento25.append(elemento5);

        } else if (arrayLocal.nombre == "Mercury") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento5 = document.createElement('p');
            elemento5.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento25 = document.getElementById('casa5resultados2div');
            elemento25.append(elemento5);

        } else if (arrayLocal.nombre == "Sun") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento5 = document.createElement('p');
            elemento5.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento25 = document.getElementById('casa5resultados2div');
            elemento25.append(elemento5);

        } else if (arrayLocal.nombre == "Moon") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento5 = document.createElement('p');
            elemento5.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento25 = document.getElementById('casa5resultados2div');
            elemento25.append(elemento5);

        } else if (arrayLocal.nombre == "Uranus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento5 = document.createElement('p');
            elemento5.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento25 = document.getElementById('casa5resultados2div');
            elemento25.append(elemento5);

        } else if (arrayLocal.nombre == "Neptune") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento5 = document.createElement('p');
            elemento5.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento25 = document.getElementById('casa5resultados2div');
            elemento25.append(elemento5);

        } else if (arrayLocal.nombre == "Pluto") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento5 = document.createElement('p');
            elemento5.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento25 = document.getElementById('casa5resultados2div');
            elemento25.append(elemento5);

        } else if (arrayLocal.nombre == "Jupiter") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento5 = document.createElement('p');
            elemento5.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento25 = document.getElementById('casa5resultados2div');
            elemento25.append(elemento5);
        }

    }
    if (arrayLocal.casa == "6th House") {
        //========CASA 6=========================================================================
        if (arrayLocal.nombre == "Mars") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento6 = document.createElement('p');
            elemento6.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento26 = document.getElementById('casa6resultados2div');
            elemento26.append(elemento6);

        } else if (arrayLocal.nombre == "Venus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento6 = document.createElement('p');
            elemento6.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento26 = document.getElementById('casa6resultados2div');
            elemento26.append(elemento6);

        } else if (arrayLocal.nombre == "Saturn") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento6 = document.createElement('p');
            elemento6.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento26 = document.getElementById('casa6resultados2div');
            elemento26.append(elemento6);

        } else if (arrayLocal.nombre == "Mercury") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento6 = document.createElement('p');
            elemento6.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento26 = document.getElementById('casa6resultados2div');
            elemento26.append(elemento6);

        } else if (arrayLocal.nombre == "Sun") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento6 = document.createElement('p');
            elemento6.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento26 = document.getElementById('casa6resultados2div');
            elemento26.append(elemento6);

        } else if (arrayLocal.nombre == "Moon") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento6 = document.createElement('p');
            elemento6.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento26 = document.getElementById('casa6resultados2div');
            elemento26.append(elemento6);

        } else if (arrayLocal.nombre == "Uranus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento6 = document.createElement('p');
            elemento6.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento26 = document.getElementById('casa6resultados2div');
            elemento26.append(elemento6);

        } else if (arrayLocal.nombre == "Neptune") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento6 = document.createElement('p');
            elemento6.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento26 = document.getElementById('casa6resultados2div');
            elemento26.append(elemento6);

        } else if (arrayLocal.nombre == "Pluto") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento6 = document.createElement('p');
            elemento6.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento26 = document.getElementById('casa6resultados2div');
            elemento26.append(elemento6);

        } else if (arrayLocal.nombre == "Jupiter") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento6 = document.createElement('p');
            elemento6.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento26 = document.getElementById('casa6resultados2div');
            elemento26.append(elemento6);
        }

    }

    if (arrayLocal.casa == "7th House") {
        //========CASA 7=========================================================================
        if (arrayLocal.nombre == "Mars") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento7 = document.createElement('p');
            elemento7.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento27 = document.getElementById('casa7resultados2div');
            elemento27.append(elemento7);
        } else if (arrayLocal.nombre == "Venus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento7 = document.createElement('p');
            elemento7.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento27 = document.getElementById('casa7resultados2div');
            elemento27.append(elemento7);

        } else if (arrayLocal.nombre == "Saturn") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento7 = document.createElement('p');
            elemento7.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento27 = document.getElementById('casa7resultados2div');
            elemento27.append(elemento7);

        } else if (arrayLocal.nombre == "Mercury") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento7 = document.createElement('p');
            elemento7.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento27 = document.getElementById('casa7resultados2div');
            elemento27.append(elemento7);

        } else if (arrayLocal.nombre == "Sun") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento7 = document.createElement('p');
            elemento7.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento27 = document.getElementById('casa7resultados2div');
            elemento27.append(elemento7);

        } else if (arrayLocal.nombre == "Moon") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento7 = document.createElement('p');
            elemento7.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento27 = document.getElementById('casa7resultados2div2');
            elemento27.append(elemento7);

        } else if (arrayLocal.nombre == "Uranus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento7 = document.createElement('p');
            elemento7.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento27 = document.getElementById('casa7resultados2div');
            elemento27.append(elemento7);

        } else if (arrayLocal.nombre == "Neptune") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento7 = document.createElement('p');
            elemento7.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento27 = document.getElementById('casa7resultados2div');
            elemento27.append(elemento7);

        } else if (arrayLocal.nombre == "Pluto") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento7 = document.createElement('p');
            elemento7.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento27 = document.getElementById('casa7resultados2div');
            elemento27.append(elemento7);

        } else if (arrayLocal.nombre == "Jupiter") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento7 = document.createElement('p');
            elemento7.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento27 = document.getElementById('casa7resultados2div');
            elemento27.append(elemento7);
        }

    }
    if (arrayLocal.casa == "8th House") {
        //========CASA 8=========================================================================
        if (arrayLocal.nombre == "Mars") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento8 = document.createElement('p');
            elemento8.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento28 = document.getElementById('casa8resultados2div');
            elemento28.append(elemento8);

        } else if (arrayLocal.nombre == "Venus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento8 = document.createElement('p');
            elemento8.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento28 = document.getElementById('casa8resultados2div');
            elemento28.append(elemento8);

        } else if (arrayLocal.nombre == "Saturn") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento8 = document.createElement('p');
            elemento8.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento28 = document.getElementById('casa8resultados2div');
            elemento28.append(elemento8);

        } else if (arrayLocal.nombre == "Mercury") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento8 = document.createElement('p');
            elemento8.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento28 = document.getElementById('casa8resultados2div');
            elemento28.append(elemento8);

        } else if (arrayLocal.nombre == "Sun") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento = document.createElement('p');
            elemento.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento2 = document.getElementById('casa8resultados2div');;
            elemento2.append(elemento);

        } else if (arrayLocal.nombre == "Moon") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento8 = document.createElement('p');
            elemento8.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento28 = document.getElementById('casa8resultados2div');
            elemento28.append(elemento8);

        } else if (arrayLocal.nombre == "Uranus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento8 = document.createElement('p');
            elemento8.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento28 = document.getElementById('casa8resultados2div');
            elemento28.append(elemento8);

        } else if (arrayLocal.nombre == "Neptune") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento8 = document.createElement('p');
            elemento8.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento28 = document.getElementById('casa8resultados2div');
            elemento28.append(elemento8);

        } else if (arrayLocal.nombre == "Pluto") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento8 = document.createElement('p');
            elemento8.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento28 = document.getElementById('casa8resultados2div');
            elemento28.append(elemento8);

        } else if (arrayLocal.nombre == "Jupiter") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento8 = document.createElement('p');
            elemento8.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento28 = document.getElementById('casa8resultados2div');
            elemento28.append(elemento8);
        }

    } else if (arrayLocal.casa == "9th House") {
        //========CASA 9=========================================================================
        if (arrayLocal.nombre == "Mars") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento9 = document.createElement('p');
            elemento9.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento29 = document.getElementById('casa9resultados2div');
            elemento29.append(elemento9);

        } else if (arrayLocal.nombre == "Venus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento9 = document.createElement('p');
            elemento9.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento29 = document.getElementById('casa9resultados2div');
            elemento29.append(elemento9);

        } else if (arrayLocal.nombre == "Saturn") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento9 = document.createElement('p');
            elemento9.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento29 = document.getElementById('casa9resultados2div');
            elemento29.append(elemento9);

        } else if (arrayLocal.nombre == "Mercury") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento9 = document.createElement('p');
            elemento9.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento29 = document.getElementById('casa9resultados2div');
            elemento29.append(elemento9);

        } else if (arrayLocal.nombre == "Sun") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento9 = document.createElement('p');
            elemento9.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento29 = document.getElementById('casa9resultados2div');
            elemento29.append(elemento9);

        } else if (arrayLocal.nombre == "Moon") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento9 = document.createElement('p');
            elemento9.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento29 = document.getElementById('casa9resultados2div');
            elemento29.append(elemento9);

        } else if (arrayLocal.nombre == "Uranus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento9 = document.createElement('p');
            elemento9.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento29 = document.getElementById('casa9resultados2div');
            elemento29.append(elemento9);

        } else if (arrayLocal.nombre == "Neptune") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento9 = document.createElement('p');
            elemento9.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento29 = document.getElementById('casa9resultados2div');
            elemento29.append(elemento9);

        } else if (arrayLocal.nombre == "Pluto") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento9 = document.createElement('p');
            elemento9.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento29 = document.getElementById('casa9resultados2div');
            elemento29.append(elemento9);

        } else if (arrayLocal.nombre == "Jupiter") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento9 = document.createElement('p');
            elemento9.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento29 = document.getElementById('casa9resultados2div');
            elemento29.append(elemento9);
        }

    } else if (arrayLocal.casa === "10th House") {
        //========CASA 10=========================================================================
        if (arrayLocal.nombre == "Mars") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento10 = document.createElement('p');
            elemento10.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento210 = document.getElementById('casa10resultados2div');
            elemento210.append(elemento10);

        } else if (arrayLocal.nombre == "Venus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento10 = document.createElement('p');
            elemento10.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento210 = document.getElementById('casa10resultados2div');
            elemento210.append(elemento10);
        } else if (arrayLocal.nombre == "Saturn") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento10 = document.createElement('p');
            elemento10.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento210 = document.getElementById('casa10resultados2div');
            elemento210.append(elemento10);

        } else if (arrayLocal.nombre == "Mercury") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento10 = document.createElement('p');
            elemento10.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento210 = document.getElementById('casa10resultados2div');
            elemento210.append(elemento10);

        } else if (arrayLocal.nombre == "Sun") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento10 = document.createElement('p');
            elemento10.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento210 = document.getElementById('casa10resultados2div');
            elemento210.append(elemento10);

        } else if (arrayLocal.nombre == "Moon") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento10 = document.createElement('p');
            elemento10.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento210 = document.getElementById('casa10resultados2div');
            elemento210.append(elemento10);

        } else if (arrayLocal.nombre == "Uranus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento10 = document.createElement('p');
            elemento10.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento210 = document.getElementById('casa10resultados2div');
            elemento210.append(elemento10);

        } else if (arrayLocal.nombre == "Neptune") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento10 = document.createElement('p');
            elemento10.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento210 = document.getElementById('casa10resultados2div');
            elemento210.append(elemento10);

        } else if (arrayLocal.nombre == "Pluto") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento10 = document.createElement('p');
            elemento10.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento210 = document.getElementById('casa10resultados2div');
            elemento210.append(elemento10);

        } else if (arrayLocal.nombre == "Jupiter") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento10 = document.createElement('p');
            elemento10.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento210 = document.getElementById('casa10resultados2div');
            elemento210.append(elemento10);
        }

    } else if (arrayLocal.casa === "11th House") {
        //========CASA 11=========================================================================
        if (arrayLocal.nombre == "Mars") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento11 = document.createElement('p');
            elemento11.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento211 = document.getElementById('casa11resultados2div');
            elemento211.append(elemento11);

        } else if (arrayLocal.nombre == "Venus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento11 = document.createElement('p');
            elemento11.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento211 = document.getElementById('casa11resultados2div');
            elemento211.append(elemento11);

        } else if (arrayLocal.nombre == "Saturn") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento11 = document.createElement('p');
            elemento11.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento211 = document.getElementById('casa11resultados2div');
            elemento211.append(elemento11);

        } else if (arrayLocal.nombre == "Mercury") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento11 = document.createElement('p');
            elemento11.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento211 = document.getElementById('casa11resultados2div');
            elemento211.append(elemento11);

        } else if (arrayLocal.nombre == "Sun") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento11 = document.createElement('p');
            elemento11.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento211 = document.getElementById('casa11resultados2div');
            elemento211.append(elemento11);

        } else if (arrayLocal.nombre == "Moon") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento11 = document.createElement('p');
            elemento11.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento211 = document.getElementById('casa11resultados2div');
            elemento211.append(elemento11);

        } else if (arrayLocal.nombre == "Uranus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento11 = document.createElement('p');
            elemento11.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento211 = document.getElementById('casa11resultados2div');
            elemento211.append(elemento11);

        } else if (arrayLocal.nombre == "Neptune") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento11 = document.createElement('p');
            elemento11.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento211 = document.getElementById('casa11resultados2div');
            elemento211.append(elemento11);

        } else if (arrayLocal.nombre == "Pluto") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento11 = document.createElement('p');
            elemento11.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento211 = document.getElementById('casa11resultados2div');
            elemento211.append(elemento11);

        } else if (arrayLocal.nombre == "Jupiter") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento11 = document.createElement('p');
            elemento11.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento211 = document.getElementById('casa11resultados2div');
            elemento211.append(elemento11);
        }

    } else if (arrayLocal.casa === "12th House") {
        //========CASA 12==========================================================================
        if (arrayLocal.nombre == "Mars") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento12 = document.createElement('p');
            elemento12.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento212 = document.getElementById('casa12resultados2div');
            elemento212.append(elemento12);

        } else if (arrayLocal.nombre == "Venus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento12 = document.createElement('p');
            elemento12.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento212 = document.getElementById('casa12resultados2div');
            elemento212.append(elemento12);

        } else if (arrayLocal.nombre == "Saturn") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento12 = document.createElement('p');
            elemento12.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento212 = document.getElementById('casa12resultados2div');
            elemento212.append(elemento12);

        } else if (arrayLocal.nombre == "Mercury") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento12 = document.createElement('p');
            elemento12.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento212 = document.getElementById('casa12resultados2div');
            elemento212.append(elemento12);

        } else if (arrayLocal.nombre == "Sun") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento12 = document.createElement('p');
            elemento12.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento212 = document.getElementById('casa12resultados2div');
            elemento212.append(elemento12);

        } else if (arrayLocal.nombre == "Moon") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento12 = document.createElement('p');
            elemento12.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento212 = document.getElementById('casa12resultados2div');
            elemento212.append(elemento12);

        } else if (arrayLocal.nombre == "Uranus") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento12 = document.createElement('p');
            elemento12.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento212 = document.getElementById('casa12resultados2div');
            elemento212.append(elemento12);

        } else if (arrayLocal.nombre == "Neptune") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento12 = document.createElement('p');
            elemento12.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento212 = document.getElementById('casa12resultados2div');
            elemento212.append(elemento12);

        } else if (arrayLocal.nombre == "Pluto") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento12 = document.createElement('p');
            elemento12.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento212 = document.getElementById('casa12resultados2div');
            elemento212.append(elemento12);

        } else if (arrayLocal.nombre == "Jupiter") {
            console.log(`Este ciclo de  ${arrayLocal.nombre} se ejecuto`);
            var elemento12 = document.createElement('p');
            elemento12.innerText = `${arrayLocal.nombre} está en ${arrayLocal.casa}. Esto significa: ----`;
            var elemento212 = document.getElementById('casa12resultados2div');
            elemento212.append(elemento12);
        }
    }

}




function modificarPlanetasDom(arrayLocal2) {

    if (arrayLocal2.nombre == "Mars") {
        document.getElementById("marte1").value = `${arrayLocal2.casa}`;
        document.getElementById("regenteMarte1").value = `${arrayLocal2.regente}`;
        document.getElementById("gradoMarte1").value = `${arrayLocal2.grado}`;

    } else if (arrayLocal2.nombre == "Venus") {


    } else if (arrayLocal2.nombre == "Saturn") {

        document.getElementById("saturno1").value = `${arrayLocal2.casa}`;
        document.getElementById("regenteSaturno1").value = `${arrayLocal2.regente}`;
        document.getElementById("gradoSaturno1").value = `${arrayLocal2.grado}`;

    } else if (arrayLocal2.nombre == "Mercury") {
        document.getElementById("mercurio1").value = `${arrayLocal2.casa}`;
        document.getElementById("regenteMercurio1").value = `${arrayLocal2.regente}`;
        document.getElementById("gradoMercurio1").value = `${arrayLocal2.grado}`;


    } else if (arrayLocal2.nombre == "Sun") {
        document.getElementById("sol1").value = `${arrayLocal2.casa}`;
        document.getElementById("regenteSol1").value = `${arrayLocal2.regente}`;
        document.getElementById("gradoSol1").value = `${arrayLocal2.grado}`;


    } else if (arrayLocal2.nombre == "Moon") {
        document.getElementById("luna1").value = `${arrayLocal2.casa}`;
        document.getElementById("regenteLuna1").value = `${arrayLocal2.regente}`;
        document.getElementById("gradoLuna1").value = `${arrayLocal2.grado}`;


    } else if (arrayLocal2.nombre == "Uranus") {

        document.getElementById("urano1").value = `${arrayLocal2.casa}`;
        document.getElementById("regenteUrano1").value = `${arrayLocal2.regente}`;
        document.getElementById("gradoUrano1").value = `${arrayLocal2.grado}`;

    } else if (arrayLocal2.nombre == "Neptune") {

        document.getElementById("neptuno1").value = `${arrayLocal2.casa}`;
        document.getElementById("regenteNeptuno1").value = `${arrayLocal2.regente}`;
        document.getElementById("gradoNeptuno1").value = `${arrayLocal2.grado}`;

    } else if (arrayLocal2.nombre == "Pluto") {
        document.getElementById("pluton1").value = `${arrayLocal2.casa}`;
        document.getElementById("regentePluton1").value = `${arrayLocal2.regente}`;
        document.getElementById("gradoPluton1").value = `${arrayLocal2.grado}`;


    } else if (arrayLocal2.nombre == "Jupiter") {
        document.getElementById("jupiter1").value = `${arrayLocal2.casa}`;
        document.getElementById("regenteJupiter1").value = `${arrayLocal2.regente}`;
        document.getElementById("gradoJupiter1").value = `${arrayLocal2.grado}`;

    }



}