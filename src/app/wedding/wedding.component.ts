import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { animate, scroll } from 'motion';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css'],
})
export class WeddingComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) {
    this.titleService.setTitle('Shivani - Mihir');
  }

  ngOnInit(): void {
    // Progress bar representing gallery scroll
    scroll(animate('.progress', { scaleX: [0, 1] }, { ease: 'linear' }));

    // document.querySelectorAll("section").forEach((section) => {
    //   const header = section.querySelector("h2");
    //   scroll(animate(header, { y: [-400, 400] }, { ease: "linear" }), {
    //     target: header,
    //   });
    // });
  }
}
