//API de planetas
var i = 0;
//los event listeners de abajo tienen la función de borrar la información en los resultados cuando haya cambios en los inputs..
// var cambiosPaises = document.getElementById("paises");
// cambiosPaises.addEventListener('change', function() { borrarCambios() });
// var cambiosCiudades = document.getElementById("ciudades");
// cambiosCiudades.addEventListener('change', function() { borrarCambios() });
// var cambiosDia = document.getElementById("day");
// cambiosDia.addEventListener('change', function() { borrarCambios() });
// var cambiosMes = document.getElementById("month");
// cambiosMes.addEventListener('change', function() { borrarCambios() });
// var cambiosAno = document.getElementById("year");
// cambiosAno.addEventListener('change', function() { borrarCambios() });
// var cambiosHora = document.getElementById("hora");
// cambiosHora.addEventListener('change', function() { borrarCambios() });
// var cambiosMinutos = document.getElementById("minutos");
// cambiosMinutos.addEventListener('change', function() { borrarCambios() });
// //fin de event listers

var arrayIdsPlanetas22 = ["marte1", "venus1", "saturno1", "mercurio1", "luna1", "sol1", "urano1", "neptuno1", "pluton1", "jupiter1"];
var arrayIdregentes22 = ["regenteMarte1", "regenteVenus1", "regenteSaturno1", "regenteMercurio1", "regenteLuna1", "regenteSol1", "regenteUrano1", "regenteNeptuno1", "regentePluton1", "regenteJupiter1"];
var arrayIdgrados22 = ["gradoMarte1", "gradoVenus1", "gradoSaturno1", "gradoMercurio1", "gradoLuna1", "gradoSol1", "gradoUrano1", "gradoNeptuno1", "gradoPluton1", "gradoJupiter1"];
var idAscendenteL2 = "ascendente1";

var rectificarCasaMarte = document.getElementById(arrayIdsPlanetas22[0]);
rectificarCasaMarte.addEventListener('change', function() { cambiarValores(arrayIdregentes22, arrayIdsPlanetas22, arrayIdgrados22, idAscendenteL2) });


//La funcion de abajo reseteara los cambios, para ser utilizada si el boton es clickeado más de 1 vez sin cambios...
//..ó para borrar lo anterior si hubo cambios en los inputs
function borrarCambios() {
    document.getElementById("casa1resultados2div").innerHTML = "";
    document.getElementById("casa2resultados2div").innerHTML = "";
    document.getElementById("casa3resultados2div").innerHTML = "";
    document.getElementById("casa4resultados2div").innerHTML = "";
    document.getElementById("casa5resultados2div").innerHTML = "";
    document.getElementById("casa6resultados2div").innerHTML = "";
    document.getElementById("casa7resultados2div").innerHTML = "";
    document.getElementById("casa8resultados2div").innerHTML = "";
    document.getElementById("casa9resultados2div").innerHTML = "";
    document.getElementById("casa10resultados2div").innerHTML = "";
    document.getElementById("casa11resultados2div").innerHTML = "";
    document.getElementById("casa12resultados2div").innerHTML = "";
}
//fin de funcion


//la función de abajo será ejecutada cuando al presionar el botón. Tiene distintas funciones abajo descritas...
//Funcionalidad 1) En funcion de los valores en el input de Zona Horaria, seteara los valores de lat y long
//Funcionalidad 2) Construye objetos a ser enviados a la API
//Funcionalidad 3) Construye objetos de cada planeta para elaborar resultados
//Funcionalidad 4) Crea un objeto de objetos (con los resultados de la API); que contiene los objetos de todos los planetas. Cada uno se crea con lo obtenido de la API
//Funcionalidad 5) Se llama a la API. 
//Funcionalidad 6) Se llama a la funcion ResPlanetasCasas() para obtener los resultados finales en base a lo que respondio la API

