<?php



require_once "Models/conexion.php";


class DatosCuenta extends Conexion{


#vistaclientes

	public function vistaCuentasModel($tabla){
		$stmt = Conexion::conectar()-> prepare("SELECT cue_id, cue_descripcion, cue_tipomercado FROM $tabla;");
		
		$stmt-> execute();

		return $stmt->fetchAll();
	}
	
        public function vistaCuentasxcliente($idcliente,$tabla){
		$stmt = Conexion::conectar()-> prepare("SELECT cue_id, cue_descripcion, cue_tipomercado FROM $tabla where cue_idcliente=:id_cliente ;");
		$stmt->bindParam("id_cliente", $idcliente,PDO::PARAM_INT);
		$stmt-> execute();

		return $stmt->fetchAll();
	}
	

	public function listaClientesModel($tabla){
		$stmt = Conexion::conectar()-> prepare("SELECT cli_id, cli_nombre FROM $tabla ");
		
		$stmt-> execute();

		return $stmt->fetchAll();
	}

	public function registroCuentaModel($datosModel, $tabla){

		$stmt = Conexion::conectar()-> prepare("INSERT INTO $tabla (cue_descripcion, cue_tipomercado, cue_siglas, cue_lugar, cue_idcliente) VALUES (:cue_descripcion, :cue_tipomercado, :cue_siglas, :cue_lugar, :cue_idcliente)");

		$stmt->bindParam(":cue_descripcion", $datosModel["nomcuen"], PDO::PARAM_STR);
		$stmt->bindParam(":cue_tipomercado", $datosModel["tipomercuen"], PDO::PARAM_INT);
		$stmt->bindParam(":cue_siglas", $datosModel["siglascuen"], PDO::PARAM_STR);
		$stmt->bindParam(":cue_lugar", $datosModel["lugarcuen"], PDO::PARAM_INT);
		$stmt->bindParam(":cue_idcliente", $datosModel["cliencuen"], PDO::PARAM_INT);
		
		if($stmt-> execute()){

			return "success";
		}
		 else{

		 	return "error";
		 }


	}


	#edita servicio
	public function editarCuentaModel($datosModel, $tabla){

		$stmt = Conexion::conectar()->prepare("SELECT cue_id, cue_descripcion, cue_tipomercado, cue_siglas, cue_lugar, cue_idcliente FROM $tabla  WHERE  cue_id = :idc");

		$stmt-> bindParam(":idc", $datosModel, PDO::PARAM_INT);
		$stmt-> execute();

		return $stmt->fetch();
	}
	
