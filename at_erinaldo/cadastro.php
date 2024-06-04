<?php
include('conexao.php');

$nome = isset($_POST['nome']) ? $_POST['nome'] : '';
$matricula = isset($_POST['matricula']) ? $_POST['matricula'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';
$senha = isset($_POST['senha']) ? $_POST['senha'] : '';
$sala = isset($_POST['sala']) ? $_POST['sala'] : '';
$sexo = isset($_POST['genero']) ? $_POST['genero'] : '';

$sql = "INSERT INTO cadastro (nome, matricula, email, senha, sala, genero)
        VALUES ('$nome', '$matricula', '$email', '$senha', '$sala', '$sexo')";

if (mysqli_query($conexao, $sql)) {
    echo "Usuário cadastrado com sucesso";
} else {
    echo "Erro: " . mysqli_error($conexao);
}

mysqli_close($conexao);
?>