var zonahorariaExt = document.getElementById("paises");
zonahorariaExt.addEventListener('click', function() {

    var zonahorariaInt = document.getElementById("paises").value;
    switch (zonahorariaInt) {
        case 'America/Argentina/Buenos_Aires':
            document.getElementById("lat").value = parseInt(-34.61);
            document.getElementById("long").value = parseInt(-58.37);
            document.getElementById("ciudades").value = "Buenos_Aires";
            break;
        case 'America/Argentina/Cordoba':
            document.getElementById("lat").value = parseInt(-31.41);
            document.getElementById("long").value = parseInt(-64.18);
            document.getElementById("ciudades").value = "Cordoba";
            break;
        case 'America/Argentina/Mendoza':
            document.getElementById("lat").value = parseInt(-32.88);
            document.getElementById("long").value = parseInt(-68.85);
            document.getElementById("ciudades").value = "Mendoza";
            break;
        case 'America/Argentina/Catamarca':
            document.getElementById("lat").value = parseInt(-28.416);
            document.getElementById("long").value = parseInt(-65.80);
            document.getElementById("ciudades").value = "Catamarca";
            break;
        case 'America/Argentina/Jujuy':
            document.getElementById("lat").value = parseInt(-22.72);
            document.getElementById("long").value = parseInt(-65.69);
            document.getElementById("ciudades").value = "Jujuy";
            break;
        case 'America/Argentina/Tucuman':
            document.getElementById("lat").value = parseInt(-26.828);
            document.getElementById("long").value = parseInt(-65.21);
            document.getElementById("ciudades").value = "Tucuman";
            break;

        case 'America/Mexico_City':
            document.getElementById("lat").value = parseInt(19.42);
            document.getElementById("long").value = parseInt(-99.12);
            document.getElementById("ciudades").value = "Mexico_City";
            break;
        case 'America/Monterrey':
            document.getElementById("lat").value = parseInt(25.67);
            document.getElementById("long").value = parseInt(-100.30);
            document.getElementById("ciudades").value = "Monterrey";
            break;
        case 'America/Chihuahua':
            document.getElementById("lat").value = parseInt(29.989);
            document.getElementById("long").value = parseInt(-107.55);
            document.getElementById("ciudades").value = "Chihuahua";
            break;
        case 'America/Montevideo':
            document.getElementById("lat").value = parseInt(-34.90);
            document.getElementById("long").value = parseInt(-56.18);
            document.getElementById("ciudades").value = "Montevideo";
            break;
        case 'America/Caracas':
            document.getElementById("lat").value = parseInt(10.50);
            document.getElementById("long").value = parseInt(-66.93);
            document.getElementById("ciudades").value = "Caracas";
            break;
        case 'America/Bogota':
            document.getElementById("lat").value = parseInt(4.61);
            document.getElementById("long").value = parseInt(-74.07);
            document.getElementById("ciudades").value = "Bogota";
            break;
        case 'America/El_Salvador':
            document.getElementById("lat").value = parseInt(13.77);
            document.getElementById("long").value = parseInt(-89.20);
            document.getElementById("ciudades").value = "El_Salvador";
            break;
        case 'America/Guatemala':
            document.getElementById("lat").value = parseInt(14.56);
            document.getElementById("long").value = parseInt(-90.52);
            document.getElementById("ciudades").value = "Guatemala";
            break;
        case 'Europe/Madrid':
            document.getElementById("lat").value = parseInt(40.53);
            document.getElementById("long").value = parseInt(-3.47);
            document.getElementById("ciudades").value = "Madrid";
            break;
        case 'Europe/Paris':
            document.getElementById("lat").value = parseInt(48.85);
            document.getElementById("long").value = parseInt(2.35);
            document.getElementById("ciudades").value = "Paris";
            break;
        case 'Europe/Berlin':
            document.getElementById("lat").value = parseInt(52.52);
            document.getElementById("long").value = parseInt(13.40);
            document.getElementById("ciudades").value = "Berlin";
            break;
        case 'Europe/Rome':
            document.getElementById("lat").value = parseInt(41.90);
            document.getElementById("long").value = parseInt(12.49);
            document.getElementById("ciudades").value = "Rome";
            break;
    }


});












