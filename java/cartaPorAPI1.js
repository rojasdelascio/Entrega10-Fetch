//API de planetas
var i = 0;
//los event listeners de abajo tienen la función de borrar la información en los resultados cuando haya cambios en los inputs..
var cambiosPaises = document.getElementById("paises");
cambiosPaises.addEventListener('change', function() { borrarCambios() });
var cambiosCiudades = document.getElementById("ciudades");
cambiosCiudades.addEventListener('change', function() { borrarCambios() });
var cambiosDia = document.getElementById("day");
cambiosDia.addEventListener('change', function() { borrarCambios() });
var cambiosMes = document.getElementById("month");
cambiosMes.addEventListener('change', function() { borrarCambios() });
var cambiosAno = document.getElementById("year");
cambiosAno.addEventListener('change', function() { borrarCambios() });
var cambiosHora = document.getElementById("hora");
cambiosHora.addEventListener('change', function() { borrarCambios() });
var cambiosMinutos = document.getElementById("minutos");
cambiosMinutos.addEventListener('change', function() { borrarCambios() });
//fin de event listers

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
        case 'America/Argentina/Mendozas':
            document.getElementById("lat").value = parseInt(-32.88);
            document.getElementById("long").value = parseInt(-68.85);
            document.getElementById("ciudades").value = "Mendoza";
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
    class planetas {
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
        var planeta = new planetas(signo, grado, casa, nombre);
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
        infoMarte = new planetas(responseAPI[0].data['mars'].sign, responseAPI[0].data['mars'].position, responseAPI[0].data['mars'].house, responseAPI[0].data['mars'].name);
        infoSaturno = new planetas(responseAPI[0].data['saturn'].sign, responseAPI[0].data['saturn'].position, responseAPI[0].data['saturn'].house, responseAPI[0].data['saturn'].name);
        infoMercurio = new planetas(responseAPI[0].data['mercury'].sign, responseAPI[0].data['mercury'].position, responseAPI[0].data['mercury'].house, responseAPI[0].data['mercury'].name);
        infoVenus = new planetas(responseAPI[0].data['venus'].sign, responseAPI[0].data['venus'].position, responseAPI[0].data['venus'].house, responseAPI[0].data['venus'].name);
        infoLuna = new planetas(responseAPI[0].data['moon'].sign, responseAPI[0].data['moon'].position, responseAPI[0].data['moon'].house, responseAPI[0].data['moon'].name);
        infoSol = new planetas(responseAPI[0].data['sun'].sign, responseAPI[0].data['sun'].position, responseAPI[0].data['sun'].house, responseAPI[0].data['sun'].name);
        infoUrano = new planetas(responseAPI[0].data['uranus'].sign, responseAPI[0].data['uranus'].position, responseAPI[0].data['uranus'].house, responseAPI[0].data['uranus'].name);
        infoNeptuno = new planetas(responseAPI[0].data['neptune'].sign, responseAPI[0].data['neptune'].position, responseAPI[0].data['neptune'].house, responseAPI[0].data['neptune'].name);
        infoPluton = new planetas(responseAPI[0].data['pluto'].sign, responseAPI[0].data['pluto'].position, responseAPI[0].data['pluto'].house, responseAPI[0].data['pluto'].name);
        infoJupiter = new planetas(responseAPI[0].data['jupiter'].sign, responseAPI[0].data['jupiter'].position, responseAPI[0].data['jupiter'].house, responseAPI[0].data['jupiter'].name);
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
        // document.getElementById("casa1resultados2div").innerHTML = "";
        // document.getElementById("casa2resultados2div").innerHTML = "";
        // document.getElementById("casa3resultados2div").innerHTML = "";
        // document.getElementById("casa4resultados2div").innerHTML = "";
        // document.getElementById("casa5resultados2div").innerHTML = "";
        // document.getElementById("casa6resultados2div").innerHTML = "";
        // document.getElementById("casa7resultados2div").innerHTML = "";
        // document.getElementById("casa8resultados2div").innerHTML = "";
        // document.getElementById("casa9resultados2div").innerHTML = "";
        // document.getElementById("casa10resultados2div").innerHTML = "";
        // document.getElementById("casa11resultados2div").innerHTML = "";
        // document.getElementById("casa12resultados2div").innerHTML = "";
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
            //Abajo se llama a la funcion arrayDeObjetosCore que esta en cartaPorAPI2.js
            ResPlanetasCasas(arrayDeObjetosCore);
            i++;
        })

    .catch(err => console.error(err));
}
//Fin funcionalidad 5.
//Fin funcion total