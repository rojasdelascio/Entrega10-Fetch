//API de planetas

function resultadosAPI1() {
    var responseAPI = '';

    // var day1 = document.getElementById("day").value;
    // var month1 = document.getElementById("month").value;
    // var year1 = document.getElementById("year").value;

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

    class planetas {
        //funcion constructora de objetos con regentes, grados y casas de los 3 planetas usados ahora
        constructor(lord, degree, house, name) {
            this.nombre = name;
            this.regente = lord;
            this.grado = parseInt(degree);
            this.casa = house;
        }
    }

    function crearPlanetas(signo, grado, casa, nombre) {

        var planeta = new planetas(signo, grado, casa, nombre);
        return planeta;

    }

    var body0 = new bodyAPI();
    console.log(body0);
    var body1 = JSON.stringify(body0);
    console.log(body1);
    console.log('{"name":"Test","year":1990,"month":10,"day":10,"hours":10,"minuts":10,"longitude":12,"latitude":46,"city":"Roma","timezone":"Europe/Rome","language":"IT"}');


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

        infoMarte = new planetas(responseAPI[0].data['mars'].sign, responseAPI[0].data['mars'].position, responseAPI[0].data['mars'].house, responseAPI[0].data['mars'].name);
        infoSaturno = new planetas(responseAPI[0].data['saturn'].sign, responseAPI[0].data['saturn'].position, responseAPI[0].data['saturn'].house, responseAPI[0].data['saturn'].name);
        infoMercurio = new planetas(responseAPI[0].data['mercury'].sign, responseAPI[0].data['mercury'].position, responseAPI[0].data['mercury'].house, responseAPI[0].data['mercury'].name);
        infoVenus = new planetas(responseAPI[0].data['venus'].sign, responseAPI[0].data['venus'].position, responseAPI[0].data['venus'].house, responseAPI[0].data['venus'].name);
        infoLuna = new planetas(responseAPI[0].data['moon'].sign, responseAPI[0].data['moon'].position, responseAPI[0].data['moon'].house, responseAPI[0].data['moon'].name);
        infoSol = new planetas(responseAPI[0].data['sun'].sign, responseAPI[0].data['sun'].position, responseAPI[0].data['sun'].house, responseAPI[0].data['sun'].name);
        infoUrano = new planetas(responseAPI[0].data['uranus'].sign, responseAPI[0].data['uranus'].position, responseAPI[0].data['uranus'].house, responseAPI[0].data['uranus'].name);
        infoNeptuno = new planetas(responseAPI[0].data['neptune'].sign, responseAPI[0].data['neptune'].position, responseAPI[0].data['neptune'].house, responseAPI[0].data['neptune'].name);
        infoPluton = new planetas(responseAPI[0].data['pluto'].sign, responseAPI[0].data['pluto'].position, responseAPI[0].data['pluto'].house, responseAPI[0].data['pluto'].name);
        infoJupiter = new planetas(responseAPI[0].data['pluto'].sign, responseAPI[0].data['pluto'].position, responseAPI[0].data['pluto'].house, responseAPI[0].data['pluto'].name);
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
            console.log(response)
            var arrayDeObjetosCore = tomarVariable(response);
            ResPlanetasCasas(arrayDeObjetosCore);
        })

    .catch(err => console.error(err));

}