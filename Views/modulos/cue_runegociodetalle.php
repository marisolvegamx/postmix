 <section class="content container-fluid">


      
 <div class="row">
        <div class="col-md-4" >
          <div class="box box-info" >
            <div class="box-header with-border">
                    

                   <?php
              $ingreso = new unegocioController();
              $ingreso -> vistaunegocioDetalle();
              ?>  
               
                  </div>
                  <!-- /.description-block -->
                </div>
                <!-- /.col -->
            </div>
              </div>
               <div class="row" >
                <ul class="nav nav-stacked" style="border-top: solid #f4f4f4">
                  <li><a href="#"><strong> REPORTES</strong></a></li>
                </ul>
                <div class="row" >
                 <!-- /. Inicia Número de reportes -->
                    

                    <?php
              $ingreso = new unegocioController();
              $ingreso -> vistaReportesunegocio();
              ?>                                    
                    
                 
                   <!-- /. Fin Número de reportes -->
            </div>
              </div>
               <div class="row" >
                 <ul class="nav nav-stacked" style="border-top: solid #f4f4f4">                  
                 </ul>
                
                 <div class="row" >
                <div class="col-sm-4 ">
                  <div class="description-block">
                  </div>
                  <!-- /.description-block -->
                </div>
                <!-- /.col -->
                <div class="col-sm-4 ">
                  <div class="description-block">
                  </div>
                  <!-- /.description-block -->
                </div>
                <!-- /.col -->
                <div class="col-sm-4">
                  <div class="description-block">
<button  class="btn btn-block btn-primary" style="width: 80%">Nuevo</button>
                  </div>
                  <!-- /.description-block -->
                </div>
                <!-- /.col -->
            </div>
              </div>
              
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>

      </div>
	  <!----- Finaliza contenido ----->
    </section>
   