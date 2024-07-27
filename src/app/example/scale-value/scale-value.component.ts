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
import { ColDef, NewValueParams} from 'ag-grid-community'; // Column Definition Type Interface
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scale-value',
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
  templateUrl: './scale-value.component.html',
  styleUrl: './scale-value.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ScaleValueComponent {
  @ViewChild('scaleGrid') grid!: AgGridAngular;
  public domLayout: any = "autoHeight";

  rowData = [
    { sv1: 'Simultan/GV', sv3: 'Wissen/Gc'},
    { sv1: 'Skalewerte 7-12 J. 13-18 J.', sv3: 'Skalewerte'},
    { sv1: '', sv2: '7.Rover', sv3: '', sv4: '10.Wort- und Sachwissen' },
    { sv1: '', sv2: '12.Dreiecke', sv3: '', sv4: '18.Rätsel' },
    { sv1: '', sv2: ' 13.Bausteinzählen ', gf: '', sv4: '' },
    { sv1: 0, sv2: 'Summe', sv3: 0, sv4: 'Summe' },
   
  ];
  
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "sv1",headerName:"Skalewerte", editable:true, 
     cellStyle: {'border-color': 'black'},
    enableCellChangeFlash:true, 
    onCellValueChanged: (event) => this.inlineEdit(event, "sv1"),
    colSpan: function (params) {
      var value = params.data.details;
      if (!!params.node) {
        var rowIndex = params.node.rowIndex;
        if (rowIndex === 0 )
          return 2;
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
          return [ 'cell-maroon','font', 'textCenter']
        }
        if (rowIndex === 1 ) {
          return [ 'font', 'textCenter']
        }
        if (rowIndex === 5 )
        return [ 'cell-yellow','font', 'textCenter']
        
      }
      return ['font','textCenter'];
    },

  },
    {field:"sv2",headerName:"", editable:true,
     cellStyle: {'border-color': 'black'},
     cellClass: function (params) {
      var value = params.data.col1;
      if (!!params.node) {
        var rowIndex = params.node.rowIndex;
        if (rowIndex === 0 ) {
          return [ 'cell-maroon','font', 'textCenter']
        }
        if (rowIndex === 5 )
        return [ 'cell-yellow','font', 'textCenter']
        
      }
      return ['font'];
    },
   
  },
    
    { field: "sv3",headerName:"Skalewerte",
      // cellRenderer: CellEditorComponent,
      // cellRendererParams: {},
      editable:true,
      
      cellStyle: {'border-color': 'black'},
      enableCellChangeFlash:true, 
      onCellValueChanged: (event) => this.inlineEdit(event, "sv3"),
      colSpan: function (params) {
        var value = params.data.details;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
          if (rowIndex === 0 )
            return 2;
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
            return [ 'cell-maroon','font', 'textCenter']
          }
          if (rowIndex === 1 ) {
            return [ 'font', 'textCenter']
          }
          if (rowIndex === 5 )
          return [ 'cell-yellow','font', 'textCenter']
          
        }
        return ['font','textCenter'];
      },
      
    },
    { field: "sv4",headerName:"",
      // cellRenderer: CellEditorComponent,
      // cellRendererParams: {},
      editable:true,
      cellClass: function (params) {
        var value = params.data.col1;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
          if (rowIndex === 0 ) {
            return [ 'cell-maroon','font', 'textCenter']
          }
          if (rowIndex === 1 ) {
            return [ 'font', 'textCenter']
          }
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
     
     if (!!value && !isNaN(value) && node.rowIndex != 5 && node.rowIndex != 0 && node.rowIndex != 1) {
       value = Number(value);
       sum += value;
     }
     // }
   });
  
   const rowNode1 = this.grid.api.getDisplayedRowAtIndex(3);
   if(col == "sv1")
   this.rowData[5].sv1 = sum;
   else
    this.rowData[5].sv3 = sum;
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
