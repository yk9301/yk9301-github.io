<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $text = $_POST["text"];

    // Öffne die Datei zum Schreiben (falls sie nicht existiert, wird sie erstellt)
    $datei = fopen("gespeicherter_text.txt", "w") or die("Kann die Datei nicht öffnen");

    // Schreibe den Text in die Datei
    fwrite($datei, $text);

    // Schließe die Datei
    fclose($datei);

    echo "Text wurde gespeichert!";
} else {
    echo "Ungültige Anfrage!";
}
?>
