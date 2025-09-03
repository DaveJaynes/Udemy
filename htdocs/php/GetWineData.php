<?php

$Item = $_POST['Item'];

function GetItems($Item)
{
	$conn = odbc_connect('Udemy64','','');
	$data = [];
	$sql = "select $Item from WineData";
	$result = odbc_exec($conn, $sql);
	if (!$result) { die("Query failed: " . odbc_errormsg($conn));}
	while ($row = odbc_fetch_array($result)) 
	{
		if($Item == 'Pct') { $x = (int)$row[$Item];	} else { $x = $row[$Item]; }
		array_push($data,$x);
	}
	return $data;
}

$data = GetItems($Item);
echo json_encode($data);
?>