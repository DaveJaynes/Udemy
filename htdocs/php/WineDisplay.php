<?php
$output = '';
$output = $output . "<table width='100%' align='center'>\n";
$output = $output . "<tr>\n";
$output = $output . "<td align='center'><h1>Wine Production Throughout the World</h1></td>\n";
$output = $output . "</tr>\n";
$output = $output . "</table>\n";
$output = $output . "<table width='100%' align='center'>\n";
$output = $output . "<tr>\n";
$output = $output . "<td width='30%'>&nbsp</td>\n";
$output = $output . "<td width='20%' align='center'>\n";
$output = $output . "<canvas id=" . '"' . "BarChart" . '"' . " style=" . '"' . "width:15%;max-width:350px" . '"' . "></canvas>\n";
$output = $output . "</td>\n";
$output = $output . "<td width='20%' align='center'>\n";
$output = $output . "<canvas id=" . '"' . "LineChart" . '"' . " style=" . '"' . "width:15%;max-width:350px" . '"' . "></canvas>\n";
$output = $output . "</td>\n";
$output = $output . "<td width='30%'>&nbsp</td>\n";
$output = $output . "</tr>\n";
$output = $output . "</table>\n";
print $output;
?>