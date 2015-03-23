
function calcular(){

    $('#panel-resultados').hide();
    var error = "no";
    if($('#input-numpags').val()=="" || $('#input-pagscara').val()==""){
        error= "si";
        $('#alerta').show();
        $('#alerta-text').html("Por favor, introduzca datos.");
    }
    var pagsTotales = parseInt($('#input-numpags').val());
    var pagsPorCara = parseInt($('#input-pagscara').val());
    var output_pares = "";
    var output_impares = "";


    if(pagsTotales < pagsPorCara){
        $('#alerta').show();
        $('#alerta-text').html("Nº de páginas debe ser mayor o igual a páginas por cara");
        error = "si"

    }

    var caras = pagsTotales/pagsPorCara;
    if(pagsTotales%pagsPorCara>0) caras++;

    var numeroPares = (caras+1)/2;
    var numeroImpares = (caras)/2;
    var numeroCara;
    var inicioCara;
    var aux = 0;
    var pag;
    for (aux = 0; aux < numeroPares; aux++){
        numeroCara = 2*aux;
        inicioCara = (numeroCara)*pagsPorCara + 1;
        for (pag = inicioCara; (pag<inicioCara + pagsPorCara && pag <=pagsTotales);pag++){

            if(pag != 1){
                output_impares+="," + pag;
            }
            else{
                output_impares+="" + pag;
            }
        }

    }

    for (aux = 0; aux < numeroImpares; aux++){
        numeroCara = 2*aux +1;
        inicioCara = (numeroCara)*pagsPorCara + 1;
        for (pag = inicioCara; (pag<inicioCara + pagsPorCara && pag <=pagsTotales);pag++){

            if(pag != pagsPorCara +1){
                output_pares+="," + pag;
            }
            else{
                output_pares+="" + pag;
            }
        }

    }

    $('#pares').html(output_pares);
    $('#impares').html(output_impares);

    if(error=="no"){
        $("#alerta").hide();
        $('#panel-resultados').show();
    }


}
