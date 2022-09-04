import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from "@angular/platform-browser";


@Component({
	selector: 'app-time',
	templateUrl: './time.component.html',
	styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

	constructor(private router: Router, private titleService: Title) {
		this.titleService.setTitle("World Time");
	}

	ngOnInit(): void {
		let updateClock = function () {
			let now = new Date(), // current date
				time = (now.getHours() < 10 ? '0' : '') + now.getHours() + ' : ' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes() + ' : ' + (now.getSeconds() < 10 ? '0' : '') + now.getSeconds(), // again, you get the idea
				dd = String(now.getDate()).padStart(2, '0'),
				mm = now.getMonth(), // String(now.getMonth() + 1).padStart(2, '0'), //January is 0!
				yyyy = now.getFullYear(),
				timeElement = (document.getElementById('currentTime') as HTMLElement),
				dateElement = (document.getElementById('currentDate') as HTMLElement),
				days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

			// set the content of the element with the ID time to the formatted string
			dateElement.innerHTML = days[now.getDay()] + ', ' + dd + ' ' + months[mm] + ', ' + yyyy;
			timeElement.innerHTML = time;

			// call this function again in 1000ms
			setTimeout(updateClock, 1000);
		}

		updateClock(); // initial call
		this.worldClockStructure();
	}



	fullScreen() {
		let elem = document.documentElement;
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		}
	}

	worldClockStructure() {
		const data = [
			{
				country: "NEW YORK",
				timeZone: "America/New_York",
				id: "ny"
			},
			{
				country: "LONDON",
				timeZone: "Europe/London",
				id: "ldn"
			},
			{
				country: "BANGKOK",
				timeZone: "Asia/Bangkok",
				id: "bkk"
			},
			{
				country: "TAIWAN",
				timeZone: "Asia/Taipei",
				id: "tpe"
			},
			{
				country: "SYDNEY",
				timeZone: "Australia/Sydney",
				id: "syd"
			}
		];
		let worlClockHTMLStruct = (document.getElementById('worldClockDiv') as HTMLElement);

		[...data].forEach(element => {
			let current = `<div class="global-time">
					  <h3 id="${element.id}">19 : 00</h3>
					  <h5>${element.timeZone}</h5>
					  <p>${element.country}</p>
					</div>`;
			worlClockHTMLStruct.innerHTML += current;

			let updateCurrentCityClock = function () {
				let now = new Date(), // current date
					timeElement = (document.getElementById(element.id) as HTMLElement),
					currentTime = now.toLocaleString(undefined, { timeZone: element.timeZone, hourCycle: "h24", hour: "2-digit", minute: "2-digit" });
				timeElement.innerHTML = currentTime;

				// call this function again in 1000ms
				setTimeout(updateCurrentCityClock, 1000);
			}

			updateCurrentCityClock(); // initial call
		})
	}

}
