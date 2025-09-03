<#
	Program Name: LoadComputersTables.ps1
	Date Written: July 26th, 2025
	Written By: Dave Jaynes
	Description: Populates the Computers and ComputersSnake tables for the C# .NET course.
#>

# Declare functions
function CreateTable {
	Param (
	[string]$tableName,
	[string]$fields
	)
	$sql1 = "IF EXISTS(SELECT * FROM sys.tables WHERE SCHEMA_NAME(schema_id) LIKE 'TutorialAppSchema' AND name like '" + $tableName + "') DROP TABLE [TutorialAppSchema].[" + $tableName + "]"
	$sql2 = "IF NOT EXISTS(SELECT * FROM sys.tables WHERE SCHEMA_NAME(schema_id) LIKE 'TutorialAppSchema' AND name like '" + $tableName + "') CREATE TABLE TutorialAppSchema." + $tableName + $fields
	$dsn="DSN=DotNetCourseDatabase;"
	$conn = New-Object System.Data.Odbc.OdbcConnection
	$conn.ConnectionString = $dsn
	$conn.open()
	$cmd = new-object System.Data.Odbc.OdbcCommand($sql1,$conn)
	$Junk = $cmd.ExecuteNonQuery()
	$cmd = new-object System.Data.Odbc.OdbcCommand($sql2,$conn)
	$Junk = $cmd.ExecuteNonQuery()
	$conn.close()
}

function ReturnTableFields {
	Param (
	[string]$table,
	[string]$fieldtype
	)
	$sql = "select " + $fieldtype + " from TableDefinations where tableName = '" + $table + "'"
	$dsn="DSN=DotNetCourseDatabase;"
	$conn = New-Object System.Data.Odbc.OdbcConnection
	$conn.ConnectionString = $dsn
	$conn.open()
	$cmd = new-object System.Data.Odbc.OdbcCommand($sql,$conn)
	$fieldStatement = $cmd.ExecuteScalar()
	return $fieldStatement
	$conn.close()
}
	
function WriteSQLStatement {
	Param (
	[string]$sql
	)
	$dsn="DSN=DotNetCourseDatabase;"
	$conn = New-Object System.Data.Odbc.OdbcConnection
	$conn.ConnectionString = $dsn
	$conn.open()
	$cmd = new-object System.Data.Odbc.OdbcCommand($sql,$conn)
	try {
		$Junk = $cmd.ExecuteNonQuery()
	}
	catch {
		Write-Host "$sql"
		Write-Host "$_" -foregroundcolor "green" 
		Write-Host "------------------------------------------------------------------------------------------------------------------------------"
		Write-Host
	}
	$conn.close()
}

function LoadComputerTable {
	$sql = "EXEC LoadComputerTable"
	WriteSQLStatement -sql $sql
}

function LoadComputersTable {
	# Deserializing
	$selectedData = Get-Content -Path $Computers_JSON_FilePath -Raw | ConvertFrom-Json
	foreach ($row in $selectedData) {
		$ComputerId = $row.ComputerId
		$motherboard = $row.motherboard
		$hasWifi = $row.hasWifi
		$hasLTE = $row.hasLTE
		$releaseDate = $row.releaseDate
		$videoCard = $row.videoCard  -replace("'","''")
		if($hasWifi -eq 'True') { $hasWifi = 1 } else { $hasWifi = 0 }
		if($hasLTE -eq 'True') { $hasLTE = 1 } else { $hasLTE = 0 }
		$sql = "insert into TutorialAppSchema." + $Computers + "(ComputerId,Motherboard,HasWifi,HasLTE,ReleaseDate,VideoCard) values ($ComputerId,'$motherboard',$hasWifi,$hasLTE,'$releaseDate','$videoCard')"
		WriteSQLStatement -sql $sql
	}
}

function LoadComputersSnakeTable {
	# Deserializing
	$selectedData = Get-Content -Path $ComputersSnake_JSON_FilePath -Raw | ConvertFrom-Json
	foreach ($row in $selectedData) {
		$ComputerId = $row.computer_id
		$motherboard = $row.motherboard
		$has_wifi = $row.has_wifi
		$has_lte = $row.has_lte
		$release_date = $row.release_date
		$video_card = $row.video_card -replace("'","''")
		$cpu_cores = $row.cpu_cores
		$price = $row.price
		if($has_wifi -eq 'True') { $has_wifi = 1 } else { $has_wifi = 0 }
		if($has_lte -eq 'True') { $has_lte = 1 } else { $has_lte = 0 }
		$sql = "insert into TutorialAppSchema." + $ComputersSnake + "(ComputerId,Motherboard,HasWifi,HasLTE,ReleaseDate,VideoCard,CPUCores,Price) values ($ComputerId,'$motherboard',$has_wifi,$has_lte,'$release_date','$video_card',$cpu_cores,$price)"
		WriteSQLStatement -sql $sql
	}
}

# Process table creation
function CreateTables {
	foreach ($key in $TableDict.Keys) { CreateTable -tableName ${key} -fields $($TableDict[$key]) }
}

# Load tables
function LoadTables {
	LoadComputersTable
	LoadComputersSnakeTable
}

# Declare local variables
$Computers = "Computers"
$ComputersSnake = "ComputersSnake"
$Computer = "Computer"


$Computers_JSON_FilePath = "C:\Udemy\C#\Dominic Tripodi\JSON files\Computers.json"
$ComputersSnake_JSON_FilePath = "C:\Udemy\C#\Dominic Tripodi\JSON files\ComputersSnake.json"

# Declare table dictionary
$TableDict = @{}
$TableDict[$Computers] = ReturnTableFields -table $Computers -fieldtype "fields"
$TableDict[$ComputersSnake] = ReturnTableFields -table $ComputersSnake -fieldtype "fields"
$TableDict[$Computer] = ReturnTableFields -table $Computer -fieldtype "fields"
#$Computers_JSON_FilePath = ReturnTableFields -table $Computers -fieldtype "filePath"
#$ComputersSnake_JSON_FilePath = ReturnTableFields -table $ComputersSnake -fieldtype "filePath"

# Main processing area
CreateTables
LoadTables

