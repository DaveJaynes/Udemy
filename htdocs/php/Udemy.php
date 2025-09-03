<?php

$conn = odbc_connect('Udemy','','');

function DoSomething($conn)
{
	$sql = "SELECT Test1 FROM Testing"; 
	$result = odbc_exec($conn, $sql);
	if (!$result) {
		die("Query failed: " . odbc_errormsg($conn));
	}
	while ($row = odbc_fetch_array($result)) {
		echo "Column1: " . $row['Test1'] . " - Column2: " . $row['Test1'] . "<br>";
	}
}

DoSomething($conn);

odbc_close($conn);
?>