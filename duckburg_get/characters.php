<?php

$dbc = mysqli_connect('localhost', 'root', '', 'duckburg');

if (isset($_GET['name'])) {
    $name = $_GET['name'];
    $query = "SELECT id, name, img FROM profile
              WHERE name LIKE '%$name%';";
} else {
    $query = "SELECT id, name, img FROM profile;";
}

$result = mysqli_query($dbc, $query) or die(mysqli_error());

while ($row = mysqli_fetch_array($result)) {
    $data[] = array(
        'id' => $row['id'],
        'name' => $row['name'],
        'img' => $row['img'],
    );
}

http_response_code(200);
header('Content-type: application/json');
print json_encode($data);

mysqli_close($dbc);