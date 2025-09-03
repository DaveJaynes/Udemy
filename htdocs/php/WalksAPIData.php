<?php
/*
		Program Name: WalksAPIData.php
		Date Written: August 25th, 2025
		  Written By: Dave Jaynes
		 Description: Display and update NZWalks table data via ASP.NET API endpoints.
		 
		 There are 19 section in this program:
		 
		 ---------------------------------------------------------------------------------------------------------------------------
		 | Section |                                              Description                                                      |
		 |-------------------------------------------------------------------------------------------------------------------------|
		 |     1   |  Define POST and local variables                                                                              |
		 |     2   |  Error and Authorization Related Functions                                                                    |
		 |     3   |  Utility Functions                                                                                            |
		 |     4   |  Pull JWT Token                                                                                               |
		 |     5   |  Rebuild Initial Page after Form Submission                                                                   |
         |     6   |  Display All Records for the Walks Table                                                                      |
         |     7   |  Display All Records for the Regions Table                                                                    |
         |     8   |  Display One Record                                                                                           |
         |     9   |  Template for Entering New Row in Walks Table                                                                 |
         |    10   |  Store New Row in Walks Table                                                                                 |
         |    11   |  Template for Entering New Row in Regions Table                                                               |
         |    12   |  Store New Row in Regions Table                                                                               |
         |    13   |  Template for Modifying Existing Row in Walks Table                                                           |
         |    14   |  Store modified Row in Walks Table                                                                            |
         |    15   |  Template for Modifying Existing Row in Regions Table                                                         |
         |    16   |  Store Modified Row in Regions Table                                                                          |
         |    17   |  Delete Existing Walks Record                                                                                 |
         |    18   |  Delete Existing Regions Record                                                                               |
		 |    19   |  Main Processing Area                                                                                         |
         ---------------------------------------------------------------------------------------------------------------------------		 
*/

error_reporting(E_ALL ^ E_WARNING); // Turn off warnings as JavaScript is not posting all of these variables.

// Section 1: Define POST and local variables
$Controller = $_POST['Controller'];
$Command = $_POST['Command'];
$Id = $_POST['Id'];
$WalkName = $_POST['WalkName'];
$Description = $_POST['Description'];
$LengthInKm = $_POST['LengthInKm'];
$WalkImageUrl = $_POST['WalkImageUrl'];
$RegionId = $_POST['RegionId'];
$DifficultyId = $_POST['DifficultyId'];
$Code = $_POST['Code'];
$RegionName = $_POST['RegionName'];
$RegionImageUrl = $_POST['RegionImageUrl'];
$Submit = $_POST['Submit'];
$Reader = "Reader";
$Writer = "Writer";
$Protocol = "http";
$ConnectUrl = "localhost";
$Port = "5000";
$ControllerUrl = "";
switch ($Controller)
{
	case "Walks":
		$ControllerUrl = $Protocol . "://" . $ConnectUrl . ":" . $Port . "/api/Walks";
		break;
	case "Regions":
		$ControllerUrl = $Protocol . "://" . $ConnectUrl . ":" . $Port . "/api/Regions";
		break;
}

// Section 2: Error and Authorization Related Functions 
function ErrorRoute()
{
	print "<table width='100%' border='0'>\n";
	print "<tr>\n";
	print "<td width='100%'><p class='WalksColumnHeadings'>Error Occurred</p></td>\n";
	print "</tr>\n";
	print "</table>\n";
	exit;
}

function AuthFailed()
{
	print "<table width='100%' border='0'>\n";
	print "<tr>\n";
	print "<td width='100%'><p class='WalksColumnHeadings'>Authentication Failed</p></td>\n";
	print "</tr>\n";
	print "</table>\n";
	exit;
}

// Section 3: Utility Functions 
function PullFields($Controller,$Id,$Field)
{
	$conn = odbc_connect('NZWalksDb','','');	
	$sql = "SELECT " . $Field . " FROM " . $Controller . " WHERE Id = '" . $Id . "'";
	$rs = odbc_exec($conn, $sql);
	if (!$rs) { die("Query failed: [$sql]" . odbc_errormsg($conn));}
	while (odbc_fetch_row($rs))
	{
		$Field = odbc_result($rs,$Field);
	}
	odbc_close($conn);
	return $Field;
}

function PullSelectName($Controller,$Id)
{
	$sql = "";
	$Name = "";
	$conn = odbc_connect('NZWalksDb','','');
	if($Controller == 'Regions') { $sql = "select Name from Regions where Id = '" . $Id . "'"; } else { $sql = "select Name from Difficulties where Id = '" . $Id . "'"; }
	$rs = odbc_exec($conn, $sql);
	if (!$rs) { die("Query failed: [$sql]" . odbc_errormsg($conn));}
	while (odbc_fetch_row($rs))
	{
		$Name = odbc_result($rs,'Name');
	}
	odbc_close($conn);
	return $Name;
}

function PullAllSelections($ActiveTable)
{
	$options = "";
	$sql = "";
	$conn = odbc_connect('NZWalksDb','','');
	if($ActiveTable == "Region") { $sql = "SELECT * from Regions order by Name"; } else { $sql = "SELECT * from Difficulties order by Name"; }
	$rs = odbc_exec($conn, $sql);
	if (!$rs) { die("Query failed: [$sql]" . odbc_errormsg($conn));}
	while (odbc_fetch_row($rs))
	{
		$Id = odbc_result($rs,'Id');
		$Name = odbc_result($rs,'Name');
		$options = $options . "<option value = '" . $Id . "'>" . $Name . "</option>\n";
	}
	odbc_close($conn);
	return $options;
}

function PullCurrentSelected($ActiveTable,$CurId,$CurName)
{
	$options = "";
	$sql = "";
	$conn = odbc_connect('NZWalksDb','','');
	if($ActiveTable == "Region") { $sql = "SELECT * from Regions where Id != '" . $CurId . "' order by Name"; } else { $sql = "SELECT * from Difficulties where Id != '" . $CurId . "' order by Name"; }
	$options = $options . "<option value = '" . $CurId . "'>" . $CurName . "</option>\n";
	$rs = odbc_exec($conn, $sql);
	if (!$rs) { die("Query failed: [$sql]" . odbc_errormsg($conn));}
	while (odbc_fetch_row($rs))
	{
		$Id = odbc_result($rs,'Id');
		$Name = odbc_result($rs,'Name');
		$options = $options . "<option value = '" . $Id . "'>" . $Name . "</option>\n";
	}
	odbc_close($conn);
	return $options;
}

