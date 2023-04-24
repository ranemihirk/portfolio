import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Mihir Rane');
  }

  ngOnInit(): void {}

  slides = [
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
    {
      img: '../../assets/images/shreeji-sharan.png',
      url: 'https://www.shreejisharan.com/',
      title: 'Shreeji Sharan Group of Companies',
      show: true,
    },
  ];
  slideConfig = {
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        },
      },
    ],
  };

  frontEnd = ["React", "TypeScript", "Angular", "HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "DaisyUI", "Material UI", ]
  backEnd = ["Node js", "Laravel", "PHP", "ASP.NET C#", "MySQL", "MySQL Workbench", "Rest API", "AJAX"]
  tools = ["Git", "GitHub", "Sourcetree", "Jira", "VS Code", "Trello", "Zeplin"]

  openTab = 1;
  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }

  scrollTo($sectionName: string) {
    window.location.href = '/';
    Document.bind(document.getElementById($sectionName)?.scrollIntoView());
  }

  // {img: "../../assets/images/javascript-calculator.png",
  //   url: "https://codepen.io/ranemihirk/full/MWGwrza",
  // title: "",
  //   show: false},
}
