var data = {
    "planets": { "Pluto": [180], "Neptune": [110, 0.2], "Uranus": [318], "Saturn": [201, -0.2], "Jupiter": [192], "Mars": [210], "Moon": [268], "Sun": [281], "Mercury": [312], "Venus": [330] },
    "cusps": [180, 210, 240, 270, 300, 330, 10, 40, 70, 100, 130, 170]
};



function dibujarCarta() {
    var radix = new astrology.Chart('paper', 600, 600).radix(data);

    // Aspect calculation
    // default is planet to planet, but it is possible add some important points:				
    radix.addPointsOfInterest({ "As": [data.cusps[0]], "Ic": [data.cusps[3]], "Ds": [data.cusps[6]], "Mc": [data.cusps[9]] });
    radix.aspects();
}