<?php
header("Access-Control-Allow-Origin: *"); // Allow requests from all origins
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$response = [];

// Read the incoming JSON data
$input = json_decode(file_get_contents('php://input'), true);

if (isset($input['name'])) {
    $name = $input['name'];
    $response = [
        "msg" => "Message received",
        "status" => "200",
        "name" => $name,
    ];
} else {
    $response = [
        "msg" => "Error: Name field missing in request",
        "status" => "400",
    ];
}

echo json_encode($response);