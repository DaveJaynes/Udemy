namespace DotnetAPI.Model
{
    public partial class WalksBad
    {
        public Guid idcode { get; set; }
        public string walkname { get; set; }
        public string walkdescription { get; set; }
		public double length { get; set; }
        public string walkUrl { get; set; }
		public Guid difficultyId { get; set; }
		public Guid regionId { get; set; }

        public WalksBad()
        {
            if (walkname == null) { walkname = ""; }
			if (walkdescription == null) { walkdescription = ""; }
			if (walkUrl == null) { walkUrl = ""; }
        }
    }
}