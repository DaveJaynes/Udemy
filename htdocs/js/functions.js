/*
  JavaScript Name: functions.js
     Date Written: June 5th, 2025
       Written By: Dave Jaynes
          Purpose: This file holds all the variables and functions for the Wine Production webpage.
*/

/* Variable declaration area
   ------------------------- */
const WalksAPIDataPHP = "http://daves_pc/php/WalksAPIData.php";
const DisplayImagePHP = "http://daves_pc/php/DisplayImage.php";
const InitiateActiveTablePHP = "http://daves_pc/php/InitiateActiveTable.php";
const FindActiveControllerPHP = "http://daves_pc/php/FindActiveController.php";

/* Function declaration area
   ------------------------- */
class Human {
	gender = 'Male';
	printGender = () => {
		console.log(this.gender);
	}
}

class Person extends Human {
	constructor(Name) {
		super();
		if(typeof Name === "undefined") { this.name = 'Nothing'; } else { this.name = 'Dave' + ' ' + Name; }
	}
	printMyName() {
		console.log(this.name);
	}
}

const InitiateActiveTable = (Name) => {
	const person = new Person(Name);
	person.printGender();
	person.printMyName();
	let param = 'Name=' + Name;
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const result = request.responseText;
		}
	});
	request.open("POST", InitiateActiveTablePHP, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send(param);
}

const SetRadioButtons = () => {
	FindActiveController(FindActiveControllerPHP,function(Controller)
	{
		Controller = Controller.trim();
		if(Controller == "Walks") 
		{ 
			document.getElementById("ControllerWalks").checked = true;
			document.getElementById("ControllerRegions").checked = false;
		}
		else
		{ 
			document.getElementById("ControllerWalks").checked = false;
			document.getElementById("ControllerRegions").checked = true;
		}
	});
}

const FindActiveController = (FindActiveControllerPHP,returnActiveController) => {
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			returnActiveController(request.responseText);
		}
	});
	request.open("GET", FindActiveControllerPHP, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send();
}

const DisplayImage = () => {
	let Url = "http://daves_pc/Pictures/Bubbles.jpg";
	let param = 'Url=' + Url;
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const WalksAPIData = request.responseText;
			document.getElementById('WalksAPIData').innerHTML = WalksAPIData;
		}
	});
	request.open("POST", DisplayImagePHP, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send(param);
}

const WalksAPIData = (Controller,Command) => {
	// Adding scope
	var Id = "";
	if(Command == "Update" || Command == "Delete") { Id = document.getElementById('Id'); }
	let params = 'Controller=' + Controller + '&Command=' + Command + '&Id=' + Id;
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const WalksAPIData = request.responseText;
			document.getElementById('WalksAPIData').innerHTML = WalksAPIData;
		}
	});
	request.open("POST", WalksAPIDataPHP, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send(params);
}

const GetAll = (Controller) => {
	// Adding scope
	var Command = "GetAll";
	let params = 'Controller=' + Controller + '&Command=' + Command;
	const request = new XMLHttpRequest();
	request.addEventListener('readystatechange', () => {
		if(request.readyState === 4 && request.status === 200) {
			const WalksAPIData = request.responseText;
			document.getElementById('WalksAPIData').innerHTML = WalksAPIData;
		}
	});
	request.open("POST", WalksAPIDataPHP, true);
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	request.send(params);
}

const Create = (Command) => {
	// Adding scope
	FindActiveController(FindActiveControllerPHP,function(Controller)
	{
		Controller = Controller.trim();
		if(Controller != "undefined")
		{
			let params = 'Controller=' + Controller + '&Command=' + Command;
			const request = new XMLHttpRequest();
			request.addEventListener('readystatechange', () => {
				if(request.readyState === 4 && request.status === 200) {
					const WalksAPIData = request.responseText;
					document.getElementById('WalksAPIData').innerHTML = WalksAPIData;
				}
			});
			request.open("POST", WalksAPIDataPHP, true);
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			request.send(params);
		}
	});
}

const Update = (Id) => {
	FindActiveController(FindActiveControllerPHP,function(Controller)
	{
		Controller = Controller.trim();
		// Adding scope
		var Command = document.getElementById('Command');
		Command = Command.value;
		let params = 'Controller=' + Controller + '&Command=' + Command + '&Id=' + Id;
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const WalksAPIData = request.responseText;
				document.getElementById('WalksAPIData').innerHTML = WalksAPIData;
			}
		});
		request.open("POST", WalksAPIDataPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(params);
	});
}

const Delete = (Id) => {
	FindActiveController(FindActiveControllerPHP,function(Controller)
	{
		Controller = Controller.trim();
		Command = Controller + "Delete";
		let params = 'Controller=' + Controller + '&Command=' + Command + '&Id=' + Id;;
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if(request.readyState === 4 && request.status === 200) {
				const WalksAPIData = request.responseText;
				document.getElementById('WalksAPIData').innerHTML = WalksAPIData;
			}
		});
		request.open("POST", WalksAPIDataPHP, true);
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.send(params);
	});
}
