
<div class="modal fade" id="pleaseWaitDialog" data-backdrop="static" data-keyboard="false">
<div class="modal-dialog modal-sm">
     <div class="modal-content">
        <div class="modal-header">
   
            <h1>Procesando...</h1>
        </div>
        <div class="modal-body">
           <div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
</div>
        </div>
        </div>
        </div>
    </div>
   <script>

    function CallServerFunction() {
        $('#pleaseWaitDialog').modal('show');
        $.ajax({
            url: "test.html",
            success: function (data) {
                $('#pleaseWaitDialog').modal('hide');
                console.log('The page has been successfully loaded');
            },
            error: function () {
                $('#pleaseWaitDialog').modal('hide');
                console.log('An error occurred');
            }
        });
    }
//     $(document).ready(function(){
// 	 $('#pleaseWaitDialog').modal('show');
//     });
//     $(window).load(function() {
//    	 $('#pleaseWaitDialog').modal('hide');
//     });
    </script>
    
    <?php $tabladinController=new TablaDinamicaController();
    $tabladinController->vistaTablaDinamica();


?>

 
<script src="js/indicadoresgrid2.js" language="javascript"></script>
    <!-- Content Header (Page header) -->
   <section class="content-header">
       <h1><?php echo $tabladinController->getFiltroSel()->getNombre_seccion();
              echo "<br>".$tabladinController->getFiltroSel()->getPeriodo();
              echo "<br>".$tabladinController->getFiltroSel()->getNombre_nivel();
              echo "<br>".$tabladinController->getFiltroSel()->getNombre_franquicia();
       
       
              ?></h1>
        
    </section>
    <section class="content-header">
                <h1><?php echo $tabladinController->getNombreSeccion();  ?> <small>
          <?php echo $tabladinController->getEstandar();  ?>
            </small></h1>
      <ol class="breadcrumb">
         <?php Navegacion::desplegarNavegacion();?>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
	<!----- Filtros ----->
    <div class="row" >
        <div class="col-md-12" >
        	<div class="box box-info" style="background-color: #FFFFFF; font-size: 13px; max-height: 200px; padding: 10px; min-height: 50px" >
		    <form name="form1" action="index.php?action=indindicadoresgrid" method="post" >
                    <div class="col-sm-4 border-right filtros" >
					
                <label>
                      <?php
                 echo '<input type="checkbox" class="minimal" name="visdatos2" id="visdatos2" value="2" '. $tabladinController->getFiltrosTD()->getRes_numpruebas().'>
                 '.  T_("NUM. PRUEBAS").
               ' </label>
				<label>
                  <input type="checkbox" class="minimal" name="visdatos1" id="visdatos1" value="1" '. $tabladinController->getFiltrosTD()->getRes_tamaniomuestra().'>