function GetRegionsControllerName($Id)
{
	$Name = "";
	$conn = odbc_connect('NZWalksDb','','');
	$sql = "SELECT * FROM Regions WHERE Id = '" . $Id . "'";
	$rs = odbc_exec($conn, $sql);
	if (!$rs) { die("Query failed: " . odbc_errormsg($conn));}
	while (odbc_fetch_row($rs))
	{
		$Name = odbc_result($rs,"Name");
	}
	odbc_close($conn);
	return $Name;
}

function GetRowCount($Id,$Reader)
{
	$Count = 0;
	$conn = odbc_connect('NZWalksDb','','');
	$sql = "SELECT COUNT(*) AS COUNT FROM Walks WHERE RegionId = '" . $Id . "'";
	$rs = odbc_exec($conn, $sql);
	if (!$rs) { die("Query failed: " . odbc_errormsg($conn));}
	while (odbc_fetch_row($rs))
	{
		$Count = odbc_result($rs,"COUNT");
	}
	odbc_close($conn);
	return $Count;
}

function RegionsRowInUse($Controller,$ControllerUrl,$ControllerName,$Protocol,$ConnectUrl,$Port,$NumberUsedIds,$Id,$Reader)
{
	$WalksControllerUrl = $Protocol . "://" . $ConnectUrl . ":" . $Port . "/api/Walks";
	$output = "";
	$Pronoun = "";
	$Noun = "";
	$output = $output . "<table width='100%'>\n";
	$output = $output . "<tr>\n";
	if($NumberUsedIds == 1)
	{
		$Pronoun = "is";
		$Noun = "row";
	}
	else
	{
		$Pronoun = "are";
		$Noun = "rows";
	}
	$output = $output . "<td width='100%'><p class='Informational'>Cannot delete the " . $ControllerName . " Region as there " . $Pronoun . " " . $NumberUsedIds . " " . $Noun . " using this entry as shown below</p></td>\n";
	$output = $output . "</tr>\n";
	$output = $output . "</table>\n";
	$output = $output . "<table width='100%'>\n";
	$output = $output . "<tr>\n";
	$output = $output . "<td width='45.7%'>&nbsp</td>\n";
	$output = $output . "<td width='54.3%' align='left'><button type='submit' class='oval-button-purple' id='Submit' name='Submit' value='Create' onClick='GetAll(" . '"' . $Controller . '"' . ")'>Back</button></td>\n";
	$output = $output . "</tr>\n";
	$output = $output . "</table>\n";
	$output = $output . "<br>\n";
	$WalkRegionArray = array('','','','');
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $WalksControllerUrl);
	curl_setopt($ch,CURLOPT_POST, 0); // Set method to GET
	$JwtToken = "";
	$JwtToken = PullJwtToken($Reader);
	curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer {$JwtToken}","Content-Type: application/json"]);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$response = curl_exec($ch);
	$walks = "";
	if (curl_errno($ch)) { ErrorRoute(); } else { $walks = json_decode($response, true); }
	if($walks == null) { AuthFailed(); }
	$WalkRegionArray = array('','','','');
	$WalkDifficultyArray = array('','');
	$WalkName = "";
	$WalkDescription = "";
	$WalkImageUrl = "";
	$WalkRegionCode = "";
	$WalkRegionName = "";
	$WalkRegionImageUrl = "";
	$WalkDifficulty = "";
	$output = $output . "<div class='scrollable-table'>\n";
	$output = $output . "<table class='table'>\n";
	$output = $output . "<thead>\n";
	$output = $output . "<tr>\n";
	$output = $output . "<th width='15%'><p class='WalksColumnHeadings'>Name</p></th>\n";
	$output = $output . "<th width='38%'><p class='WalksColumnHeadings'>Description</p></th>\n"; 
	$output = $output . "<th width='9%'><p class='WalksColumnHeadings'>Length (Km)</p></th>\n";
	$output = $output . "<th width='38%'><p class='WalksColumnHeadings'>Walk Images Url</p></th>\n";
	$output = $output . "</tr>\n";
	$output = $output . "</thead>\n";
	$output = $output . "<tbody>\n";
	foreach ($walks as $walk) 
	{
		$WalkId = "{$walk['id']}";
		$WalkName = "{$walk['name']}";
		$WalkDescription = "{$walk['description']}";
		$WalkLengthInKm = "{$walk['lengthInKm']}";
		$WalkImageUrl = "{$walk['walkImageUrl']}";
		$counter = 0;
		foreach ($walk['region'] as $w)
		{
			$WalkRegionArray[$counter] = $w;
			$counter++;
		}
		$WalkRegionCode = $WalkRegionArray[0];
		if($WalkRegionCode == $Id)
		{
			$output = $output . "<tr>\n";
			$output = $output . "<td width='15%'><p class='WalksDetails'>$WalkName</p></td>\n";
			$output = $output . "<td width='38%'><p class='WalksDetails'>$WalkDescription</p></td>\n"; 
			$output = $output . "<td width='9%'><p class='WalksDetails'>$WalkLengthInKm</p></td>\n";
			$output = $output . "<td width='38%'><p class='WalksDetails'>$WalkImageUrl</p></td>\n";
			$output = $output . "</tr>\n";
		}
	}
	$output = $output . "</tbody>\n";
	$output = $output . "</table>\n";
	$output = $output . "</div>\n";
	curl_close($ch);
	return $output;
}

// Section 4: Pull JWT Token 
function PullJwtToken($Privilege)
{
	$JwtToken = "";
	$conn = odbc_connect('Udemy64','','');	
	$sql = "SELECT JWTToken FROM JWTTokens where Role = '" . $Privilege . "'";
	$rs = odbc_exec($conn, $sql);
	if (!$rs) { die("Query failed: " . odbc_errormsg($conn));}
	while (odbc_fetch_row($rs))
	{
		$JwtToken = odbc_result($rs,"JWTToken");
	}
	odbc_close($conn);
	return $JwtToken;
}

