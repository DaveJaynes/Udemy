using System;
using System.Data;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using AutoMapper;

using DotnetAPI.Model;
using Microsoft.Extensions.Logging;
using System.Security.AccessControl;
//using Newtonsoft.Json;
//using Newtonsoft.Json.Serialization;
//using ReadSQLData.Model;

#pragma warning disable CS8600  // Disables the warning: Converting null literal or possible null value to non-nullable type
#pragma warning disable CS8604  // Disables the warning: Possible null reference argument for parameter

namespace ReadSQLData
{
	public class ManageData
	{
		private static string databaseName = "NZWalksDb";
		SQL sql = new SQL("Server=DAVES_PC;Database=" + databaseName + ";TrustServerCertificate=true;Trusted_Connection=true");
		
		// Recreates the Walks table
		public void CreateWalksTable()
		{
			string dropTableCmd = "IF EXISTS(SELECT * FROM sys.tables WHERE SCHEMA_NAME(schema_id) LIKE 'TutorialAppSchema' AND name like 'Walks') DROP TABLE [TutorialAppSchema].[Walks]";
			string createTableCmd = "IF NOT EXISTS(SELECT * FROM sys.tables WHERE SCHEMA_NAME(schema_id) LIKE 'TutorialAppSchema' AND name like 'Exployees') create table [dbo].[Walks](Id uniqueidentifier, Name nvarchar(50), Description nvarchar(255), LengthInKm float, WalkImageUrl nvarchar(max), DifficultyId uniqueidentifier, RegionId uniqueidentifier)";
			sql.Tables(dropTableCmd);
			sql.Tables(createTableCmd);
		}

		// Rebuild Json table from SQL data
		public void RebuildWalksJsonFile()
		{
			string WalksJsonOutput = "C:/Udemy/C#/Dominic Tripodi/My Applications/Testing/ReadSQLData/files/Walks.json";
			string sqlCommand = "SELECT Id,Name,Description,LengthInKm,WalkImageUrl,DifficultyId,RegionId FROM Walks";
			List<Walks> Walks = new List<Walks>();
			sql.RetrieveWalksData(sqlCommand, Walks);
			foreach (Walks employee in Walks)
			{
				JsonSerializerSettings settings = new JsonSerializerSettings();
				settings.ContractResolver = new CamelCasePropertyNamesContractResolver();
				string WalksOutputText = JsonConvert.SerializeObject(Walks, settings);
				File.WriteAllText(WalksJsonOutput, WalksOutputText);
				string text = File.ReadAllText(WalksJsonOutput);
				text = text.Replace("},{", "},\n{");
				File.WriteAllText(WalksJsonOutput, text);
			}
		}

		public void EmptyAllTables()
		{
			sql.EmptyTable("Walks");
			sql.EmptyTable("Regions");
			sql.EmptyTable("Difficulties");
		}
		
		public void DropAllTables()
		{
			sql.DropTable("Walks");
			sql.DropTable("Regions");
			sql.DropTable("Difficulties");
		}
		
		public void RecreateTables()
		{
			string sqlcmd = "";
			sqlcmd = "CREATE TABLE Walks(Id UniqueIdentifier,Name nvarchar(MAX),Description nvarchar(MAX),LengthInKm float,WalkImageUrl nvarchar(MAX),DifficultyId UniqueIdentifier, RegionId UniqueIdentifier,CONSTRAINT PK_Walks PRIMARY KEY NONCLUSTERED (Id))";
			sql.RecreateTable(sqlcmd);
			sqlcmd = "CREATE TABLE Difficulties(Id UniqueIdentifier, Name nvarchar(MAX),CONSTRAINT PK_Difficulties PRIMARY KEY NONCLUSTERED (Id))";
			sql.RecreateTable(sqlcmd);
			sqlcmd = "CREATE TABLE Regions(Id UniqueIdentifier,Code NVARCHAR(MAX),Name NVARCHAR(MAX),RegionImageUrl NVARCHAR(MAX),CONSTRAINT PK_Regions PRIMARY KEY NONCLUSTERED (Id))";
			sql.RecreateTable(sqlcmd);
			sqlcmd = "ALTER TABLE Walks ADD CONSTRAINT FK_Walks_Regions_RegionId FOREIGN Key (RegionId) REFERENCES Regions(Id)";
			sql.RecreateTable(sqlcmd);
			sqlcmd = "ALTER TABLE Walks ADD CONSTRAINT FK_Walks_Difficulties_DifficultyId FOREIGN Key (DifficultyId) REFERENCES Difficulties(Id)";
			sql.RecreateTable(sqlcmd);
		}
		
