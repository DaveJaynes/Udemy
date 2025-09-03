using System;

namespace ReadSQLData
{
    class Program
    {
        static void Main()
        {
            string conn = "Server=DAVES_PC;Database=Udemy;TrustServerCertificate=true;Trusted_Connection=true";
			string createTableCmd = "create table MyTable(ID primary key identity(1,1), name nvarchar(100))";
            SQL sql = new SQL(conn);
			sql.CreateTable(createTableCmd);
        }
		
		
		/*
        private static void ReadOrderData(string connectionString)
        {
            string queryString = "SELECT UserId,FirstName,LastName,Email,Gender,Active FROM TutorialAppSchema.Users;";
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                SqlCommand command = new SqlCommand(queryString, connection);
                connection.Open();
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Console.WriteLine(String.Format("{0}, {1}, {2}, {3}, {4}, {5}",
                            reader[0], reader[1],reader[2], reader[3],reader[4], reader[5]));
                    }
                }
            }
        }
		*/
	}
}