// Section 5: Rebuild Initial Page after Form Submission
function InitialPage($Controller)
{
	$output = "";
	$output = $output . "<HTML>\n";
	$output = $output . "<HEAD>\n";
	$output = $output . "<script LANGUAGE=JAVASCRIPT src=http://daves_pc/js/functions.js></script>\n";
	$output = $output . "<link rel='stylesheet' href='http://daves_pc/css/styles.css'>\n";
	$output = $output . "</head>\n";
	$output = $output . "<body onload='GetAll(" . '"'. $Controller . '"' . ");SetRadioButtons()'>\n";
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<tr><td align='center'><p class='WalksHeading'>New Zealand Walks Maintenance Utility</p></td></tr>\n";
	$output = $output . "</table>\n";
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<tr>\n";
	$output = $output . "<td width='42%'>&nbsp</td>\n";
	$output = $output . "<td width='1%' align='center'>\n";
	$output = $output . "<input type='radio' id='ControllerWalks' name='Controller' value='Walks' onclick='InitiateActiveTable(" . '"' . "Walks" . '"' . ");GetAll(this.value)'>\n";
	$output = $output . "</td>\n";
	$output = $output . "<td width='3%'><p class='RadioTitle'>Walks</p></td>\n";
	$output = $output . "<td width='4.6%' align='left'><button type='submit' class='short-oval-button' id='Submit' name='Submit' value='Create' onClick='Create(this.value)'>Add</button></td>\n";
	$output = $output . "<td width='1%' align='center'>\n";
	$output = $output . "<input type='radio' id='ControllerRegions' name='Controller' value='Regions' onclick='InitiateActiveTable(" . '"' . "Regions" . '"' . ");GetAll(this.value)'>\n";
	$output = $output . "</td>\n";
	$output = $output . "<td width='5%'><p class='RadioTitle'>Regions</p></td>\n";
	$output = $output . "<td width='43.4%'>&nbsp</td>\n";
	$output = $output . "</tr>\n";
	$output = $output . "</table>\n";
	$output = $output . "<h1 id='WalksAPIData'></h1>\n";
	$output = $output . "</body>\n";
	$output = $output . "</html>\n";
	return $output;
}

// Section 6: Display All Records for the Walks Table
function GetAllWalks($Controller,$ControllerUrl,$SortByName,$Reader)
{
	$JwtToken = PullJwtToken($Reader);
	$SortByName = "?sortBy=Name";
	$ControllerUrl = $ControllerUrl . $SortByName;
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $ControllerUrl);
	curl_setopt($ch,CURLOPT_POST, 0); // Set method to GET
	curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer {$JwtToken}","Content-Type: application/json"]);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$response = curl_exec($ch);
	$walks = "";
	if (curl_errno($ch)) { ErrorRoute(); } else { $walks = json_decode($response, true); }
	if($walks == null) { AuthFailed(); }
	$WalkRegionArray = array('','','','');
	$WalkDifficultyArray = array('','');
	$WalkName = "";
	$WalkDescription = "";
	$WalkImageUrl = "";
	$WalkRegionCode = "";
	$WalkRegionName = "";
	$WalkRegionImageUrl = "";
	$WalkDifficulty = "";
	$output = "";
	
	// Build HTML Heading
	$output = $output . "<div class='scrollable-table'>\n";
	$output = $output . "<table class='table'>\n";
	$output = $output . "<thead>\n";
	$output = $output . "<tr>\n";
	$output = $output . "<th width='2%'>&nbsp</th>\n";
	$output = $output . "<th width=30%'><p class='WalksColumnHeadingsLeft'>Name</p></th>\n";
	$output = $output . "<th width='30%'><p class='WalksColumnHeadingsLeft'>Description</p></th>\n"; 
	$output = $output . "<th width='7%'><p class='WalksColumnHeadings'>Length (Km)</p></th>\n";
	$output = $output . "<th width='7%'><p class='WalksColumnHeadings'>Region Code</p></th>\n";
	$output = $output . "<th width='7%'><p class='WalksColumnHeadings'>Region Name</p></th>\n";
	$output = $output . "<th width='7%'><p class='WalksColumnHeadings'>Walk Difficulty</p></th>\n";
	$output = $output . "<th width='5%'><p class='WalksColumnHeadings'>Update</p></th>\n";
	$output = $output . "<th width='5%'><p class='WalksColumnHeadings'>Delete</p></th>\n";
	$output = $output . "</tr>\n";
	$output = $output . "</thead>\n";
	$output = $output . "</table>\n";
	$output = $output . "<table class='table'>\n";

	foreach ($walks as $walk) 
	{
		$WalkId = "{$walk['id']}";
		$WalkName = "{$walk['name']}";
		$WalkDescription = "{$walk['description']}";
		$WalkLengthInKm = "{$walk['lengthInKm']}";
		if(!str_contains($WalkLengthInKm,".")) { $WalkLengthInKm = $WalkLengthInKm . ".0"; }
		$WalkImageUrl = "{$walk['walkImageUrl']}";
		$counter = 0;
		foreach ($walk['region'] as $w)
		{
			$WalkRegionArray[$counter] = $w;
			$counter++;
		}
		$counter = 0;
		foreach ($walk['difficulty'] as $w)
		{
			$WalkDifficultyArray[$counter] = $w;
			$counter++;
		}
		$WalkRegionCode = $WalkRegionArray[1];
		$WalkRegionName = $WalkRegionArray[2];
		$WalkRegionImageUrl = $WalkRegionArray[3];
		$WalkDifficulty = $WalkDifficultyArray[1];
		
		$output = $output . "<input type='hidden' id='Controller' name='Controller' value='" . $Controller . "'>\n";
		$output = $output . "<input type='hidden' id='Command' name='Command' value='Update'>\n";

		// Build the table HTML code
		$output = $output . "<tbody>\n";
		$output = $output . "<tr>\n";
		$output = $output . "<td width='15%'><p class='WalksDetailsLeft'>$WalkName</p></td>\n";
		$output = $output . "<td width='49.5%'><p class='WalksDetailsLeft'>$WalkDescription</p></td>\n"; 
		$output = $output . "<td width='2%'><p class='WalksDetailsRight'>$WalkLengthInKm</p></td>\n";
		$output = $output . "<td width='4.5%'>&nbsp</td>\n";
		$output = $output . "<td width='6%'><p class='WalksDetailsLeft'>$WalkRegionCode</p></td>\n";
		$output = $output . "<td width='7%'><p class='WalksDetailsLeft'>$WalkRegionName</p></td>\n";
		$output = $output . "<td width='6%'><p class='WalksDetailsLeft'>$WalkDifficulty</p></td>\n";
		$output = $output . "<td width='5%' align='center'><input type='checkbox' id='Record' name='Record' value='" . $WalkId . "' onclick='Update(this.value)'></td>\n";
		$output = $output . "<td width='5%' align='center'><input type='checkbox' id='Record' name='Record' value='" . $WalkId . "' onclick='Delete(this.value)'></td>\n";
		$output = $output . "</tr>\n";
	}
	$output = $output . "</tbody>\n";
	$output = $output . "</table>\n";
	$output = $output . "</div>\n";
	curl_close($ch);
	return $output;
}

