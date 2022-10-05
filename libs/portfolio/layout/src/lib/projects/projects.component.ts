import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Project } from '@personal/portfolio/shared';

@Component({
  selector: 'personal-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  faGithub = faGithub;
  faArrowUp = faArrowUpRightFromSquare;

  projects!: Project[];

  ngOnInit(): void {
    this.projects = [
      {
        rank: -1,
        title: 'Team France Bleu',
        description:
          'Team France Bleu is a amateur cycling team located in Freiburg, Germany. The page content is dynamic and can be edited by a CMS. Riders, stories races and more is can be managed by authorized users.',
        githubLink: 'https://github.com/michelm117/tfb',
        link: 'https://tfb.michel.lu/',
        imgName: 'assets/img/team_france_bleu.png',
        technologies: ['Angular', 'Nestjs', 'Tailwind', 'Angular Material'],
      },
      {
        rank: 0,
        title: 'Minttube',
        description:
          'Minttube is an open-collaborative online learning community for people who want to learn from educational videos and blog posts.',
        githubLink: '',
        link: 'https://minttube.net/',
        imgName: 'assets/img/minttube.png',
        technologies: ['Django', 'Javascript'],
      },
      {
        rank: 1,
        title: 'Typewriter',
        description:
          'Typwriter was designed by Johannes Hucht and implemented by me. The webpage was created to showcase and compare self designed fonts.',
        githubLink: '',
        link: 'https://typewriter.daily-practice.net/',
        imgName: 'assets/img/typewriter_screen.png',
        technologies: ['Javascript', 'jQuery'],
      },
      {
        rank: 2,
        title: 'Portfolio v1.0',
        description:
          'This was my first attempt at creating a static homepage/portfolio. I used mainly pure HTML and CSS. For the contact form I used PHP.',
        githubLink: 'https://github.com/michelm117/personal_old',
        link: 'https://old.michel.lu',
        imgName: 'assets/img/portfolio_1.png',
        technologies: ['Javascript', 'Bootstrap', 'PHP'],
      },
      {
        rank: 10,
        title: 'Solar Explorer',
        description:
          'This game was created by a team of five as part of a university project. The game goal is to conquer the galaxy and to defeat the enemy ai.',
        githubLink: '',
        link: '',
        imgName: 'assets/img/sopra.png',
        technologies: ['C#', 'Monogame'],
      },
    ];

    this.projects.sort((p1: Project, p2: Project) => {
      if (p1.rank > p2.rank) {
        return 1;
      }
      if (p1.rank < p2.rank) {
        return -1;
      }
      return 0;
    });
  }
}
