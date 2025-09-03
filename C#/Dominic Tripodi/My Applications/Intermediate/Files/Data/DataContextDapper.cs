using System.Data;
using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace Files.Data
{

    public class DataContextDapper
    {
        private IConfiguration _config;
        
        public DataContextDapper(IConfiguration config)
        {
            _config = config;
        }

        // Here we use Generics so it picks up whatever data type is passed.
        // In this case, the data type if the Computer class itself.
        public T LoadDataSingle<T>(string sqlSelect)
        {
            IDbConnection dbConnection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            return dbConnection.QuerySingle<T>(sqlSelect);
        }

        public IEnumerable<T> LoadData<T>(string sqlSelect)
        {
            IDbConnection dbConnection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            return dbConnection.Query<T>(sqlSelect);
        }

        public bool InsertRow(string sqlString)
        {
            IDbConnection dbConnection = new SqlConnection(_config.GetConnectionString("DefaultConnection"));
            return dbConnection.Execute(sqlString) > 0;
        }
    }
}
