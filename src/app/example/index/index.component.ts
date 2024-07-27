import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef, NewValueParams } from 'ag-grid-community'; // Column Definition Type Interface
import { CommonModule } from '@angular/common';


import {

  ValueFormatterParams,
  GridReadyEvent,
  RowClassParams,
  CellEditingStoppedEvent,
} from 'ag-grid-community';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridAngular,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent {
  indexRangeLookup = new Map();
  constructor() {
    this.indexRangeLookup.set(40, 0);
    this.indexRangeLookup.set(43, 0);
    this.indexRangeLookup.set(46, 0.01);
    this.indexRangeLookup.set(49, 0.03);
    this.indexRangeLookup.set(52, 0.06);
    this.indexRangeLookup.set(55, 0.13);
    this.indexRangeLookup.set(58, 0.25);
    this.indexRangeLookup.set(61, 0.46);
    this.indexRangeLookup.set(64, 0.82);
    this.indexRangeLookup.set(67, 1.39);
    this.indexRangeLookup.set(70, 2.27);

    this.indexRangeLookup.set(73, 3.59);
    this.indexRangeLookup.set(76, 5.48);
    this.indexRangeLookup.set(79, 8.05);
    this.indexRangeLookup.set(82, 11.51);
    this.indexRangeLookup.set(85, 15.87);
    this.indexRangeLookup.set(88, 21.19);
    this.indexRangeLookup.set(91, 27.43);
    this.indexRangeLookup.set(94, 34.46);


    this.indexRangeLookup.set(97, 42.07);
    this.indexRangeLookup.set(100, 50);
    this.indexRangeLookup.set(103, 57.93);
    this.indexRangeLookup.set(106, 65.54);
    this.indexRangeLookup.set(109, 72.57);
    this.indexRangeLookup.set(112, 78.81);
    this.indexRangeLookup.set(115, 84.13);
    this.indexRangeLookup.set(118, 88.49);
    this.indexRangeLookup.set(121, 91.92);
    this.indexRangeLookup.set(124, 94.52);
    this.indexRangeLookup.set(127, 96.41);
    this.indexRangeLookup.set(130, 97.73);
    this.indexRangeLookup.set(133, 98.61);
    this.indexRangeLookup.set(136, 99.18);
    this.indexRangeLookup.set(139, 99.53);
    this.indexRangeLookup.set(142, 99.74);
    this.indexRangeLookup.set(145, 99.86);
    this.indexRangeLookup.set(148, 99.93);
    this.indexRangeLookup.set(151, 99.96);
    this.indexRangeLookup.set(154, 99.98);
    this.indexRangeLookup.set(157, 99.99);
    this.indexRangeLookup.set(160, 99.99);
  }


  // value






  indexRowData = [
    { Skalenwert: "ALTERSSTUFEN 7-18:SPRACHFREI INDEX (SFI)", },
    { Skalenwert: "Skalenwert",  },
    { Skalenwert: "", details: '4.Geschichten ergänzen' },
    { Skalenwert: "", details: '12.Dreiecke' },
    { Skalenwert: "", details: '13.Bausteine zählen' },
    { Skalenwert: "", details: '15.Muster ergänzen' },
    { Skalenwert: "", details: '16.Handbewegungen' },
    { Skalenwert: 'Summe', details: 'Standardwert', f1: '95% Konfidenzintervall', f2: '%-Rang' },
    { Skalenwert: 0, details: 0, f1: '71-83', f2: 0 },


  ];



  gridApi: any;
 

  @ViewChild('indexGrid') grid!: AgGridAngular;
  public domLayout: any = "autoHeight";




  // Column Definitions: Defines the columns to be displayed.
  indexColDefs: ColDef[] = [
    {
      field: "Skalenwert",
      editable: true,
     
      cellStyle: { 'border-color': 'black' },
      colSpan: function (params) {
        var value = params.data.details;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
          if (rowIndex === 0 )
            return 4;
        }
        return 1;
        
      },
      cellClass: function (params) {
        var value = params.data.col1;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
          if (rowIndex === 0 ) {
            return [ 'cell-header','font', 'textCenter']
          }
          if (rowIndex === 8 ) {
            return [ 'cell-yellow','font','textCenter' ]
          }
          if (rowIndex === 7 ) {
            return [ 'font','textCenter' ]
          }
        }
        return ['font','textCenter'];
      },
    },

    {
      field: "details",
      headerName: '',
      // cellRenderer: CellEditorComponent,
      // cellRendererParams: {},
      editable: true,
      cellClass: function (params) {
        var value = params.data.col1;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
          
          if (rowIndex === 8 ) {
            return [ 'cell-yellow','font','textCenter' ]
          }
          if (rowIndex === 7 ) {
            return [ 'font','textCenter' ]
          }
        }
        return ['font'];
      },
      enableCellChangeFlash:true, 
      
      onCellValueChanged: (event) => this.inlineEdit(event),
      cellStyle: { 'border-color': 'black' },
      colSpan: function (params) {
        var value = params.data.details;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
          if (rowIndex === 7 || rowIndex === 8)
            return 1;
        }
        // (params.data.details === 'Standardwert' || params.data.details === undefined || params.data.details === '') ? 1 : 3,
        if (value === "Standardwert") {
          return 1;
        } else {
          return 3;
        }
      },
      
      // colSpan: params => (params.data.details === 'Standardwert' || params.data.details === undefined || params.data.details === '') ? 1 : 3,

    },
    {
      field: "f1",
      headerName: '',
      editable: true,
      cellClass: function (params) {
        var value = params.data.col1;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
          
          if (rowIndex === 8 ) {
            return [ 'cell-yellow','font','textCenter' ]
          }
          if (rowIndex === 7 ) {
            return [ 'font','textCenter' ]
          }
        }
        return ['font'];
      },
      cellStyle: { 'border-color': 'black' },
    },
    {
      field: "f2",
      headerName: '',
      editable: true,
      cellClass: function (params) {
        var value = params.data.col1;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
          
          if (rowIndex === 8 ) {
            return [ 'cell-yellow','font' ,'textCenter']
          }
          if (rowIndex === 7 ) {
            return [ 'font','textCenter' ]
          }
        }
        return ['font'];
      },
      cellStyle: { 'border-color': 'black' },
      enableCellChangeFlash:true,
      
    },

  ];
 
  inlineEdit(event: NewValueParams<any, any>): void {
    let rangeValue = event.newValue;
    if (!!rangeValue && !isNaN(rangeValue)){
      const val = Number(rangeValue)
      rangeValue = this.indexRangeLookup.get(val);
      if(!!rangeValue){
      console.log(rangeValue);
      event.data.f2=rangeValue;
      event.api.refreshCells({
       force: true
      });
    }
      // this.grid.api.refreshCells({ force: true });

      // this.gridApi.refreshCells({ force: true });
    }
   
  }



  public onCellEditingStopped(event: CellEditingStoppedEvent) {
    this.updateTotalRowNode();
  }
  updateTotalRowNode() {

   let sum= 0;
    let updatedRownode: any;
    this.grid.api.forEachNode((node: any) => {
      // if (node.data.inputRow) {
      //   this.inputRow = node;
      // } else {
      var value = node.data.Skalenwert;
      if (node.rowIndex == 7) {
        updatedRownode = node;
      }
      if (!!value && !isNaN(value) && node.rowIndex != 8  && node.rowIndex != 0 && node.rowIndex != 1) {
        value = Number(value);
        sum += value;
      }
      // }
    });
    var res =
      [{ Skalenwert: sum, details: 'Standardwert', f1: '95% Konfidenzintervall', f2: '%-Rang' }];

   
    if (!!updatedRownode) {
      // updatedRownode.data = res;
      // updatedRownode.updateData(res);
    }
    this.indexRowData[8].Skalenwert = sum
    // this.grid.api.setindexRowData(this.indexRowData);
    

  
    this.grid.api.setGridOption('rowData', this.indexRowData);



    // this.grid.api.setGridOption('pinnedBottomindexRowData',res);
    this.grid.api.refreshCells({ force: true });

   

  }

  public onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    // this.gridApi.autoSizeAllColumns();
  }
}

interface IndexData {
  Summe: number;
  Standardwert: string;
  Konfidenzintervall: string;
  range: number
}