// Section 7: Display All Records for the Regions Table
function GetAllRegions($Controller,$ControllerUrl,$Reader)
{
	$JwtToken = PullJwtToken($Reader);
	$SortByName = "?sortBy=Name";
	$ControllerUrl = $ControllerUrl . $SortByName;
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $ControllerUrl);
	curl_setopt($ch,CURLOPT_POST, 0); // Set method to GET
	curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer {$JwtToken}","Content-Type: application/json"]);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$response = curl_exec($ch);
	$regions = "";
	if (curl_errno($ch)) { ErrorRoute(); } else { $regions = json_decode($response, true); }
	if($regions == null) { AuthFailed(); }
	$RegionCode = "";
	$RegionName = "";
	$RegionImageUrl = "";
	$output = "";
	
	// Build HTML Heading
	$output = $output . "<div class='scrollable-table'>\n";
	$output = $output . "<table class='table'>\n";
	$output = $output . "<thead>\n";
	$output = $output . "<tr>\n";
	$output = $output . "<th width='3%'>&nbsp</th>\n";
	$output = $output . "<th width='12%'><p class='WalksColumnHeadingsLeft'>Name</p></th>\n";
	$output = $output . "<th width='10%'><p class='WalksColumnHeadings'>Code</p></th>\n"; 
	$output = $output . "<th width='65'><p class='WalksColumnHeadings'>Walk Image Url</p></th>\n"; 
	$output = $output . "<th width='5%'><p class='WalksColumnHeadings'>Update</p></th>\n";
	$output = $output . "<th width='5%'><p class='WalksColumnHeadings'>Delete</p></th>\n";
	$output = $output . "</tr>\n";
	$output = $output . "</thead>\n";
	$output = $output . "</table>\n";
	$output = $output . "<table class='table'>\n";
	// Loop through Json array and pick up data from API call.
	foreach ($regions as $region) 
	{
		$RegionId = "{$region['id']}";
		$RegionCode = "{$region['code']}";
		$RegionName = "{$region['name']}";
		$RegionImageUrl = "{$region['regionImageUrl']}";

		$output = $output . "<input type='hidden' id='Controller' name='Controller' value='" . $Controller . "'>\n";
		$output = $output . "<input type='hidden' id='Command' name='Command' value='Update'>\n";

		// Build the table HTML code
		$output = $output . "<tbody>\n";
		$output = $output . "<tr>\n";
		$output = $output . "<td width='3%'>&nbsp</td>\n";
		$output = $output . "<td width='15.6%'><p class='WalksDetailsLeft'>$RegionName</p></td>\n";
		$output = $output . "<td width='15%'><p class='WalksDetailsLeft'>$RegionCode</p></td>\n"; 
		$output = $output . "<td width='56.4'><p class='WalksDetailsLeft'>$RegionImageUrl</p></td>\n"; 
		$output = $output . "<td width='5%' align='center'><input type='checkbox' id='Record' name='Record' value='" . $RegionId . "' onclick='Update(this.value)'></td>\n";
		$output = $output . "<td width='5%' align='center'><input type='checkbox' id='Record' name='Record' value='" . $RegionId . "' onclick='Delete(this.value)'></td>\n";
		$output = $output . "</tr>\n";
	}
	$output = $output . "</tbody>\n";
	$output = $output . "</table>\n";
	$output = $output . "</div>\n";
	curl_close($ch);
	return $output;
}

// Section 8: Display One Record
function Get_By_Id($ControllerUrl,$Id,$Reader)
{
	$JwtToken = PullJwtToken($Reader);
	$ControllerUrl = $ControllerUrl . "/" . $Id;
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $ControllerUrl);
	curl_setopt($ch,CURLOPT_POST, 0); // Set method to GET
	curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer {$JwtToken}","Content-Type: application/json"]);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$response = curl_exec($ch);
	$data = "";
	if (curl_errno($ch)) {
		echo 'Error: ' . curl_error($ch);
	} else {
		$data = json_decode($response, true);
	}
	curl_close($ch);
}

