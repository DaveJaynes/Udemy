using Computers.Models;
using Computers.Data;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
namespace Computers
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            IConfiguration config = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();
            Computer myComputer = new Computer();

            // Set up data context using Entity Framework
            DataContextEF entityFramework = new DataContextEF(config);

            // Entity Framework will use its connections information pass the SQL data back to IEnumerable.
            // No changes need to be made to the DataContextEF.cs file.
            IEnumerable<Computer> computers = entityFramework.computer.ToList<Computer>();
            
            foreach (Computer eachComputer in computers)
            {
                Console.WriteLine("Id: " + eachComputer.Id);
                Console.WriteLine("Motherboard: " + eachComputer.Motherboard);
                Console.WriteLine("HasWifi: " + eachComputer.HasWifi);
                Console.WriteLine("HasLTE: " + eachComputer.HasLTE);
                Console.WriteLine("ReleaseDate: " + eachComputer.ReleaseDate);
                Console.WriteLine("Price: " + eachComputer.Price);
                Console.WriteLine("VideoCard: " + eachComputer.VideoCard);
                Console.WriteLine("-------------------------------------------------------");
            }
        }
    }
}