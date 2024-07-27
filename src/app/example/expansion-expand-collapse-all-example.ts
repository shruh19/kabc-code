import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, EventEmitter, NO_ERRORS_SCHEMA, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
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
import { ValueGetterParams } from 'ag-grid-community'; 
import { CellEditorComponent } from './cell-editor/cell-editor.component';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ScaleIndicesComponent } from './scale-indices/scale-indices.component';
import { ScaleValueComponent } from './scale-value/scale-value.component';
import { ScaleIndices2Component } from './scale-indices2/scale-indices2.component';
import { IntervalComponent } from './interval/interval.component';
import { ScaleIndices3Component } from './scale-indices3/scale-indices3.component';
import { FinalScaleComponent } from './final-scale/final-scale.component';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, NgxEditorModule } from 'ngx-editor';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import jsPDF from 'jspdf';

pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from "html-to-pdfmake";
import domtoimage from 'dom-to-image';
import { OnSameUrlNavigation } from '@angular/router';
import { PersonalComponent } from './personal/personal.component';
import { ThisReceiver } from '@angular/compiler';



/**
 * @title Accordion with expand/collapse all toggles
 */
@Component({
  selector: 'expansion-expand-collapse-all-example',
  templateUrl: 'expansion-expand-collapse-all-example.html',
  styleUrl: 'expansion-expand-collapse-all-example.css',
  standalone: true,
  providers: [provideNativeDateAdapter()],
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
    CellEditorComponent,
    IndexComponent,
    ScaleIndicesComponent,
    ScaleValueComponent,
    NgxEditorModule,
    ScaleIndices2Component,IntervalComponent,ScaleIndices3Component,FinalScaleComponent,PersonalComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  encapsulation: ViewEncapsulation.None
  
})
export class ExpansionExpandCollapseAllExample implements OnInit{
  @ViewChild('test')
  pdfTable!: ElementRef;
  userDetails:any
  pdfContent:any;
  
  defaultColDef = {
    headerClass: ['headerClass'],
  }
  range(): string | import("ag-grid-community").ValueSetterFunc<any, any> | undefined {
    
    return '12';
  }
  cellValue:any=0;
  @Output() newItemEvent = new EventEmitter<any>();
  public domLayout: any = "autoHeight";
  inlineEdit(event: NewValueParams<any, any>): void {
    this.cellValue = event.newValue;
    this.cellValue = this.rangeLokkup.get(Number(event.newValue));
   console.log(this.cellValue);
   event.data.Range=this.cellValue;
   event.api.refreshCells({
    force: true
});
  }
 

  

  public frameworkComponents: any = {
    cellEditor: CellEditorComponent,
  };
  
  value = 'test';

  @ViewChild(CellEditorComponent)
  inputValue!: CellEditorComponent;
  // Row Data: The data to be displayed.
   rangeLokkup= new Map([]);
   constructor(){
    this.rangeLokkup.set(1,0.13);
    this.rangeLokkup.set(2,0.4);
    this.rangeLokkup.set(3,0.93);
    this.rangeLokkup.set(4,2.7);
    this.rangeLokkup.set(5,4.46);
    this.rangeLokkup.set(6,8.85);
    this.rangeLokkup.set(7,15.87);
    this.rangeLokkup.set(8,25.78);
    this.rangeLokkup.set(9,36.32);
    this.rangeLokkup.set(10,50);
    this.rangeLokkup.set(11,65.54);
    this.rangeLokkup.set(12,75.6);
    this.rangeLokkup.set(13,84.13);
    this.rangeLokkup.set(14,91.15);
    this.rangeLokkup.set(15,95.05);
    this.rangeLokkup.set(16,97.73);
    this.rangeLokkup.set(17,99.18);
    this.rangeLokkup.set(18,99.59);
    this.rangeLokkup.set(19,99.86);
   }
  
