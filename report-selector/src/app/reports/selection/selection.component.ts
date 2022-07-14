import { Component, OnInit } from '@angular/core';
import { ReportCategory, ReportCategoryView, ReportViewType,
reportCategory, reportCategoryView, reportViewType, Lookup } from '../../models/model';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  srcRptCategory: ReportCategory [] = [];
  srcRptVwType: ReportViewType [] = [];
  srcRptCatView: ReportCategoryView [] = [];
  selRptVwType: ReportViewType [] = [];
  selRptCatView: ReportCategoryView [] = [];
  selRptCatId:number = 0;

  selDone: number = 0;

  todo: ReportViewType [] = [];
  done: ReportViewType [] = [];

  srcSecond: ReportViewType [] = [];
  srcSecondFinal: ReportViewType [] = [];
  printFinal: ReportViewType [] = [];

  selPreviewDone?: ReportViewType;

  constructor() { }

  ngOnInit(): void {
    this.srcRptCategory = reportCategory;
    this.srcRptVwType = reportViewType;
    this.srcRptCatView = reportCategoryView;
  }

  reportClassClick(catId: number){
    this.selRptCatId = catId;
    this.loadReportViewTypes();
    this.selDone = 0;
    this.done = [];
    this.srcSecond = [];
    this.srcSecondFinal = [];
    this.printFinal = [];
    this.selPreviewDone = undefined;
  }

  loadReportViewTypes(){
    if(this.selRptCatId == 0 ) return;

    this.selRptCatView = [];
    this.selRptCatView = this.srcRptCatView.filter(r => r.reportCategoryId == this.selRptCatId);
    console.log(this.selRptCatView);
    this.selRptVwType = [];
    this.selRptVwType = this.srcRptVwType.filter(f => this.selRptCatView.map(m => m.reportViewTypeId).includes(f.id));
    // this.todo = this.selRptVwType.map(m => {
    //   id = m.id,
    //   desc = m.name
    // });
    this.todo = this.selRptVwType;
  }

  drop(event: CdkDragDrop<ReportViewType[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  //Selection Done
  processSelected(){
    if(this.done.length == 0) return;

    this.srcSecond = this.done;
    this.srcSecondFinal = this.srcSecond.map(x => x);
  }

  doneClick(dId: number){
    this.selDone = dId;
    this.selPreviewDone = this.done.find(f => f.id == dId);
  }

  // dropFinal(event: CdkDragDrop<unknown>) {
  //   moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
  // }
  dropFinal(event: CdkDragDrop<ReportViewType[]>) {
    moveItemInArray(this.srcSecondFinal, event.previousIndex, event.currentIndex);
  }

  processFinalSave(){
    this.printFinal = this.srcSecondFinal.map(x => x);
  }

}