// Section 9: Template for Entering New Row in Walks Table
function CreateWalkTemplate($Controller,$ControllerUrl,$Writer)
{
	$output = "";
	$output = $output . "<form action='http://daves_pc/php/WalksAPIData.php' method='POST'>\n";
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<tr><td align='center'><p class='WalksSubHeading'>Populate Fields for New Walks Record and Click Create to Save in Database</p></td></tr>\n";
	$output = $output . "</table>\n";
	$output = $output . "<br>\n";
	
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<tr>\n";
	$output = $output . "<td width='4.7%'>&nbsp</td>\n";
	$output = $output . "<td width='20%'><p class='WalksEditAreaHeading'>Populate Walk Record Detail Fields</p></td>\n";
	$output = $output . "<td width='75.3%'>&nbsp</td>\n";
	$output = $output . "</tr>\n";
	$output = $output . "</table>\n";
	
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<thead>\n";
	$output = $output . "<tr><td width='6.1%'>&nbsp</td>\n";
	$output = $output . "<th width='3.9%'><p class='WalksDetailsReversedRight'>Walk Name</p></th>\n";
	$output = $output . "<td width='90%' align='left'><input type='text' id='WalkName' name='WalkName' size='50' value='" . $WalkName . "'></td></tr>\n";
	$output = $output . "</thead>\n";
	$output = $output . "</table>\n";
	
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<thead>\n";
	$output = $output . "<tr><td width='4.3%'>&nbsp</td>\n";
	$output = $output . "<th width='5.7%'><p class='WalksDetailsReversedRight'>Walk Description</p></th>\n";
	$output = $output . "<td width='90%' align='left'><input type='text' id='Description' name='Description' size='200' value='" . $Description . "'></td></tr>\n";
	$output = $output . "</thead>\n";
	$output = $output . "</table>\n";
	
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<thead>\n";
	$output = $output . "<tr><td width='5.7%'>&nbsp</td>\n";
	$output = $output . "<th width='4.3%'><p class='WalksDetailsReversedRight'>Length (Km)</p></th>\n";
	$output = $output . "<td width='90%' align='left'><input type='text' id='LengthInKm' name='LengthInKm' size='20' value='" . $LengthInKm . "'></td></tr>\n";
	$output = $output . "</thead>\n";
	$output = $output . "</table>\n";
	
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<thead>\n";
	$output = $output . "<tr><td width='6.6%'>&nbsp</td>\n";
	$output = $output . "<th width='3.4%'><p class='WalksDetailsReversedRight'>Image Url</p></th>\n";
	$output = $output . "<td width='90%' align='left'><input type='text' id='WalkImageUrl' name='WalkImageUrl' size='200'value='" . $WalkImageUrl . "'></td></tr>\n";
	$output = $output . "</thead>\n";
	$output = $output . "</table>\n";
	
	$output = $output . "<br>\n";
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<tr>\n";
	$output = $output . "<td width='4.7%'>&nbsp</td>\n";
	$output = $output . "<td width='20%'><p class='WalksEditAreaHeading'>Select Cooresponding Region</p></td>\n";
	$output = $output . "<td width='75.3%'>&nbsp</td>\n";
	$output = $output . "</tr>\n";
	$output = $output . "</table>\n";
	
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<thead>\n";
	$output = $output . "<tr><td width='5.4%'>&nbsp</td>\n";
	$output = $output . "<th width='4.6%'><p class='WalksDetailsReversedRight'>Select Region</p></th>\n";
	$output = $output . "<td width='90%' align='left'><SELECT Name='RegionId' Id='RegionId'>\n";
	$options = PullAllSelections("Region");
	$output = $output . $options;
	$output = $output . "</SELECT></td></tr>\n";
	$output = $output . "</thead>\n";
	$output = $output . "</table>\n";
	
	$output = $output . "<br>\n";
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<tr>\n";
	$output = $output . "<td width='4.7%'>&nbsp</td>\n";
	$output = $output . "<td width='20%'><p class='WalksEditAreaHeading'>Select Cooresponding Difficulty</p></td>\n";
	$output = $output . "<td width='75.3%'>&nbsp</td>\n";
	$output = $output . "</tr>\n";
	$output = $output . "</table>\n";
	
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<thead>\n";
	$output = $output . "<tr><td width='4.6%'>&nbsp</td>\n";
	$output = $output . "<th width='5.4%'><p class='WalksDetailsReversedRight'>Select Difficulty</p></th>\n";
	$output = $output . "<td width='90%' align='left'><SELECT Name='DifficultyId' Id='DifficultyId'>\n";
	$options = PullAllSelections("Difficulty");
	$output = $output . $options;
	$output = $output . "</SELECT></td></tr>\n";
	$output = $output . "</thead>\n";
	$output = $output . "</table>\n";
	$output = $output . "<br>\n";
	
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<input type='hidden' id='Controller' name='Controller' value='" . $Controller . "'>\n";
	$output = $output . "<input type='hidden' id='Command' name='Command' value='Create'>\n";
	$output = $output . "<tr>\n";
	$output = $output . "<td width='40%'>&nbsp</td>\n";
	$output = $output . "<td width='4%' align='center'><button type='submit' class='oval-button' id='Submit' name='Submit' value='Create'>Create</button></td>\n";
	$output = $output . "<td width='2%'>&nbsp</td>\n";
	$output = $output . "<td width='4%' align='center'><button type='submit' class='oval-button' id='Submit' name='Submit' value='Cancel'>Cancel</button></td>\n";
	$output = $output . "<td width='40%'>&nbsp</td>\n";
	$output = $output . "</tr>\n";
	$output = $output . "</table>\n";
	$output = $output . "</form>\n";
	return $output;
}

// Section 10: Store New Row in Walks Table
function CreateWalksRecord($Controller,$ControllerUrl,$WalkName,$Description,$LengthInKm,$WalkImageUrl,$RegionId,$DifficultyId,$Writer,$Reader)
{
	$JwtToken = PullJwtToken($Writer);
	$output = "";
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $ControllerUrl);
	curl_setopt($ch,CURLOPT_POST, 0); // Set method to GET
	curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer {$JwtToken}","Content-Type: application/json"]);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");

	// Add data to the body
	$data = json_encode([
		"Name" => $WalkName,
		"Description" => $Description,
		"LengthInKm" => $LengthInKm,
		"WalkImageUrl" => $WalkImageUrl,
		"RegionId" => $RegionId,
		"DifficultyId" => $DifficultyId
	]);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	$response = curl_exec($ch);
	$data = "";
	if (curl_errno($ch)) {
		echo 'Error: ' . curl_error($ch);
	} else {
		$data = json_decode($response, true);
	}
	curl_close($ch);
	return InitialPage($Controller);
}

// Section 11: Template for Entering New Row in Regions Table
function CreateRegionTemplate($Controller,$ControllerUrl,$Writer)
{
	$output = $output . "<form action='http://daves_pc/php/WalksAPIData.php' method='POST'>\n";
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<tr><td align='center'><p class='WalksSubHeading'>Populate Fields for New Regions record and click Update to Save Changes in Database</p></td></tr>\n";
	$output = $output . "</table>\n";
	$output = $output . "<br>\n";
	
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<tr>\n";
	$output = $output . "<td width='4.7%'>&nbsp</td>\n";
	$output = $output . "<td width='20%'><p class='WalksEditAreaHeading'>Populate Region Record Detail Fields</p></td>\n";
	$output = $output . "<td width='75.3%'>&nbsp</td>\n";
	$output = $output . "</tr>\n";
	$output = $output . "</table>\n";
			
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<thead>\n";
	$output = $output . "<tr><td width='8.1%'>&nbsp</td>\n";
	$output = $output . "<th width='1.9%'><p class='WalksDetailsReversedRight'>Code</p></th>\n";
	$output = $output . "<td width='90%' align='left'><input type='text' id='Code' name='Code' size='10' value='" . $Code . "'></td></tr>\n";
	$output = $output . "</thead>\n";
	$output = $output . "</table>\n";
	
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<thead>\n";
	$output = $output . "<tr><td width='5.4%'>&nbsp</td>\n";
	$output = $output . "<th width='4.6%'><p class='WalksDetailsReversedRight'>Region Name</p></th>\n";
	$output = $output . "<td width='90%' align='left'><input type='text' id='RegionName' name='RegionName' size='40' value='" . $RegionName . "'></td></tr>\n";
	$output = $output . "</thead>\n";
	$output = $output . "</table>\n";
	
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<thead>\n";
	$output = $output . "<tr><td width='6.6%'>&nbsp</td>\n";
	$output = $output . "<th width='3.4%'><p class='WalksDetailsReversedRight'>Image Url</p></th>\n";
	$output = $output . "<td width='90%' align='left'><input type='text' id='RegionImageUrl' name='RegionImageUrl' size='200' value='" . $RegionImageUrl . "'></td></tr>\n";
	$output = $output . "</thead>\n";
	$output = $output . "</table>\n";
	$output = $output . "<br>\n";
	
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<input type='hidden' id='Controller' name='Controller' value='" . $Controller . "'>\n";
	$output = $output . "<input type='hidden' id='Command' name='Command' value='Create'>\n";
	$output = $output . "<tr>\n";
	$output = $output . "<td width='40%'>&nbsp</td>\n";
	$output = $output . "<td width='4%' align='center'><button type='submit' class='oval-button' id='Submit' name='Submit' value='Create'>Create</button></td>\n";
	$output = $output . "<td width='2%'>&nbsp</td>\n";
	$output = $output . "<td width='4%' align='center'><button type='submit' class='oval-button' id='Submit' name='Submit' value='Cancel'>Cancel</button></td>\n";
	$output = $output . "<td width='40%'>&nbsp</td>\n";
	$output = $output . "</tr>\n";
	$output = $output . "</table>\n";
	$output = $output . "</form>\n";
	return $output;
}

