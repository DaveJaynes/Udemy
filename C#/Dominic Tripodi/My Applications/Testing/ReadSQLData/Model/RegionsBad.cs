namespace DotnetAPI.Model
{
    public partial class RegionsBad
    {
        public Guid idcode { get; set; }
        public string codenum { get; set; }
        public string locationname { get; set; }
        public string regionUrl { get; set; }

        public RegionsBad()
        {
            if (codenum == null) { codenum = ""; }
			if (locationname == null) { locationname = ""; }
			if (regionUrl == null) { regionUrl = ""; }
        }
    }
}