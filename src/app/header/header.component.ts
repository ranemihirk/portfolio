import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public href: string = "";
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.href = this.router.url;
  }

  scrollTo($sectionName: string) {
    console.log("this.href: ", this.href);
    Document.bind(document.getElementById($sectionName)?.scrollIntoView());
  }
}
