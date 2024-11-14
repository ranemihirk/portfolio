import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css'],
})
export class WeddingComponent implements OnInit {
  constructor(
    private router: Router,
    private titleService: Title,
  ) {
    this.titleService.setTitle('Shivani - Mihir');
  }

  ngOnInit(): void {
	
  }
}
