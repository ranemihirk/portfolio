import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animate, scroll } from 'motion';
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
    scroll(animate('.progress', 
      { height: ['0%', '100%'] }, 
      { ease: 'linear' }
    ));
  }

  scrollTo($sectionName: string) {
    console.log("this.href: ", this.href);
    Document.bind(document.getElementById($sectionName)?.scrollIntoView());
  }
}