 rowData = [
  { Untertests: "1 Atlantis", Rohwert: "", Skalenwert: "", Range: '' },
  { Untertests: "4 Geschichten ergänzen", Rohwert: "", Skalenwert: "", Range: '' },
  { Untertests: "5 Zahlen nachsprechen", Rohwert: "", Skalenwert: "", Range: '' },
  { Untertests: "6 Gestaltschließen", Rohwert: "", Skalenwert: "", Range: '' },
  { Untertests: "7 Rover", Rohwert: "", Skalenwert: "", Range: '' },
  { Untertests: "8 Atlantis AbrufnachIntervall", Rohwert: "", Skalenwert: "", Range: '' },
  { Untertests: "9 Wortschatz", Rohwert: "", Skalenwert: "", Range: '' },
  { Untertests: "10 Wort- und Sachwissen", Rohwert: "", Skalenwert: "", Range: '' },
  { Untertests: "11 Symbole", Rohwert: "", Skalenwert: "", Range: '' },
  { Untertests: "12 Dreiecke", Rohwert: "", Skalenwert: "", Range: '' },
  { Untertests: "13 Bausteine zählen", Rohwert: "", Skalenwert: "", Range: '' },
  { Untertests: "14 Wortreihe", Rohwert: "", Skalenwert: "", Range: '' },
  { Untertests: "15 Muster ergänzen", Rohwert: "", Skalenwert: "", Range: '' },
  { Untertests: "16 Handbewegungen", Rohwert: "", Skalenwert: "", Range: '' },
  { Untertests: "17 Symbole – Abruf nachIntervall", Rohwert: "", Skalenwert: "", Range: '' },
  { Untertests: "18 Rätsel", Rohwert: "", Skalenwert: "", Range: '' },
];

// Column Definitions: Defines the columns to be displayed.
colDefs: ColDef[] = [
  { field: "Untertests", 
  width:300,
  cellClass: function (params) {
    var value = params.data.col1;
    if (!!params.node) {
      var rowIndex = params.node.rowIndex;
      if (rowIndex === 0 ) {
        return [ 'cell1-bk']
      }
      else if (rowIndex === 1 ) {
        return [ 'cell2-bk']
      }
      else if (rowIndex === 2 ) {
        return [ 'cell3-bk']
      }
      else if (rowIndex === 3 ) {
        return [ 'cell4-bk']
      }
      else if (rowIndex === 4 ) {
        return [ 'cell5-bk']
      }
      else if (rowIndex === 5 ) {
        return [ 'cell6-bk']
      }
      else if (rowIndex === 6 ) {
        return [ 'cell7-bk']
      }
      else if (rowIndex === 7 ) {
        return [ 'cell8-bk']
      }
      else if (rowIndex === 8 ) {
        return [ 'cell9-bk']
      }
      else if (rowIndex === 9 ) {
        return [ 'cell10-bk']
      }
      else if (rowIndex === 10 ) {
        return [ 'cell11-bk']
      }
      else if (rowIndex === 11 ) {
        return [ 'cell12-bk']
      }
      else if (rowIndex === 12 ) {
        return [ 'cell13-bk']
      }
      else if (rowIndex === 13 ) {
        return [ 'cell14-bk']
      }
      else if (rowIndex === 14 ) {
        return [ 'cell15-bk']
      }
      else if (rowIndex === 15 ) {
        return [ 'cell16-bk']
      }
      
    }
    return [ ];
  },
},
  
  { field: "Rohwert",
    // cellRenderer: CellEditorComponent,
    // cellRendererParams: {},
    editable:true,
    cellClass:['textCenter'],
     cellStyle: {'border-right': '2px solid #081F5C'},
    
  },
  { field: "Skalenwert",
  editable:true,
  cellClass:['textCenter'],
  enableCellChangeFlash:true, cellStyle: {'border-right': '2px solid #081F5C'},
  // cellRenderer: CellEditorComponent,
  // cellRendererParams: {},
  onCellValueChanged: (event) => this.inlineEdit(event),
  
  },

  { field: "Range",  editable:true,
  cellClass:['textCenter'],
  enableCellChangeFlash:true, cellStyle: {'border-right': '2px solid #081F5C'},
  // valueGetter: p =>this.onCellValueChanged(p),
  // valueSetter:p=>this.getValue(p)
},

];
scaleIndices:any=[]
public getScaleIndices(event:any){
  console.log("getScaleIndices"+event);
  this.scaleIndices = event;

}
public getUserData(event:any){
  console.log("userDetails"+event);
  this.userDetails = event;

}

@ViewChild('tablepdf') el!: ElementRef;

public generatePdf() {

 this.toPdf();
    
  
//  let pdfContent = document.getElementById('pdfContent');
//   if(!!pdfContent){

//     pdfContent.innerHTML = this.getPdfContent();
//   } 



  
  
  //{content:html}
 
  // pdfMake.createPdf(dd).open();  
}



onCellValueChanged(params:any) {
  console.log(params)
}
getValue(params:any) {
  console.log(params)
  return true;
}


