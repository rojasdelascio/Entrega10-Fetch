// var planeta1 = ''
// var planeta2 = ''

// while ((planeta1 = '') || (planeta2 = '')) {
//     planeta1 = prompt('Ingrese Planeta 1')
//     planeta2 = prompt('Ingrese Planeta 2')
// }

let planeta1 = '';
let planeta2 = '';
let aspecto = '';
let aspectoTexto1 = '';


function seleccionarP1(p1) {
    planeta1 = p1;
    return planeta1;
}

function seleccionarP2(p2) {
    planeta2 = p2;
    return planeta2;
}

function seleccionarAspecto(aspec) {
    aspecto = aspec;
    return aspecto;

}

function imprimir(planeta1, planeta2, aspecto) {
    console.log(`Planeta 1 es: ${planeta1}, Planeta2 es: ${planeta2}, y el aspecto es: ${aspecto}`);
    console.log(`Significado: ${calcularAspecto(planeta1, planeta2, aspecto)}`);
    // var aspectoTextoTotal = calcularAspecto(aspecto, planeta1, planeta2);
    // console.log(`Aspecto Texto: ${aspectoTextoTotal}`);
}



// while ((planeta1 == '') || (planeta2 == '')) {

//     if (planeta1 == '') {
//         planeta1 = prompt('Ingrese Planeta 1')
//     } else if (planeta2 == '') {
//         planeta2 = prompt('Ingrese Planeta 2')
//     }
// }
// aspecto = prompt('¿Sobre que aspecto de estos 2 planetas desea saber?')

// console.log(planeta1)
// console.log(planeta2)
// console.log(aspecto)

