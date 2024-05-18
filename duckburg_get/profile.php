<?php

$dbc = mysqli_connect('localhost', 'root', '', 'duckburg');
$profile_id = $_GET['id'];

$query = "SELECT * FROM profile
          WHERE id = $profile_id;";
$result = mysqli_query($dbc, $query) or die(mysqli_error());

$row = mysqli_fetch_array($result);
$data = array(
    'id' => $row['id'],
    'name' => $row['name'],
    'age' => $row['age'],
    'hobby' => $row['hobby'],
    'img' => $row['img'],
);

http_response_code(200);
header('Content-type: application/json');
print json_encode($data);

mysqli_close($dbc);