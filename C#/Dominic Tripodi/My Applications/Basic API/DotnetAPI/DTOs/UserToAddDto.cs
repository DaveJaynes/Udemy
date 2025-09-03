namespace DotnetAPI.Dtos
{
    public partial class UserToAddDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EMail { get; set; }
        public string Gender { get; set; }
        public bool Active { get; set; }

        public UserToAddDto()
        {
            if (FirstName == null) { FirstName = ""; }
            if (LastName == null) { LastName = ""; }
            if (EMail == null) { EMail = ""; } 
            if (Gender == null) { Gender = ""; } 
        }
    }
}