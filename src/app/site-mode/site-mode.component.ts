import { Component, OnInit } from '@angular/core';
import screenfull from 'screenfull';

@Component({
	selector: 'app-site-mode',
	templateUrl: './site-mode.component.html',
	styleUrls: ['./site-mode.component.css']
})
export class SiteModeComponent implements OnInit {
	color = "primary";
	checked = false;
	disabled = false;
	elem: any;
	isFullscreen: boolean = false;
	fullscreenMode: HTMLElement = (document.getElementById('fullscreen-mode') as HTMLElement);
	lastClick: any = 0;

	constructor() { }

	ngOnInit(): void {
		this.elem = document.documentElement;
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.body.classList.add('dark-theme');
			this.checked = true;
		}

		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
			document.body.classList.toggle('dark-theme');
			this.checked = true;
		});

		document.addEventListener("pointerup", this.onStart);
	}
	modeChange() {
		document.body.classList.toggle('dark-theme');
	}

	openFullscreen() {
		console.log("openFullscreen");
		this.fullscreenMode.classList.add('active');
		if (screenfull.isEnabled) {
			screenfull.request();
		}
	}

	closeFullscreen() {
		console.log("closeFullscreen");
		// this.fullscreenMode.classList.remove('active');
		if (screenfull.isEnabled) {
			screenfull.toggle();
		}
	}

	onStart() {
		let time = (new Date()).getTime();
		if ((time - this.lastClick) < 350) {
			if (screenfull.isEnabled) {
				screenfull.toggle();
			}
		}
		this.lastClick = time;
	}
}
