//Este programa puede realizar 2 calculos distintos
//1. ¿Qué significa el aspecto entre los planetas seleccionados?
//2.¿Qué significa que el planeta seleccionado esté en el signo seleccionado?
// El usuario primero deberá elegir cuál de estos dos "cálculos" desea realizar
//A) Si el usuario eligió la opción 1, entonces deberá elegir 2 planetas, y luego..
//..deberá elegir el aspecto entre estos. Luego el calculador indicará qué significa dicho aspecto entre estos 2 planetas 
//B) Si el usuario eligió la opción 2, entonces deberá elegir un planeta y un signo, y..
//..el calculador le indicará qué significa dicho planeta en dicho signo


function sitioOpciones() {
    var selectbox = document.getElementById("select-id");
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    window.location.href = selectedValue;
}