
#################################################################################
#						Local Variable Defination Section						#
#################################################################################
$RegionUri = "https://localhost:7257/api/Regions"
$Reader = "Reader"
$Writer = "Writer"
$ContextType = "application/json"
$testId = "14ceba71-4b51-4777-9b17-46602cf66153"
$testCode = "BOP"
$testName = "Bay Of Plenty"
$testUrl = "https://images.pexels.com/photos/5169056/pexels-photo-5169056.jpeg?auto=compress\u0026cs=tinysrgb\u0026w=1260\u0026h=750\u0026dpr=1"

#################################################################################
#						   Function Defination Section							#
#################################################################################

function PullJwtToken {
	Param (
	[string]$Privilege
	)
	# Set databasae connection string
	$connectionString = "Server=DAVES_PC;Database=Udemy;Integrated Security=True;"
	
	# Define query
	$query = "SELECT JWTToken FROM JWTTokens where Role = '" + $Privilege + "'"

	# Create and open SQL connection
	$connection = New-Object System.Data.SqlClient.SqlConnection
	$connection.ConnectionString = $connectionString
	$connection.Open()

	# Execute query
	$command = $connection.CreateCommand()
	$command.CommandText = $query
	$reader = $command.ExecuteReader()

	# Read and return data
	$table = New-Object System.Data.DataTable
	$table.Load($reader)
	$reader.Close()
	$connection.Close()
	return $table
}

function GetAll()
{
	$table = PullJwtToken -Privilege $Reader
	$Token = $table.JWTToken
	$Headers = @{ Authorization = "Bearer $Token" }
	$Method = "GET"
	
	# Bundle the API request variables into Params
	$Params = @{
		Uri = $RegionUri
		Method = $Method
		Headers = $Headers
		ContentType = $ContextType
	}
	
	# Make the API request
	$response = Invoke-RestMethod @Params|ConvertTo-Json
	$response
}

function GetById {
	Param (
		[string]$Id
	)
	$table = PullJwtToken -Privilege $Reader
	$Token = $table.JWTToken
	$Headers = @{ Authorization = "Bearer $Token" }
	$Method = "GET"
	$Uri = $RegionUri + "/" + $Id
	
	# Bundle the API request variables into Params
	$Params = @{
		Uri = $Uri
		Method = $Method
		Headers = $Headers
		ContentType = $ContextType
	}
	
	# Make the API request
	$response = Invoke-RestMethod @Params|ConvertTo-Json
	$response
}

function Update {
	Param (
		[string]$Id,
		[string]$code,
		[string]$name,
		[string]$regionImageUrl
	)

	$table = PullJwtToken -Privilege $Writer
	$Token = $table.JWTToken
	$Headers = @{ Authorization = "Bearer $Token" }
	$Method = "PUT"
	$Uri = $RegionUri + "/" + $Id
	$Body = @{
		id = $Id
		code = $code
		name = $name
		regionImageUrl = $regionImageUrl
	}| ConvertTo-Json
	
	# Bundle the API request variables into Params
	$Params = @{
		Uri = $Uri
		Method = $Method
		Headers = $Headers
		ContentType = $ContextType
		Body = $Body
	}
	
	# Make the API request
	$junk = Invoke-RestMethod @Params
	
	# Once record is updated, recall it from database to see if it was properly stored.
	$response = GetById -Id $Id
	$response
}

function Create {
	Param (
		[string]$code,
		[string]$name,
		[string]$regionImageUrl
	)

	$table = PullJwtToken -Privilege $Writer
	$Token = $table.JWTToken
	$Headers = @{ Authorization = "Bearer $Token" }
	$Method = "POST"
	$Uri = $RegionUri
	$Body = @{
		code = $code
		name = $name
		regionImageUrl = $regionImageUrl
	}| ConvertTo-Json
	
	# Bundle the API request variables into Params
	$Params = @{
		Uri = $Uri
		Method = $Method
		Headers = $Headers
		ContentType = $ContextType
		Body = $Body
	}
	
	# Make the API request
	$junk = Invoke-RestMethod @Params
	
	# List all rows
	GetAll
}

function Delete {
	Param (
		[string]$Id
	)
	$table = PullJwtToken -Privilege $Writer
	$Token = $table.JWTToken
	$Headers = @{ Authorization = "Bearer $Token" }
	$Method = "DELETE"
	$Uri = $RegionUri + "/" + $Id
	
	# Bundle the API request variables into Params
	$Params = @{
		Uri = $Uri
		Method = $Method
		Headers = $Headers
		ContentType = $ContextType
	}

	# Make the API request
	$response = Invoke-RestMethod @Params|ConvertTo-Json
	$response
}

#################################################################################
#								Main Section									#
#################################################################################

GetAll
# GetById -Id $testId
# Create -code $testCode -name $testName -regionImageUrl $testUrl
# Update -Id $testId -code $testCode -name $testName -regionImageUrl $testUrl
# Delete -Id "6ba1aee6-ab89-452b-ec83-08dde3426ff9"
