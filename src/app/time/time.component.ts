import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    let offset = new Date();
    let timeElement = document.getElementById("currentTime");
    console.log("offset: ", offset, offset.getTimezoneOffset());
    console.log("timeElement: ", timeElement);
    // timeElement.innerText = 'Hey';
    // document.getElementById("currentTime").innerHTML = "yourTextHere";
  }

}
