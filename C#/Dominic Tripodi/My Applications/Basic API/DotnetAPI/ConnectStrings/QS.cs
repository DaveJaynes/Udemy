namespace DotnetAPI.ConnectStrings
{
    public class QS
    {
        private static string CountRecordsString = "select * from TutorialAppSchema.Users where UserId = ";
        private static string DeleteUserString = "delete from TutorialAppSchema.Users where UserId = ";
        private static string QueryUserString = "select UserId,FirstName,LastName,Email,Gender,Active from TutorialAppSchema.Users";
        private static string QuerySingleUserString = "select UserId,FirstName,LastName,Email,Gender,Active from TutorialAppSchema.Users where UserId = ";

        private static string QueryAllActiveRecordsString = "select u.UserId,u.FirstName,u.LastName,u.Email,u.Active,j.Department,j.JobTitle,s.Salary,s.AvgSalary from TutorialAppSchema.Users u left join TutorialAppSchema.UserJobInfo j on u.UserId = j.UserId left join TutorialAppSchema.UserSalary s on u.UserId = s.UserId where active = 1";
        private static string QueryAllInActiveRecordsString = "select u.UserId,u.FirstName,u.LastName,u.Email,u.Active,j.Department,j.JobTitle,s.Salary,s.AvgSalary from TutorialAppSchema.Users u left join TutorialAppSchema.UserJobInfo j on u.UserId = j.UserId left join TutorialAppSchema.UserSalary s on u.UserId = s.UserId where active = 0";

        public static string CountRecords()
        {
            return CountRecordsString;
        }
        public static string DeleteUser()
        {
            return DeleteUserString;
        }
        public static string QueryUser()
        {
            return QueryUserString;
        }
        public static string QuerySingleUser()
        {
            return QuerySingleUserString;
        }

        public static string QueryAllActiveRecords()
        {
            return QueryAllActiveRecordsString;
        }

        public static string QueryAllInActiveRecords()
        {
            return QueryAllInActiveRecordsString;
        }

        public static string UpdateUserSQL(int userId, string firstName, string lastName, string email, string gender, bool active)
        {
            return "update TutorialAppSchema.Users set [FirstName] = '" + firstName + "',[LastName] = '" + lastName + "',[Email] = '" + email + "',[Gender] = '" + gender + "',[Active] = '" + active + "' where [UserId] = '" + userId + "'";
        }

        public static string InsertUserSQL(string firstName, string lastName, string email, string gender, bool active)
        {
            return "insert into TutorialAppSchema.Users(FirstName,LastName,Email,Gender,Active) values ('" + firstName + "','" + lastName + "','" + email + "','" + gender + "','" + active + "')";
        }
    }
}