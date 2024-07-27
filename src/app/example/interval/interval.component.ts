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
import { ColDef,NewValueParams } from 'ag-grid-community'; // Column Definition Type Interface
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interval',
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
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class IntervalComponent {
  rangeLokkup = new Map();
  constructor(){
    this.rangeLokkup.set(40,	0);
    this.rangeLokkup.set(41	, 0);
    this.rangeLokkup.set(42,	0);
    this.rangeLokkup.set(43,	0);
    this.rangeLokkup.set(44,	0);
    this.rangeLokkup.set(45,	0);
    this.rangeLokkup.set(46,	0.01);
    this.rangeLokkup.set(47,	0.01);
    this.rangeLokkup.set(48,0.01);
    this.rangeLokkup.set(49,	0.03);
    this.rangeLokkup.set(50,	0.03);
    this.rangeLokkup.set(51,	0.03);
    this.rangeLokkup.set(52,	0.06);
    this.rangeLokkup.set(53,	0.06);
    this.rangeLokkup.set(54,	0.06);
    this.rangeLokkup.set(55,	0.13);
    this.rangeLokkup.set(56,	0.13);
    this.rangeLokkup.set(57,	0.13);
    this.rangeLokkup.set(58,	0.25);
    this.rangeLokkup.set(59,	0.25);
    this.rangeLokkup.set(60,	0.25);
    this.rangeLokkup.set(61,	0.46);
    this.rangeLokkup.set(62,	0.46);
    this.rangeLokkup.set(63,	0.46);
    this.rangeLokkup.set(64,	0.82);
    this.rangeLokkup.set(65,	0.82);
    this.rangeLokkup.set(66,	0.82);
    this.rangeLokkup.set(67,	1.39);
    this.rangeLokkup.set(68,	1.39);
    this.rangeLokkup.set(69,	1.39);
    this.rangeLokkup.set(70,	2.27);
    this.rangeLokkup.set(71,	2.27);
    this.rangeLokkup.set(72,	2.27);
    this.rangeLokkup.set(73,	3.59);
    this.rangeLokkup.set(74,	3.59);
    this.rangeLokkup.set(75,	3.59);
    this.rangeLokkup.set(76,	5.48);
    this.rangeLokkup.set(77,	5.48);
    this.rangeLokkup.set(78,	5.48);
    this.rangeLokkup.set(79,	8.05);
    this.rangeLokkup.set(80,	8.05);
    this.rangeLokkup.set(81,	8.05);
    this.rangeLokkup.set(82,	11.51);
    this.rangeLokkup.set(83,	11.51);
    this.rangeLokkup.set(84,	11.51);
    this.rangeLokkup.set(85,	15.87);
    this.rangeLokkup.set(86,	15.87);
    this.rangeLokkup.set(87,	15.87);
    this.rangeLokkup.set(88,	21.19);
    this.rangeLokkup.set(89,	21.19);
    this.rangeLokkup.set(90,	21.19);
    this.rangeLokkup.set(91,	27.43);
    this.rangeLokkup.set(92,	27.43);
    this.rangeLokkup.set(93,	27.43);
    this.rangeLokkup.set(94,	34.46);
    this.rangeLokkup.set(95,	34.46);
    this.rangeLokkup.set(96,	34.46);
    this.rangeLokkup.set(97,	42.07);
    this.rangeLokkup.set(98,	42.07);
    this.rangeLokkup.set(99,	42.07);
    this.rangeLokkup.set(100,	50);
    this.rangeLokkup.set(101,	50);
    this.rangeLokkup.set(102,	50);
    this.rangeLokkup.set(103,	57.93);
    this.rangeLokkup.set(104,	57.93);
    this.rangeLokkup.set(105,	57.93);
    this.rangeLokkup.set(106,	65.54);
    this.rangeLokkup.set(107,	65.54);
    this.rangeLokkup.set(108,	65.54);
    this.rangeLokkup.set(109,	72.57);
    this.rangeLokkup.set(110,	72.57);
    this.rangeLokkup.set(111,	72.57);
    this.rangeLokkup.set(112,	78.81);
    this.rangeLokkup.set(113,	78.81);
    this.rangeLokkup.set(114,	78.81);
    this.rangeLokkup.set(115,	84.13);
    this.rangeLokkup.set(116,	84.13);
    this.rangeLokkup.set(117,	84.13);
    this.rangeLokkup.set(118,	88.49);
    this.rangeLokkup.set(119,	88.49);
    this.rangeLokkup.set(120,	88.49);
    this.rangeLokkup.set(121,	91.92);
    this.rangeLokkup.set(122,	91.92);
    this.rangeLokkup.set(123,	91.92);
    this.rangeLokkup.set(124,	94.52);
    this.rangeLokkup.set(125,	94.52);
    this.rangeLokkup.set(126,	94.52);
    this.rangeLokkup.set(127,	96.41);
    this.rangeLokkup.set(128,	96.41);
    this.rangeLokkup.set(129,	96.41);
    this.rangeLokkup.set(130,	97.73);
    this.rangeLokkup.set(131,	97.73);
	
	
    this.rangeLokkup.set(132,	97.73);
    this.rangeLokkup.set(133,	98.61);
    this.rangeLokkup.set(134,	98.61);
    this.rangeLokkup.set(135,	98.61);
    this.rangeLokkup.set(136,	99.18);
    this.rangeLokkup.set(137,	99.18);
    this.rangeLokkup.set(138,	99.18);
    this.rangeLokkup.set(139,	99.53);
    this.rangeLokkup.set(140,	99.53);
    this.rangeLokkup.set(141,	99.53);
    this.rangeLokkup.set(142,	99.74);
    this.rangeLokkup.set(143,	99.74);
    this.rangeLokkup.set(144,	99.74);
    this.rangeLokkup.set(145,	99.86);
    this.rangeLokkup.set(146,	99.86);
    this.rangeLokkup.set(147,	99.86);
    this.rangeLokkup.set(148,	99.93);
    this.rangeLokkup.set(149,	99.93);
    this.rangeLokkup.set(150,	99.93);
    this.rangeLokkup.set(151,	99.96);
      this.rangeLokkup.set(152,	99.96);
        this.rangeLokkup.set(153,	99.96);
          this.rangeLokkup.set(154,	99.98);
  }
  @ViewChild('intervalGrid') grid!: AgGridAngular;
  public domLayout: any = "autoHeight";
  rowData = [
    { int1: 'Abruf nach Intervall'},
    { int1: 'Skalenwert'},
    { int1: '', int2: '8.Atlantis - Abruf nach Intervall', int3: '' },
    { int1: '', int2: '17.Symbole - Abruf nach Intervall	', int3: '' },
    { int1: 'Summe', int2: 'Standardwert', int3: 'Konfidenzintervall 95%',int4: '%-Range' },
    							
    { int1: 0, int2: 0, int3: 0,int4: 0 },
   
  ];
  
 

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "int1",headerName:"Skalenwert", editable:true, 
    cellStyle: {'border-color': 'black'},
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
          return [ 'cell-peach1','font', 'textCenter']
        }
        if (rowIndex === 4 )
        return [ 'cell-green1','font', ]
        
      }
      return ['font', 'textCenter'];
    },
    enableCellChangeFlash:true, 
      onCellValueChanged: (event) => this.inlineEdit(event, "int1"),
  },
    {field:"int2",headerName:"", editable:true,
    cellStyle: {'border-color': 'black','white-space': 'normal','word-wrap': 'break-word'},
    enableCellChangeFlash:true, 
    width:500,
    cellClass: function (params) {
      var value = params.data.col1;
      if (!!params.node) {
        var rowIndex = params.node.rowIndex;
       
        if (rowIndex === 4 )
        return [ 'cell-green1','font', 'textCenter']
        if(rowIndex === 5)
        return[ 'textCenter'];
        
      }
      return ['font'];
    },
    onCellValueChanged: (event) => this.inlineEdit(event, "int2"),
  },
    
    { field: "int3",headerName:"",
      // cellRenderer: CellEditorComponent,
      // cellRendererParams: {},
      editable:true,
     
      cellStyle: {'border-color': 'black'},
      width:360,
    cellClass: function (params) {
      var value = params.data.col1;
      if (!!params.node) {
        var rowIndex = params.node.rowIndex;
       
        if (rowIndex === 4 )
        return [ 'cell-green1','font', ]
        
      }
      return ['font', 'textCenter'];
    },
      
    },
    { field: "int4",headerName:"",
    // cellRenderer: CellEditorComponent,
    // cellRendererParams: {},
    editable:true,
   
    cellStyle: {'border-color': 'black'},
    cellClass: function (params) {
      var value = params.data.col1;
      if (!!params.node) {
        var rowIndex = params.node.rowIndex;
       
        if (rowIndex === 4 )
        return [ 'cell-green1','font', ]
        
      }
      return ['font', 'textCenter'];
    },
    
  },
  
  ];

  inlineEdit(event: NewValueParams<any, any>, col:string): void {
    let val = event.newValue;
    let sum = 0;
    if (!!val && !isNaN(val)){
      val = Number(val);
      this.updateFirstTotalRowNode(col);
      
  }
  }
  
  updateFirstTotalRowNode(col:string) {
  
  let sum= 0;
  let rangeValue:number = 0;
  
   this.grid.api.forEachNode((node: any) => {
    
     var value = node.data[col];
     rangeValue = node.data[col];
    
     if (!!value && !isNaN(value) && node.rowIndex != 5 && node.rowIndex != 4 && node.rowIndex != 0 && node.rowIndex != 1 ){
       value = Number(value);
       sum += value;
     }
     // }
   });
  
   const rowNode1 = this.grid.api.getDisplayedRowAtIndex(3);
   if(col == "int1"){
   this.rowData[5].int1 = sum;
   }else{
    if(!!rangeValue){
      rangeValue = Number(rangeValue);
      rangeValue = this.rangeLokkup.get(rangeValue);
    this.rowData[5].int4 = rangeValue;
    }
   }
   this.grid.api.setGridOption('rowData', this.rowData);
   this.grid.api.refreshCells({ force: true });
  
  
  }
  gridApi: any;
public onGridReady(params: any) {
  this.gridApi = params.api;
  this.gridApi.sizeColumnsToFit();
  // this.gridApi.autoSizeAllColumns();
}
}