function calcularAspecto(planeta1, planeta2, aspecto) {

    switch (aspecto) {
        case 'Conjuncion':
            if (planeta1 == "Marte") {
                switch (planeta2) {
                    case 'Venus':
                        aspectoTexto1 = "La energía de Marte es profundamente masculina, mientras que la de Venus es en extremo femenina, por lo que se fusionan dos influencias opuestas que tienen en común el amor y el sexo. Ésta es la combinación amorosa por excelencia, el signo de don Juan Tenorio. Se trata de nativos ardientes y pasionales, y dotados de una gran carga erótica que conecta inconscientemente con el lado instintivo y animal de sus semejantes. De ellos suele emanar un potente atractivo y magnetismo físico que va unido a un gran encanto y una cálida cordialidad. Estos nativos se encuentran entre los conquistadores natos. Poseen una potente sexualidad, que los demás captan aun sin ellos proponérselos. Son muy impulsivos y competitivos en el amor y también muy directos en sus relaciones, pero también pueden ser algo rudos o toscos y carecer de delicadeza.";
                        break;
                    case 'Mercurio':
                        aspectoTexto1 = "Mercurio en conjunto con Marte le da al nativo una mente rápida, reflejos rápidos y una 'lengua afilada'. Estos atributos son ideales para tomar decisiones bajo presión mientras otros vacilan. Muy buenas habilidades para el debate que permiten al nativo no solo imponer sus derechos sino también los de los demás.";
                        break;
                    case 'Saturno':
                        aspectoTexto1 = "Los nativos con Saturno en Conjuncion Venus, son nativos de naturaleza impulsiva, rigurosa y austera, y temperamento bilioso-nervioso o colérico-melancólico, suelen ser pesimistas, y con tendencia al fatalismo o la amargura. Asimismo son autoritarios y rigurosos, con propensión a reconvertir o sermonear a otros. En general, siempre reprimen o controlan férreamente su enorme agresividad hasta que un día estallan en la cólera más brutal. Por lo general, serán sumisos con los fuertes y tiranos crueles con los débiles. Tienden a ser testarudos, violentos e incluso maliciosos. También pueden ser rencorosos y vengativos. En muchos casos pueden convertirse en chivos expiatorios o cabezas de turco, pero en otras ocasiones serán ellos los que someterán a otros a terribles pruebas o sufrimientos.";
                        break;
                    case 'Marte':
                        aspectoTexto1 = "Un planeta no puede estar aspectado consigo mismo.";
                        break;
                }
            } else if (planeta1 == "Venus") {
                switch (planeta2) {
                    case 'Marte':
                        aspectoTexto1 = "La energía de Marte es profundamente masculina, mientras que la de Venus es en extremo femenina, por lo que se fusionan dos influencias opuestas que tienen en común el amor y el sexo. Ésta es la combinación amorosa por excelencia, el signo de don Juan Tenorio. Se trata de nativos ardientes y pasionales, y dotados de una gran carga erótica que conecta inconscientemente con el lado instintivo y animal de sus semejantes. De ellos suele emanar un potente atractivo y magnetismo físico que va unido a un gran encanto y una cálida cordialidad. Estos nativos se encuentran entre los conquistadores natos. Poseen una potente sexualidad, que los demás captan aun sin ellos proponérselos. Son muy impulsivos y competitivos en el amor y también muy directos en sus relaciones, pero también pueden ser algo rudos o toscos y carecer de delicadeza.";
                        break;
                    case 'Mercurio':
                        aspectoTexto1 = "Las personas con Venus en conjunción con Mercurio se llevan bien con todo tipo de personas y tienen el poder de influir y persuadirlas con sus ideas. Son comunicativos y generosos y es probable que sean muy atractivos para el sexo opuesto. Este aspecto denota una perspectiva materialista que se equilibra con una fuerte ética de trabajo. Son sociables, con un aire de refinamiento y tienen buen gusto y un gran aprecio por la belleza y el lujo. Esto puede extenderse a actividades artísticas como la música, la danza y el teatro. Las personas con este aspecto se enorgullecen de su trabajo y desean hacer bien su trabajo. Su talento dramático innato puede buscar expresión en el teatro u otros medios creativos. Disfrutan de variedad y libertad en el lugar de trabajo, pero es posible que tengan una racha rebelde que debe reducirse. Su actitud a veces obstinada puede ser un obstáculo para su logro."
                        break;
                    case 'Saturno':
                        aspectoTexto1 = " El aspecto de Venus en conjunción con Saturno imbuye una sensación de moderación y equilibrio con respecto a todas las cosas deseadas. Las personas con este aspecto pueden organizar sus recursos con prudencia y ejercer moderación y templanza cuando sea necesario. Aman y aprecian más lo que es funcionalmente bello. Pueden tener interés en la arquitectura y el diseño de todo tipo. Es probable que el desafío de resolver problemas cosméticos o mejorarlos sea muy atractivo para las personas con Venus en conjunción con Saturno en la carta astral. Su sentido del gusto estético puede estar especialmente atraído hacia cosas geométricas, estructurales o infundidas con patrones y formas distintivas. Las personas con este aspecto pueden estar inclinadas a organizar las cosas, organizar los objetos de forma ordenada y colocarlos en algún tipo de configuración o taxonomía lógica o visualmente agradable."
                        break;
                    case 'Venus':
                        aspectoTexto1 = "Un planeta no puede estar aspectado consigo mismo.";
                        break;
                }
            } else if (planeta1 == "Mercurio") {
                switch (planeta2) {
                    case 'Marte':
                        aspectoTexto1 = "Mercurio en conjunto con Marte le da al nativo una mente rápida, reflejos rápidos y una 'lengua afilada'. Estos atributos son ideales para tomar decisiones bajo presión mientras otros vacilan. Muy buenas habilidades para el debate que permiten al nativo no solo imponer sus derechos sino también los de los demás.";
                        break;
                    case 'Venus':
                        aspectoTexto1 = "Las personas con Venus en conjunción con Mercurio se llevan bien con todo tipo de personas y tienen el poder de influir y persuadirlas con sus ideas. Son comunicativos y generosos y es probable que sean muy atractivos para el sexo opuesto. Este aspecto denota una perspectiva materialista que se equilibra con una fuerte ética de trabajo. Son sociables, con un aire de refinamiento y tienen buen gusto y un gran aprecio por la belleza y el lujo. Esto puede extenderse a actividades artísticas como la música, la danza y el teatro. Las personas con este aspecto se enorgullecen de su trabajo y desean hacer bien su trabajo. Su talento dramático innato puede buscar expresión en el teatro u otros medios creativos. Disfrutan de variedad y libertad en el lugar de trabajo, pero es posible que tengan una racha rebelde que debe reducirse. Su actitud a veces obstinada puede ser un obstáculo para su logro."
                        break;
                    case 'Saturno':
                        aspectoTexto1 = " El aspecto de Venus en conjunción con Saturno imbuye una sensación de moderación y equilibrio con respecto a todas las cosas deseadas. Las personas con este aspecto pueden organizar sus recursos con prudencia y ejercer moderación y templanza cuando sea necesario. Aman y aprecian más lo que es funcionalmente bello. Pueden tener interés en la arquitectura y el diseño de todo tipo. Es probable que el desafío de resolver problemas cosméticos o mejorarlos sea muy atractivo para las personas con Venus en conjunción con Saturno en la carta astral. Su sentido del gusto estético puede estar especialmente atraído hacia cosas geométricas, estructurales o infundidas con patrones y formas distintivas. Las personas con este aspecto pueden estar inclinadas a organizar las cosas, organizar los objetos de forma ordenada y colocarlos en algún tipo de configuración o taxonomía lógica o visualmente agradable."
                        break;
                    case 'Mercurio':
                        aspectoTexto1 = "Un planeta no puede estar aspectado consigo mismo.";
                        break;
                }
            } else if (planeta1 == "Saturno") {
                switch (planeta2) {
                    case 'Marte':
                        aspectoTexto1 = "Los nativos con Saturno en Conjuncion Venus, son nativos de naturaleza impulsiva, rigurosa y austera, y temperamento bilioso-nervioso o colérico-melancólico, suelen ser pesimistas, y con tendencia al fatalismo o la amargura. Asimismo son autoritarios y rigurosos, con propensión a reconvertir o sermonear a otros. En general, siempre reprimen o controlan férreamente su enorme agresividad hasta que un día estallan en la cólera más brutal. Por lo general, serán sumisos con los fuertes y tiranos crueles con los débiles. Tienden a ser testarudos, violentos e incluso maliciosos. También pueden ser rencorosos y vengativos. En muchos casos pueden convertirse en chivos expiatorios o cabezas de turco, pero en otras ocasiones serán ellos los que someterán a otros a terribles pruebas o sufrimientos.";
                        break;
                    case 'Venus':
                        aspectoTexto1 = "Las personas con Venus en conjunción con Mercurio se llevan bien con todo tipo de personas y tienen el poder de influir y persuadirlas con sus ideas. Son comunicativos y generosos y es probable que sean muy atractivos para el sexo opuesto. Este aspecto denota una perspectiva materialista que se equilibra con una fuerte ética de trabajo. Son sociables, con un aire de refinamiento y tienen buen gusto y un gran aprecio por la belleza y el lujo. Esto puede extenderse a actividades artísticas como la música, la danza y el teatro. Las personas con este aspecto se enorgullecen de su trabajo y desean hacer bien su trabajo. Su talento dramático innato puede buscar expresión en el teatro u otros medios creativos. Disfrutan de variedad y libertad en el lugar de trabajo, pero es posible que tengan una racha rebelde que debe reducirse. Su actitud a veces obstinada puede ser un obstáculo para su logro."
                        break;
                    case 'Mercurio':
                        aspectoTexto1 = " El aspecto de Venus en conjunción con Saturno imbuye una sensación de moderación y equilibrio con respecto a todas las cosas deseadas. Las personas con este aspecto pueden organizar sus recursos con prudencia y ejercer moderación y templanza cuando sea necesario. Aman y aprecian más lo que es funcionalmente bello. Pueden tener interés en la arquitectura y el diseño de todo tipo. Es probable que el desafío de resolver problemas cosméticos o mejorarlos sea muy atractivo para las personas con Venus en conjunción con Saturno en la carta astral. Su sentido del gusto estético puede estar especialmente atraído hacia cosas geométricas, estructurales o infundidas con patrones y formas distintivas. Las personas con este aspecto pueden estar inclinadas a organizar las cosas, organizar los objetos de forma ordenada y colocarlos en algún tipo de configuración o taxonomía lógica o visualmente agradable."
                        break;
                    case 'Saturno':
                        aspectoTexto1 = "Un planeta no puede estar aspectado consigo mismo.";
                        break;
                }
            }
        case 'Oposicion':
            if (planeta1 == "Marte") {
                switch (planeta2) {
                    case 'Venus':
                        aspectoTexto1 = "Significado Marte Oposición Venus: dificultades en las relaciones con los demás, autoestima baja, problemas económicos y de alimentación. Origen (carga kármica): en otras vidas no defendió el amor, ni los valores, ni la creatividad, ni la belleza, ni el dinero, ni la alimentación. Tienes que hacer: asumo mi poder y mi fuerza, dejo de ser cobarde y con valentía apuesto por: las relaciones con los demás (mediar en resolver conflictos), por el amor, salir de la dependencia y el apego, alimentarse de forma firme, reconocer las necesidades, manejar el dinero, ser creativo y defender la belleza. Avanzar entre las dificultades para alcanzar en el futuro parejas estables y bien armonizadas. Integro mi fuerza con mi capacidad de relacionarme con armonía.";
                        break;
                    case 'Mercurio':
                        aspectoTexto1 = "Significado Marte Oposición Mercurio: dificultad en la comunicación, el aprendizaje, el pensamiento, el movimiento, las transacciones económicas y la relación con los hermanos y vecinos. Origen (carga kármica): en otras vidas no supo realizar movimientos correctos y la comunicación oportuna, por cobardía. Ahora sufre dificultades para moverse, para comunicar, para aprender y atender, para realizar transacciones económicas, para relacionarse con hermanos y vecinos. Recibe agresividad y crítica. Tienes que hacer: activar fuerzas de decisión consciente, aprender a defenderse, trabajar en la comunicación y el aprendizaje. Ha de potenciar el movimiento y la comunicación. Defender el deporte en los jóvenes.";
                        break;
                    case 'Saturno':
                        aspectoTexto1 = "Significado Marte Oposición Saturno. Dificultades en: la decisión, la acción, ser líder, la defensa activa, fuerza muscular, liderazgo y energía sexual masculina. Eludió la responsabilidad de las acciones. Origen (carga kármica): en otras vidas no fuiste capaz de actuar con decisión, con coraje, con valor, con valentía, de forma estructurada. Ahora recibe con dificultad el intento de conseguir lo anterior. Tienes que hacer: integrar la fuerza con la disciplina. Asumir el rol de padre de uno mismo. Ejercer con fuerza decisiones difíciles. Liderar aunque conlleve cierto grado de carga o pequeños sacrificios. Hacer de uno mismo un sabio con coraje. Desarrollar paciencia con los jóvenes. Alcanzar estructura en el deporte. Vencer el miedo de creer ser incapaz para hacer cosas.";
                        break;
                    case 'Marte':
                        aspectoTexto1 = "Un planeta no puede estar aspectado consigo mismo.";
                        break;
                }
            } else if (planeta1 == "Venus") {
                switch (planeta2) {
                    case 'Marte':
                        aspectoTexto1 = "Significado Venus Oposición Marte: dificultades en las relaciones con los demás, autoestima baja, problemas económicos y de alimentación. Origen (carga kármica): en otras vidas no defendió el amor, ni los valores, ni la creatividad, ni la belleza, ni el dinero, ni la alimentación. Tienes que hacer: asumo mi poder y mi fuerza, dejo de ser cobarde y con valentía apuesto por: las relaciones con los demás (mediar en resolver conflictos), por el amor, salir de la dependencia y el apego, alimentarse de forma firme, reconocer las necesidades, manejar el dinero, ser creativo y defender la belleza. Avanzar entre las dificultades para alcanzar en el futuro parejas estables y bien armonizadas. Integro mi fuerza con mi capacidad de relacionarme con armonía.";
                        break;
                    case 'Mercurio':
                        aspectoTexto1 = "Venus y Mercurio no pueden estar opuestos"
                        break;
                    case 'Saturno':
                        aspectoTexto1 = " Venus Oposición Saturno tiene un carácter modesto servicial, trato lleno de paciencia y afán de servir. Filantropía. Gusto por las cosas sencillas de la vida. Economía. Soltura y buenos propósitos. La competencia y las comparaciones son necesarias para que la persona aprenda a valorar justamente sus capacidades, usualmente se subestima tanto, que piensa que su trabajo es inútil o insignificante. Cuando intervenga la adversidad, despierta depravada sensualidad, tendencias contranatura, insaciabilidad sexual. Perdida, deposición del cargo y fracasos de todo orden. Gustos por los lujos, fracasos económicos, frialdad sensual y emotiva. Esterilidad. Problemas en los partos. Amor no correspondido, o amor alejado por circunstancias ajenas a él o la pareja, pareja que viaja, pareja muy mayor o muy menor. Las frustraciones en el ámbito emocional pueden ser compensadas con el crecimiento profesional o económico. Siempre es aquella persona que debe adaptarse a las demandas de otros por el beneficio de las relaciones. Tal vez se resigne a poner más que la pareja en la relación personal. Problemas glandulares o de la garganta, pueden ser el resultado de no ver o no hablar del lado bonito de las cosas. El optimismo que se asimile con aprendizaje condicionado debe ser genuino para que funcione. No se apresure a casarse desde muy joven, a menos que este dispuesto a sacrificar grandes cosas para mantenerlo funcionando. Si decide casarse por seguridad financiera, podría durar, pero será algo menos que una asociación en la que habrá muy pocas compensaciones emocionales."
                        break;
                    case 'Venus':
                        aspectoTexto1 = "Un planeta no puede estar aspectado consigo mismo.";
                        break;
                }
            } else if (planeta1 == "Mercurio") {
                switch (planeta2) {
                    case 'Marte':
                        aspectoTexto1 = "Significado Mercurio Oposición Marte: dificultad en la comunicación, el aprendizaje, el pensamiento, el movimiento, las transacciones económicas y la relación con los hermanos y vecinos. Origen (carga kármica): en otras vidas no supo realizar movimientos correctos y la comunicación oportuna, por cobardía. Ahora sufre dificultades para moverse, para comunicar, para aprender y atender, para realizar transacciones económicas, para relacionarse con hermanos y vecinos. Recibe agresividad y crítica. Tienes que hacer: activar fuerzas de decisión consciente, aprender a defenderse, trabajar en la comunicación y el aprendizaje. Ha de potenciar el movimiento y la comunicación. Defender el deporte en los jóvenes.";
                        break;
                    case 'Venus':
                        aspectoTexto1 = "Venus y Mercurio no pueden estar opuestos"
                        break;
                    case 'Saturno':
                        aspectoTexto1 = " Significado Mercurio Op. Saturno: dificultad en la comunicación, aprendizaje, el pensamiento, el movimiento, y transacciones económicas, dificultad con los hermanos y vecinos. Dificultad en estructurarse y adquirir disciplina, normas y reglas. Origen (carga kármica): en otras vidas bloqueó el aprendizaje, la comunicación, se negó a ello, lo rechazó. No se movió en el sentido correcto. Ahora le cuesta trabajo estudiar, pensar, moverse. No fluye la comunicación oral y escrita. Se siente con dificultad. Tienes que hacer: asumo poco a poco mi responsabilidad con las palabras. Pongo palabras y comunicación en mi entorno, aunque me cueste. Asumo mi responsabilidad de decir lo que tenga que decir. Busco la palabra adecuada para cada circunstancia. Aplico el movimiento preciso. Libero mis miedos y me pongo en la disciplina. Invierto tiempo en estudiar. Coordino y posibilito viajes cortos."
                        break;
                    case 'Mercurio':
                        aspectoTexto1 = "Un planeta no puede estar aspectado consigo mismo.";
                        break;
                }
            } else if (planeta1 == "Saturno") {
                switch (planeta2) {
                    case 'Marte':
                        aspectoTexto1 = "Significado Saturno Oposición Marte. Dificultades en: la decisión, la acción, ser líder, la defensa activa, fuerza muscular, liderazgo y energía sexual masculina. Eludió la responsabilidad de las acciones. Origen (carga kármica): en otras vidas no fuiste capaz de actuar con decisión, con coraje, con valor, con valentía, de forma estructurada. Ahora recibe con dificultad el intento de conseguir lo anterior. Tienes que hacer: integrar la fuerza con la disciplina. Asumir el rol de padre de uno mismo. Ejercer con fuerza decisiones difíciles. Liderar aunque conlleve cierto grado de carga o pequeños sacrificios. Hacer de uno mismo un sabio con coraje. Desarrollar paciencia con los jóvenes. Alcanzar estructura en el deporte. Vencer el miedo de creer ser incapaz para hacer cosas.";
                        break;
                    case 'Venus':
                        aspectoTexto1 = "Saturno Oposición Venus tiene un carácter modesto servicial, trato lleno de paciencia y afán de servir. Filantropía. Gusto por las cosas sencillas de la vida. Economía. Soltura y buenos propósitos. La competencia y las comparaciones son necesarias para que la persona aprenda a valorar justamente sus capacidades, usualmente se subestima tanto, que piensa que su trabajo es inútil o insignificante. Cuando intervenga la adversidad, despierta depravada sensualidad, tendencias contranatura, insaciabilidad sexual. Perdida, deposición del cargo y fracasos de todo orden. Gustos por los lujos, fracasos económicos, frialdad sensual y emotiva. Esterilidad. Problemas en los partos. Amor no correspondido, o amor alejado por circunstancias ajenas a él o la pareja, pareja que viaja, pareja muy mayor o muy menor. Las frustraciones en el ámbito emocional pueden ser compensadas con el crecimiento profesional o económico. Siempre es aquella persona que debe adaptarse a las demandas de otros por el beneficio de las relaciones. Tal vez se resigne a poner más que la pareja en la relación personal. Problemas glandulares o de la garganta, pueden ser el resultado de no ver o no hablar del lado bonito de las cosas. El optimismo que se asimile con aprendizaje condicionado debe ser genuino para que funcione. No se apresure a casarse desde muy joven, a menos que este dispuesto a sacrificar grandes cosas para mantenerlo funcionando. Si decide casarse por seguridad financiera, podría durar, pero será algo menos que una asociación en la que habrá muy pocas compensaciones emocionales."
                        break;
                    case 'Mercurio':
                        aspectoTexto1 = " Significado Saturno Op. Mercurio: dificultad en la comunicación, aprendizaje, el pensamiento, el movimiento, y transacciones económicas, dificultad con los hermanos y vecinos. Dificultad en estructurarse y adquirir disciplina, normas y reglas. Origen (carga kármica): en otras vidas bloqueó el aprendizaje, la comunicación, se negó a ello, lo rechazó. No se movió en el sentido correcto. Ahora le cuesta trabajo estudiar, pensar, moverse. No fluye la comunicación oral y escrita. Se siente con dificultad. Tienes que hacer: asumo poco a poco mi responsabilidad con las palabras. Pongo palabras y comunicación en mi entorno, aunque me cueste. Asumo mi responsabilidad de decir lo que tenga que decir. Busco la palabra adecuada para cada circunstancia. Aplico el movimiento preciso. Libero mis miedos y me pongo en la disciplina. Invierto tiempo en estudiar. Coordino y posibilito viajes cortos."
                        break;
                    case 'Saturno':
                        aspectoTexto1 = "Un planeta no puede estar aspectado consigo mismo.";
                        break;
                }
            }
    }
    return aspectoTexto1;
}