	public function actualizarCuentaModel($datosModel, $tabla){

		$stmt = Conexion::conectar()->prepare("	UPDATE $tabla SET  cue_descripcion= :cuedes, cue_tipomercado= :cuetipo, cue_siglas= :cuesiglas, cue_lugar= :cuelugar, cue_idcliente= :cuecli WHERE cue_id= :cue_id");
		
		$stmt-> bindParam(":cuedes", $datosModel["cuedes"], PDO::PARAM_STR);
		$stmt-> bindParam(":cuetipo", $datosModel["cuetipo"], PDO::PARAM_INT);
		$stmt-> bindParam(":cuecli", $datosModel["cuecli"], PDO::PARAM_INT);
		$stmt-> bindParam(":cuesiglas", $datosModel["cuesiglas"], PDO::PARAM_STR);
		$stmt-> bindParam(":cuelugar", $datosModel["cuelugar"], PDO::PARAM_STR);
		$stmt-> bindParam(":cue_id", $datosModel["id"], PDO::PARAM_INT);

		IF($stmt-> execute()){

			return "success";
		}
		
		else {

			return "error";
	
		};

		$stmt->close();
	}

#borra servicio
	public function borrarCuentaModel($datosModel, $tabla){

		$stmt = Conexion::conectar()->prepare("DELETE FROM $tabla WHERE cue_id = :ids");

		$stmt-> bindParam(":ids", $datosModel, PDO::PARAM_INT);

		IF($stmt-> execute()){

			return "success";
		}
		
		else {

			return "error";
	
		}

		$stmt->close();	
	}

function nombreCuenta($cuenta) {

    $sql = "SELECT
ca_cuentas.cli_idcliente,
ca_cuentas.ser_claveservicio,
ca_cuentas.cue_clavecuenta,
ca_cuentas.cue_descripcion,
ca_cuentas.cue_tipomercado,
ca_cuentas.cue_siglas,
ca_cuentas.cue_lugar
FROM
ca_cuentas
where ca_cuentas.cli_idcliente=100 and
ca_cuentas.ser_claveservicio=1";

    $sql.=" and cue_clavecuenta=:cuenta";
    $sql.=" order by ca_cuentas.cue_clavecuenta";
    
    $res = Conexion::conectar()->prepare($sql);
    $res-> bindParam(":cuenta", $cuenta, PDO::PARAM_INT);
    foreach ($res as $row) {
        $nombre = $row["cue_descripcion"];
    }
   
    return $nombre;
}

public function cuentasxNivel($VarNivel2,$aux,$cliente,$cuenta){
      $sql_cuentas = "SELECT

ca_cuentas.cue_clavecuenta,ca_cuentas.cue_descripcion
FROM
ca_unegocios
Inner Join ca_cuentas ON ca_unegocios.cue_clavecuenta = ca_cuentas.cue_clavecuenta AND ca_unegocios.ser_claveservicio = ca_cuentas.ser_claveservicio
AND ca_unegocios.cli_idcliente = ca_cuentas.cli_idcliente ";

                        switch ($VarNivel2) {
                            case 6: $filtro = " ca_unegocios.une_cla_region=$aux[1] and
ca_unegocios.une_cla_pais=$aux[2] and
ca_unegocios.une_cla_zona=$aux[3] and
ca_unegocios.une_cla_estado=$aux[4] and
ca_unegocios.une_cla_ciudad=$aux[5] and
ca_unegocios.une_cla_franquicia=$aux[6] ";
                                break;
                            case 5: $filtro = " ca_unegocios.une_cla_region=$aux[1] and
ca_unegocios.une_cla_pais=$aux[2] and
ca_unegocios.une_cla_zona=$aux[3] and
ca_unegocios.une_cla_estado=$aux[4] and
ca_unegocios.une_cla_ciudad=$aux[5] ";
                                break;
                            case 4: $filtro = " ca_unegocios.une_cla_region=$aux[1] and
ca_unegocios.une_cla_pais=$aux[2] and
ca_unegocios.une_cla_zona=$aux[3] and
ca_unegocios.une_cla_estado=$aux[4] ";
                                break;
                            case 3: $filtro = "ca_unegocios.une_cla_region=$aux[1] and
ca_unegocios.une_cla_pais=$aux[2] and
ca_unegocios.une_cla_zona=$aux[3] ";
                                break;
                            case 2: $filtro = "ca_unegocios.une_cla_region=$aux[1] and
ca_unegocios.une_cla_pais=$aux[2]";
                                break;
                            case 1: $filtro = "ca_unegocios.une_cla_region=$aux[1]";
                                break;
                        }//fin switch
                        $sql_cuentas.=" where " . $filtro . " and cue_tipomercado=:opcionSeleccionadaCuenta and `ca_cuentas`.`cli_idcliente`=:scli";
                        $sql_cuentas.=" GROUP BY ca_unegocios.cue_clavecuenta;";
                        
                        $parametros=array("scli"=>$cliente,
                   
                    "opcionSeleccionadaCuenta"=>$cuenta);
                         $res= Conexion::ejecutarQury($sql_cuentas,$parametros);
                         return $res;
	

}


public function ceuntasxCliente($tabla,$tipoMercado,$cliente){
     $sql_cuentas="SELECT cue_clavecuenta, cue_descripcion FROM $tabla WHERE cue_tipomercado=:opcionSeleccionadaCuenta"
             . " and `ca_cuentas`.`cli_idcliente`=:scli;";
     $parametros=array("opcionSeleccionadaCuenta"=>$tipoMercado,
         "scli"=>$cliente);
     
     $res= Conexion::ejecutarQuery($sql_cuentas,$parametros);
     return $res;
     
}


}
?>	