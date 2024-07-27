import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, NO_ERRORS_SCHEMA, Output, ViewChild, ViewEncapsulation } from '@angular/core';
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
  selector: 'app-personal',
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
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css',
  encapsulation: ViewEncapsulation.None
})
export class PersonalComponent {
  @ViewChild('personalGrid') grid!: AgGridAngular;
  @ViewChild('dateGrid') dateGrid!: AgGridAngular;
  @Output() userData = new EventEmitter<Personal>();
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
    { col1: "Kaufmann Assessment Battery for Children - II", },
    { col1: "Deutschsprachige Fassung von Peter Melchers und Martin Melchers",  },
    { col1: "Name:", details: '',f1:'Geschlecht:', f2:'', f3:'ID:', f4:'' },
    { col1: "Schule:", details: '', f1:'', f2:'Testleiter:', f3:'',f4:''},
    { col1: "Anamnese/Besonderes:", details:'', f1:'' },
   


  ];

  dateRowData = [
    { col1: "Jahr Monat Tag", },
    { col1: "Testdatum:", col4: '',},
    { col1: "Geburtsdatum:", col4: '' },
    { col1: "Alter    ", col2:'', col3:'' },
    {},
   


  ];

  dateColDefs: ColDef[] = [
    {
      field: "col1",
      editable: true,
     
     // cellStyle: { 'border-color': '#2196f3' },
      cellClass: function (params) {
        var value = params.data.col1;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
          if (rowIndex === 0 ) {
            return [ 'cell-peach','font', 'textCenter']
          }
        }
        return [ 'cell-peach','font', ];
      },
      
       
      
    
      colSpan: function (params) {
        var value = params.data.col1;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
          if (rowIndex === 0  )
            return 4;
            else if (rowIndex === 1 || rowIndex === 2  )
            return 3;
        }
        return 1;
      },
    },

    {
      field: "col2",
      headerName: '',
      cellClass:['cell-peach','font','smallCell'],
      // cellRenderer: CellEditorComponent,
      // cellRendererParams: {},
      editable: true,
      
      enableCellChangeFlash:true, 
      width: 60,
      // 
     
      
      
      // colSpan: params => (params.data.details === 'Standardwert' || params.data.details === undefined || params.data.details === '') ? 1 : 3,

    },
    {
      field: "col3",
      headerName: '',
      editable: true,
      
      cellClass:['cell-peach','font','smallCell'],
      enableCellChangeFlash:true,
      width: 60,
      
      
    },
    {
      field: "col4",
      headerName: '',
      editable: true,
      
      cellClass:['cell-peach','font'],
      enableCellChangeFlash:true,
      valueFormatter: (params: ValueFormatterParams<any, Date>) => {
        if (!params.value) {
          return "";
        }
        const month = params.value.getMonth() + 1;
        const day = params.value.getDate();
        return `${params.value.getFullYear()}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
      },
      cellEditor: "agDateCellEditor",
       onCellValueChanged: (event) => this.inlineEditTestDate(event),
      
    },
   

  ];



  gridApi: any;
  dateGridApi:any
 

 
  public domLayout: any = "autoHeight";

  userDetails: Personal = new Personal;


  // Column Definitions: Defines the columns to be displayed.
  indexColDefs: ColDef[] = [
    {
      field: "col1",
      editable: false,
      
     // cellStyle: { 'border-color': '#2196f3' },
      cellClass: function (params) {
        var value = params.data.col1;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
          if (rowIndex === 0 || rowIndex === 1) {
            return ['cell1','font']
          }
        }
        return [ 'cell-green','font'] ;
      },
    
      colSpan: function (params) {
        var value = params.data.col1;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
          if (rowIndex === 0  || rowIndex === 1)
            return 6;
            else if(rowIndex === 4)
            return 2;
        }
        return 1;
      },
    },

    {
      field: "details",
      headerName: '',
      cellClass:['cell-green','font'],
      // cellRenderer: CellEditorComponent,
      // cellRendererParams: {},
      editable: true,
      onCellValueChanged: (event) => this.inlineEdit(event),
      enableCellChangeFlash:true, 
      colSpan: function (params) {
        var value = params.data.col1;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
          if (rowIndex === 3)
            return 2;
            
        }
        return 1;
      },
     
      
      
      // colSpan: params => (params.data.details === 'Standardwert' || params.data.details === undefined || params.data.details === '') ? 1 : 3,

    },
    {
      field: "f1",
      headerName: '',
      editable: true,
      
      cellClass:['cell-green','font'],
      
    },
    {
      field: "f2",
      headerName: '',
      editable: true,
      
      cellClass:['cell-green','font'],
      enableCellChangeFlash:true,
      
      
    },
    {
      field: "f3",
      headerName: '',
      editable: true,
      
      cellClass:['cell-green','font'],
      enableCellChangeFlash:true,
      colSpan: function (params) {
        var value = params.data.col1;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
          if (rowIndex === 3)
            return 2;
            
        }
        return 1;
      },
      
    },
    {
      field: "f4",
      headerName: '',
      editable: true,
      
      cellClass:['cell-green','font'],
      enableCellChangeFlash:true,
      
    },

  ];
 
  inlineEdit(event: NewValueParams<any, any>): void {
    let value = event.newValue;
    if(event.node && event.node.rowIndex === 2){
      this.userDetails.name = value;
      event.api.refreshCells({
       force: true
      });
      this.userData.emit(this.userDetails);
    }
      // this.grid.api.refreshCells({ force: true });

      // this.gridApi.refreshCells({ force: true });
    
   
  }

  inlineEditTestDate(event: NewValueParams<any, any>): void {
    let d = event.newValue;
   
    if(event.node && event.node.rowIndex === 1){
  if (d!=undefined) { 
    var date = d.getFullYear().toString()+'/'+d.getMonth().toString()+'/'+d.getDate().toString();
    this.userDetails.testdate = date;
  
      // event.data.f2=rangeValue;
      event.api.refreshCells({
       force: true
      });
      
    }
     
    }else if(event.node && event.node.rowIndex === 2){
      this.inlineEditdob(event);
    }
    this.userData.emit(this.userDetails);
  }
   
    inlineEditdob(event: NewValueParams<any, any>): void {
      let d = event.newValue;
      if (d!=undefined) { 
        var todayDate=new Date();
        var ageyear = todayDate.getFullYear() - d.getFullYear();
        var agemonth = todayDate.getMonth() - d.getMonth();
        var ageday = todayDate.getDate() - d.getDate();
        var date = d.getFullYear().toString()+'/'+d.getMonth().toString()+'/'+d.getDate().toString();
        this.userDetails.dob = date;
        if (agemonth <= 0) {
          ageyear--;
          agemonth = (12 + agemonth);
        }
        if (new Date() < d) {
          agemonth--;
          ageday = 30 + ageday;
        }  if (agemonth == 12) {
          ageyear = ageyear + 1;
          agemonth = 0;
        }
        this.userDetails.year = ageyear.toString();
        this.userDetails.month = agemonth.toString();
        
        console.log("Age in Year:" + ageyear + ',' + 'Month:' + agemonth + ',' + 'Day:' + ageday);

        this.dateGrid.api.forEachNode((node: any) => {
          if(node.rowIndex == 3){
            this.dateRowData[3].col2 = this.userDetails.year;
            this.dateRowData[3].col3 = this.userDetails.month;
            this.dateGrid.api.setGridOption('rowData', this.dateRowData);
            this.dateGrid.api.refreshCells({ force: true });
          }
        });
      
      }
  
   
      }



 

  public onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    // this.gridApi.autoSizeAllColumns();
  }

  public onDateGridReady(params: GridReadyEvent) {
    this.dateGridApi = params.api;
    this.dateGridApi.sizeColumnsToFit();
   
  
  }

  public onCellEditingStopped(event: CellEditingStoppedEvent) {
    this.updateTotalRowNode();
  }
  updateTotalRowNode() {

  

    this.dateGrid.api.forEachNode((node: any) => {
      // if (node.data.inputRow) {
      //   this.inputRow = node;
      // } else {
      var value = node.data.col4;
      if (node.rowIndex == 1) {
        var testDate = node.data.col4;
      }
      if (node.rowIndex == 2) {
        var dob = node.data.col4;
        
      }
     
      // }
    });
   

   
  
    //this.dateRowData[6].col2 = sum
    // this.grid.api.setindexRowData(this.indexRowData);
    

  
    this.dateGrid.api.setGridOption('rowData', this.dateRowData);
    this.dateGrid.api.refreshCells({ force: true });


    // this.grid.api.setGridOption('pinnedBottomindexRowData',res);
   

   

  }
  
}

 class Personal {
   name!: string;
   testdate!: string;
   dob!: string;
   month!: string;
   year!: string;
}