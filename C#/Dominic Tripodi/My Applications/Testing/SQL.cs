using System;
using System.Data;
using Microsoft.Data.SqlClient;

namespace ReadSQLData
{
    public class SQL
    {
		private string _cs;
		
		public SQL(string conn)
		{
			_cs = conn;
		}
		
        public void CreateTable(string sql)
        {
			SQLCommand createTable = new SQLCommand(sql);
            SqlConnection dbConnection = new SqlConnection(_cs);
			dbConnection.Open();
			createTable.Connection = dbConnection;
            int returnValue = createTable.ExecuteNonQuery();
			Console.WriteLine("Return value = " + returnValue);
            dbConnection.Close();
        }
	}
}