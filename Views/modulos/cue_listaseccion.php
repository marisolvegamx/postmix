    <section class="content-header">
      <h1>Secciones <small></small></h1>
<ol class="breadcrumb" >

<?php
$ingreso = new seccionController();
$ingreso -> vistaNomServicioController();
?>        
        
</ol>
 </section>     

      <div class="row">
    <div class="col-md-12" >
     
       

<?php

$ingreso = new seccionController();
$ingreso -> borrarSeccionController();
$ingreso -> vistaseccionController();

?>



       

    </section>
    
   <!-- /.content-wrapper -->