  editor: Editor = new Editor;
  form:any;

  public getPdfBtnClick(){
    let jsonDoc = this.getPdfContentData();
this.form = new FormGroup({
  editorContent: new FormControl(
    { value: jsonDoc, disabled: false },
    Validators.required()
  ),
});
    let pdfContent = document.getElementById('content');
  if(!!pdfContent){
    pdfContent.style.display='block'
  }
  }

 

ngOnInit(): void {
   
  let jsonDoc = this.getPdfContentData();
this.form = new FormGroup({
  editorContent: new FormControl(
    { value: jsonDoc, disabled: false },
    Validators.required()
  ),
});
}
getHeading(text:string) {
  return  {
    type: "heading",
    
    content: [
      {
        type: "text",
        text: text
      }
    ]
  };
}
getPara1(text:string){
 return  {
    type: "paragraph",
    
    content: [
      {
        type: "text",
        text: text,
      },
    ]
  }
}

getBoldText(boldText:string){
  if(!!boldText){
  let jsdoc =  {
    type: "text",
    marks: [
      {
        type: "strong"
      }
    ],
    text: boldText
  };
  return jsdoc;
}
return '';
}
getText(text:string){
  if(text){
    return  {
      type: "text",
      text: text
    };
  }
  return '';
}
getBoldTextAndPara(boldText1:string, text:string,boldText2:string, text2:string, boldText3:string, text3:string, month:string, year:string){
  return  {
        type: "paragraph",
       
        content: [
         this.getBoldText(boldText1),
          this.getText(text),
          this.getBoldText(boldText2),
          this.getText(text2),
          this.getBoldText(boldText3),
          this.getText(text3),
          this.getText("(KABC-II; Deutsche Übersetzung und Adaptation)getestet. Das Testalter betrug zum Testzeitpunkt "),
          this.getBoldText(year),
          this.getText(" Jahre und "),
          this.getBoldText(month),
          this.getText(" Monate."),
        ]
      }
    
  
}

getBoldTextAndPara2( text:string,boldText2:string, text2:string, boldText3:string, text3:string){
  return  {
   
      
        type: "paragraph",
       
        content: [
         
          this.getText(text),
          this.getBoldText(boldText2),
          this.getText(text2),
          this.getBoldText(boldText3),
          this.getText(text3),
        ]
      
    
  }
}
  getPdfContentData() {
    return {
      type: "doc",
      content: [
       this.getHeading("Kurzreport"),
      //  this.getPara1("This is a editable text"),
      // this.getBoldTextAndPara("This is a bold text", "This is a editable text") ,
      this.getPersonalData()[0],
     
      this.getPersonalData()[1],
      this.getPdfPara1(),
      this.getPdfPara2(),
      this.getPdfPara3(),
      this.getPdfPara4(),
      this.getPdfPara5(),
      this.getPara1("Fluid-Kristallin Index "),
      this.getPdfPara6(),
      ]
    };
  }

getPersonalData(){
  let name="Shruthi";
  let dob = 'DOB';
  let testDate = 'testDate';
  let year = 'YEAR';
  let month = 'MONTH';
  if(this.userDetails){
  if(this.userDetails.name)
  name = this.userDetails.name.toUpperCase();

  
  if(this.userDetails.dob){
  dob = this.userDetails.dob;

  }
  
  if(this.userDetails.testdate){
  testDate = this.userDetails.testdate;

  }

  if(this.userDetails.year){
  year = this.userDetails.year;

  }
  
  if(this.userDetails.month){
    month = this.userDetails.month;

  }
}

let doc = [];
      
 const  para1 = this.getBoldTextAndPara(name, "  geboren am ", dob, " wurde am ", testDate," mit der Kaufmann Assessment Battery for Children - Second Edition",month,year);
 
 doc.push(para1);
  doc.push(this.getText("Dabei wurden die folgenden Ergebnisse erzielt:"));
  return doc;

}

getPdfPara1(){
  let name="Shruthi";
  if(this.userDetails){
  if(this.userDetails.name)
  name = this.userDetails.name.toUpperCase();
  }

  let confInterval ='conf';
  if(this.scaleIndices.length>0){
  confInterval = this.scaleIndices[0].scaleInterval;
  
  }
  
  let confValue ='conf';
  if(this.scaleIndices.length>0){
  confValue = this.scaleIndices[0].scaleValue;
 
  }
  let confRange ='conf';
  if(this.scaleIndices.length>0){
   confRange = this.scaleIndices[0].range;

  }

  let js = {
   
      
    type: "paragraph",
   
    content: [
     
      this.getText("1. Sequentiell/Gsm: Die Skala Kurzzeitgedächtnis (Gsm) erfasst die Aufnahme und Bereithaltung von Informationen in unmittelbarer Bewusstheit und die Nutzung dieser Information innerhalb weniger Sekunden, bevor sie vergessen wird "),
      this.getBoldText(name),
      this.getText(" erzielte in diesem Index einen Indexwert von "),
      this.getBoldText(confValue),
      this.getText(" (95%-Vertrauensintervall: "),
      this.getBoldText(confInterval),
      this.getText(") Dieses Ergebnis entspricht einem Prozentrang von "),
      this.getBoldText(confRange),
      this.getText(' . Dabei handelt es sich um ein durchschnittliches Ergebnis.')
    ]
  

};
return js;
}

getPdfPara2(){
  let name="Shruthi";
  if(this.userDetails){
  if(this.userDetails.name)
  name = this.userDetails.name.toUpperCase();
  }
  let gvconfInterval='value';
  if(this.scaleIndices.length>0){
  gvconfInterval = this.scaleIndices[1].scaleInterval;
  gvconfInterval = '<b>'+gvconfInterval+'</b>';
  }
  let gvconfValue='value';
  if(this.scaleIndices.length>0){ 
  gvconfValue = this.scaleIndices[1].scaleValue;
  gvconfValue = '<b>'+gvconfValue+'</b>';
  }
  let gvconfRange=  'value';
  if(this.scaleIndices.length>0){
  gvconfRange = this.scaleIndices[1].range;
  gvconfRange = '<b>'+gvconfRange+'</b>';
  }


 let js = {
   
      
    type: "paragraph",
   
    content: [
     
      this.getText('2. Simultan/Gv: Die Skala Visuelle Verarbeitung (Gv) erfasst die grundlegende Fähigkeit zu Wahrnehmung, Speicherung sowie Handhabung von und Denken mit visuellen Mustern. ' ),
      this.getBoldText(name),
      this.getText(' erzielte in diesem Index einen Indexwert von  '),
      this.getBoldText(gvconfValue),
      this.getText(' (95%-Vertrauensintervall: '),
      this.getBoldText(gvconfInterval),
      this.getText('). Dieses Ergebnis entspricht einem Prozentrang von '),
      this.getBoldText(gvconfRange),
      this.getText('. Dabei handelt es sich um ein überdurchschnittliches Ergebnis.'),

    ]
  

}
return js;
}

getPdfPara3(){
  let name="Shruthi";
  if(this.userDetails){
  if(this.userDetails.name)
  name = this.userDetails.name.toUpperCase();
  }
  
  let glrconfInterval='value';
  if(this.scaleIndices.length>0){
  glrconfInterval = this.scaleIndices[2].scaleInterval;
  glrconfInterval = '<b>'+glrconfInterval+'</b>';
  }
  let glrconfValue='value';
  if(this.scaleIndices.length>0){
  glrconfValue = this.scaleIndices[2].scaleValue;
  glrconfValue = '<b>'+glrconfValue+'</b>';
  }
  let glrconfRange= 'value';
  if(this.scaleIndices.length>0){
  glrconfRange = this.scaleIndices[2].range;
  glrconfRange = '<b>'+glrconfRange+'</b>';
  }




 let js = {
   
      
    type: "paragraph",
   
    content: [
     
      this.getText('3. Lernen/Glr: Die Skala Langzeitgedächtnis und -erinnerung (Glr) erfasst die Fähigkeit zur Speicherung von neu oder früher gelernten Informationen und deren effektiven Wiederabruf. ' ),
      this.getBoldText(name),
      this.getText(' erzielte in diesem Index einen Indexwert von  '),
      this.getBoldText(glrconfValue),
      this.getText(' (95%-Vertrauensintervall: '),
      this.getBoldText(glrconfInterval),
      this.getText('). Dieses Ergebnis entspricht einem Prozentrang von '),
      this.getBoldText(glrconfRange),
      this.getText('. Dabei handelt es sich um ein überdurchschnittliches Ergebnis.'),

    ]
  

}
return js;
}
getPdfPara4(){
  let name="Shruthi";
  if(this.userDetails){
  if(this.userDetails.name)
  name = this.userDetails.name.toUpperCase();
  }
  
  let gfconfInterval='value';
  if(this.scaleIndices.length>0){
  gfconfInterval = this.scaleIndices[3].scaleInterval;
  gfconfInterval = '<b>'+gfconfInterval+'</b>';
  }
  let gfconfValue= 'value';
  if(this.scaleIndices.length>0){
  gfconfValue = this.scaleIndices[3].scaleValue;
  gfconfValue = '<b>'+gfconfValue+'</b>';
  }
  let gfconfRange= 'value';
  if(this.scaleIndices.length>0){
  gfconfRange = this.scaleIndices[3].range;
  gfconfRange = '<b>'+gfconfRange+'</b>';
  }



 let js = {
   
      
    type: "paragraph",
   
    content: [
     
 
  this.getText('4. Planung/Gf/: Die Skala Kristalline Fähigkeit (Gc) erfasst das Ausmaß spezifischen Wissens, welches ein Mensch innerhalb einer Kultur erworben hat, und die Fähigkeit, dieses Wissen effektiv anzuwenden. ' ),
      this.getBoldText(name),
      this.getText(' erzielte in diesem Index einen Indexwert von  '),
      this.getBoldText(gfconfValue),
      this.getText(' (95%-Vertrauensintervall: '),
      this.getBoldText(gfconfInterval),
      this.getText('). Dieses Ergebnis entspricht einem Prozentrang von '),
      this.getBoldText(gfconfRange),
      this.getText('. Dabei handelt es sich um ein überdurchschnittliches Ergebnis.'),

    ]
  

}
return js;
}

getPdfPara5(){
  let name="Shruthi";
  if(this.userDetails){
  if(this.userDetails.name)
  name = this.userDetails.name.toUpperCase();
  }
  
  let gcconfInterval='value';
  let gcconfValue='value';
  let gcconfRange='value';
  if(this.scaleIndices.length>0){
  gcconfInterval = this.scaleIndices[4].scaleInterval;
  gcconfInterval = '<b>'+gcconfInterval+'</b>';
  
   gcconfValue = this.scaleIndices[4].scaleValue;
  gcconfValue = '<b>'+gcconfValue+'</b>';
  
   gcconfRange = this.scaleIndices[4].range;
  gcconfRange = '<b>'+gcconfRange+'</b>';
  }



 let js = {
   
      
    type: "paragraph",
   
    content: [
     
 
  this.getText(  '5. Wissen/Gc: Die Skala Kristalline Fähigkeit (Gc) über Allgemeinwissen und Interesse und Neugier, mehr darüber zu erfahren. Interesse, neue Leute kennenzulernen und neue Dinge zu lernen. '   ),
      this.getBoldText(name),
      this.getText(' erzielte in diesem Index einen Indexwert von '),
      this.getBoldText(gcconfValue),
      this.getText(' (95%-Vertrauensintervall: '),
      this.getBoldText(gcconfInterval),
      this.getText('). Dieses Ergebnis entspricht einem Prozentrang von '),
      this.getBoldText(gcconfRange),
      this.getText('. Dabei handelt es sich um ein überdurchschnittliches Ergebnis.'),

    ]
  

}
return js;
}

getPdfPara6(){
  let name="Shruthi";
  if(this.userDetails){
  if(this.userDetails.name)
  name = this.userDetails.name.toUpperCase();
  }
  
  
  let fkiconfInterval='value';
  let fkiconfValue= 'value' ;
  let fkiconfRange='value';
  if(this.scaleIndices.length>0){
   fkiconfInterval = this.scaleIndices[5].scaleInterval;
  fkiconfInterval = '<b>'+fkiconfInterval+'</b>';
   fkiconfValue = this.scaleIndices[5].scaleValue;
  fkiconfValue = '<b>'+fkiconfValue+'</b>';
   fkiconfRange = this.scaleIndices[5].range;
  fkiconfRange = '<b>'+fkiconfRange+'</b>';
  }


 let js = {
   
      
    type: "paragraph",
   
    content: [
      
      this.getText('Der Fluid-Kristallin-Index (FKI) stellt das zusammenfassende Maß für die intellektuellen Verarbeitungsprozesse dar,  wie sie im CHC Modell definiert sind. Insgesamt wurde ein Standardwert von '),
      this.getBoldText(fkiconfValue),
      this.getText(' (90%-Vertrauensintervall: '),
      this.getBoldText(fkiconfInterval),
      this.getText(')   erzielt. Dieses Ergebnis entspricht einem Prozentrang von '),
      this.getBoldText(fkiconfRange),
      this.getText('. Dabei handelt es sich um ein überdurchschnittliches Ergebnis.'),

    ]
  

}
return js;
}

public getPdfData(){
 

  var html = '<div>'

  html+='<br /><br /><div class="para3">';

  html+="<div style='height:150px'></div>";
  html+='<br /><br /><br /><br /></div><div class="para3">'+
  '<div><i>Sonja Pfeiffer</i></div>'+
  '<div><i>Dipl. Sozialpäd./ Dipl. Sozarb.</i></div>'+
  '<i><div>Praxis für Tiefenpsychologisch fundierte Kinder- und Jugendlichenpsychtherapie und Psychoanalyse</div>'+
  '<div>Einzeltherapie und Gruppentherapie</div></i>'+
  '</div>';
  
  
  html+='</div>';
  
  //const doc = new jsPDF();
  
  // const pdfTable = this.pdfTable.nativeElement;
  // var img = htmlToPdfmake(pdfTable.innerHTML);
  // const res = htmlToPdfmake(html);
  
  // const content ={content:res};
  return html;
}
  async toPdf() {
    const doc = new jsPDF("p", "mm", "a4");
    
  let dashboard = document.getElementById('dashboard1');  
  
  if(!!dashboard){
    doc.setPage(1);
  const dashboardHeight = dashboard.clientHeight;
  const dashboardWidth = dashboard.clientWidth;
  const options = { background: 'white', width: dashboardWidth, height: 1800 };
  
  await this.domToImage(dashboard,options,doc);
  }
  
   dashboard = document.getElementById('dashboard2');  
  
  if(!!dashboard){
  doc.addPage();
  const dashboardHeight = dashboard.clientHeight;
  const dashboardWidth = dashboard.clientWidth;
  const options = { background: 'white', width: dashboardWidth, height: 1800 };
  
  await this.domToImage(dashboard,options,doc);

  }

  dashboard = document.getElementById('dashboard3');  
  
  if(!!dashboard){
  doc.addPage();
  const dashboardHeight = dashboard.clientHeight;
  const dashboardWidth = dashboard.clientWidth;
  const options = { background: 'white', width: dashboardWidth, height: 1700 };
  
  await this.domToImage(dashboard,options,doc);
  }
  

  let pdfContent = document.getElementById('content');
  if(!!pdfContent){
    doc.addPage();
   // pdfContent.innerHTML = this.getPdfContent();
    //pdfContent.style.display='block'
    const dashboardHeight = pdfContent.clientHeight;
  const dashboardWidth = pdfContent.clientWidth;
  const options = { background: 'white', width: 1300, height: 1800 };
  
    await this.domToImage(pdfContent,options,doc);
    }

  let name ="test";
    if(this.userDetails.name){
      name = this.userDetails.name;
    } 
    this.footer(doc);
   doc.save(name+'.pdf');
   
  // 

}

async domToImage(ele:any,options:any,doc:jsPDF){
  await domtoimage.toPng(ele, options).then((imgData) => {
       
    const imgProps = doc.getImageProperties(imgData);
    const pdfWidth = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();
    let pdfHeight = (imgProps.height * pdfWidth)/ (imgProps.width);
    // pdfHeight =2;

    doc.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    
   
  
 
    
});
}
gridApi: any;
public onGridReady(params: any) {
  this.gridApi = params.api;
  this.gridApi.sizeColumnsToFit();
  // this.gridApi.autoSizeAllColumns();
}

footer(doc:any){ 
  const pageCount = doc.internal.getNumberOfPages()

  doc.setFont('helvetica', 'italic')
  doc.setFontSize(8)
  for (var i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    var todayDate=new Date();
        var ageyear = todayDate.getFullYear()
    doc.text(ageyear +'  - TP/AL PRAXIS, Sonja Pfeiffer, 55483 Horbruch', 10, 287, {
      align: 'left'
    });
    doc.text('Page ' + String(i) + ' of ' + String(pageCount), doc.internal.pageSize.width-20, 287, {
      align: 'right'
    });
  }
}

}