		public void LoadDifficultySQLTableFromJsonFile()
		{	
			string sqlInsert = "INSERT INTO Difficulties(Id,Name) values (@Id, @Name)";
			string JsonInput = "C:/Udemy/C#/Dominic Tripodi/My Applications/Testing/ReadSQLData/files/DifficultiesBad.json";
			string DifficultiesBadJson = File.ReadAllText(JsonInput);
			
			ILoggerFactory factory = new LoggerFactory();
			Mapper mapper = new Mapper(new MapperConfiguration((cfg) =>
			{
				cfg.CreateMap<DifficultiesBad, Difficulties>()
					.ForMember(destination => destination.Id, options => options.MapFrom(source => source.idcode))
					.ForMember(destination => destination.Name, options => options.MapFrom(source => source.difficultylevel));
			}, factory = LoggerFactory.Create(builder => builder.GetType())));
			
			// Convert each line in the Json file into an independent DifficultiesBad object.
			// There will be the same amount of DifficultiesBad objects created as there are rows in the Json file.
			// IEnumerable will then pick up all these objects and store them in the IEnumberable object 'difficultiesBad'.
			IEnumerable<DifficultiesBad>? difficultiesBad = JsonConvert.DeserializeObject<IEnumerable<DifficultiesBad>>(DifficultiesBadJson);

			if (difficultiesBad != null)
			{
				IEnumerable<Difficulties> allDifficulties = mapper.Map<IEnumerable<Difficulties>>(difficultiesBad);

				foreach (Difficulties Difficulties in allDifficulties)
				{
					if (Difficulties.Name == null) { Difficulties.Name = ""; }

					// Create our listing of potential SqlParameter.
					List<SqlParameter> sqlParameters = new List<SqlParameter>();

					// Create SqlParameter objects for each field.
					SqlParameter IdParameter = new SqlParameter("@Id", SqlDbType.UniqueIdentifier);
					SqlParameter NameParameter = new SqlParameter("@Name", SqlDbType.NVarChar);

					// Assign values to each SqlParameter object
					IdParameter.SqlValue = Difficulties.Id;
					NameParameter.Value = Difficulties.Name;

					// Add parameters to paramater list
					sqlParameters.Add(IdParameter);
					sqlParameters.Add(NameParameter);

					// Ship it off to SQL for processing.
					sql.InsertData(sqlInsert, sqlParameters);
				}
			}
		}

		public void LoadRegionsSQLTableFromJsonFile()
		{
			string sqlInsert = "INSERT INTO Regions(Id,Code,Name,RegionImageUrl) values (@Id, @Code, @Name, @RegionImageUrl)";
			string JsonInput = "C:/Udemy/C#/Dominic Tripodi/My Applications/Testing/ReadSQLData/files/RegionsBad.json";
			string RegionsBadJson = File.ReadAllText(JsonInput);

			ILoggerFactory factory = new LoggerFactory();
			Mapper mapper = new Mapper(new MapperConfiguration((cfg) =>
			{
				cfg.CreateMap<RegionsBad, Regions>()
					.ForMember(destination => destination.Id, options => options.MapFrom(source => source.idcode))
					.ForMember(destination => destination.Code, options => options.MapFrom(source => source.codenum))
					.ForMember(destination => destination.Name, options => options.MapFrom(source => source.locationname))
					.ForMember(destination => destination.RegionImageUrl, options => options.MapFrom(source => source.regionUrl));
			}, factory = LoggerFactory.Create(builder => builder.GetType())));

			IEnumerable<RegionsBad>? regionsBad = JsonConvert.DeserializeObject<IEnumerable<RegionsBad>>(RegionsBadJson);

			if (regionsBad != null)
			{
				IEnumerable<Regions> allRegions = mapper.Map<IEnumerable<Regions>>(regionsBad);

				foreach (Regions Regions in allRegions)
				{
					if (Regions.Code == null) { Regions.Code = ""; }
					if (Regions.Name == null) { Regions.Name = ""; }
					if (Regions.RegionImageUrl == null) { Regions.RegionImageUrl = ""; }

					// Create our listing of potential SqlParameter.
					List<SqlParameter> sqlParameters = new List<SqlParameter>();

					// Create SqlParameter objects for each field.
					SqlParameter IdParameter = new SqlParameter("@Id", SqlDbType.UniqueIdentifier);
					SqlParameter CodeParameter = new SqlParameter("@Code", SqlDbType.NVarChar);
					SqlParameter NameParameter = new SqlParameter("@Name", SqlDbType.NVarChar);
					SqlParameter RegionImageUrlParameter = new SqlParameter("@RegionImageUrl", SqlDbType.NVarChar);

					// Assign values to each SqlParameter object
					IdParameter.SqlValue = Regions.Id;
					CodeParameter.Value = Regions.Code;
					NameParameter.Value = Regions.Name;
					RegionImageUrlParameter.Value = Regions.RegionImageUrl;

					// Add parameters to paramater list
					sqlParameters.Add(IdParameter);
					sqlParameters.Add(CodeParameter);
					sqlParameters.Add(NameParameter);
					sqlParameters.Add(RegionImageUrlParameter);

					// Ship it off to SQL for processing.
					sql.InsertData(sqlInsert, sqlParameters);
				}
			}
		}

