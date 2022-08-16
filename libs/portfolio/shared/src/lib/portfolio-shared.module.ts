import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiquidButtonComponent } from './liquid-button/liquid-button.component';
import { LiquidIconButtonComponent } from './liquid-icon-button/liquid-icon-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectLeftComponent } from './project-left/project-left.component';
import { ProjectRightComponent } from './project-right/project-right.component';
import { Project } from './project.entity';
import { InfoCardComponent } from './info-card/info-card.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule],
  declarations: [
    LiquidButtonComponent,
    LiquidIconButtonComponent,
    ProjectLeftComponent,
    ProjectRightComponent,
    InfoCardComponent,
  ],
  exports: [
    LiquidButtonComponent,
    LiquidIconButtonComponent,
    ProjectLeftComponent,
    ProjectRightComponent,
    InfoCardComponent,
  ],
})
export class PortfolioSharedModule {}
