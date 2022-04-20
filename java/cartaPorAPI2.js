function ResPlanetasCasas(planetas, i) {

    console.log('Cuando recien llega a resultados arraydeobjcore llega asi:');
    console.log(planetas);

    var arrayObjPlanetas = planetas;

    console.log('arrayObjPlanetas es:');
    console.log(arrayObjPlanetas);
    var cont = 0;

    //El forEach de abajo tiene la funcion de 
    arrayObjPlanetas.forEach(element => {
        console.log('En cada iteracion sale asi:');
        console.log(element);

        // nuevosCondicionales(element, i);
        modificarPlanetasDom(element);

    })
}

function modificarPlanetasDom(arrayLocal2) {

    console.log(`array local 2 es: `);
    console.log(arrayLocal2);
    if (arrayLocal2.nombre == "Mars") {
        document.getElementById("marte1").value = `${arrayLocal2.casa}`;
        document.getElementById("regenteMarte1").value = `${arrayLocal2.regente}`;
        document.getElementById("gradoMarte1").value = parseInt(arrayLocal2.grado);
    } else if (arrayLocal2.nombre == "Venus") {
        document.getElementById("venus1").value = `${arrayLocal2.casa}`;
        document.getElementById("regenteVenus1").value = `${arrayLocal2.regente}`;
        document.getElementById("gradoVenus1").value = parseInt(arrayLocal2.grado);
    } else if (arrayLocal2.nombre == "Saturn") {
        document.getElementById("saturno1").value = `${arrayLocal2.casa}`;
        document.getElementById("regenteSaturno1").value = `${arrayLocal2.regente}`;
        document.getElementById("gradoSaturno1").value = parseInt(arrayLocal2.grado);
    } else if (arrayLocal2.nombre == "Mercury") {
        document.getElementById("mercurio1").value = `${arrayLocal2.casa}`;
        document.getElementById("regenteMercurio1").value = `${arrayLocal2.regente}`;
        document.getElementById("gradoMercurio1").value = parseInt(arrayLocal2.grado);
    } else if (arrayLocal2.nombre == "Sun") {
        document.getElementById("sol1").value = `${arrayLocal2.casa}`;
        document.getElementById("regenteSol1").value = `${arrayLocal2.regente}`;
        document.getElementById("gradoSol1").value = parseInt(arrayLocal2.grado);
    } else if (arrayLocal2.nombre == "Moon") {
        document.getElementById("luna1").value = `${arrayLocal2.casa}`;
        document.getElementById("regenteLuna1").value = `${arrayLocal2.regente}`;
        document.getElementById("gradoLuna1").value = parseInt(arrayLocal2.grado);
    } else if (arrayLocal2.nombre == "Uranus") {
        document.getElementById("urano1").value = `${arrayLocal2.casa}`;
        document.getElementById("regenteUrano1").value = `${arrayLocal2.regente}`;
        document.getElementById("gradoUrano1").value = parseInt(arrayLocal2.grado);
    } else if (arrayLocal2.nombre == "Neptune") {
        document.getElementById("neptuno1").value = `${arrayLocal2.casa}`;
        document.getElementById("regenteNeptuno1").value = `${arrayLocal2.regente}`;
        document.getElementById("gradoNeptuno1").value = parseInt(arrayLocal2.grado);
    } else if (arrayLocal2.nombre == "Pluto") {
        document.getElementById("pluton1").value = `${arrayLocal2.casa}`;
        document.getElementById("regentePluton1").value = `${arrayLocal2.regente}`;
        document.getElementById("gradoPluton1").value = parseInt(arrayLocal2.grado);
    } else if (arrayLocal2.nombre == "Jupiter") {
        document.getElementById("jupiter1").value = `${arrayLocal2.casa}`;
        document.getElementById("regenteJupiter1").value = `${arrayLocal2.regente}`;
        document.getElementById("gradoJupiter1").value = parseInt(arrayLocal2.grado);
    }

    // if (arrayLocal2.casa == "1st House") {
    //     switch (arrayLocal2.regente) {
    //         case "Ari":
    //             document.getElementById("ascendente1").value = 'aries';
    //             break;
    //         case "Tau":
    //             document.getElementById("ascendente1").value = 'tauro';
    //             break;
    //         case "Aqu":
    //             document.getElementById("ascendente1").value = 'acuario';
    //             break;
    //         case "Cap":
    //             document.getElementById("ascendente1").value = 'capricornio';
    //             break;
    //         case "Sco":
    //             document.getElementById("ascendente1").value = 'escorpio';
    //             break;
    //         case "Can":
    //             document.getElementById("ascendente1").value = 'cancer';
    //             break;
    //         case "Pis":
    //             document.getElementById("ascendente1").value = 'piscis';
    //             break;
    //         case "Aqu":
    //             document.getElementById("ascendente1").value = 'acuario';
    //             break;
    //         case "Leo":
    //             document.getElementById("ascendente1").value = 'leo';
    //             break;
    //         case "Gem":
    //             document.getElementById("ascendente1").value = 'geminis';
    //             break;
    //     }
    // }


    var arraySignos1 = ["aries", "tauro", "geminis", "cancer", "leo", "virgo", "libra", "escorpio", "sagitario", "capricornio", "acuario", "piscis"];
    var arraySignos2 = ["tauro", "geminis", "cancer", "leo", "virgo", "libra", "escorpio", "sagitario", "capricornio", "acuario", "piscis", "aries"];
    var arraySignos3 = ["geminis", "cancer", "leo", "virgo", "libra", "escorpio", "sagitario", "capricornio", "acuario", "piscis", "aries", "tauro"];
    var arraySignos4 = ["cancer", "leo", "virgo", "libra", "escorpio", "sagitario", "capricornio", "acuario", "piscis", "aries", "tauro", "geminis"];
    var arraySignos5 = ["leo", "virgo", "libra", "escorpio", "sagitario", "capricornio", "acuario", "piscis", "aries", "tauro", "geminis", "cancer"];
    var arraySignos6 = ["virgo", "libra", "escorpio", "sagitario", "capricornio", "acuario", "piscis", "aries", "tauro", "geminis", "cancer", "leo"];
    var arraySignos7 = ["libra", "escorpio", "sagitario", "capricornio", "acuario", "piscis", "aries", "tauro", "geminis", "cancer", "leo", "virgo"];
    var arraySignos8 = ["escorpio", "sagitario", "capricornio", "acuario", "piscis", "aries", "tauro", "geminis", "cancer", "leo", "virgo", "libra"];
    var arraySignos9 = ["sagitario", "capricornio", "acuario", "piscis", "aries", "tauro", "geminis", "cancer", "leo", "virgo", "libra", "escorpio"];
    var arraySignos10 = ["capricornio", "acuario", "piscis", "aries", "tauro", "geminis", "cancer", "leo", "virgo", "libra", "escorpio", "sagitario"];
    var arraySignos11 = ["acuario", "piscis", "aries", "tauro", "geminis", "cancer", "leo", "virgo", "libra", "escorpio", "sagitario", "capricornio"];
    var arraySignos12 = ["piscis", "aries", "tauro", "geminis", "cancer", "leo", "virgo", "libra", "escorpio", "sagitario", "capricornio", "acuario"];



    if (arrayLocal2.nombre == "Sun") {
        console.log("ENTRO AL ARRAY LOCAL 2 LLAMADO SOLLLL")
        console.log(arrayLocal2.regente);
        var casaActual = parseInt(arrayLocal2.casa);
        console.log(`Casa actual es: ` + casaActual);
        var regenteLocal = arrayLocal2.regente;
        switch (casaActual) {
            case 1:
                if (regenteLocal == "Ari") {
                    document.getElementById("ascendente1").value = "aries";
                } else if (regenteLocal == "Tau") {
                    document.getElementById("ascendente1").value = "tauro";
                } else if (regenteLocal == "Gem") {
                    document.getElementById("ascendente1").value = "geminis";
                } else if (regenteLocal == "Can") {
                    document.getElementById("ascendente1").value = "cancer";
                } else if (regenteLocal == "Leo") {
                    document.getElementById("ascendente1").value = "leo";
                } else if (regenteLocal == "Vir") {
                    document.getElementById("ascendente1").value = "virgo";
                } else if (regenteLocal == "Lib") {
                    document.getElementById("ascendente1").value = "libra";
                } else if (regenteLocal == "Sco") {
                    document.getElementById("ascendente1").value = "escorpio";
                } else if (regenteLocal == "Sag") {
                    document.getElementById("ascendente1").value = "sagitario";
                } else if (regenteLocal == "Cap") {
                    document.getElementById("ascendente1").value = "capricornio";
                } else if (regenteLocal == "Aqu") {
                    document.getElementById("ascendente1").value = "acuario";
                } else if (regenteLocal == "Pis") {
                    document.getElementById("ascendente1").value = "piscis";
                }
                break;
            case 2:
                if (regenteLocal == "Ari") {
                    document.getElementById("ascendente1").value = "piscis";
                    break;
                } else if (regenteLocal == "Tau") {
                    document.getElementById("ascendente1").value = "aries";
                    break;
                } else if (regenteLocal == "Gem") {
                    document.getElementById("ascendente1").value = "tauro";
                    break;
                } else if (regenteLocal == "Can") {
                    document.getElementById("ascendente1").value = "geminis";
                    break;
                } else if (regenteLocal == "Leo") {
                    document.getElementById("ascendente1").value = "cancer";
                    break;
                } else if (regenteLocal == "Vir") {
                    document.getElementById("ascendente1").value = "leo";
                    break;
                } else if (regenteLocal == "Lib") {
                    document.getElementById("ascendente1").value = "virgo";
                    break;
                } else if (regenteLocal == "Sco") {
                    document.getElementById("ascendente1").value = "libra";
                    break;
                } else if (regenteLocal == "Sag") {
                    document.getElementById("ascendente1").value = "escorpio";
                    break;
                } else if (regenteLocal == "Cap") {
                    document.getElementById("ascendente1").value = "sagitario";
                    break;
                } else if (regenteLocal == "Aqu") {
                    document.getElementById("ascendente1").value = "capricornio";
                    break;
                } else if (regenteLocal == "Pis") {
                    document.getElementById("ascendente1").value = "acuario";
                    break;
                }
                break;
            case 3:
                if (regenteLocal == "Ari") {
                    document.getElementById("ascendente1").value = "acuario";
                    break;
                } else if (regenteLocal == "Tau") {
                    document.getElementById("ascendente1").value = "piscis";
                    break;
                } else if (regenteLocal == "Gem") {
                    document.getElementById("ascendente1").value = "aries";
                    break;
                } else if (regenteLocal == "Can") {
                    document.getElementById("ascendente1").value = "tauro";
                    break;
                } else if (regenteLocal == "Leo") {
                    document.getElementById("ascendente1").value = "geminis";
                    break;
                } else if (regenteLocal == "Vir") {
                    document.getElementById("ascendente1").value = "cancer";
                    break;
                } else if (regenteLocal == "Lib") {
                    document.getElementById("ascendente1").value = "leo";
                    break;
                } else if (regenteLocal == "Sco") {
                    document.getElementById("ascendente1").value = "virgo";
                    break;
                } else if (regenteLocal == "Sag") {
                    document.getElementById("ascendente1").value = "libra";
                    break;
                } else if (regenteLocal == "Cap") {
                    document.getElementById("ascendente1").value = "escorpio";
                    break;
                } else if (regenteLocal == "Aqu") {
                    document.getElementById("ascendente1").value = "sagitario";
                    break;
                } else if (regenteLocal == "Pis") {
                    document.getElementById("ascendente1").value = "capricornio";
                    break;
                }
                break;
            case 4:
                if (regenteLocal == "Ari") {
                    console.log("esta entrando en sol casa 4 aries");
                    console.log(`${arrayLocal2.regente}`);
                    document.getElementById("ascendente1").value = "capricornio";
                    break;
                } else if (regenteLocal == "Tau") {
                    document.getElementById("ascendente1").value = "acuario";
                    break;
                } else if (regenteLocal == "Gem") {
                    document.getElementById("ascendente1").value = "piscis";
                    break;
                } else if (regenteLocal == "Can") {
                    document.getElementById("ascendente1").value = "aries";
                    break;
                } else if (regenteLocal == "Leo") {
                    document.getElementById("ascendente1").value = "tauro";
                    break;
                } else if (regenteLocal == "Vir") {
                    document.getElementById("ascendente1").value = "geminis";
                    break;
                } else if (regenteLocal == "Lib") {
                    document.getElementById("ascendente1").value = "cancer";
                    break;
                } else if (regenteLocal == "Sco") {
                    document.getElementById("ascendente1").value = "leo";
                    break;
                } else if (regenteLocal == "Sag") {
                    document.getElementById("ascendente1").value = "virgo";
                    break;
                } else if (regenteLocal == "Cap") {
                    document.getElementById("ascendente1").value = "libra";
                    break;
                } else if (regenteLocal == "Aqu") {
                    document.getElementById("ascendente1").value = "escorpio";
                    break;
                } else if (regenteLocal == "Pis") {
                    document.getElementById("ascendente1").value = "sagitario";
                    break;
                }
                break;
            case 5:
                if (regenteLocal == "Ari") {
                    document.getElementById("ascendente1").value = "sagitario";
                    break;
                } else if (regenteLocal == "Tau") {
                    document.getElementById("ascendente1").value = "capricornio";
                    break;
                } else if (regenteLocal == "Gem") {
                    document.getElementById("ascendente1").value = "acuario";
                    break;
                } else if (regenteLocal == "Can") {
                    document.getElementById("ascendente1").value = "piscis";
                    break;
                } else if (regenteLocal == "Leo") {
                    document.getElementById("ascendente1").value = "aries";
                    break;
                } else if (regenteLocal == "Vir") {
                    document.getElementById("ascendente1").value = "tauro";
                    break;
                } else if (regenteLocal == "Lib") {
                    document.getElementById("ascendente1").value = "geminis";
                    break;
                } else if (regenteLocal == "Sco") {
                    document.getElementById("ascendente1").value = "cancer";
                    break;
                } else if (regenteLocal == "Sag") {
                    document.getElementById("ascendente1").value = "leo";
                    break;
                } else if (regenteLocal == "Cap") {
                    document.getElementById("ascendente1").value = "virgo";
                    break;
                } else if (regenteLocal == "Aqu") {
                    document.getElementById("ascendente1").value = "libra";
                    break;
                } else if (regenteLocal == "Pis") {
                    document.getElementById("ascendente1").value = "escorpio";
                    break;
                }
                break;
            case 6:
                if (regenteLocal == "Ari") {
                    document.getElementById("ascendente1").value = "escorpio";
                    break;
                } else if (regenteLocal == "Tau") {
                    console.log(`entro a este case TAURO ASC SAGITARIO`);
                    document.getElementById("ascendente1").value = "sagitario";
                    break;
                } else if (regenteLocal == "Gem") {
                    document.getElementById("ascendente1").value = "capricornio";
                    break;
                } else if (regenteLocal == "Can") {
                    document.getElementById("ascendente1").value = "acuario";
                    break;
                } else if (regenteLocal == "Leo") {
                    document.getElementById("ascendente1").value = "piscis";
                    break;
                } else if (regenteLocal == "Vir") {
                    document.getElementById("ascendente1").value = "aries";
                    break;
                } else if (regenteLocal == "Lib") {
                    document.getElementById("ascendente1").value = "tauro";
                    break;
                } else if (regenteLocal == "Sco") {
                    document.getElementById("ascendente1").value = "geminis";
                    break;
                } else if (regenteLocal == "Sag") {
                    document.getElementById("ascendente1").value = "cancer";
                    break;
                } else if (regenteLocal == "Cap") {
                    document.getElementById("ascendente1").value = "leo";
                    break;
                } else if (regenteLocal == "Aqu") {
                    document.getElementById("ascendente1").value = "virgo";
                    break;
                } else if (regenteLocal == "Pis") {
                    document.getElementById("ascendente1").value = "libra";
                    break;
                }
                break;
            case 7:
                if (regenteLocal == "Ari") {
                    document.getElementById("ascendente1").value = "libra";
                    break;
                } else if (regenteLocal == "Tau") {
                    document.getElementById("ascendente1").value = "escorpio";
                    break;
                } else if (regenteLocal == "Gem") {
                    document.getElementById("ascendente1").value = "sagitario";
                    break;
                } else if (regenteLocal == "Can") {
                    document.getElementById("ascendente1").value = "capricornio";
                    break;
                } else if (regenteLocal == "Leo") {
                    document.getElementById("ascendente1").value = "acuario";
                    break;
                } else if (regenteLocal == "Vir") {
                    document.getElementById("ascendente1").value = "piscis";
                    break;
                } else if (regenteLocal == "Lib") {
                    document.getElementById("ascendente1").value = "aries";
                    break;
                } else if (regenteLocal == "Sco") {
                    document.getElementById("ascendente1").value = "tauro";
                    break;
                } else if (regenteLocal == "Sag") {
                    document.getElementById("ascendente1").value = "geminis";
                    break;
                } else if (regenteLocal == "Cap") {
                    document.getElementById("ascendente1").value = "cancer";
                    break;
                } else if (regenteLocal == "Aqu") {
                    document.getElementById("ascendente1").value = "leo";
                    break;
                } else if (regenteLocal == "Pis") {
                    document.getElementById("ascendente1").value = "virgo";
                    break;
                }
                break;
            case 8:
                if (regenteLocal == "Ari") {
                    document.getElementById("ascendente1").value = "virgo";
                    break;
                } else if (regenteLocal == "Tau") {
                    document.getElementById("ascendente1").value = "libra";
                    break;
                } else if (regenteLocal == "Gem") {
                    document.getElementById("ascendente1").value = "escorpio";
                    break;
                } else if (regenteLocal == "Can") {
                    document.getElementById("ascendente1").value = "sagitario";
                    break;
                } else if (regenteLocal == "Leo") {
                    document.getElementById("ascendente1").value = "capricornio";
                    break;
                } else if (regenteLocal == "Vir") {
                    document.getElementById("ascendente1").value = "acuario";
                    break;
                } else if (regenteLocal == "Lib") {
                    document.getElementById("ascendente1").value = "piscis";
                    break;
                } else if (regenteLocal == "Sco") {
                    document.getElementById("ascendente1").value = "aries";
                    break;
                } else if (regenteLocal == "Sag") {
                    document.getElementById("ascendente1").value = "tauro";
                    break;
                } else if (regenteLocal == "Cap") {
                    document.getElementById("ascendente1").value = "geminis";
                    break;
                } else if (regenteLocal == "Aqu") {
                    document.getElementById("ascendente1").value = "cancer";
                    break;
                } else if (regenteLocal == "Pis") {
                    document.getElementById("ascendente1").value = "leo";
                    break;
                }
                break;
            case 9:
                if (regenteLocal == "Ari") {
                    document.getElementById("ascendente1").value = "leo";
                    break;
                } else if (regenteLocal == "Tau") {
                    document.getElementById("ascendente1").value = "virgo";
                    break;
                } else if (regenteLocal == "Gem") {
                    document.getElementById("ascendente1").value = "libra";
                    break;
                } else if (regenteLocal == "Can") {
                    document.getElementById("ascendente1").value = "escorpio";
                    break;
                } else if (regenteLocal == "Leo") {
                    document.getElementById("ascendente1").value = "sagitario";
                    break;
                } else if (regenteLocal == "Vir") {
                    document.getElementById("ascendente1").value = "capricornio";
                    break;
                } else if (regenteLocal == "Lib") {
                    document.getElementById("ascendente1").value = "acuario";
                    break;
                } else if (regenteLocal == "Sco") {
                    document.getElementById("ascendente1").value = "piscis";
                    break;
                } else if (regenteLocal == "Sag") {
                    document.getElementById("ascendente1").value = "aries";
                    break;
                } else if (regenteLocal == "Cap") {
                    document.getElementById("ascendente1").value = "tauro";
                    break;
                } else if (regenteLocal == "Aqu") {
                    document.getElementById("ascendente1").value = "geminis";
                    break;
                } else if (regenteLocal == "Pis") {
                    document.getElementById("ascendente1").value = "cancer";
                    break;
                }
                break;
            case 10:
                if (regenteLocal == "Ari") {
                    document.getElementById("ascendente1").value = "cancer";
                    break;
                } else if (regenteLocal == "Tau") {
                    document.getElementById("ascendente1").value = "leo";
                    break;
                } else if (regenteLocal == "Gem") {
                    document.getElementById("ascendente1").value = "virgo";
                    break;
                } else if (regenteLocal == "Can") {
                    document.getElementById("ascendente1").value = "libra";
                    break;
                } else if (regenteLocal == "Leo") {
                    document.getElementById("ascendente1").value = "escorpio";
                    break;
                } else if (regenteLocal == "Vir") {
                    document.getElementById("ascendente1").value = "sagitario";
                    break;
                } else if (regenteLocal == "Lib") {
                    document.getElementById("ascendente1").value = "capricornio";
                    break;
                } else if (regenteLocal == "Sco") {
                    document.getElementById("ascendente1").value = "acuario";
                    break;
                } else if (regenteLocal == "Sag") {
                    document.getElementById("ascendente1").value = "piscis";
                    break;
                } else if (regenteLocal == "Cap") {
                    document.getElementById("ascendente1").value = "aries";
                    break;
                } else if (regenteLocal == "Aqu") {
                    document.getElementById("ascendente1").value = "tauro";
                    break;
                } else if (regenteLocal == "Pis") {
                    document.getElementById("ascendente1").value = "geminis";
                    break;
                }
                break;
            case 11:
                if (regenteLocal == "Ari") {
                    document.getElementById("ascendente1").value = "geminis";
                    break;
                } else if (regenteLocal == "Tau") {
                    document.getElementById("ascendente1").value = "cancer";
                    break;
                } else if (regenteLocal == "Gem") {
                    document.getElementById("ascendente1").value = "leo";
                    break;
                } else if (regenteLocal == "Can") {
                    document.getElementById("ascendente1").value = "virgo";
                    break;
                } else if (regenteLocal == "Leo") {
                    document.getElementById("ascendente1").value = "libra";
                    break;
                } else if (regenteLocal == "Vir") {
                    document.getElementById("ascendente1").value = "escorpio";
                    break;
                } else if (regenteLocal == "Lib") {
                    document.getElementById("ascendente1").value = "sagitario";
                    break;
                } else if (regenteLocal == "Sco") {
                    document.getElementById("ascendente1").value = "capricornio";
                    break;
                } else if (regenteLocal == "Sag") {
                    document.getElementById("ascendente1").value = "acuario";
                    break;
                } else if (regenteLocal == "Cap") {
                    document.getElementById("ascendente1").value = "piscis";
                    break;
                } else if (regenteLocal == "Aqu") {
                    document.getElementById("ascendente1").value = "aries";
                    break;
                } else if (regenteLocal == "Pis") {
                    document.getElementById("ascendente1").value = "tauro";
                    break;
                }
                break;
            case 12:
                if (regenteLocal == "Ari") {
                    document.getElementById("ascendente1").value = "aries";
                    break;
                } else if (regenteLocal == "Tau") {
                    document.getElementById("ascendente1").value = "geminis";
                    break;
                } else if (regenteLocal == "Gem") {
                    document.getElementById("ascendente1").value = "cancer";
                    break;
                } else if (regenteLocal == "Can") {
                    document.getElementById("ascendente1").value = "leo";
                    break;
                } else if (regenteLocal == "Leo") {
                    document.getElementById("ascendente1").value = "virgo";
                    break;
                } else if (regenteLocal == "Vir") {
                    document.getElementById("ascendente1").value = "libra";
                    break;
                } else if (regenteLocal == "Lib") {
                    document.getElementById("ascendente1").value = "escorpio";
                    break;
                } else if (regenteLocal == "Sco") {
                    document.getElementById("ascendente1").value = "sagitario";
                    break;
                } else if (regenteLocal == "Sag") {
                    document.getElementById("ascendente1").value = "capricornio";
                    break;
                } else if (regenteLocal == "Cap") {
                    document.getElementById("ascendente1").value = "acuario";
                    break;
                } else if (regenteLocal == "Aqu") {
                    document.getElementById("ascendente1").value = "piscis";
                    break;
                } else if (regenteLocal == "Pis") {
                    document.getElementById("ascendente1").value = "tauro";
                    break;
                }
                break;
        }
    }
}

var botonClick = document.getElementById("resultadosAPIBoton");
botonClick.addEventListener('click', function() {
    resultadosAPI1();
});