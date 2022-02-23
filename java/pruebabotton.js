let planeta = ''
let regente = ''
let PenR = ''

//las funciones de abajo asignaran valores a las variables al cliquear los botones
function seleccionarRegente(btn) {
    regente = btn;
    return regente;
}

function seleccionarPlaneta(btn2) {
    planeta = btn2;
    return planeta;
}

//la funcion de abajo imprimira en los logs los valores seleccionados a las variables
function imprimir(planeta, regente) {
    console.log(`${seleccionarRegente(regente)} + ${seleccionarPlaneta(planeta)}`)
}

//la funcion de abajo calculara el resultado dependiento del planeta y regente elegidos anteriormente
function calcularPenR(planeta, regente) {
    console.log(planeta + regente)
    switch (planeta) {
        case 'Marte':
            if (regente == "Aries") {
                PenR = "Marte en Aries es una de las posiciones de la carta natal que da más impulsividad, energía y muchas habilidades motrices, para conducir un auto, hacer deportes y gimnasia. Tienen un espíritu conquistador y competitivo. Suelen tener una iniciativa que se apaga fácilmente cuando pierden el entusiasmo."
                break;
            } else if (regente == "Escorpio") {
                PenR = "Marte en Escorpio puede aportar mucha intensidad emocional a las acciones personales. Aquellos que tienen esta posición en su carta pueden ser más valientes, hasta el punto de no tener miedo a casi nada. En situaciones difíciles, sus nativos buscan este coraje extremo para enfrentar eventuales desafíos."
                break;
            } else if (regente == "Virgo") {
                PenR = "Marte en Virgo es un Marte muy práctico y preciso. Le cuesta ser claro en sus objetivos, siempre está dando vuelta a las cosas para perfeccionarlas, no es directo pero cuando realiza algo lo hace hasta el último detalle. Suele ser algo temeroso y le cuesta emprender cosas por miedo a equivocarse. Son muy trabajadores y canalizan su fuerza vital en trabajos de servicio a los demás. "
                break;
            }
        case 'Jupiter':
            if (regente == "Aries") {
                PenR = "Las personas con Jupiter en Aries tienen una mayor capacidad de liderazgo e iniciativa son características amplificadas en las personas nacidas con Júpiter en Aries. Tienden a ser más entusiastas, asertivas, enérgicas y con muchas ideas sobre cómo iniciar, promover o expandir las ideas que penetran la mente. También puede ser más obstinado y muy persuasivo para lograr que las personas se embarquen en sus planes e ideas. La creatividad y la innovación también pueden destacarse, además de una mayor admiración por las actitudes y las personas valientes que están abiertas a sus desafíos con el corazón abierto. El papel de Júpiter en el signo de Aries es proporcionar una mayor comprensión de todos, imbuyendo respeto y creatividad en un plano, digamos, superior."
                break;
            } else if (regente == "Escorpio") {
                PenR = "Cuando Júpiter está en Escorpio, un signo de agua fija, tienes una fuerte creencia en lo oculto. Eres más capaz de atraer suerte y experiencias ricas en la vida a través de tu intuición, imaginación y compasión. Eres abundante en perspicacia e intuición, hasta un nivel casi psíquico. Con gran devoción, tienes el poder de poner todo en proyectos y obtener grandes beneficios.Tienes más suerte cuando recurres a tu fuerza interior y compartes tu visión con los demás. Ganarás dinero a través de inversiones inteligentes."
                break;
            } else if (regente == "Virgo") {
                PenR = "Cuando Júpiter está en Virgo, un signo de Tierra Mutable, tienes suerte trabajando en proyectos. Aunque seas práctico, puedes ayudar a otros a visualizar lo que quieren para establecer un orden. Puede que no tengas ningún deseo ardiente de liderar, pero prosperas en entornos donde hay una dirección clara y eres un gran empleado o empleador que crea resultados. Tendrás muy buena fama por tu atención a los detalles con sentido comercial sólido. Ganarás dinero con el cuidado de la salud. Ya sea estudiando rubros convencionales como técnico paramédico, enfermería, medicina, como también en sistemas alternativos como la acupuntura, tuina, biomagnetismo, etc. "
                break;
            }
        case 'Saturno':
            if (regente == "Aries") {
                PenR = "Para las personas con Saturno en Aries, sus decisiones, sus puntos firmes pueden aparecer por la mañana y desaparecer por la noche. Traten de ser más decididos en continuar con su vida porque este Saturno les da excelentes cualidades de discernimiento. Ciertamente frena su entusiasmo y su deseo de novedad continua, pero a menudo su instinto está equivocado y por lo tanto este planeta les ayuda a evitar cometer errores en la vida que podrían resultar fatales. Atención a todo lo que concierne a la circulación sanguínea. Padre muy enérgico e impetuoso."
                break;
            } else if (regente == "Escorpio") {
                PenR = "Saturno en Escorpio es una persona muy autodeterminada a lograr sus cometidos, han llegado a pensar que gracias a su personalidad reservada, muchos de sus planes y proyectos fluyen de manera satisfactoria. Por este lado guardas un poco de superstición. Además posees una actitud muy limitada en lo que se refiere a tus asuntos personales. Pueden llegar a tomar un gran nivel de confianza únicamente con su pareja."
                break;
            } else if (regente == "Virgo") {
                PenR = "Las personas con Saturno en Virgo pueden ser muy prácticas, trabajadoras y serias. Tienen una inclinación por la investigación, la elaboración de estrategias y el mantenimiento de registros, y también pueden ser bastante responsables y tener cierto talento para arreglar las cosas. "
                break;
            }
    }
    return PenR;
}

//la funcion de abajo imprimira el resultado en una alerta
function resultado(planeta, regente) {
    alert(`La colocación de ${planeta} en ${regente} significa: ${calcularPenR(planeta,regente)} `);

}