function resultado(planeta1, planeta2, aspecto) {

    alert(`El aspecto ${aspecto} entre ${planeta1} y ${planeta2} significa: ${calcularAspecto(planeta1,planeta2,aspecto)} `);
}
// const aspectoTexto = aspecto => {
//     switch (aspecto) {

//         case "conjuncion":
//             if ((planeta1 == "marte") && (planeta2 == "venus") || (planeta2 == "marte") && (planeta1 == "venus")) {
//                 return aspectoTexto = "La energía de Marte es profundamente masculina, mientras que la de Venus es en extremo femenina, por lo que se fusionan dos influencias opuestas que tienen en común el amor y el sexo. Ésta es la combinación amorosa por excelencia, el signo de don Juan Tenorio. Se trata de nativos ardientes y pasionales, y dotados de una gran carga erótica que conecta inconscientemente con el lado instintivo y animal de sus semejantes. De ellos suele emanar un potente atractivo y magnetismo físico que va unido a un gran encanto y una cálida cordialidad. Estos nativos se encuentran entre los conquistadores natos. Poseen una potente sexualidad, que los demás captan aun sin ellos proponérselos. Son muy impulsivos y competitivos en el amor y también muy directos en sus relaciones, pero también pueden ser algo rudos o toscos y carecer de delicadeza."
//             } else if ((planeta1 == "marte") && (planeta2 == "mercurio") || (planeta2 == "marte") && (planeta1 == "mercurio")) {
//                 return aspectoTexto = "El aspecto conjuncion entre Marte y Mercurio significa:   Fusión entre el intelecto y la agresividad. La inteligencia se vuelve agresiva y dirige la mente hacia la acción, por otro lado, la agresividad se vuelve lúcida e inteligente. Esta posición proporciona a la mente una energía muy grande, que se activa especialmente en las controversias y los debates, asimismo estos nativos son excelentes oradores y críticos. Suelen ser personas realistas, que quieren las cosas claras y van directas al grano, llamando siempre a las cosas por su nombre y expresándose de un modo directo y con una gran franqueza."
//             }
//     }
// }


// alert(aspectoTexto)