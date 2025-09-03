namespace DotnetAPI.Model
{
    public partial class Walks
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
		public double LengthInKm { get; set; }
        public string WalkImageUrl { get; set; }
		public Guid DifficultyId { get; set; }
		public Guid RegionId { get; set; }
		
		// Navigation properties
		public Difficulties? Difficulties { get; set; }
		public Regions? Regions { get; set; }

        public Walks()
        {
            if (Name == null) { Name = ""; }
			if (Description == null) { Description = ""; }
			if (WalkImageUrl == null) { WalkImageUrl = ""; }
        }
    }
}