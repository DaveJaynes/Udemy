/*
  JavaScript Name: functions.js
     Date Written: June 5th, 2025
       Written By: Dave Jaynes
          Purpose: This file holds all the variables and functions for the Wine Production webpage.
*/

/* Variable declaration area
   ------------------------- */
const GetWineDataPHP = "../php/GetWineData.php";
const WineDisplayPHP = "../php/WineDisplay.php";
const CheckWineDataPHP = "../php/CheckWineData.php";
const Color = 'Color'
const Pct = 'Pct'
const Country = 'Country'

/* Function declaration area
   ------------------------- */
   
// Pulls HTML code to be displayed in web page.
const WineDisplay = () => {
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			document.getElementById('WineDisplay').innerHTML = str;
		}
	});
	request.open("GET", WineDisplayPHP, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

// Checks to see if any data has been updated. Returns Yes or No.
const CheckWineData = (returnWineData) => {
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			returnWineData(str);
		}
	});
	request.open("Get", CheckWineDataPHP, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();	
}

// Multi-purpose function to retrieve chart details.
const GetWineData = (Item,returnWineData) => {
	let param = 'Item=' + Item;
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const str = request.responseText;
			const obj = JSON.parse(str);
			returnWineData(obj);
		}
	});
	request.open("Post", GetWineDataPHP, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send(param);	
}

// Pulls all database info to build bar chart.
const BuildBarChartOptions = (returnoptions) => {
	GetWineData(Country,function(xValues)
	{
		GetWineData(Pct,function(yValues)
		{
			GetWineData(Color,function(barColors)
			{
				var options = {
					type: "bar",
					data: {
						labels: xValues,
						datasets: [{
							backgroundColor: barColors,
							data: yValues
						}]
					},
					options: {
						legend: {display: false},
						scales: {
							yAxes: [{
								ticks: {
									beginAtZero: true
								}
							}]
						},
						interaction: { mode: 'none' },
						title: {
							display: true,
							family: 'Times New Roman',
							font: {
								weight: 'Bold',
								size: 50
							},
							interaction: { mode: 'none' },
							text: "Bar Chart of volume distributed during 2018"
						}
					}					
				}
				return returnoptions(options);
			});
		});
	});
}

// Pulls all database info to build line chart.
const BuildLineChartOptions = (returnoptions) => {
	GetWineData(Country,function(xValues)
	{
		GetWineData(Pct,function(yValues)
		{
			var options = {
				type: "line",
				data: {
					labels: xValues,
					datasets: [{
						backgroundColor: "rgba(0,0,255,1.0)",
						borderColor: "rgba(0,0,255,0.1)",
						data: yValues,
						fill: false
					}]
				},
				options: {
					legend: {display: false},
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true
							}
						}]
					},
					title: {
						display: true,
						family: 'Times New Roman',
						font: {
							weight: 'Bold',
							size: 50
						},
						interaction: { mode: 'none' },
						text: "Line Chart of volume distributed during 2018"
					}
				}
			}
			return returnoptions(options);
		});
	});
}

// Instantiates both the bar and line charts
const BuildCharts = () => {
	BuildBarChartOptions(function(BarChartOptions)
	{
		BuildLineChartOptions(function(LineChartOptions)
		{
			var barchart = new Chart("BarChart", BarChartOptions);
			var linechart = new Chart("LineChart", LineChartOptions);
			var int = self.setInterval(function ()
			{
				CheckWineData(function(CheckWine)
				{
					if(CheckWine == "Yes")
					{
						barchart.destroy();
						linechart.destroy();
						BuildCharts();
					}
				});
			}, 500);
		});
	});	
}
