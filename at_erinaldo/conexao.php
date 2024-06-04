<?php
$servidor = "localhost";
$usuario = "root";
$senha = "root";
$dbname = "cadastro";

$conexao = new mysqli($servidor, $usuario, $senha, $dbname);

if ($conexao->connect_error) {
    die("Houve um erro: " . $conexao->connect_error);
} else {
    echo "Conexão bem-sucedida!";
}

?>
