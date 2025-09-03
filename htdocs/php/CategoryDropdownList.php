<?php

/*
	Program Name: GenderDropdownList.php
	Date Written: April 10th, 2025
	Written By: Dave Jaynes
	Description: Return a list of names for a drop-down list
*/

$conn = odbc_connect('Udemy64','','');
# $name = $_POST['fname'];
$JSONHeader = '{"JSON_Items": [';
$JSONFooter = ']}';
function ReturnJSON($Item)
{
	$output = '';
	$output = $output . '{';
	$output = $output . '"Item":';
	$output = $output . '"';
	$output = $output . $Item;
	$output = $output . '"}';
	return $output;
}
	
function BuildFullJSON($conn)
{
	$Counter = 0;
	$FullJson = '';
	$sql = "select count(*) as count from Category";
	$result = odbc_exec($conn, $sql);
	$NumRecords = odbc_result($result, 'count');
	$sql = "select Item from Category";
	$result = odbc_exec($conn, $sql);
	if (!$result) { die("Query failed: " . odbc_errormsg($conn));}
	while ($row = odbc_fetch_array($result)) 
	{
		$Counter++;
		$Item = $row['Item'];
		$JSON = ReturnJSON($Item);
		if($Counter < $NumRecords)
		{
			$FullJson = $FullJson . $JSON . ",";
		}
		else
		{
			$FullJson = $FullJson . $JSON;
		}
	}
	return $FullJson;
}

$Output = BuildFullJSON($conn);
$FullJsonString = $JSONHeader . $Output . $JSONFooter;
odbc_close($conn);
print $FullJsonString;
?>