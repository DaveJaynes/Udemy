using Computers.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Computers.Data
{

    public class DataContextEF : DbContext
    {
        private IConfiguration _config;
        public DataContextEF(IConfiguration config)
        {
            _config = config;
        }
        public DbSet<Computer>? computer { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // When the DataContextEF class is created, we check to see if it has been configured. if not, we configure it.
            if (!options.IsConfigured)
            {
                options.UseSqlServer(_config.GetConnectionString("DefaultConnection"), options => options.EnableRetryOnFailure());
            }
        }
        // ModelBuilder maps an actual model to a table
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Set our Schema name
            modelBuilder.HasDefaultSchema("TutorialAppSchema");

            // Map the entity directly to the 'Computer' table within the 'TutorialAppSchema' schema.
            modelBuilder.Entity<Computer>()
            .HasKey(c => c.Id);
    
            /*
            Note: If you are using a table in another schema other than the one set as default,
            you will need to use this code instead:
            modelBuilder.Entity<Computer>().ToTable("TableName","SchemaName");
            */
        }
    }
}