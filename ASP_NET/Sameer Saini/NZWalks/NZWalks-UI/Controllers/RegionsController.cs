using System.Text;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using NZWalks_UI.Models;
using NZWalks_UI.Models.DTO;
using NZWalks.UI.Models;

namespace NZWalks_UI.Controllers
{
    public class RegionsController : Controller
    {
        private readonly IHttpClientFactory httpClientFactory;

        public RegionsController(IHttpClientFactory httpClientFactory)
        {
            this.httpClientFactory = httpClientFactory;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            List<RegionDto> response = new List<RegionDto>();
            try
            {
                // Get all Regions from Web API
                var client = httpClientFactory.CreateClient();

                // Call the Regions controller in the API. Get this URL (https://localhost:7257) from appsettings.json in the API.
                HttpResponseMessage httpResponseMessage = await client.GetAsync("https://localhost:7257/api/regions?sortBy=Name");

                // If the request to the API is not successful, this line will throw an exception
                httpResponseMessage.EnsureSuccessStatusCode();

                response.AddRange(await httpResponseMessage.Content.ReadFromJsonAsync<IEnumerable<RegionDto>>());

                // ViewBag is just a utility to show the raw data. It will only show the Json data.
                // We will need to build additional code to nicely format the data.

                // return Ok(httpResponseMessage);
            }
            catch (Exception ex)
            {
                // Log the exception
            }

            return View(response);
        }

        [HttpGet]
        public IActionResult Add()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Add(AddRegionViewModel model)
        {
            var client = httpClientFactory.CreateClient();

            var httpRequestMessage = new HttpRequestMessage()
            {
                Method = HttpMethod.Post,
                RequestUri = new Uri("https://localhost:7257/api/regions"),
                Content = new StringContent(JsonSerializer.Serialize(model), Encoding.UTF8, "application/json")
            };

            HttpResponseMessage httpResponseMessage = await client.SendAsync(httpRequestMessage);
            httpResponseMessage.EnsureSuccessStatusCode();

            RegionDto response = await httpResponseMessage.Content.ReadFromJsonAsync<RegionDto>(); 

            if (response is not null)
            {
                // This line sends the Json response from the API to the Index method so it can be displayed on the screen.
                return RedirectToAction("Index", "Regions");
            }

            return View();
        }
    }
}
