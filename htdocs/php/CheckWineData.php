<?php

$Item = 'Pct';

function CheckItems($Item)
{
	$conn = odbc_connect('Udemy64','','');
	$data1 = [];
	$data2 = [];
	
	$sql = "select $Item from WineData";
	$result = odbc_exec($conn, $sql);
	if (!$result) { die("Query failed: " . odbc_errormsg($conn));}
	while ($row = odbc_fetch_array($result)) 
	{
		if($Item == 'Pct') { $x = (int)$row[$Item];	} else { $x = $row[$Item]; }
		array_push($data1,$x);
	}
	
	$sql = "select $Item from CheckWineData";
	$result = odbc_exec($conn, $sql);
	if (!$result) { die("Query failed: " . odbc_errormsg($conn));}
	while ($row = odbc_fetch_array($result)) 
	{
		if($Item == 'Pct') { $x = (int)$row[$Item];	} else { $x = $row[$Item]; }
		array_push($data2,$x);
	}
	
	$Changed = "No";
	for($i=0;$i < count($data2);$i++)
	{
		if($data1[$i] != $data2[$i]) 
		{ 
			$Changed = "Yes"; 
			$sql = "update CheckWineData set Pct = " . $data1[$i] . " where ID = " . $i;
			$result = odbc_exec($conn, $sql);
		}
	}
	return $Changed;
}

$data = CheckItems($Item);
print $data;
?>