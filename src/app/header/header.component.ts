import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  scrollTo($sectionName: string) {
    Document.bind(document.getElementById($sectionName)?.scrollIntoView());
  }
}
