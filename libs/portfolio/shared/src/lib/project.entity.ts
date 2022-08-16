import { ProjectInterface } from '@personal/api-interfaces';

export class Project implements ProjectInterface {
  title: string;
  imgName: string;
  rank: number;
  description: string;
  technologies: string[];
  githubLink: string;
  link: string;

  constructor(
    title: string,
    imgName: string,
    rank: number,
    description: string,
    technologies: string[],
    githubLink: string,
    link: string
  ) {
    this.description = description;
    this.githubLink = githubLink;
    this.rank = rank;
    this.imgName = imgName;
    this.link = link;
    this.technologies = technologies;
    this.title = title;
  }
}
