<?php
include_once './classes/DBController.php';

header("Access-Control-Allow-Origin: *"); // Allow requests from all origins
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

try {
    $db = new DBController();
    $whereClause = 'theaterID = 1';
    $result = $db->select($whereClause, "seats");

    echo json_encode($result);
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}