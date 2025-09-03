<?php
/*
		Program Name: FindActiveController.php
		Date Written: August 27th, 2025
		  Written By: Dave Jaynes
		 Description: Pulls currently active table from the Area table.
*/
$Name = "";
$conn = odbc_connect('NZWalksDb','','');	
$sql = "SELECT * FROM ActiveTables";
$rs = odbc_exec($conn, $sql);
if (!$rs) { die("Query failed: [$sql]" . odbc_errormsg($conn));}
while (odbc_fetch_row($rs))
{
	$Name = odbc_result($rs,'Name');
}
odbc_close($conn);
print "$Name";
