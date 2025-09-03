namespace DotnetAPI.Model
{
    public partial class Regions
    {
        public Guid Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string RegionImageUrl { get; set; }

        public Regions()
        {
            if (Code == null) { Code = ""; }
			if (Name == null) { Name = ""; }
			if (RegionImageUrl == null) { RegionImageUrl = ""; }
        }
    }
}