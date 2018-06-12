 <?php $nuevoUnegocioContoller=new unegocioController();
                        $nuevoUnegocioContoller->vistaNuevoUnegocio();
                    ?>﻿
<section class="content-header">
      <h1> Punto de venta &nbsp; </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Edita Punto de venta</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content container-fluid">
     <?php $nuevoUnegocioContoller=new unegocioController();
     $id=filter_input(INPUT_GET,"referencia",FILTER_SANITIZE_NUMBER_INT);
     if($id!="")
          $nuevoUnegocioContoller->vistaEditaUnegocio();
     else
                        $nuevoUnegocioContoller->vistaNuevoUnegocio();
                    ?>
      
        <div class="row">
		
        <div class="col-md-12">
             <div class="box box-info">
             <div class="box-body">
                 <form role="form" method="post">
                <!-- Datos iniciales alta de punto de venta -->
                 
                <div class="form-group col-md-12">
                  <label>NOMBRE</label>
                    <input type="hidden" class="form-control" name="ncuenta" id="ncuenta" value="<?php echo $nuevoUnegocioContoller->getCuenta();?>" >
              
                  <input type="hidden" class="form-control" name="idpv" id="idpv" value="<?php echo $id?>">
               
                  <input type="text" class="form-control" name="desuneg" id="desuneg" value="<?php echo $nuevoUnegocioContoller->getDesuneg(); ?>">
                </div>
                <div class="form-group col-md-4">
                  <label>ID PEPSI</label>
                  <input type="text" class="form-control" name="idpepsi" id="idpepsi" value="<?php echo $nuevoUnegocioContoller->getIdpepsi();?>">
                </div>
                <div class="form-group col-md-4">
                  <label>ID CUENTA</label>
                  <input type="text" class="form-control" name="idcta" id="idcta" value="<?php echo $nuevoUnegocioContoller->getIdcta();?>">
                </div>
                <div class="form-group col-md-4">
                  <label>NUD</label>
                  <input type="text" class="form-control" name="idnud" id="idnud" value="<?php echo $nuevoUnegocioContoller->getIdnud();?>">
                </div>
                <div class="form-group col-md-6">
               
                  <label>FRANQUICIA</label>
                  <select class="form-control" name="franqcuenta">
                    <option value="">Seleccione una opción</option>
                  <?php foreach($nuevoUnegocioContoller->getListaFranquicias() as $franqui){
                     echo $franqui ;
                  }?>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label>ESTATUS</label>
                  <select class="form-control" name="estatus">
                       <option value="">Seleccione una opción</option>
                   <?php foreach($nuevoUnegocioContoller->getListaEstatus() as $estatus){
                     echo $estatus ;
                  }?>
                  </select>
                </div>

                <!-- Clasificación punto de venta -->
                <br>
                <div class="col-md-12">
                <h4>CLASIFICACIÓN</h4>
                </div>
                <div class="form-group col-md-6">
                  <label>COMPAÑÍA</label>
                  <select class="form-control" name="clanivel1"    data-id="category"
                        data-group="niv-1"
                        data-target="niv-2"
                        data-url="getNivelUnegocio.php?"
                        data-replacement="container1">
                       <option value="">Seleccione una opción</option>
                     <?php foreach($nuevoUnegocioContoller->getListanivel1() as $nivel1){
                     echo $nivel1 ;
                  }?>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label>UNIDAD DE NEGOCIO</label>
                  <select class="form-control" name="clanivel2"       data-group="niv-1"
                        data-id="niv-2"
                        data-target="niv-3"
                        data-url="getNivelUnegocio.php?"
                        data-replacement="container1"
                        data-default-label="Seleccione una opción" >
                  <?php foreach($nuevoUnegocioContoller->getListanivel2() as $nivel2){
                     echo $nivel2 ;
                  }?>
                   
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label>EMBOTELLADOR</label>
                  <select class="form-control" name="clanivel3" 
                        data-group="niv-1"
                        data-id="niv-3"
                        data-target="niv-4"
                        data-url="getNivelUnegocio.php?"
                        data-replacement="container1"
                        data-default-label="Seleccione una opción" >
                      <?php foreach($nuevoUnegocioContoller->getListanivel3() as $nivel3){
                     echo $nivel3 ;
                  }?>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label>REGIÓN</label>
                  <select class="form-control" name="clanivel4" 
                        data-group="niv-1"
                        data-id="niv-4"
                        data-target="niv-5"
                        data-url="getNivelUnegocio.php?"
                        data-replacement="container1"
                        data-default-label="Seleccione una opción">
                     <?php foreach($nuevoUnegocioContoller->getListanivel4() as $nivel4){
                     echo $nivel4 ;
                  }?>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label>ESTADO</label>
                  <select class="form-control" name="clanivel5" 
                        data-group="niv-1"
                        data-id="niv-5"
                        data-target="niv-6"
                        data-url="getNivelUnegocio.php?"
                        data-replacement="container1"
                        data-default-label="Seleccione una opción">
                    <?php foreach($nuevoUnegocioContoller->getListanivel5() as $nivel5){
                     echo $nivel5 ;
                  }?>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label>CIUDAD</label>
                  <select class="form-control" name="clanivel6" 
                        data-group="niv-1"
                        data-id="niv-6"
                         data-final
                        data-url=""
                        data-replacement="container1"
                        data-default-label="Seleccione una opción">
                      <?php foreach($nuevoUnegocioContoller->getListanivel6() as $nivel6){
                     echo $nivel6 ;
                  }?>
                  </select>
                </div>
                
                <!-- Dirección punto de venta -->
               <br>
               <div class="col-md-12">
                <h4>DIRECCIÓN</h4>
                </div>
               <div class="form-group col-md-12">
                  <label>CALLE</label>
                  <input type="text" class="form-control" name="calle" id="calle" value="<?php echo $nuevoUnegocioContoller->getCalle();?>">
                </div>
                
               <div class="form-group col-md-3">
                  <label>NUM. EXTERIOR</label>
                  <input type="text" class="form-control" name="numext" id="numext" value="<?php echo $nuevoUnegocioContoller->getNumext()?>">
                </div>
                
                
                <div class="form-group col-md-3">
                  <label>NUM. INTERIOR</label>
                  <input type="text" class="form-control" name="numint" id="numint" value="<?php echo $nuevoUnegocioContoller->getNumint();?>">
                </div>
				
                <div class="form-group col-md-3">
                  <label>MANZANA</label>
                  <input type="text" class="form-control" name="mz" id="mz" value="<?php echo $nuevoUnegocioContoller->getMz();?>">
                </div>
                <div class="form-group col-md-3">
                  <label>LOTE</label>
                  <input type="text" class="form-control" name="lt" id="lt" value="<?php echo $nuevoUnegocioContoller->getLt()?>">
                </div>
                <div class="form-group col-md-6">
                  <label>COLONIA</label>
                  <input type="text" class="form-control" name="col" id="col" value="<?php echo $nuevoUnegocioContoller->getCol()?>">
                </div>
                <div class="form-group col-md-6">
                  <label>DELEGACIÓN</label>
                  <input type="text" class="form-control" name="del" id="del" value="<?php echo $nuevoUnegocioContoller->getDel()?>">
                </div>
                <div class="form-group col-md-6">
                  <label>CIUDAD</label>
                  <input type="text" class="form-control" name="une_dir_municipio" id="une_dir_municipio" value="<?php echo $nuevoUnegocioContoller->getMun()?>">
                </div>
                <div class="form-group col-md-6">
                  <label>ESTADO</label>
                  <select class="form-control" name="une_dir_estado" id="une_dir_estado">
                      <option>Seleccione una opción</option>
                      <?php foreach($nuevoUnegocioContoller->getListaEstados() as $estado){
                          echo $estado;
                      }?>
                  </select>
                </div>
                <div class="form-group col-md-3">
                  <label>C.P.</label>
                  <input type="text" class="form-control" name="une_dir_cp" id="une_dir_cp" value="<?php echo $nuevoUnegocioContoller->getCp()?>">
                </div>
                <div class="form-group col-md-9">
                  <label>REFERENCIA</label>
                  <input type="text" class="form-control" name="une_dir_referencia" id="une_dir_referencia" value="<?php echo $nuevoUnegocioContoller->getRef()?>">
                </div>
                 <div class="form-group col-md-6">
                  <label>TELÉFONO</label>
                  <input type="text" class="form-control" name="une_dir_telefono" id="une_dir_telefono" value="<?php echo $nuevoUnegocioContoller->getTel()?>">
                </div>
                 <!-- Pie de formulario -->
                 <div class="box-footer col-md-12">
                  <button type="submit" class="btn btn-info pull-right">Guardar</button>
              </div>
              </form>
              </div>
              </div>
            </div>
       <?php

$nuevoUnegocioContoller ->registroUnegocioController();
?>
        </div>
	 </section>
    <script src="http://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script src="js/jquery.cascading-drop-down.js"></script>
    <script>
    $('.form-control').ssdCascadingDropDown({
        nonFinalCallback: function(trigger, props, data, self) {

            trigger.closest('form')
                    .find('input[type="submit"]')
                    .attr('disabled', true);

        },
        finalCallback: function(trigger, props, data) {

            if (props.isValueEmpty()) {
                trigger.closest('form')
                        .find('input[type="submit"]')
                        .attr('disabled', true);
            } else {
                trigger.closest('form')
                        .find('input[type="submit"]')
                        .attr('disabled', false);
            }

        }
    });
</script>
    <!-- /.content -->
  </div>