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
// not being used

@Component({
  selector: 'app-scale-indices',
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
  templateUrl: './scale-indices.component.html',
  styleUrl: './scale-indices.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ScaleIndicesComponent {
  public domLayout: any = "autoHeight";
  @ViewChild('scaleIndicesGrid') grid!: AgGridAngular;
  rowData = [
    { gsm: "ALTERSSTUFEN 7-18:BERECHNUNG DER SKALENINDICES"},
    { gsm: "Sequentiell/Gsm", gf: 'Planung/Gf', glr: 'Lernen/Glr'},
    { gsm: "Skalen- werte", gsm1: '', gf: 'Skalen- werte', gf1: '',glr: 'Skalen- werte',glr1: '' },
    { gsm: "", gsm1: '5. Zahlen Nachsprechen', gf: '', gf1: '4. Geschichten Ergänzen',glr: '',glr1: '1. Atlantis' },
    { gsm: "", gsm1: '14.Wortreihe', gf: '', gf1: '15. Muster ergänzen',glr: '',glr1: '11. Symbole' },
    { gsm: 0, gsm1: 'Summe', gf: 0, gf1: 'Summe',glr: 0,glr1: 'Summe' },
  ];
  
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "gsm",headerName:"Sequentiell/Gsm", editable:true, 
     cellStyle: {'border-color': 'black'},
    enableCellChangeFlash:true, 
    onCellValueChanged: (event) => this.inlineEdit(event, "gsm"),
    colSpan: function (params) {
      var value = params.data.details;
      if (!!params.node) {
        var rowIndex = params.node.rowIndex;
        if (rowIndex === 0 )
          return 6;
          if (rowIndex === 1 )
          return 2;
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
        if (rowIndex === 1 )
        return [ 'cell-pink','font-white', 'textCenter']
        if (rowIndex === 5 )
          return [ 'cell-yellow','font', 'textCenter']
        if (rowIndex === 8 ) {
          return [ 'cell-yellow','font' ]
        }
      }
      return ['font','textCenter']; 
    },
  },
    {field:"gsm1",headerName:"", editable:true,
     cellStyle: {'border-color': 'black'},
     
    cellClass: function (params) {
      var value = params.data.col1;
      if (!!params.node) {
        var rowIndex = params.node.rowIndex;
        if (rowIndex === 0 ) {
          return [ 'cell-header','font', 'textCenter']
        }
        if (rowIndex === 1 )
        return [ 'cell-pink','font-white', 'textCenter']
        if (rowIndex === 5 )
          return [ 'cell-yellow','font', 'textCenter']
        if (rowIndex === 8 ) {
          return [ 'cell-yellow','font' ]
        }
      }
      return ['font'];
    },
    },
    
    { field: "gf",headerName:"Planung/Gf",
      // cellRenderer: CellEditorComponent,
      // cellRendererParams: {},
      editable:true,
      colSpan: function (params) {
        var value = params.data.details;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
          if (rowIndex === 0 )
            return 6;
            if (rowIndex === 1 )
            return 2;
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
          if (rowIndex === 5 )
          return [ 'cell-yellow','font', 'textCenter']
          if (rowIndex === 1 )
          return [ 'cell-pink','font-white', 'textCenter']
          if (rowIndex === 8 || rowIndex == 2) {
            return [ 'cell-yellow','font' ]
          }
        }
        return ['font','textCenter'];
      },
      cellStyle: {'border-color': 'black'},
      enableCellChangeFlash:true, 
      onCellValueChanged: (event) => this.inlineEditgf(event, "gf"),
      
    },
    { field: "gf1",headerName:"",
      // cellRenderer: CellEditorComponent,
      // cellRendererParams: {},
      editable:true,
      width:300,
      cellClass: function (params) {
        var value = params.data.col1;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
          
          
          if (rowIndex === 5 )
          return [ 'cell-yellow','font', 'textCenter']
          
        }
        return ['font'];
      },
      cellStyle: {'border-color': 'black'}
      
    },
    { field: "glr",headerName:"Planung/Gf",
      // cellRenderer: CellEditorComponent,
      // cellRendererParams: {},
      editable:true,
      colSpan: function (params) {
        var value = params.data.details;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
          if (rowIndex === 0 )
            return 6;
            if (rowIndex === 1 )
            return 2;
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
          if (rowIndex === 1 )
          return [ 'cell-pink','font-white', 'textCenter']
          if (rowIndex === 5 )
          return [ 'cell-yellow','font', 'textCenter']
          if (rowIndex === 8  || rowIndex == 2) {
            return [ 'cell-yellow','font' ]
          }
        }
        return ['font','textCenter'];
      },
      cellStyle: {'border-color': 'black'},
      enableCellChangeFlash:true, 
      onCellValueChanged: (event) => this.inlineEditglr(event, "glr"),
      
    },
    { field: "glr1",headerName:"",
      // cellRenderer: CellEditorComponent,
      // cellRendererParams: {},
      editable:true,
      cellClass: function (params) {
        var value = params.data.col1;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
          
          
          if (rowIndex === 5 )
          return [ 'cell-yellow','font', 'textCenter']
          
        }
        return ['font'];
      },
      cellStyle: {'border-color': 'black'}
      
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
  
   this.grid.api.forEachNode((node: any) => {
    
     var value = node.data[col];
     
     if (!!value && !isNaN(value) && node.rowIndex != 1 && node.rowIndex != 0 && node.rowIndex != 5) {
       value = Number(value);
       sum += value;
     }
     // }
   });
  
 
  this.rowData[5].gsm = sum
   // this.grid.api.setRowData(this.rowData);
   

 
   this.grid.api.setGridOption('rowData', this.rowData);



   // this.grid.api.setGridOption('pinnedBottomRowData',res);
   this.grid.api.refreshCells({ force: true });

  //  this.gridApi.refreshCells({ force: true });

 }


 inlineEditgf(event: NewValueParams<any, any>, col:string): void {
  let val = event.newValue;
  let sum = 0;
  if (!!val && !isNaN(val)){
    val = Number(val);
    this.updateFirstTotalRowNodegf(col);
    
}
}

updateFirstTotalRowNodegf(col:string) {

let sum= 0;

 this.grid.api.forEachNode((node: any) => {
  
   var value = node.data[col];
   
   if (!!value && !isNaN(value) && node.rowIndex != 1 && node.rowIndex != 5 && node.rowIndex != 0) {
     value = Number(value);
     sum += value;
   }
   // }
 });

 
 this.rowData[5].gf = sum;
 this.grid.api.setGridOption('rowData', this.rowData);
 this.grid.api.refreshCells({ force: true });


}

inlineEditglr(event: NewValueParams<any, any>, col:string): void {
  let val = event.newValue;
  let sum = 0;
  if (!!val && !isNaN(val)){
    val = Number(val);
    this.updateFirstTotalRowNodeglr(col);
    
}
}

updateFirstTotalRowNodeglr(col:string) {

let sum= 0;

 this.grid.api.forEachNode((node: any) => {
  
   var value = node.data[col];
   
   if (!!value && !isNaN(value) && node.rowIndex != 1 && node.rowIndex != 5 && node.rowIndex != 0) {
     value = Number(value);
     sum += value;
   }
   // }
 });

 const rowNode1 = this.grid.api.getDisplayedRowAtIndex(3);
 this.rowData[5].glr = sum;
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
