  <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1> EDITAR CARACTERISTICA ABIERTA</h1>
      
    </section>

    <!-- Main content -->
    <section class="content container-fluid">

      
        <div class="row">
		
        <div class="col-md-12">
             <div class="box box-info">
             <div class="box-body">
              <form role="form" method="post">
                  <?php
               //       $registro = New abiertaController();     
                //      $registro->nuevaAbdetController();
                    ?>

                <!-- Datos alta de cuenta -->
               
                    <?php
                      $registro = New abiertaController();     
                      $registro->EditaAbiertaDetController();
                      $registro->  actualizaAbiertaDetalleController();   
                    ?>

                 <!-- Pie de formulario -->
                 <div class="box-footer col-md-12">
                   <?php
                 $registro = New abiertaController();
                  $registro->botonRegresaabdetEController() ?>
                  <button type="submit" class="btn btn-info pull-right">Guardar</button>  
                  <?php
                 $registro = New abiertaController();     
                 //$registro-> registraabdetController();  
                // $registro->botonRegresaabdetController() ?>

                 </div>

              </form>
        </div>
	    </div>
	    </div>
	    </div>
