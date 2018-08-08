<?php

require_once "Models/conexion.php";


class DatosUnegocio extends Conexion{

#vistaservicios

	public function vistaUnegocioModel($init=false, $page_size=false, $cta, $tabla){
		$stmt = Conexion::conectar()-> prepare("SELECT une_id, une_descripcion, une_idpepsi, une_idcuenta FROM $tabla where cue_clavecuenta=:cta limit :init, :size ");
		
		$stmt-> bindParam(":init", $init, PDO::PARAM_INT);
		$stmt-> bindParam(":size", $page_size, PDO::PARAM_INT);			
		$stmt-> bindParam(":cta", $cta, PDO::PARAM_INT);
		$stmt-> execute();

		return $stmt->fetchAll();
		$stmt->close();
	}


	public function vistaFiltroUnegocioModel($cta, $datosbus, $tabla){
		$stmt = Conexion::conectar()-> prepare("SELECT une_id, une_descripcion, une_idpepsi, une_idcuenta FROM $tabla where cue_clavecuenta=:cta and une_descripcion LIKE :opbusqueda ");
	
		$stmt-> bindParam(":opbusqueda", $datosbus, PDO::PARAM_STR);
		$stmt-> bindParam(":cta", $cta, PDO::PARAM_INT);
		$stmt-> execute();

		return $stmt->fetchAll();
	
		$stmt->close();

	}

	public function cuentaUnegocioModel($cta, $tabla){
		$stmt = Conexion::conectar()-> prepare("SELECT une_id, une_descripcion, une_idpepsi, une_idcuenta FROM $tabla where cue_clavecuenta=:cta");
		$stmt-> bindParam(":cta", $cta, PDO::PARAM_INT);		
		$stmt-> execute();

		return $qty=$stmt->RowCount();
		$stmt->close();
	}

	public function vistaUnegocioDetalle( $uneg, $tabla){
		$stmt = Conexion::conectar()-> prepare("SELECT une_id, une_descripcion, une_idpepsi, une_idcuenta FROM $tabla WHERE une_id=:uneg");
			
		$stmt-> bindParam(":uneg", $uneg, PDO::PARAM_STR);
					
		$stmt-> execute();

		return $stmt->fetch();

		$stmt->close();
	}


	public function ReportesUnegocio($idser, $iduneg, $tabla){
		$stmt = Conexion::conectar()-> prepare("SELECT i_claveservicio, i_numreporte, i_finalizado FROM $tabla WHERE i_claveservicio=:idser and i_unenumpunto=:iduneg");
			
		$stmt-> bindParam(":idser", $idser, PDO::PARAM_INT);
		$stmt-> bindParam(":iduneg", $iduneg, PDO::PARAM_INT);
					
		$stmt-> execute();

		return $stmt->fetchall();

		$stmt->close();
	}

	public function UnegocioCompleta( $iduneg, $tabla){
		$stmt = Conexion::conectar()-> prepare("SELECT cue_clavecuenta, une_id, une_descripcion, une_idpepsi, une_idcuenta, une_dir_calle, une_dir_numeroext, une_dir_numeroint, une_dir_manzana, une_dir_lote, une_dir_colonia, une_dir_delegacion, une_dir_municipio, une_dir_estado, une_dir_cp, une_dir_referencia, une_dir_telefono, une_cla_region, une_cla_pais, une_cla_zona, une_cla_estado, une_cla_ciudad, une_cla_franquicia, une_dir_idestado, fc_idfranquiciacta, une_num_unico_distintivo, une_estatus, une_fechaestatus FROM $tabla WHERE une_id=:iduneg");
			
		$stmt-> bindParam(":iduneg", $iduneg, PDO::PARAM_STR);
					
		$stmt-> execute();

		return $stmt->fetch();

		$stmt->close();
	}	


}

?>	