using System.Data;
using AutoMapper.Internal.Mappers;
using DotnetAPI.Model;
using Microsoft.Data.SqlClient;

#pragma warning disable CS8600
#pragma warning disable CS8604

namespace ReadSQLData
{
	public class SQL
	{
		private string _cs;

		public SQL(string conn)
		{
			_cs = conn;
		}

		public void Tables(string sql)
		{
			using (SqlConnection connection = new SqlConnection(_cs))
			{
				SqlCommand command = new SqlCommand(sql, connection);
				connection.Open();
				int returnValue = command.ExecuteNonQuery();
				connection.Close();
			}
		}

		public void InsertData(string sql, List<SqlParameter> sqlParameters)
		{
			using (SqlConnection connection = new SqlConnection(_cs))
			{
				SqlCommand command = new SqlCommand(sql, connection);
				foreach (SqlParameter sqlParameter in sqlParameters)
				{
					command.Parameters.Add(sqlParameter);
				}
				connection.Open();
				try { int rowsAffected = command.ExecuteNonQuery(); } catch (Exception e) { Console.WriteLine(e.Message + "\n"); }
				connection.Close();
			}
		}

		public void RetrieveWalksData(string sqlCommand, List<Walks> allwalks)
		{
			using (SqlConnection connection = new SqlConnection(_cs))
			{
				// Instantiate the SQLCommand object
				SqlCommand command = new SqlCommand(sqlCommand, connection);

				// Open the database connection.
				connection.Open();

				// Store all retrieved rows in reader.
				using (SqlDataReader reader = command.ExecuteReader())
				{
					while (reader.Read())
					{
						Guid Id = reader.GetGuid(0);
						string Name = reader.GetString(1);
						string Description = reader.GetString(2);
						double LengthInKm = reader.GetDouble(3);
						string WalkImageUrl = reader.GetString(4);
						Guid DifficultyId = reader.GetGuid(5);
						Guid RegionId = reader.GetGuid(6);
						Walks walks = new Walks()
						{
							Id = Id,
							Name = Name,
							Description = Description,
							LengthInKm = LengthInKm,
							WalkImageUrl = WalkImageUrl,
							DifficultyId = DifficultyId,
							RegionId = RegionId
						};
						allwalks.Add(walks);
					}
				}
			}
		}

		public void EmptyTable(string tableName)
		{
			using (SqlConnection connection = new SqlConnection(_cs))
			{
				string sql = "delete from " + tableName;
				SqlCommand command = new SqlCommand(sql, connection);
				connection.Open();
				try { int rowsAffected = command.ExecuteNonQuery(); } catch (Exception e) { Console.WriteLine(e.Message + "\n"); }
				connection.Close();
			}
		}
		
		public void DropTable(string tableName)
		{
			using (SqlConnection connection = new SqlConnection(_cs))
			{
				string sql = "IF EXISTS(SELECT * FROM sys.tables WHERE SCHEMA_NAME(schema_id) LIKE 'dbo' AND name like '" + tableName + "') DROP TABLE [dbo].[" + tableName + "]";
				SqlCommand command = new SqlCommand(sql, connection);
				connection.Open();
				try { int rowsAffected = command.ExecuteNonQuery(); } catch (Exception e) { Console.WriteLine(e.Message + "\n"); }
				connection.Close();
			}
		}
		
		public void RecreateTable(string sql)
		{
			using (SqlConnection connection = new SqlConnection(_cs))
			{
				SqlCommand command = new SqlCommand(sql, connection);
				connection.Open();
				try { int rowsAffected = command.ExecuteNonQuery(); } catch (Exception e) { Console.WriteLine(e.Message + "\n"); }
				connection.Close();
			}
		}

		public void ReadOrderData()
		{
			string queryString = "SELECT UserId,FirstName,LastName,Email,Gender,Active FROM dbo.Users;";
			using (SqlConnection connection = new SqlConnection(_cs))
			{
				SqlCommand command = new SqlCommand(queryString, connection);
				connection.Open();
				using (SqlDataReader reader = command.ExecuteReader())
				{
					while (reader.Read())
					{
						Console.WriteLine(String.Format("{0}, {1}, {2}, {3}, {4}, {5}",
							reader[0], reader[1], reader[2], reader[3], reader[4], reader[5]));
					}
				}
			}
		}
	}
}
