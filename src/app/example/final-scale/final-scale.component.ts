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
  selector: 'app-final-scale',
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
  templateUrl: './final-scale.component.html',
  styleUrl: './final-scale.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FinalScaleComponent {
  public domLayout: any = "autoHeight";
  rowData = [
    { fscale1: 'Analyse der Skalenindices', },
    { fscale1: '  ', fscale2: '', fscale3: 'Untertest Skalenwerte', fscale4: '',fscale5:'',fscale6:'',fscale7:'NormativeSchwäche (NSC) oder NormativeStärke (NST)' },
    { fscale1: 'Skala (Standardwert)   ', fscale2: 'Skalenindices', fscale3: 'Hoch', fscale4: 'Niedrig',fscale5:'Spann-weite',fscale6:'Interpre-tierbar',fscale7:'< 85 (NSC) > 115 (NST)' },
    { fscale1: 'Sequentiell/Gsm   ', fscale2: '', fscale3: '', fscale4: '',fscale5:'',fscale6:'',fscale7:'' },
    { fscale1: 'Simultan/Gv  ', fscale2: '', fscale3: '', fscale4: '',fscale5:'',fscale6:'',fscale7:'' },
    { fscale1: 'Lernen/Glr      ', fscale2: '', fscale3: '', fscale4: '',fscale5:'',fscale6:'',fscale7:'' },
    { fscale1: 'Planung/Gf     ', fscale2: '', fscale3: '', fscale4: '',fscale5:'',fscale6:'',fscale7:'' },
    { fscale1: 'Wisssen/Gc ', fscale2: '', fscale3: '', fscale4: '',fscale5:'',fscale6:'',fscale7:'' },
    { fscale1: 'Mittelwert', fscale2: 0, fscale3: 0, fscale4: 0,fscale5:0,fscale6:0,fscale7:0 },
   
   
  ];
  @ViewChild('finalGrid') grid!: AgGridAngular;
  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "fscale1",headerName:"Skala (Standardwert)", editable:true, 
    width:100,
     cellStyle: {'border-color': 'black','white-space': 'normal','word-wrap': 'break-word'},
    colSpan: function (params) {
      var value = params.data.details;
      if (!!params.node) {
        var rowIndex = params.node.rowIndex;
        if (rowIndex === 0 )
          return 9;
         
      }
      return 1;
      
    },
    cellClass: function (params) {
      var value = params.data.col1;
      if (!!params.node) {
        var rowIndex = params.node.rowIndex;
        if (rowIndex === 0 ) {
          return [ 'cell-green1','font', 'textCenter']
        }
       
      }
      return ['font'];
    },
  },
    {field:"fscale2",headerName:"Skalenindices", editable:true,
     cellStyle: {'border-color': 'black'},
     width:130,
    enableCellChangeFlash:true, 
    cellClass:['font','textCenter'],
    onCellValueChanged: (event) => this.inlineEdit(event, "fscale2"),
  
  },
    
    { field: "fscale3",headerName:"Hoch",
      // cellRenderer: CellEditorComponent,
      // cellRendererParams: {},
      editable:true,
      width:100,
      cellClass:['font','textCenter'],
      colSpan: function (params) {
        var value = params.data.details;
        if (!!params.node) {
          var rowIndex = params.node.rowIndex;
          if (rowIndex === 1 )
            return 4;
           
        }
        return 1;
        
      },
      cellStyle: {'border-color': 'black','white-space': 'normal','word-wrap': 'break-word'}
      
    },
    { field: "fscale4",headerName:"Niedrig",
      // cellRenderer: CellEditorComponent,
      // cellRendererParams: {},
      editable:true,
      width:100,
     
      cellClass:['font','textCenter'],
      cellStyle: {'border-color': 'black'}
      
    },
    { field: "fscale5",headerName:"Spann-weite",
      // cellRenderer: CellEditorComponent,
      // cellRendererParams: {},
      width:100,
      editable:true,
      cellClass:['font','textCenter'],
      cellStyle: {'border-color': 'black'}
      
    },
    { field: "fscale6",headerName:"Interpre-tierbar",
      // cellRenderer: CellEditorComponent,
      // cellRendererParams: {},
      editable:true,
      width:100,
      cellClass:['font','textCenter'],
      cellStyle: {'border-color': 'black'}
      
    },
    { field: "fscale7",headerName:"NormativeSchwäche (NSC)oder NormativeStärke (NST)",
      // cellRenderer: CellEditorComponent,
      // cellRendererParams: {},
      editable:true,
      cellClass:['font','textCenter'],
      autoHeight: true,
      width:120,
      cellStyle: {'border-color': 'black','white-space': 'normal','word-wrap': 'break-word'},
      
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
     
     if (!!value && !isNaN(value) && (node.rowIndex != 0 && node.rowIndex != 1 && node.rowIndex != 8)) {
       value = Number(value);
       sum += value;
     }
     // }
   });
  
   const rowNode1 = this.grid.api.getDisplayedRowAtIndex(3);
  
   this.rowData[8].fscale2 = sum / (this.rowData.length-4);
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