'. T_("TAMAÑO MUESTRA").'</label>
              		
				</div>
				<div class="col-sm-3 border-right filtros"  >
					
					<label>
                  <input type="checkbox" class="minimal" name="checkbox" id="checkbox1" '. $tabladinController->getFiltrosTD()->getPer_measactual().'>
                  '. T_("MES ACTUAL").'
                </label>
				<label>
                  <input type="checkbox" class="minimal" name="checkbox" id="checkbox2" '. $tabladinController->getFiltrosTD()->getPer_seismeses().'>
                '. T_("6 MESES").'
                </label>
				<label>
                  <input type="checkbox" class="minimal" name="checkbox" id="checkbox10" '. $tabladinController->getFiltrosTD()->getPer_docemeses().'>
                 '.T_("12 MESES").'
                </label>
					
				</div>
				<div class="col-sm-3 border-right filtros"  >
					<label>
                  <input type="radio" name="semcumplimiento" class="minimal"  id="semcumplimiento1" value="" '. $tabladinController->getFiltrosTD()->getColorsemd().' >
                '. T_("TODOS").'
                </label>
				<label>
                  <input type="radio" name="semcumplimiento" class="minimal"  id="semcumplimiento2" value="v"  '. $tabladinController->getFiltrosTD()->getColorsemv().'>
                  '. $tabladinController->getVrangov().'
                </label>
				<label>
                  <input type="radio" name="semcumplimiento" class="minimal"  id="semcumplimiento3" value="a"  '. $tabladinController->getFiltrosTD()->getColorsema().' >
                  '. $tabladinController->getVrangoa().'
                </label>
				<label>
                  <input type="radio" name="semcumplimiento" class="minimal"  id="semcumplimiento4" value="r"  '. $tabladinController->getFiltrosTD()->getColorsemr().' >
                   '. $tabladinController->getVrangor().'
                </label>
				</div>
				<div class="col-sm-1 filtros"   >
					<button type="button" class="btn btn-info pull-right" name="filtrar"  onClick="Cargar(\'\');">Aplicar filtros</button>
                                        <input type="hidden" value="'.$tabladinController->getFiltrosTD()->getMes().'" name="mes_asignacion" id="mes_asignacion"/>
                <input type="hidden" value="'.$tabladinController->getfiltrosTD()->getRef().'" name="ref" id="ref"/>
                <input type="hidden" value="'.$tabladinController->getfiltrosTD()->getFilx().'" name="filx" id="filx"/>
                <input type="hidden" value="'.$tabladinController->getfiltrosTD()->getNivel().'" name="niv" id="niv"/>
                <input type="hidden" value="'.$tabladinController->getfiltrosTD()->getFily().'" name="fily" id="fily"/>
                <input type="hidden" value="'.$tabladinController->getfiltrosTD()->getRen().'" name="ren" id="ren"/>
                <input type="hidden" value="'.$tabladinController->getfiltrosTD()->getSec().'" name="sec" id="sec"/>
                 <input type="hidden" value="'.$tabladinController->getfiltrosTD()->getFiluni().'" name="filuni" id="filuni"/>';?>
				</div>
				<div class="col-sm-1" >
                                    <span class="iconos-filtros"><a href="javascript: void(0);" onClick="javascript: location='<?php echo $tabladinController->getLigaDescargar()  ?>';" title="Descargar"><i class="fa fa-download" aria-hidden="true"></i></a></span>
					<span class="iconos-filtros"><a href="javascript:imprimir();" title="Imprimir"><i class="fa fa-print" aria-hidden="true"></i></a></span>
					<span class="iconos-filtros"><a href="javascript:history.back();" title="Regresar"><i class="fa fa-arrow-circle-left" aria-hidden="true"></i></a></span>
				</div>
                    </form>
			</div>
		</div>
	</div>

      <!----- Inicia contenido ----->
    
 <div class="row">
     <!-- inicia repeticion -->
     <?php
    foreach($tabladinController->getListaResultados() as $resultadoxReg){
       
         foreach($resultadoxReg->getListaResultadosxcuenta() as $resultado ){
//       $resultadoxReg=$tabladinController->getListaResultados()[0];
//       $resultado=$resultadoxReg->getListaResultadosxcuenta()[0];
              $clase=" ";
              if($resultado->Estotal())
                  $clase=' style="
    color:  red;"';
    echo '<div class="col-md-4" >
          <div class="box box-info" >
            <div class="box-header with-border">
              <h3 class="box-title">'.$resultadoxReg->getNombreNivel().': '.$resultadoxReg->getNivel().'</h3>
              <div class="box-tools pull-right">
               <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                </button>
                <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
              </div>
              <!-- /.box-tools -->
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              
              <div class="arrow">
              	  <div '.$clase.'>
                    <ul class="nav nav-stacked">
                      <li><strong> '.$resultado->getNombrefranquicia().'</strong></li>
                    </ul>
                </div>
              </div>';
       
           echo $resultado->getResultados1();
            echo $resultado->getResultados2();
            echo $resultado->getResultados3();


         echo  ' </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>';
        }//fin x cuenta
     }
 
         ?>     
      
            <!-- fin repeticion -->
           
        
        
<!--           /.box -->
        </div>
        
    
	  <!----- Finaliza contenido ----->
    </section>
    <!-- /.content -->
