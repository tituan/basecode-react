<?php
header("Content-Type: application/json");

// Récupérer les données du formulaire envoyées en tant que JSON
$data = json_decode(file_get_contents("php://input"), true);

// Connexion à la base de données MySQL
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "form-react";
$port = 3306; // Port MySQL (par défaut : 3306)

// Créer une connexion à la base de données avec le port spécifié
$conn = new mysqli($servername, $username, $password, $dbname, $port);


// Vérifier la connexion à la base de données
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Échapper les données pour éviter les injections SQL (à utiliser pour chaque champ)
$nom = $conn->real_escape_string($data["nom"]);
$email = $conn->real_escape_string($data["email"]);
$sujet = $conn->real_escape_string($data["sujet"]);
$message = $conn->real_escape_string($data["message"]);

// Créer et exécuter la requête SQL pour insérer les données dans la table "contacts"
$sql = "INSERT INTO contacts (nom, email, sujet, message) VALUES ('$nom', '$email', '$sujet', '$message')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(array("message" => "Données enregistrées avec succès"));
} else {
    echo json_encode(array("error" => "Erreur lors de l'enregistrement des données : " . $conn->error));
}

$conn->close();
?>








