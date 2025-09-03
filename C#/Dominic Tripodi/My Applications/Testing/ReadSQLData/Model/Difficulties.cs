namespace DotnetAPI.Model
{
    public partial class Difficulties
    {
        public Guid Id { get; set; }
        public string Name { get; set; }

        public Difficulties()
        {
            if (Name == null) { Name = ""; }
        }
    }
}