// Section 12: Store New Row in Regions Table
function AddRegionRecord($Controller,$ControllerUrl,$Code,$RegionName,$RegionImageUrl,$Writer)
{
	$JwtToken = PullJwtToken($Writer);
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $ControllerUrl);
	curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer {$JwtToken}","Content-Type: application/json"]);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_POST, true);
	curl_setopt($ch, CURLOPT_VERBOSE, false);
	$data = json_encode([
		"code" => $Code,
		"name" => $RegionName,
		"regionImageUrl" => $RegionImageUrl
	]);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	$response = curl_exec($ch);

	$data = "";
	if (curl_errno($ch)) {
		echo 'Error: ' . curl_error($ch);
	} else {
		$data = json_decode($response, true);
	}
	// print_r($data);
	curl_close($ch);
	return InitialPage($Controller);
}

// Section 13: Template for Modifying Existing Row in Walks Table
function UpdateWalksTemplate($Controller,$ControllerUrl,$Id,$Writer)
{
	$output = "";
	$WalkName = PullFields($Controller,$Id,"Name");
	$Description = PullFields($Controller,$Id,"Description");
	$LengthInKm = PullFields($Controller,$Id,"LengthInKm");
	$WalkImageUrl = PullFields($Controller,$Id,"WalkImageUrl");
	$RegionId = PullFields($Controller,$Id,"RegionId");
	$RegionName = PullSelectName("Regions",$RegionId);
	$DifficultyId = PullFields($Controller,$Id,"DifficultyId");
	$DifficultyName = PullSelectName("Difficulties",$DifficultyId);
	
	$output = $output . "<form action='http://daves_pc/php/WalksAPIData.php' method='POST'>\n";
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<tr><td align='center'><p class='WalksSubHeading'>Make necessary changes to this Walks record and click Update to Save Changes in Database</p></td></tr>\n";
	$output = $output . "</table>\n";
	$output = $output . "<br>\n";
	
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<tr>\n";
	$output = $output . "<td width='4.7%'>&nbsp</td>\n";
	$output = $output . "<td width='20%'><p class='WalksEditAreaHeading'>Update Walk Record Detail Fields</p></td>\n";
	$output = $output . "<td width='75.3%'>&nbsp</td>\n";
	$output = $output . "</tr>\n";
	$output = $output . "</table>\n";
		
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<thead>\n";
	$output = $output . "<tr><td width='6.1%'>&nbsp</td>\n";
	$output = $output . "<th width='3.9%'><p class='WalksDetailsReversedRight'>Walk Name</p></th>\n";
	$output = $output . "<td width='90%' align='left'><input type='text' id='WalkName' name='WalkName' size='50' value='" . $WalkName . "'></td></tr>\n";
	$output = $output . "</thead>\n";
	$output = $output . "</table>\n";
	
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<thead>\n";
	$output = $output . "<tr><td width='4.3%'>&nbsp</td>\n";
	$output = $output . "<th width='5.7%'><p class='WalksDetailsReversedRight'>Walk Description</p></th>\n";
	$output = $output . "<td width='90%' align='left'><input type='text' id='Description' name='Description' size='200' value='" . $Description . "'></td></tr>\n";
	$output = $output . "</thead>\n";
	$output = $output . "</table>\n";
	
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<thead>\n";
	$output = $output . "<tr><td width='5.7%'>&nbsp</td>\n";
	$output = $output . "<th width='4.3%'><p class='WalksDetailsReversedRight'>Length (Km)</p></th>\n";
	$output = $output . "<td width='90%' align='left'><input type='text' id='LengthInKm' name='LengthInKm' size='20' value='" . $LengthInKm . "'></td></tr>\n";
	$output = $output . "</thead>\n";
	$output = $output . "</table>\n";
	
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<thead>\n";
	$output = $output . "<tr><td width='6.6%'>&nbsp</td>\n";
	$output = $output . "<th width='3.4%'><p class='WalksDetailsReversedRight'>Image Url</p></th>\n";
	$output = $output . "<td width='90%' align='left'><input type='text' id='WalkImageUrl' name='WalkImageUrl' size='200'value='" . $WalkImageUrl . "'></td></tr>\n";
	$output = $output . "</thead>\n";
	$output = $output . "</table>\n";
	
	$output = $output . "<br>\n";
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<tr>\n";
	$output = $output . "<td width='4.7%'>&nbsp</td>\n";
	$output = $output . "<td width='20%'><p class='WalksEditAreaHeading'>Select Cooresponding Region</p></td>\n";
	$output = $output . "<td width='75.3%'>&nbsp</td>\n";
	$output = $output . "</tr>\n";
	$output = $output . "</table>\n";
		
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<thead>\n";
	$output = $output . "<tr><td width='5.4%'>&nbsp</td>\n";
	$output = $output . "<th width='4.6%'><p class='WalksDetailsReversedRight'>Select Region</p></th>\n";
	$output = $output . "<td width='90%' align='left'><SELECT Name='RegionId' Id='RegionId'>\n";
	$options = PullCurrentSelected("Region",$RegionId,$RegionName);
	$output = $output . $options;
	$output = $output . "</SELECT></td></tr>\n";
	$output = $output . "</table>\n";
	
	$output = $output . "<br>\n";
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<tr>\n";
	$output = $output . "<td width='4.7%'>&nbsp</td>\n";
	$output = $output . "<td width='20%'><p class='WalksEditAreaHeading'>Select Cooresponding Difficulty</p></td>\n";
	$output = $output . "<td width='75.3%'>&nbsp</td>\n";
	$output = $output . "</tr>\n";
	$output = $output . "</table>\n";
		
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<thead>\n";
	$output = $output . "<tr><td width='4.6%'>&nbsp</td>\n";
	$output = $output . "<th width='5.4%'><p class='WalksDetailsReversedRight'>Select Difficulty</p></th>\n";
	$output = $output . "<td width='90%' align='left'><SELECT Name='DifficultyId' Id='DifficultyId'>\n";
	$options = PullCurrentSelected("Difficulty",$DifficultyId,$DifficultyName);
	$output = $output . $options;
	$output = $output . "</SELECT></td></tr>\n";
	$output = $output . "</thead>\n";
	$output = $output . "</table>\n";
	$output = $output . "<br>\n";
	
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<input type='hidden' id='Controller' name='Controller' value='" . $Controller . "'>\n";
	$output = $output . "<input type='hidden' id='Command' name='Command' value='Update'>\n";
	$output = $output . "<input type='hidden' id='Id' name='Id' name='Id' value='" . $Id . "'>\n";
	$output = $output . "<tr>\n";
	$output = $output . "<td width='40%'>&nbsp</td>\n";
	$output = $output . "<td width='4%' align='center'><button type='submit' class='oval-button' id='Submit' name='Submit' value='Update'>Update</button></td>\n";
	$output = $output . "<td width='2%'>&nbsp</td>\n";
	$output = $output . "<td width='4%' align='center'><button type='submit' class='oval-button' id='Submit' name='Submit' value='Cancel'>Cancel</button></td>\n";
	$output = $output . "<td width='40%'>&nbsp</td>\n";
	$output = $output . "</tr>\n";
	$output = $output . "</table>\n";
	$output = $output . "</form>\n";
	return $output;
}

