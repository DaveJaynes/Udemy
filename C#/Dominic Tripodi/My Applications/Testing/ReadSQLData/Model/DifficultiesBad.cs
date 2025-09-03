namespace DotnetAPI.Model
{
    public partial class DifficultiesBad
    {
        public Guid idcode { get; set; }
        public string difficultylevel { get; set; }

        public DifficultiesBad()
        {
            if (difficultylevel == null) { difficultylevel = ""; }
        }
    }
}