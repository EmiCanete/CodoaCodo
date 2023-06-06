function calculo() {

    var cant, cate, descuento, total;

    cant = document.getElementById("cantidad").value;
    cate = document.getElementById("categoria").value;

    if (cate == "Estudiante") {
        descuento = 200 * (80 / 100);
    }
    else if (cate == "Trainee") {
        descuento = 200 * (50 / 100);
    }
    else if (cate == "Junior") {
        descuento = 200 * (15 / 100);
    }


    if (cate == "Ninguna") {
        total = cant * 200;
    }

    else {
        total = cant * (200 - descuento);
    }

    document.getElementById("total").innerHTML = total;

}

function borrar() {

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("categoria").value = "Ninguna";
    document.getElementById("cantidad").value = "";
    document.getElementById("total").innerHTML = "";
}