function resultadosAPI1() {
    var responseAPI = '';

    // var day1 = document.getElementById("day").value;
    // var month1 = document.getElementById("month").value;
    // var year1 = document.getElementById("year").value;


    //1)Funcionalidad 1. En funcion de los valores en el input de Zona Horaria, seteara los valores de lat y long
    var zonahoraria = document.getElementById("paises").value;
    switch (zonahoraria) {
        case 'America/Argentina/Buenos_Aires':
            document.getElementById("lat").value = parseInt(-34.61);
            document.getElementById("long").value = parseInt(-58.37);
            document.getElementById("ciudades").value = "Buenos_Aires";
            break;
        case 'America/Argentina/Cordoba':
            document.getElementById("lat").value = parseInt(-31.41);
            document.getElementById("long").value = parseInt(-64.18);
            document.getElementById("ciudades").value = "Cordoba";
            break;
        case 'America/Argentina/Mendoza':
            document.getElementById("lat").value = parseInt(-32.88);
            document.getElementById("long").value = parseInt(-68.85);
            document.getElementById("ciudades").value = "Mendoza";
            break;
        case 'America/Argentina/Catamarca':
            document.getElementById("lat").value = parseInt(-28.416);
            document.getElementById("long").value = parseInt(-65.80);
            document.getElementById("ciudades").value = "Catamarca";
            break;
        case 'America/Argentina/Jujuy':
            document.getElementById("lat").value = parseInt(-22.72);
            document.getElementById("long").value = parseInt(-65.69);
            document.getElementById("ciudades").value = "Jujuy";
            break;
        case 'America/Argentina/Tucuman':
            document.getElementById("lat").value = parseInt(-26.828);
            document.getElementById("long").value = parseInt(-65.21);
            document.getElementById("ciudades").value = "Tucuman";
            break;

        case 'America/Mexico_City':
            document.getElementById("lat").value = parseInt(19.42);
            document.getElementById("long").value = parseInt(-99.12);
            document.getElementById("ciudades").value = "Mexico_City";
            break;
        case 'America/Monterrey':
            document.getElementById("lat").value = parseInt(25.67);
            document.getElementById("long").value = parseInt(-100.30);
            document.getElementById("ciudades").value = "Monterrey";
            break;
        case 'America/Chihuahua':
            document.getElementById("lat").value = parseInt(29.989);
            document.getElementById("long").value = parseInt(-107.55);
            document.getElementById("ciudades").value = "Chihuahua";
            break;
        case 'America/Montevideo':
            document.getElementById("lat").value = parseInt(-34.90);
            document.getElementById("long").value = parseInt(-56.18);
            document.getElementById("ciudades").value = "Montevideo";
            break;
        case 'America/Caracas':
            document.getElementById("lat").value = parseInt(10.50);
            document.getElementById("long").value = parseInt(-66.93);
            document.getElementById("ciudades").value = "Caracas";
            break;
        case 'America/Bogota':
            document.getElementById("lat").value = parseInt(4.61);
            document.getElementById("long").value = parseInt(-74.07);
            document.getElementById("ciudades").value = "Bogota";
            break;
        case 'America/El_Salvador':
            document.getElementById("lat").value = parseInt(13.77);
            document.getElementById("long").value = parseInt(-89.20);
            document.getElementById("ciudades").value = "El_Salvador";
            break;
        case 'America/Guatemala':
            document.getElementById("lat").value = parseInt(14.56);
            document.getElementById("long").value = parseInt(-90.52);
            document.getElementById("ciudades").value = "Guatemala";
            break;
        case 'Europe/Madrid':
            document.getElementById("lat").value = parseInt(40.53);
            document.getElementById("long").value = parseInt(-3.47);
            document.getElementById("ciudades").value = "Madrid";
            break;
        case 'Europe/Paris':
            document.getElementById("lat").value = parseInt(48.85);
            document.getElementById("long").value = parseInt(2.35);
            document.getElementById("ciudades").value = "Paris";
            break;
        case 'Europe/Berlin':
            document.getElementById("lat").value = parseInt(52.52);
            document.getElementById("long").value = parseInt(13.40);
            document.getElementById("ciudades").value = "Berlin";
            break;
        case 'Europe/Rome':
            document.getElementById("lat").value = parseInt(41.90);
            document.getElementById("long").value = parseInt(12.49);
            document.getElementById("ciudades").value = "Rome";
            break;

    }
    //fin funcionalidad 1


    //Funcionalidad 2) Funcion constructora de objetos a ser enviados a la API
    function bodyAPI() {

        this.name = "Test",
            this.year = document.getElementById("year").value,
            this.month = document.getElementById("month").value,
            this.day = document.getElementById("day").value,
            this.hours = document.getElementById("hora").value,
            this.minuts = document.getElementById("minutos").value,
            this.longitude = document.getElementById("long").value,
            this.latitude = document.getElementById("lat").value,
            this.city = document.getElementById("ciudades").value,
            this.timezone = document.getElementById("paises").value,
            this.language = "IT"
    }

    //3) Funcionalidad 3. Clase con funcion constructora, para hacer objetos de cada planeta
    class planetas1 {
        //funcion constructora de objetos con regentes, grados y casas de los 3 planetas usados ahora
        constructor(lord, degree, house, name) {
            this.nombre = name;
            this.regente = lord;
            this.grado = parseInt(degree);
            this.casa = house;
        }
    }
    //funcion que crea los objetos junto con la clase y el constructor de arriba
    function crearPlanetas(signo, grado, casa, nombre) {
        var planeta = new planetas1(signo, grado, casa, nombre);
        return planeta;
    }

    //se crea un nuevo objeto de tipo bodyAPI para luego ser enviado a la API
    var body0 = new bodyAPI();
    console.log(body0);
    //Se convierte en string el objeto y luego imprime para comprobar que sea correcto
    var body1 = JSON.stringify(body0);
    console.log(body1);

    //Funcionalidad 4) Crea un objeto de objetos; que contiene los objetos de todos los planetas. Cada uno se crea con los inputs del HTML..
    //..(Toma los valores del DOM)
    function tomarVariable(...a) {
        var objetoPlanetasAPI = [];
        var responseAPI = {};
        responseAPI = {...a };
        console.log('response api abajo');
        console.log(responseAPI);
        var infoMarte = {};
        var infoVenus = {};
        var infoSaturno = {};
        var infoMercurio = {};
        var infoLuna = {};
        var infoSol = {};
        var infoUrano = {};
        var infoNeptuno = {};
        var infoPluton = {};
        var infoJupiter = {};
        c = 0;
        i = 0;
        var objetoPlanetasAPI = [];

        //Se crea un objeto por cada planeta, sacando los resultados de los objetos nesteados de la API
        infoMarte = new planetas1(responseAPI[0].data['mars'].sign, responseAPI[0].data['mars'].position, responseAPI[0].data['mars'].house, responseAPI[0].data['mars'].name);
        infoSaturno = new planetas1(responseAPI[0].data['saturn'].sign, responseAPI[0].data['saturn'].position, responseAPI[0].data['saturn'].house, responseAPI[0].data['saturn'].name);
        infoMercurio = new planetas1(responseAPI[0].data['mercury'].sign, responseAPI[0].data['mercury'].position, responseAPI[0].data['mercury'].house, responseAPI[0].data['mercury'].name);
        infoVenus = new planetas1(responseAPI[0].data['venus'].sign, responseAPI[0].data['venus'].position, responseAPI[0].data['venus'].house, responseAPI[0].data['venus'].name);
        infoLuna = new planetas1(responseAPI[0].data['moon'].sign, responseAPI[0].data['moon'].position, responseAPI[0].data['moon'].house, responseAPI[0].data['moon'].name);
        infoSol = new planetas1(responseAPI[0].data['sun'].sign, responseAPI[0].data['sun'].position, responseAPI[0].data['sun'].house, responseAPI[0].data['sun'].name);
        infoUrano = new planetas1(responseAPI[0].data['uranus'].sign, responseAPI[0].data['uranus'].position, responseAPI[0].data['uranus'].house, responseAPI[0].data['uranus'].name);
        infoNeptuno = new planetas1(responseAPI[0].data['neptune'].sign, responseAPI[0].data['neptune'].position, responseAPI[0].data['neptune'].house, responseAPI[0].data['neptune'].name);
        infoPluton = new planetas1(responseAPI[0].data['pluto'].sign, responseAPI[0].data['pluto'].position, responseAPI[0].data['pluto'].house, responseAPI[0].data['pluto'].name);
        infoJupiter = new planetas1(responseAPI[0].data['jupiter'].sign, responseAPI[0].data['jupiter'].position, responseAPI[0].data['jupiter'].house, responseAPI[0].data['jupiter'].name);
        //Se empuja cada objeto individual a un objeto Macro llamado objetoPlanetasAPI
        objetoPlanetasAPI.push(infoMarte);
        objetoPlanetasAPI.push(infoVenus);
        objetoPlanetasAPI.push(infoSaturno);
        objetoPlanetasAPI.push(infoUrano);
        objetoPlanetasAPI.push(infoMercurio);
        objetoPlanetasAPI.push(infoNeptuno);
        objetoPlanetasAPI.push(infoLuna);
        objetoPlanetasAPI.push(infoSol);
        objetoPlanetasAPI.push(infoPluton);
        objetoPlanetasAPI.push(infoJupiter);

        console.log(infoMarte);
        console.log(infoVenus);
        console.log(infoSaturno);
        console.log(infoMercurio);
        console.log(infoLuna);
        console.log(infoSol);
        console.log(infoUrano);
        console.log(infoNeptuno);
        console.log(infoPluton);
        console.log(infoJupiter);

        console.log('Antes de salir de tomarVar se ve asi: ')
            // console.log(...objetoPlanetasAPI);
            // ResPlanetasCasas(objetoPlanetasAPI);
        return objetoPlanetasAPI;
    }
    //fin funcionalidad 4

    //El if de abajo borra los resultados si ya se han ejecutado 1 vez.
    if (i > 0) {
        borrarCambios();
    }
    //fin del if

    //Funcionalidad 5. Abajo se crea la constante options que sera enviada al fetch; y luego se ejecuta el Fetch para obtener respuesta de la API
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Host': 'astrologer.p.rapidapi.com',
            'X-RapidAPI-Key': 'f595082afbmshb32127ea74a7d75p19c0f4jsn3c3f615a36eb'
        },
        body: JSON.stringify(body0)
            // '{"name":"Test","year":1990,"month":10,"day":10,"hours":10,"minuts":10,"longitude":12,"latitude":46,"city":"Roma","timezone":"Europe/Rome","language":"IT"}'
    };

    fetch('https://astrologer.p.rapidapi.com/api/v2/birth-chart', options)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            //Abajo se toma la repsuesta de la API y la envia a la funcion tomarVariable
            var arrayDeObjetosCore = tomarVariable(response);
            //Funcionalidad 6) Abajo se llama a la funcion arrayDeObjetosCore que esta en cartaPorAPI2.js
            ResPlanetasCasas(arrayDeObjetosCore);
            i++;
        })
        .then(function() {
            var arrayIdregentes2 = ["regenteMarte1", "regenteVenus1", "regenteSaturno1", "regenteMercurio1", "regenteLuna1", "regenteSol1", "regenteUrano1", "regenteNeptuno1", "regentePluton1", "regenteJupiter1"];
            var arrayIdgrados2 = ["gradoMarte1", "gradoVenus1", "gradoSaturno1", "gradoMercurio1", "gradoLuna1", "gradoSol1", "gradoUrano1", "gradoNeptuno1", "gradoPluton1", "gradoJupiter1"];
            var idsConjunciones2 = 'resultadosExterno__div3__UL2'
            var idsCasas2 = ['casa1resultados2div', 'casa2resultados2div', 'casa3resultados2div', 'casa4resultados2div', 'casa5resultados2div', 'casa6resultados2div', 'casa7resultados2div', 'casa8resultados2div', 'casa9resultados2div', 'casa9resultados2div', 'casa10resultados2div', 'casa11resultados2div', 'casa12resultados2div'];
            var idsPlanetas2 = ['resultadosExterno__div3__marteUL2', 'resultadosExterno__div3__venusUL2', 'resultadosExterno__div3__saturnoUL2', 'resultadosExterno__div3__mercurioUL2', 'resultadosExterno__div3__lunaUL2', 'resultadosExterno__div3__solUL2', 'resultadosExterno__div3__uranoUL2', 'resultadosExterno__div3__neptunoUL2', 'resultadosExterno__div3__jupiterUL2', 'resultadosExterno__div3__plutonUL2'];
            var arrayIdsPlanetas2 = ["marte1", "venus1", "saturno1", "mercurio1", "luna1", "sol1", "urano1", "neptuno1", "pluton1", "jupiter1"];
            var idAscendenteL2 = 'ascendente1';
            var idscheckbox = ['checkboxmarte2', 'checkboxvenus2', 'checkboxsaturno2', 'checkboxmercurio2', 'checkboxluna2', 'checkboxsol2', 'checkboxurano2', 'checkboxneptuno2', 'checkboxjupiter2', 'checkboxpluton2'];

            total(idsConjunciones2, idsPlanetas2, idsCasas2, arrayIdsPlanetas2, arrayIdregentes2, arrayIdgrados2, idscheckbox);
            cambiarValores(arrayIdregentes2, arrayIdsPlanetas2, arrayIdgrados2, idAscendenteL2);
        })
        .catch(err => console.error(err));
}
//Fin funcionalidad 5.
//Fin funcion total

