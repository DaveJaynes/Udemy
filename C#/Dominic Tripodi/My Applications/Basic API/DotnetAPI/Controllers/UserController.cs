using DotnetAPI.Data;
using DotnetAPI.Dtos;
using DotnetAPI.Model;
using DotnetAPI.ConnectStrings;
using Microsoft.AspNetCore.Mvc;

namespace DotnetAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    DataContextDapper _dapper;

    // Without the builder statement in Program.cs file, we would need to ussue this command to get the config.
    // IConfiguration config = new ConfigurationBuilder().AddJsonFile("appSettings.json").Build();

    // It is Program.cs and more specifically the var builder that does this automatically for us now.

    public UserController(IConfiguration config)
    {
        _dapper = new DataContextDapper(config);
    }

    [HttpGet("GetUsers")]
    public IEnumerable<User> GetUsers()
    {
        IEnumerable<User> users = _dapper.LoadData<User>(QS.QueryUser());
        return users;
    }

    [HttpGet("GetSingleUser/{userId}")]
    public User GetSingleUser(int userId)
    {
        User user = _dapper.LoadDataSingle<User>(QS.QuerySingleUser() + userId.ToString());
        return user;
    }

    [HttpPut]
    public IActionResult EditUser(User user)
    {
        string sql = QS.UpdateUserSQL(user.UserId, user.FirstName, user.LastName, user.EMail, user.Gender, user.Active);
        if (_dapper.Execute(sql))
            return Ok();
        throw new Exception("Failed to update query.");
    }

    [HttpPost]
    public IActionResult AddUser(UserToAddDto user)
    {
        string sql = QS.InsertUserSQL(user.FirstName, user.LastName, user.EMail, user.Gender, user.Active);
        if (_dapper.Execute(sql))
            return Ok();
        throw new Exception("Failed to insert new row.");
    }

    [HttpDelete("DeleteUser/{userId}")]
    public IActionResult DeleteUser(int userId)
    {
        string sql = QS.CountRecords() + userId.ToString();
        Console.WriteLine("sql = [" + sql + "]");
        if (_dapper.Execute(sql))
        {
            sql = QS.DeleteUser() + userId.ToString();

            if (_dapper.Execute(sql))
                return Ok();
            throw new Exception("Failed to delete user.");
        }
        else
        {
            return NotFound();
        }
    }
}