// Section 14: Store modified Row in Walks Table
function UpdateWalksRecord($Controller,$ControllerUrl,$Id,$WalkName,$Description,$LengthInKm,$WalkImageUrl,$RegionId,$DifficultyId,$Writer,$Reader)
{
	$JwtToken = PullJwtToken($Writer);
	$output = "";
	$ControllerUrl = $ControllerUrl . "/" . $Id;
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $ControllerUrl);
	curl_setopt($ch,CURLOPT_POST, 0); // Set method to GET
	curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer {$JwtToken}","Content-Type: application/json"]);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");

	// Turns the fields and data into Json format.
	$data = json_encode([
		"Name" => $WalkName,
		"Description" => $Description,
		"LengthInKm" => $LengthInKm,
		"WalkImageUrl" => $WalkImageUrl,
		"RegionId" => $RegionId,
		"DifficultyId" => $DifficultyId
	]);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	$response = curl_exec($ch);
	$data = "";
	if (curl_errno($ch)) {
		echo 'Error: ' . curl_error($ch);
	} else {
		$data = json_decode($response, true);
	}
	curl_close($ch);
	return InitialPage($Controller);
}

// Section 15: Template for Modifying Existing Row in Regions Table
function UpdateRegionsTemplate($Controller,$ControllerUrl,$Id,$Writer)
{
	$output = "";
	$Code = PullFields($Controller,$Id,"Code");
	$RegionName = PullFields($Controller,$Id,"Name");
	$RegionImageUrl = PullFields($Controller,$Id,"RegionImageUrl");
	
	$output = $output . "<form action='http://daves_pc/php/WalksAPIData.php' method='POST'>\n";
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<tr><td align='center'><p class='WalksSubHeading'>Make necessary changes to this Regions record and click Update to Save Changes in Database</p></td></tr>\n";
	$output = $output . "</table>\n";
	$output = $output . "<br>\n";
	
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<tr>\n";
	$output = $output . "<td width='4.7%'>&nbsp</td>\n";
	$output = $output . "<td width='20%'><p class='WalksEditAreaHeading'>Update Region Record Detail Fields</p></td>\n";
	$output = $output . "<td width='75.3%'>&nbsp</td>\n";
	$output = $output . "</tr>\n";
	$output = $output . "</table>\n";
			
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<thead>\n";
	$output = $output . "<tr><td width='8.1%'>&nbsp</td>\n";
	$output = $output . "<th width='1.9%'><p class='WalksDetailsReversedRight'>Code</p></th>\n";
	$output = $output . "<td width='90%' align='left'><input type='text' id='Code' name='Code' size='10' value='" . $Code . "'></td></tr>\n";
	$output = $output . "</thead>\n";
	$output = $output . "</table>\n";
	
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<thead>\n";
	$output = $output . "<tr><td width='5.4%'>&nbsp</td>\n";
	$output = $output . "<th width='4.6%'><p class='WalksDetailsReversedRight'>Region Name</p></th>\n";
	$output = $output . "<td width='90%' align='left'><input type='text' id='RegionName' name='RegionName' size='40' value='" . $RegionName . "'></td></tr>\n";
	$output = $output . "</thead>\n";
	$output = $output . "</table>\n";
	
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<thead>\n";
	$output = $output . "<tr><td width='6.6%'>&nbsp</td>\n";
	$output = $output . "<th width='3.4%'><p class='WalksDetailsReversedRight'>Image Url</p></th>\n";
	$output = $output . "<td width='90%' align='left'><input type='text' id='RegionImageUrl' name='RegionImageUrl' size='200' value='" . $RegionImageUrl . "'></td></tr>\n";
	$output = $output . "</thead>\n";
	$output = $output . "</table>\n";
	$output = $output . "<br>\n";
	
	$output = $output . "<table width='100%' align='center'>\n";
	$output = $output . "<input type='hidden' id='Controller' name='Controller' value='" . $Controller . "'>\n";
	$output = $output . "<input type='hidden' id='Command' name='Command' value='Update'>\n";
	$output = $output . "<input type='hidden' id='Id' name='Id' name='Id' value='" . $Id . "'>\n";
	$output = $output . "<tr>\n";
	$output = $output . "<td width='40%'>&nbsp</td>\n";
	$output = $output . "<td width='4%' align='center'><button type='submit' class='oval-button' id='Submit' name='Submit' value='Update'>Update</button></td>\n";
	$output = $output . "<td width='2%'>&nbsp</td>\n";
	$output = $output . "<td width='4%' align='center'><button type='submit' class='oval-button' id='Submit' name='Submit' value='Cancel'>Cancel</button></td>\n";
	$output = $output . "<td width='40%'>&nbsp</td>\n";
	$output = $output . "</tr>\n";
	$output = $output . "</table>\n";
	$output = $output . "</form>\n";
	return $output;
}