		public void LoadWalksSQLTableFromJsonFile()
		{
			string sqlInsert = "INSERT INTO Walks(Id,Name,Description,LengthInKm,WalkImageUrl,DifficultyId,RegionId) values (@Id, @Name, @Description, @LengthInKm, @WalkImageUrl, @DifficultyId, @RegionId)";
			string JsonInput = "C:/Udemy/C#/Dominic Tripodi/My Applications/Testing/ReadSQLData/files/WalksBad.json";
			string WalksBadJson = File.ReadAllText(JsonInput);

			ILoggerFactory factory = new LoggerFactory();
			Mapper mapper = new Mapper(new MapperConfiguration((cfg) =>
			{
				cfg.CreateMap<WalksBad, Walks>()
					.ForMember(destination => destination.Id, options => options.MapFrom(source => source.idcode))
					.ForMember(destination => destination.Name, options => options.MapFrom(source => source.walkname))
					.ForMember(destination => destination.Description, options => options.MapFrom(source => source.walkdescription))
					.ForMember(destination => destination.LengthInKm, options => options.MapFrom(source => source.length))
					.ForMember(destination => destination.WalkImageUrl, options => options.MapFrom(source => source.walkUrl))
					.ForMember(destination => destination.DifficultyId, options => options.MapFrom(source => source.difficultyId))
					.ForMember(destination => destination.RegionId, options => options.MapFrom(source => source.regionId));
			}, factory = LoggerFactory.Create(builder => builder.GetType())));

			IEnumerable<WalksBad>? walksBad = JsonConvert.DeserializeObject<IEnumerable<WalksBad>>(WalksBadJson);

			if (walksBad != null)
			{
				IEnumerable<Walks> allWalks = mapper.Map<IEnumerable<Walks>>(walksBad);

				foreach (Walks Walks in allWalks)
				{
					if (Walks.Name == null) { Walks.Name = ""; }
					if (Walks.Description == null) { Walks.Description = ""; }
					if (Walks.WalkImageUrl == null) { Walks.WalkImageUrl = ""; }

					// Create our listing of potential SqlParameter.
					List<SqlParameter> sqlParameters = new List<SqlParameter>();

					// Create SqlParameter objects for each field.
					SqlParameter IdParameter = new SqlParameter("@Id", SqlDbType.UniqueIdentifier);
					SqlParameter NameParameter = new SqlParameter("@Name", SqlDbType.NVarChar);
					SqlParameter DescriptionParameter = new SqlParameter("@Description", SqlDbType.NVarChar);
					SqlParameter LengthInKmParameter = new SqlParameter("@LengthInKm", SqlDbType.Float);
					SqlParameter WalkImageUrlParameter = new SqlParameter("@WalkImageUrl", SqlDbType.NVarChar);
					SqlParameter DifficultyIdParameter = new SqlParameter("@DifficultyId", SqlDbType.UniqueIdentifier);
					SqlParameter RegionIdParameter = new SqlParameter("@RegionId", SqlDbType.UniqueIdentifier);

					// Assign values to each SqlParameter object
					IdParameter.Value = Walks.Id;
					NameParameter.Value = Walks.Name;
					DescriptionParameter.Value = Walks.Description;
					LengthInKmParameter.Value = Walks.LengthInKm;
					WalkImageUrlParameter.Value = Walks.WalkImageUrl;
					DifficultyIdParameter.Value = Walks.DifficultyId;
					RegionIdParameter.Value = Walks.RegionId;

					// Add parameters to paramater list
					sqlParameters.Add(IdParameter);
					sqlParameters.Add(NameParameter);
					sqlParameters.Add(DescriptionParameter);
					sqlParameters.Add(LengthInKmParameter);
					sqlParameters.Add(WalkImageUrlParameter);
					sqlParameters.Add(DifficultyIdParameter);
					sqlParameters.Add(RegionIdParameter);

					// Ship it off to SQL for processing.
					sql.InsertData(sqlInsert, sqlParameters);
				}
			}
		}
	}
}