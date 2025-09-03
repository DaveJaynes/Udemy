using FilesToSQL.Data;
using FilesToSQL.Model;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace FilesToSQL
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            IConfiguration config = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();
            DataContextDapper dapper = new DataContextDapper(config);
            string computerSnakeFile = "C:/Udemy/C#/Dominic Tripodi/JSON files/ComputersSnake.json";
            string computersSnake = File.ReadAllText(computerSnakeFile);


            // Writing data to SQL and Json file
            string ComputersFile = "C:/Udemy/C#/Dominic Tripodi/JSON files/Computers.json";
            string sqlread1 = @"select c.ComputerId as Id,c.Motherboard as Motherboard,c.HasWifi as HasWifi,c.HasLTE as HasLTE,c.ReleaseDate as ReleaseDate,
            cs.Price as Price,c.VideoCard as VideoCard from TutorialAppSchema.Computers c
            inner join TutorialAppSchema.ComputersSnake cs on c.Motherboard = cs.Motherboard 
            where c.motherboard = cs.motherboard
            group by c.ComputerId,c.Motherboard,c.HasWifi,c.HasLTE,c.ReleaseDate,cs.Price,c.VideoCard
            order by c.ComputerId";

            string sqlread2 = "select ComputerId,Motherboard,HasWifi,HasLTE,ReleaseDate,Price,VideoCard from TutorialAppSchema.ComputersSnake";

            string truncateComputer = "truncate table TutorialAppSchema.Computer";

            // Load the Computer table
            dapper.ExecuteNonQuery(truncateComputer);
            IEnumerable<Computer>? computerData1 = dapper.LoadData<Computer>(sqlread1);
            int newRowId = 0;
            foreach (Computer computer in computerData1)
            {
                newRowId++;
                string sql = @"INSERT INTO TutorialAppSchema.Computer (ComputerId,Motherboard,HasWifi,HasLTE,ReleaseDate,Price,VideoCard) values('"
                                    + newRowId + "','" + computer.Motherboard + "','" + computer.HasWifi + "','" + computer.HasLTE + "','"
                                    + computer.ReleaseDate + "','" + computer.Price + "','" + computer.VideoCard.Replace("'","''") + "')";
                dapper.InsertRow(sql);
            }

            // Recreate the Json file in correct format
            IEnumerable<Computer>? computerData2 = dapper.LoadData<Computer>(sqlread2);
            foreach (Computer computer in computerData2)
            {
                JsonSerializerSettings settings = new JsonSerializerSettings();
                settings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                string computerCopyNewtonsoft = JsonConvert.SerializeObject(computerData2, settings);
                File.WriteAllText(ComputersFile, computerCopyNewtonsoft);
                string text = File.ReadAllText(ComputersFile);
                text = text.Replace("},{", "},\n{");
                File.WriteAllText(ComputersFile, text);
            }
        }
    }
}