// Section 16: Store Modified Row in Regions Table
function UpdateRegionsRecord($Controller,$ControllerUrl,$Id,$Code,$RegionName,$RegionImageUrl,$Writer)
{
	$JwtToken = PullJwtToken($Writer);
	$ControllerUrl = $ControllerUrl . "/" . $Id;
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $ControllerUrl);
	curl_setopt($ch,CURLOPT_POST, 0); // Set method to GET
	$JwtToken = PullJwtToken($Writer);
	curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer {$JwtToken}","Content-Type: application/json"]);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
	$data = json_encode([
		"code" => $Code,
		"name" => $RegionName,
		"regionImageUrl" => $RegionImageUrl
	]);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	$response = curl_exec($ch);
	$data = "";
	if (curl_errno($ch)) {
		echo 'Error: ' . curl_error($ch);
	} else {
		$data = json_decode($response, true);
	}
	curl_close($ch);
	return InitialPage($Controller);
}

// Section 17: Delete Existing Walks Record
function DeleteWalksRecord($Controller,$ControllerUrl,$Id,$Writer,$Reader)
{
	$JwtToken = PullJwtToken($Writer);
	$ControlUrl = $ControllerUrl . "/" . $Id;
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $ControlUrl);
	curl_setopt($ch,CURLOPT_POST, 0); // Set method to GET
	curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer {$JwtToken}","Content-Type: application/json"]);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
	$response = curl_exec($ch);
	$data = "";
	if (curl_errno($ch)) {
		echo 'Error: ' . curl_error($ch);
	} else {
		$data = json_decode($response, true);
	}
	curl_close($ch);
	$output = GetAllWalks($Controller,$ControllerUrl,$SortByName,$Reader);
	return $output;
}

// Section 18: Delete Existing Regions Record
function DeleteRegionsRecord($Controller,$ControllerUrl,$Protocol,$ConnectUrl,$Port,$Id,$Writer,$Reader)
{
	$output = "";
	// Check to see if this Regions Id is currently being used by a Walks table row.
	// If so, we display a warning message and display the Walks row currently using this Region Id.
	$NumberUsedIds = GetRowCount($Id,$Reader);
	$ControllerName = GetRegionsControllerName($Id);
	if($NumberUsedIds > 0)
	{
		$output = RegionsRowInUse($Controller,$ControllerUrl,$ControllerName,$Protocol,$ConnectUrl,$Port,$NumberUsedIds,$Id,$Reader);
	}
	else
	{
		$ControlUrl = $ControllerUrl . "/" . $Id;
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $ControlUrl);
		$JwtToken = PullJwtToken($Writer);
		curl_setopt($ch, CURLOPT_HTTPHEADER, ["Authorization: Bearer {$JwtToken}","Content-Type: application/json"]);

		// Bypass SSL verification (not recommended for production)
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

		// Return the response instead of outputting it
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "DELETE");
		
		curl_setopt($ch, CURLOPT_VERBOSE, false);
		
		// Execute the request
		$response = curl_exec($ch);

		// Check for errors
		$data = "";
		if (curl_errno($ch)) {
			echo 'Error: ' . curl_error($ch);
		} else {
			$data = json_decode($response, true);
		}
		
		// Close the cURL session
		curl_close($ch);
		$output = GetAllRegions($Controller,$ControllerUrl,$Reader);
	}
	return $output;
}

// Section 19: Main Processing Area
$output = "";
switch($Command)
{
	case "GetAll":
		if($Controller == "Walks") { $output = @GetAllWalks($Controller,$ControllerUrl,$SortByName,$Reader); }
		if($Controller == "Regions") { $output = GetAllRegions($Controller,$ControllerUrl,$Reader); }
		break;
	case "Create":
		if($Controller == "Walks" && is_null($Submit)) { $output = CreateWalkTemplate($Controller,$ControllerUrl,$Writer); }
		if($Controller == "Regions" && is_null($Submit)) { $output = CreateRegionTemplate($Controller,$ControllerUrl,$Writer); }
		if($Controller == "Walks" && $Submit == "Create") { $output = CreateWalksRecord($Controller,$ControllerUrl,$WalkName,$Description,$LengthInKm,$WalkImageUrl,$RegionId,$DifficultyId,$Writer,$Reader); }
		if($Controller == "Regions" && $Submit == "Create") { $output = AddRegionRecord($Controller,$ControllerUrl,$Code,$RegionName,$RegionImageUrl,$Writer); }
		if($Controller == "Walks" && $Submit == "Cancel") { $output = InitialPage($Controller); }
		if($Controller == "Regions" && $Submit == "Cancel") { $output = InitialPage($Controller); }
		break;
	case "Update":
		if($Controller == "Walks" && is_null($Submit)) { $output = UpdateWalksTemplate($Controller,$ControllerUrl,$Id,$Writer); }
		if($Controller == "Regions" && is_null($Submit)) { $output = UpdateRegionsTemplate($Controller,$ControllerUrl,$Id,$Writer); }
		if($Controller == "Walks" && $Submit == "Update") { $output = UpdateWalksRecord($Controller,$ControllerUrl,$Id,$WalkName,$Description,$LengthInKm,$WalkImageUrl,$RegionId,$DifficultyId,$Writer,$Reader); }
		if($Controller == "Regions" && $Submit == "Update") { $output = UpdateRegionsRecord($Controller,$ControllerUrl,$Id,$Code,$RegionName,$RegionImageUrl,$Writer); }
		if($Controller == "Walks" && $Submit == "Cancel") { $output = InitialPage($Controller); }
		if($Controller == "Regions" && $Submit == "Cancel") { $output = InitialPage($Controller); }
		break;
	case "WalksDelete":
		$output = DeleteWalksRecord($Controller,$ControllerUrl,$Id,$Writer,$Reader);
		break;
	case "RegionsDelete":
		$output = DeleteRegionsRecord($Controller,$ControllerUrl,$Protocol,$ConnectUrl,$Port,$Id,$Writer,$Reader);
		break;
}
print $output;
?>
