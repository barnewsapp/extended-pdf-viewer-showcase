import { Component } from '@angular/core';
import { ScrollModeType } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-page-view-mode',
  templateUrl: './page-view-mode.component.html',
  styleUrls: ['./page-view-mode.component.css'],
})
export class PageViewModeComponent {

  public page = 1;

  public spreadMode: "off" | "even" | "odd" = "even";
  public scrollMode:ScrollModeType = ScrollModeType.page;

  public showBorders = false;

  constructor() { }
}
