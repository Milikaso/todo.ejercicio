var listaElementos = new Array();
var lastIdTarea = 0;

$(document).ready(function () {

    cargarElementos();

    $(".mifiltro").keyup(function () {
        filtrar($(this));
    });
    $(".mifiltro").keydown(function () {
        filtrar($(this));
    });





});


$(document).on('click', '.btneliminar', eliminar);


function eliminar() {
    console.log('dentro');
    $(this).parent().parent().remove();
}

function cargarElementos() {

    listaElementos = [
        { 'idTarea': 1, 'titulo': 'Estudiar Javascript', 'prioridad': 'diaria' },
        { 'idTarea': 2, 'titulo': 'Tomarse la pastilla', 'prioridad': 'urgente' },
        { 'idTarea': 3, 'titulo': 'comer', 'prioridad': 'mensual' }
    ];

    lastIdTarea = 3;

    for (var i = 0; i < listaElementos.length; i++) {

        var tarea = listaElementos[i];

        //<tr id="1"><td class="titulo">Estudiar Javascript</td><td class="eliminar"><button class="btneliminar">eliminar</button></td> </tr>
        $('#lista').append('<tr id=' + tarea.idTarea + ' class=' + tarea.prioridad + ' ><td class="titulo">' + tarea.titulo + '</td><td class="eliminar"><button class="btneliminar">eliminar</button></td></tr> ');
    }

    /**  for (var tarea of listaElementos) {
          $('#lista').append('<li id=' + tarea.idTarea + ' >' + tarea.titulo + ' </li> ');
    }*/
}

function guardar() {


    var titulo = $('#work').val().trim();
    var prioridad = $('#prioridad').val();

    if (prioridad == '-1') {
        alert('Debe seleccionar una prioridad');
    } else if (titulo == '') {
        alert('debe escribir un nombre de tarea');
    } else {
        lastIdTarea++;
        listaElementos.push({ 'idTarea': lastIdTarea, 'titulo': titulo, 'prioridad': prioridad })
        $('#lista').append('<tr id=' + lastIdTarea + ' class=' + prioridad + ' ><td class="titulo">' + titulo + '</td><td class="eliminar"><button class="btneliminar">eliminar</button></td></tr> ');
    }
}


function filtrar(texto) {

    var rows = $('#lista').find('tr');


    for (var i = 0; i < rows.length; i++) { //Recorre las filas 1 a 1
        var celdas = $(rows[i]).find("td");

        if (celdas[0].innerText.toLowerCase().includes(texto.val().toLowerCase()) == false) {
            $(rows[i]).fadeOut();
        } else {
            $(rows[i]).fadeIn();
        }
    }
}

function filtrarPrioridad() {
    var prioridad = $('#searchprioridad').val();


    console.log(prioridad);
    if (prioridad == "-1") {

        $('#lista').find('tr').fadeIn();

        //for (var i = 0; i < rows.length; i++) {

        //$(rows[i]).fadeIn();

        //}

    } else {

        var rows = $('#lista').find('tr');

        for (var i = 0; i < rows.length; i++) {

            if ($(rows[i]).attr('class') != prioridad) {
                $(rows[i]).fadeOut();
            } else {
                $(rows[i]).fadeIn();
            }


        }


    }
    /* var listaIdsFiltradaXprioridad = new Array();
 
     listaIdsFiltradaXprioridad = listaElementos.filter(function (tarea) {
         return tarea.prioridad == prioridad;
     }).map(tarea => tarea.idTarea);
 
     var rows = $('#lista').find('tr');
 
     for (var i = 0; i < rows.length; i++) {
 
         if (listaIdsFiltradaXprioridad.includes(parseInt($(rows[i]).attr('id'))) == false) {
             $(rows[i]).fadeOut();
         } else {
             $(rows[i]).fadeIn();
         }
     }
 
     //AQUI VOY A FILTRAR LA LISTA.
 }*/
}


