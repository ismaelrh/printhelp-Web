<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>PrintHelp</title>
  <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.1/themes/base/minified/jquery-ui.min.css" type="text/css" /> 
  
  <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.4.4/underscore-min.js"></script>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
  <link rel ="stylesheet" href="css/estilo.css" type="text/css" />
  <script type="text/javascript" src="./js/funciones.js"></script>
  
  </head>
<body> 

			
	<script type="text/javascript">
	
	var infoboxer;


	$(document).ready(function() {
        $('#panel-resultados').hide();
        $('#alerta').hide();

	});




  </script>
 
	<div class="main">

        <div class="page-header">
            <h1>Printhelp
                <small>Imprime apuntes sin problemas</small>
            </h1>
        </div>
        <div class="alert alert-danger" role="alert" id="alerta">
            <strong>Atencion - </strong>
            <span id="alerta-text">Better check yourself, you're not looking too good.</span>
        </div>


		<div class="panel panel-info  text-center">
            <div class="panel-heading ">Introduzca datos</div>
            <div class="top-buffer">

                <form role="form" >
                    <div class="row top-buffer">
                        <label class="col-md-2" for="input-numpags">Num paginas a imprimir</label>
                        <div class="col-md-4"><input type="number" class="form-control" id="input-numpags" placeholder="e.g. 50"></div>
                    </div>
                    <div class="row top-buffer">
                        <label class="col-md-2 " for="input-pagscara">Pags/cara</label>
                        <div class="col-md-4"><input type="number" class="form-control" id="input-pagscara" placeholder="e.g. 2"></div>
                    </div>

                    <div class="row top-buffer leee">
                        <div class="col-md-2"></div>
                        <div class="col-md-4">
                            <button type="button" class="btn btn-default btn-lg" id="button-generar" onclick="calcular()">
                                <span class="glyphicon glyphicon-print" aria-hidden="true"></span> Generar
                            </button>
                        </div>
                    </div>
                </form>
            </div>




        </div>
        <div class="panel panel-info" id="panel-resultados" >
            <div class="panel-heading">Resultados</div>
            <div class="">
                <div class="row top-buffer">
                <label class="col-md-2" for="impares">Caras impares:</label><span id="impares"></span>
                </div>
                <div class="row top-buffer">
                <label class="col-md-2" for="pares">Caras pares:</label><span id="pares"</span>
                    </div>
            </div>

        </div>

        <span>PrintHelp Web v0.1 - 23/03/15 ismaro3 - ismaro.394 at gmail dot com</span>
		</div>

	
  <script src="./libs/a/handlebars.js"></script>
  <script src="./libs/a/typeahead.bundle.js"></script>
 
 

	 
</body>
</html>