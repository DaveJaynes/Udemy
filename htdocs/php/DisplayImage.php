<?php

/*
        Program Name: DisplayBuilding.php
        Date Written: August 27th, 2025
          Written By: Dave Jaynes
             Purpose: Creates building HTML code.
*/

$Url = $_POST['Url'];
$output = "";
$output = $output . "<table width='100%' align='center'>\n";
$output = $output . "<tr>\n";
$output = $output . "<td width='100%' align='center'>\n";
// $output = $output . "<img width=1870 height=920 src='http://idmgmtapp01/images/FullScreenRegister.jpg'>\n";
$output = $output . "<img width=1890 height=772 src='" . $Url . "'>\n";
$output = $output . "</td>\n";
$output = $output . "</tr>\n";
$output = $output . "</table>\n";
print $output;
?>
