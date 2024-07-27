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
import { ColDef } from 'ag-grid-community'; // Column Definition Type Interface
import { CommonModule } from '@angular/common';
import { AgCharts } from "ag-charts-angular";
import { AgChartOptions } from 'ag-charts-community';
import deepClone from "deep-clone";

@Component({
  selector: 'app-scale-indices3',
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
    CommonModule,
    AgCharts
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  templateUrl: './scale-indices3.component.html',
  styleUrl: './scale-indices3.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ScaleIndices3Component {
  indicesData: IndicesData = new IndicesData;
  rowData = [
    { scaleIn1: 'Grafisches Profil der Skalenindices',},
    { scaleIn1: '', scaleIn2: 'Skalenindices (Standardwert)', scaleIn3: '(einkreisen) Konfidenz-intervall', scaleIn4: '' ,scaleIn5:'(einkreisen) Konfidenz-intervall'},
    { scaleIn1: 'FKI (einkreisen)', scaleIn2: '', scaleIn3: '', scaleIn4: '' ,scaleIn5:''},
    { scaleIn1: 'SFI', scaleIn2: '', scaleIn3: '', scaleIn4: '' ,scaleIn5:''},
    { scaleIn1: 'Sequentiell(Gsm)', scaleIn2: '', scaleIn3: '', scaleIn4: '' ,scaleIn5:''},
    { scaleIn1: 'Simultan/Gv', scaleIn2: '', scaleIn3: '', scaleIn4: '' ,scaleIn5:''},
    { scaleIn1: 'Lernen/Glr', scaleIn2: '', scaleIn3: '', scaleIn4: '' ,scaleIn5:''},
    { scaleIn1: 'Planung/Gf', scaleIn2: '', scaleIn3: '', scaleIn4: '' ,scaleIn5:''},
    { scaleIn1: 'Wissen Gc', scaleIn2: '', scaleIn3: '', scaleIn4: '' ,scaleIn5:''},
   
   
  ];
  public domLayout: any = "autoHeight";
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "scaleIn1",headerName:"", editable:true, 
     cellStyle: {'border-color': 'black'},
    colSpan: function (params) {
      var value = params.data.details;
      if (!!params.node) {
        var rowIndex = params.node.rowIndex;
        if (rowIndex === 0 )
          return 6;
         
      }
      return 1;
      
    },
    cellClass: function (params) {
      var value = params.data.col1;
      if (!!params.node) {
        var rowIndex = params.node.rowIndex;
       
        
        if (rowIndex === 0 )
        return [ 'cell-lightblue','font','text-center']
        
      }
      return ['font'];
    },
  
  },
    {field:"scaleIn2",headerName:"", editable:true,
     cellStyle: {'border-color': 'black','white-space': 'normal','word-wrap': 'break-word'},cellClass:['font','textCenter'],
     onCellValueChanged: (event) => this.inlineEdit(event, "scaleIn2"),
    },
     
    { field: "scaleIn3",headerName:"",
      // cellRenderer: CellEditorComponent,
      // cellRendererParams: {},
      editable:true,
      cellClass:['font','textCenter'],
      cellStyle: {'border-color': 'black','white-space': 'normal','word-wrap': 'break-word'}
      
    },
   
   
    
  
  ];
  gridApi: any;
  @ViewChild('agChart')
  agChart!: any;
public onGridReady(params: any) {
  this.gridApi = params.api;
  this.gridApi.sizeColumnsToFit();
  // this.gridApi.autoSizeAllColumns();
}

public options:AgChartOptions = {
  title: {
    text: "Grafisches Profil der Skalenindices",
  },
  
  data: this.getData(),
  series: [
    {
      type: "line",
      xKey: "type",
      xName: "Skala",
      yKey: "indices",
      yName: "Skalenindices",
      stroke: "blue",
      marker: {
        enabled:true
      },
      label: {
        fontWeight: "bold",
        formatter: ({ value }) => value.toFixed(0),
        
      },
      interpolation: { type: "linear" },
    },
    
  ],
};

inlineEdit(event: any, col:string): void {
  let val = event.newValue;
  let sum = 0;
  if (!!val && !isNaN(val)){
    val = Number(val);
    this.updateFirstTotalRowNode(col);
    
   this.options.data =  this.getData();
   if(this.agChart && this.agChart.chart && this.agChart.chart.factoryApi){
    this.agChart.chart.factoryApi.createOrUpdate(this.options, this.agChart.chart);
   }
    
}
}

public onChartReady(){
 // console.log(event);
}
updateFirstTotalRowNode(col:string) {

let sum= 0;


 this.gridApi.forEachNode((node: any) => {
  
   var value = node.data[col];
   
   if (!!value && !isNaN(Number(value)) && node.rowIndex != 1 && node.rowIndex != 0 ) {
    value = Number(value);
    if(node.rowIndex == 2){
      this.indicesData.fki = value;
    }
    if(node.rowIndex == 3){
      this.indicesData.sfi = value;
    }
    if(node.rowIndex == 4){
      this.indicesData.gsm = value;
    }

    if(node.rowIndex == 5){
      this.indicesData.gv = value
    }
    if(node.rowIndex == 6){
      this.indicesData.glr=value
    }
    if(node.rowIndex == 7){
      this.indicesData.gf=value
    }
    if(node.rowIndex == 8){
      this.indicesData.gc=value
    }
   
   }
   // }
 });
}

getData() {
  return [
    { type: "FKI(einkreisen)", indices:this.indicesData.fki },
    { type: "SFI", indices: this.indicesData.sfi },
    { type: "Sequentiell(Gsm)", indices: this.indicesData.gsm },
    { type: "Simultan/Gv", indices: this.indicesData.gv },
    { type: "Lernen/Glr", indices: this.indicesData.glr },
    { type: "Planung/Gf", indices: this.indicesData.gf },
    { type: "Wissen Gc", indices: this.indicesData.gc },

  ];
}


}

class IndicesData{
  fki: number=100;
  sfi: number=100;
  gsm: number=100;
  gv: number=100;
  glr: number=100;
  gf: number=100;
  gc: number=100;
}
