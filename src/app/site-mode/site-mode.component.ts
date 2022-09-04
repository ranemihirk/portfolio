import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-mode',
  templateUrl: './site-mode.component.html',
  styleUrls: ['./site-mode.component.css']
})
export class SiteModeComponent implements OnInit {
	color = "primary";
	checked = false;
	disabled = false;
  constructor() { }

  ngOnInit(): void {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-theme');
		this.checked = true;
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      document.body.classList.toggle('dark-theme');
	  this.checked = true;
    });
  }
  modeChange(){
	document.body.classList.toggle('dark-theme');
  }
}
