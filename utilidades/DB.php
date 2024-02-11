<?php
    class DB{
        private $servername="localhost";
        private $username="root";
        private $password="";
        private $dbname="bdmamazon";
        private $charset = "utf8mb4";
        function conectar(){
            try{
            //$DataBase = new mysqli($servername,$username,$password,$dbname);
            //return $DataBase//new mysqli($servername,$username,$password,$dbname);
            $conn = "mysql:host=".$this->servername.";dbname=".$this->dbname.";charset=".$this->charset;
            $pdo = new PDO($conn, $this->username, $this->password);
            return $pdo;
            
            }
            catch(e){
                print_r('Error de conexion: ' . $e->getMessage());
            }
        }
    }
?>