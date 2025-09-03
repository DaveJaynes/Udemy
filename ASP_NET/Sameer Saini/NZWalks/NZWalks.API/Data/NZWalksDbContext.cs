using Microsoft.EntityFrameworkCore;
using NZWalks.API.Models.Domain;
using System.Text.Json;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;


namespace NZWalks.API.Data
{
    public class NZWalksDbContext : DbContext
    {
        private readonly JsonSerializerOptions option = new JsonSerializerOptions();
        
        public NZWalksDbContext(DbContextOptions<NZWalksDbContext> dbContextOptions) : base(dbContextOptions)
        {

        }
        public DbSet<ActiveTable> ActiveTables { get; set; }
        public DbSet<Difficulty> Difficulties { get; set; }
        public DbSet<Region> Regions { get; set; }
        public DbSet<Walk> Walks { get; set; }
        public DbSet<Image> Images { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            option.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;

            // Import ActiveTable data
            string activeTablesJsonFile = "C:/Udemy/ASP_NET/Sameer Saini/Json/ActiveTable.json";
            string activeTablesJson = File.ReadAllText(activeTablesJsonFile);
            IEnumerable<ActiveTable> activeTables = System.Text.Json.JsonSerializer.Deserialize<IEnumerable<ActiveTable>>(activeTablesJson, option);
            modelBuilder.Entity<ActiveTable>().HasData(activeTables);

            // Import Difficulties data
            string difficultiesJsonFile = "C:/Udemy/ASP_NET/Sameer Saini/Json/DifficultiesJsonFile.json";
            string difficultiesJson = File.ReadAllText(difficultiesJsonFile);
            IEnumerable<Difficulty> difficulties = System.Text.Json.JsonSerializer.Deserialize<IEnumerable<Difficulty>>(difficultiesJson, option);
            modelBuilder.Entity<Difficulty>().HasData(difficulties);

            // Import Regions data
            string regionsJsonFile = "C:/Udemy/ASP_NET/Sameer Saini/Json/RegionsJsonFile.json";
            string regionsJson = File.ReadAllText(regionsJsonFile);
            IEnumerable<Region> regions = System.Text.Json.JsonSerializer.Deserialize<IEnumerable<Region>>(regionsJson, option);
            modelBuilder.Entity<Region>().HasData(regions);

            // Import Walks data
            string walksJsonFile = "C:/Udemy/ASP_NET/Sameer Saini/Json/WalksJsonFile.json";
            string walksJson = File.ReadAllText(walksJsonFile);
            IEnumerable<Walk> walks = System.Text.Json.JsonSerializer.Deserialize<IEnumerable<Walk>>(walksJson, option);
            modelBuilder.Entity<Walk>().HasData(walks);

        }
    }
}
