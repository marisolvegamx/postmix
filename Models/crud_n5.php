<?php

require_once "Models/conexion.php";


class Datosncin extends Conexion{
	# CLASE NIVEL 


	public function vistancinModel($datosModel,$tabla){
		$stmt = Conexion::conectar()-> prepare("SELECT n5_id, n5_nombre FROM $tabla WHERE n5_idn4=:idn");
		$stmt-> bindParam(":idn", $datosModel, PDO::PARAM_INT);
		
		$stmt-> execute();

		return $stmt->fetchAll();
		$stmt->close();
	}


	public function vistancinOpcionModel($datosModel,$tabla){
		$stmt = Conexion::conectar()-> prepare("SELECT n5_id, n5_nombre FROM $tabla WHERE n5_id=:idn");
		$stmt-> bindParam(":idn", $datosModel, PDO::PARAM_INT);
		
		$stmt-> execute();

		return $stmt->fetch();
		$stmt->close();
	}

	public function NivelCincoOpcionModel($datosModel,$tabla){
		$stmt = Conexion::conectar()-> prepare("SELECT n5_id, n5_nombre FROM ca_nivel5 WHERE n5_id=:idn");
		$stmt-> bindParam(":idn", $datosModel, PDO::PARAM_INT);
		
		$stmt-> execute();

		return $stmt->fetchAll();
		$stmt->close();
	}



}


?>