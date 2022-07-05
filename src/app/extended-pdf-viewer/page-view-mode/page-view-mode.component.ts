import { Component } from '@angular/core';
import { ScrollModeType } from 'ngx-extended-pdf-viewer';
import { NgxExtendedPdfViewerService } from 'ngx-extended-pdf-viewer';
import { isLocalhost } from '../common/utilities';

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

  public isLocalhost = isLocalhost();

  private _fullscreen = false;

  public get fullscreen(): boolean {
    return this._fullscreen;
  }

  public set fullscreen(full: boolean) {
    this._fullscreen = full;
    setTimeout(() =>
    this.pdfService.recalculateSize());
  }

  constructor(private pdfService: NgxExtendedPdfViewerService) { }
}
