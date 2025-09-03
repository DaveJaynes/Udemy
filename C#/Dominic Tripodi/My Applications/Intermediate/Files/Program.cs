using System.Text.Json;
using AutoMapper;
using Files.Data;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
namespace Files
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            IConfiguration config = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();
            DataContextDapper dapper = new DataContextDapper(config);

            ILoggerFactory factory = new LoggerFactory();
            Mapper mapper = new Mapper(new MapperConfiguration((cfg) =>
            {
                cfg.CreateMap<ComputerSnake, Computer>()
                    .ForMember(destination => destination.ComputerId, options =>
                        options.MapFrom(source => source.computer_id))
                    .ForMember(destination => destination.Motherboard, options =>
                        options.MapFrom(source => source.motherboard))
                    .ForMember(destination => destination.CPUCores, options =>
                        options.MapFrom(source => source.cpu_cores))
                    .ForMember(destination => destination.HasWifi, options =>
                        options.MapFrom(source => source.has_wifi))
                    .ForMember(destination => destination.HasLTE, options =>
                        options.MapFrom(source => source.has_lte))
                    .ForMember(destination => destination.ReleaseDate, options =>
                        options.MapFrom(source => source.release_date))
                    .ForMember(destination => destination.Price, options =>
                        options.MapFrom(source => source.price))
                    .ForMember(destination => destination.VideoCard, options =>
                        options.MapFrom(source => source.video_card));
            }, factory = LoggerFactory.Create(builder => builder.ToString())));



            string fileNameRead = "C:/Udemy/C#/Dominic Tripodi/JSON files/Computers.json";
            string computerCopyNewtonsoftFile = "C:/Udemy/C#/Dominic Tripodi/JSON files/ComputersNewtonsoft.json";
            string computerCopySystemFile = "C:/Udemy/C#/Dominic Tripodi/JSON files/ComputersSystem.json";

            string computersJson = File.ReadAllText(fileNameRead);

            //          Deserializing: Loading Json file information into INumerable objects
            //          --------------------------------------------------------------------

            //          Deserializing with Newtonsoft
            //          Note: No camel case conversion is necessary with Newtonsoft as this method is built into JsonConvert.
            IEnumerable<Computer>? computersNewtonsoft = JsonConvert.DeserializeObject<IEnumerable<Computer>>(computersJson);

            // Deserializing with System.
            // Here we need JsonSerializerOptions to convert the lower-case Json file keys to match the Pascal case object property names.
            JsonSerializerOptions option = new JsonSerializerOptions();
            option.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
            IEnumerable<Computer>? computersSystem = System.Text.Json.JsonSerializer.Deserialize<IEnumerable<Computer>>(computersJson, option);

            //          ====================================================================================================================================

            //          Serializing: Copying the IEnumerable objects into a Json file
            //          -------------------------------------------------------------
            //          Note: Both these methods below ensure that the output Json files have the fields declared in Camel Case format.

            //          Serializing with NewtonSoft
            JsonSerializerSettings settings = new JsonSerializerSettings();
            settings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            string computerCopyNewtonsoft = JsonConvert.SerializeObject(computersNewtonsoft, settings);
            File.WriteAllText(computerCopyNewtonsoftFile, computerCopyNewtonsoft);
            string text = File.ReadAllText(computerCopyNewtonsoftFile);
            text = text.Replace("},{", "},\n{");
            File.WriteAllText(computerCopyNewtonsoftFile, text);

            //          Serializing with System
            JsonSerializerOptions options = new JsonSerializerOptions();
            options.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
            string computerCopySystem = System.Text.Json.JsonSerializer.Serialize(computersSystem, options);
            File.WriteAllText(computerCopySystemFile, computerCopySystem);
            text = File.ReadAllText(computerCopySystemFile);
            text = text.Replace("},{", "},\n{");
            File.WriteAllText(computerCopySystemFile, text);
        }
    }
}