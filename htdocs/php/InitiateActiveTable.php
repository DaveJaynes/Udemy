<?php
/*
		Program Name: InitiateActiveTable.php
		Date Written: August 27th, 2025
		  Written By: Dave Jaynes
		 Description: Sets name field in ActiveTable table to 'Walks'.
*/
$Name = $_POST['Name'];
$sql = "update ActiveTables set Name = '" . $Name . "'";
$conn = odbc_connect('NZWalksDb','','');
$rs = odbc_exec($conn, $sql);
odbc_close($conn);
?>
