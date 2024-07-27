import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-cell-editor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cell-editor.component.html',
  styleUrl: './cell-editor.component.scss'
})
export class CellEditorComponent implements OnInit, ICellRendererAngularComp{
  public value = '';
  params: any;
  
  
  agInit(params: ICellRendererParams<any, any, any>): void {
    this.params = params;
    this.value = params.value;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    return true;
  }
  public onModelChange() {
    console.log("val::" +this.value);
    this.params.data[this.params.colDef.field] = this.value;
  }

  ngOnInit(): void {
   
  }
  @ViewChild('inputValue') inputValue: any;

}
