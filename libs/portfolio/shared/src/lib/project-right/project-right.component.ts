import { Component, Input } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../project.entity';

@Component({
  selector: 'personal-project-right',
  templateUrl: './project-right.component.html',
  styleUrls: ['./project-right.component.scss'],
})
export class ProjectRightComponent {
  faGithub = faGithub;
  faArrowUp = faArrowUpRightFromSquare;
  @Input() project!: Project;
}
