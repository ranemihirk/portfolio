import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects = [
    {
      img: '../../assets/images/todo.png',
      url: 'https://todo-list-ranemihirk.vercel.app/',
      title: 'To Do List',
      show: true,
    },
    {
      img: '../../assets/images/dictionary.png',
      url: 'https://dictionary-ranemihirk.vercel.app/',
      title: 'Dictionary',
      show: true,
    },
    {
      img: '../../assets/images/tweetie.png',
      url: 'https://tweetie-ranemihirk.vercel.app/',
      title: 'Tweetie (Social Media Platform)',
      show: true,
    },
    {
      img: '../../assets/images/shreeji-sharan.png',
      url: 'https://www.shreejisharan.com/',
      title: 'Shreeji Sharan Group of Companies',
      show: true,
    },
    {
      img: '../../assets/images/random-quote-generator.png',
      url: 'https://codepen.io/ranemihirk/full/QWrwpde',
      title: 'Random Quote Generator',
      show: true,
    },
    {
      img: '../../assets/images/markdown-previewer.png',
      url: 'https://codepen.io/ranemihirk/full/YzLXYOa',
      title: 'Markdown Previewer',
      show: true,
    },
    {
      img: '../../assets/images/drum-machine.png',
      url: 'https://codepen.io/ranemihirk/full/eYrNyPZ',
      title: 'Drum Machine',
      show: true,
    },
    {
      img: '../../assets/images/javascript-calculator.png',
      url: 'https://codepen.io/ranemihirk/full/bGMdamJ',
      title: 'Javascript Calculator',
      show: true,
    },
  ];

  scrollTo($sectionName: string) {
    if($sectionName != "project"){
      window.location.href = '/';
    }
    Document.bind(document.getElementById($sectionName)?.scrollIntoView());
  }
}
