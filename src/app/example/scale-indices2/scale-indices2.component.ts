
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
import { ColDef,NewValueParams } from 'ag-grid-community'; // Column Definition Type Interface
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scale-indices2',
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
  templateUrl: './scale-indices2.component.html',
  styleUrl: './scale-indices2.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ScaleIndices2Component {
  @ViewChild('scale2Grid') grid!: AgGridAngular;
  @Output() scaleIndiceEvent = new EventEmitter<any>();
  scaleIndices:any=[];
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
  rowData = [
    { scaleI1: 'SKALENINDICES' },
    { scaleI1: 'Skala', scaleI2: 'FKI', scaleI3: 'standard-werte', scaleI4: '95% Konfidenz- intervall',scaleI5:'%-Rang' },
    { scaleI1: 'Sequentiell/Gsm', scaleI2: '', scaleI3: '', scaleI4: '',scaleI5:'' },
    { scaleI1: 'Simultan/Gv', scaleI2: '', scaleI3: '', scaleI4: '',scaleI5:'' },
    { scaleI1: 'Lernen/Glr', scaleI2: '', scaleI3: '', scaleI4: '',scaleI5:'' },
    { scaleI1: 'Planung/Gf', scaleI2: '', scaleI3: '', scaleI4: '',scaleI5:'' },
    { scaleI1: 'Wissen/Gc', scaleI2: '', scaleI3: '', scaleI4: '',scaleI5:'' },
    { scaleI1: 'Summe', scaleI2: 0, scaleI3: 0, scaleI4: 0,scaleI5:0 },
   
   
  ];
  public domLayout: any = "autoHeight";
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "scaleI1",headerName:"Skala", editable:true, 
    singleClickEdit:true, cellStyle: {'border-color': 'black'},
    colSpan: function (params) {
      var value = params.data.details;
      if (!!params.node) {
        var rowIndex = params.node.rowIndex;
        if (rowIndex === 0 )
          return 5;
         
      }
      return 1;
      
    },
    cellClass: function (params) {
      var value = params.data.col1;
      if (!!params.node) {
        var rowIndex = params.node.rowIndex;
        if (rowIndex === 0 ) {
          return [ 'cell-blue','font', 'textCenter']
        }
        if (rowIndex === 2 ) {
          return [ 'font-pink','font']
        }
        if (rowIndex === 3 ) {
          return [ 'font-purple','font']
        }
        if (rowIndex === 4 ) {
          return [ 'font-green','font']
        }
        if (rowIndex === 5 ) {
          return [ 'font-brown','font']
        }
        if (rowIndex === 6 ) {
          return [ 'font-blue','font']
        }
        
        if (rowIndex === 7 )
        return [ 'cell-yellow','font', 'textCenter']
        
      }
      return ['font'];
    },
  },
    {field:"scaleI2",headerName:"FKI", editable:true,
    singleClickEdit:true, cellStyle: {'border-color': 'black'},
    enableCellChangeFlash:true, 
    onCellValueChanged: (event) => this.inlineEdit(event, "scaleI2"),
    colSpan: function (params) {
      var value = params.data.details;
      if (!!params.node) {
        var rowIndex = params.node.rowIndex;
        if (rowIndex === 0 )
          return 5;
          
      }
      return 1;
      
    },
    cellClass: function (params) {
      var value = params.data.col1;
      if (!!params.node) {
        var rowIndex = params.node.rowIndex;
       
        
        if (rowIndex === 7 )
        return [ 'cell-yellow','font', 'textCenter']
        
      }
      return ['font','textCenter'];
    },
  },
    
    { field: "scaleI3",headerName:"standard-werte",
      // cellRenderer: CellEditorComponent,
      // cellRendererParams: {},
      editable:true,
      singleClickEdit:true,
      cellStyle: {'border-color': 'black'},
      enableCellChangeFlash:true, 
      onCellValueChanged: (event) => this.populateScaleIndices(event, "scaleI3"),
      cellClass: function (params) {
        var value = params.data.col1;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
          if (rowIndex === 2 || rowIndex === 3 || rowIndex === 4 || rowIndex === 5 || rowIndex === 6) {
            return [ 'fill-blue','font','textCenter']
          }
          
          if (rowIndex === 7 )
          return [ 'cell-yellow','font', 'textCenter']
          
        }
        return ['font','textCenter'];
      },
      
      
    },
    { field: "scaleI4",headerName:"95% Konfidenz- intervall",
      // cellRenderer: CellEditorComponent,
      // cellRendererParams: {},
      editable:true,
      singleClickEdit:true,
      width:240,
      cellStyle: {'border-color': 'black'},
      enableCellChangeFlash:true, 
      onCellValueChanged: (event) => this.populateScaleIndices(event, "scaleI3"),
      cellClass: function (params) {
        var value = params.data.col1;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
         
          
          if (rowIndex === 7 )
          return [ 'cell-yellow','font', 'textCenter']
          
        }
        return ['font','textCenter'];
      },
      
    },
    { field: "scaleI5",headerName:"%-Rang",
      // cellRenderer: CellEditorComponent,
      // cellRendererParams: {},
      editable:true,
      singleClickEdit:true,
      cellStyle: {'border-color': 'black'},
      enableCellChangeFlash:true, 
      onCellValueChanged: (event) => this.inlineEdit(event, "scaleI5"),
      cellClass: function (params) {
        var value = params.data.col1;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
         
          
          if (rowIndex === 7 )
          return [ 'cell-yellow','font','textCenter']
          
        }
        return ['font','textCenter'];
      },
    },
  
  ];

  populateScaleIndices(event: NewValueParams<any, any>,col:string){
    this.scaleIndices=[];
    this.grid.api.forEachNode((node: any) => {
      let scaleIndice = new scaleIndices();
      var value = node.data;
      scaleIndice.scaleValue = value.scaleI3;
      scaleIndice.scaleInterval = value.scaleI4;
      scaleIndice.range = value.scaleI5;
      this.scaleIndices.push(scaleIndice);
      // }
    });
    this.scaleIndiceEvent.emit(this.scaleIndices);
    this.updateLookUp(col);
  };
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
  
   this.grid.api.forEachNode((node: any) => {
    
     var value = node.data[col];
     
     if (!!value && !isNaN(value) && node.rowIndex != 7 && node.rowIndex != 0 && node.rowIndex != 1) {
       value = Number(value);
       sum += value;
     }
     // }
   });
  
   const rowNode1 = this.grid.api.getDisplayedRowAtIndex(3);
   if(col == "scaleI2"){
   this.rowData[7].scaleI2 = sum;
    }else{
      sum = sum/(this.rowData.length-1);
    this.rowData[7].scaleI5 = sum;
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



updateLookUp(col:string) {


let rangeValue:number = 0;
let sum = 0;
 this.grid.api.forEachNode((node: any) => {
  
   var value = node.data[col];
   rangeValue = node.data[col];
  
   if (!!value && !isNaN(value) &&  node.rowIndex != 7 && node.rowIndex != 0 && node.rowIndex != 1 ){
     value = Number(value);
     if(!!rangeValue){
      rangeValue = Number(rangeValue);
      rangeValue = this.rangeLokkup.get(rangeValue);
      sum +=rangeValue;
    this.rowData[node.rowIndex].scaleI5 = rangeValue;
    
    }
    
   }
   if(node.rowIndex == 7){
    this.rowData[7].scaleI5 = sum/5;
  }
  
   this.grid.api.setGridOption('rowData', this.rowData);
    this.grid.api.refreshCells({ force: true });
   // }
 });


 
 


}

}

class scaleIndices{
  scaleValue!: string;
  scaleInterval!: string;
  range!: string;
}