const dibTabla1 = document.getElementById("dibujartabla1");
//el script de abajo ejecutara la función cuando perciba un click en el boton con id "dibujartabla"
dibTabla1.addEventListener('click', function() {
    var arrayIdsPlanetas2 = ["marte1", "venus1", "saturno1", "mercurio1", "luna1", "sol1", "urano1", "neptuno1", "pluton1", "jupiter1"];
    var arrayIdregentes2 = ["regenteMarte1", "regenteVenus1", "regenteSaturno1", "regenteMercurio1", "regenteLuna1", "regenteSol1", "regenteUrano1", "regenteNeptuno1", "regentePluton1", "regenteJupiter1"];
    var arrayIdgrados2 = ["gradoMarte1", "gradoVenus1", "gradoSaturno1", "gradoMercurio1", "gradoLuna1", "gradoSol1", "gradoUrano1", "gradoNeptuno1", "gradoPluton1", "gradoJupiter1"];
    var idTabla = "tablaplanetas__tabla2";

    dibujarTabla(arrayIdregentes2, arrayIdsPlanetas2, arrayIdgrados2, idTabla);
});

const dibCarta1 = document.getElementById("dibujarcarta2");
//el script de abajo ejecutara la función cuando perciba un click en el boton con id "dibujartabla"
dibCarta1.addEventListener('click', function() {
    var arrayIdsPlanetas3 = ["marte1", "venus1", "saturno1", "mercurio1", "luna1", "sol1", "urano1", "neptuno1", "pluton1", "jupiter1"];
    var arrayIdregentes3 = ["regenteMarte1", "regenteVenus1", "regenteSaturno1", "regenteMercurio1", "regenteLuna1", "regenteSol1", "regenteUrano1", "regenteNeptuno1", "regentePluton1", "regenteJupiter1"];
    var arrayIdgrados3 = ["gradoMarte1", "gradoVenus1", "gradoSaturno1", "gradoMercurio1", "gradoLuna1", "gradoSol1", "gradoUrano1", "gradoNeptuno1", "gradoPluton1", "gradoJupiter1"];
    var idascendente3 = 'ascendente1';
    var paperid3 = "paper3";

    dibujarCarta(paperid3, arrayIdregentes3, arrayIdsPlanetas3, arrayIdgrados3, idascendente3);
});