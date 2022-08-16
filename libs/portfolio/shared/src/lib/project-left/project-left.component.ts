import { Component, Input } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../project.entity';

@Component({
  selector: 'personal-project-left',
  templateUrl: './project-left.component.html',
  styleUrls: ['./project-left.component.scss'],
})
export class ProjectLeftComponent {
  @Input() project!: Project;

  faGithub = faGithub;
  faArrowUp = faArrowUpRightFromSquare;
}
