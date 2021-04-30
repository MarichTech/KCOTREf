import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class AppraisalPdfService {

  constructor(private http: HttpClient) { }

   getAppraisalApplicationPDF(FullNames,IdNo,PinNo,PostalAddress,Email,Telephone, TypeofBusiness,BeenInOperation,BeenInOperationTime,IsRegistered,CompanyBForm,TradeLicense,
    TypeofBuilding,Condition,OwnBuilding,BuildingOwnerName,BuildingOwnerAddress,BuildingRent,LayoutAndCleanliness,CashBook,CreditLedger,
           StockBooks,OtherBooks,OtherBooksDescription,IsBooksUpToDate,WhoKeepsBooks,IsPersonalDrawingsRecorded,HaveBusinessBank,
           BankName,BankBranch,A1,A2,A3,A4,A5,A6,B1,B2,B3,B4,B5,B6,C1,C2,C3,C4,C5,C6,ABC1,ABC2,ABC3,ABC4,ABC5,ABC6,D1,D2,D3,D4,
           D5,D6,ABCD1,ABCD2,ABCD3,ABCD4,ABCD5,ABCD6,E1,E2,E3,E4,E5,E6,F1,F2,F3,F4,F5,F6,EF1,EF2,EF3,EF4,EF5,EF6,S1,S2,S3,S4,S5,S6,MS1,MS2,MS3,MS4,MS5,MS6,
           OS1,OS2,OS3,OS4,OS5,OS6,PM1,PM2,PM3,PM4,PM5,PM6,GBC1,GBC2,GBC3,GBC4,GBC5,GBC6,CS1,CS2,CS3,CS4,CS5,CS6,DE1,DE2,DE3,DE4,DE5,DE6,AF1,AF2,AF3,AF4,AF5,AF6,
           OE1,OE2,OE3,OE4,OE5,OE6,GH1,GH2,GH3,GH4,GH5,GH6,SecurityType,ApproximateValOfSecurity,AdequacyofSecurity,Competitors,GeneralSafety,Regulations,TechnologyUsed,
           DateofVisit,PurposeActualScore,PurposeRemarks,CharacterActualScore,CharacterRemarks,SecurityActualScore,SecurityRemarks,AbilityActualScore,AbilityRemarks,
           AmountActualScore,AmountRemarks,TotalActualScore,TotalRemarks,BoardRecommendations,RecommName,RecommDate){

 const documentDefinition = {
    content: [
      {
        text: 'KWALE COUNTY TRADE REVOLVING FUND',
        bold: true,
        fontSize: 18,
        alignment: 'center',
        margin: [0, 0, 0, 20]
      },
      {
        
        text: 'APPRAISAL FORM',
        bold: true,
        fontSize: 12,
        alignment: 'center',
        margin: [0, 0, 0, 20]
      },
      {
        text: 'A. PERSONAL DETAILS',
        bold: true,
        fontSize: 12,
        margin: [0, 0, 0, 10]
      },
      {
        columns:[
          
          {
            style: 'normal1',
            text:[
            {text:'Full name of applicant  '},
            {text:FullNames, style: 'reply'}
             ]
          },
          {
            style: 'normal1',
            text:[
            {text:'address    '},
            {text:PostalAddress, style: 'reply'}
             ]
          }
          
        ]
      },   
      {
        columns:[
          {
            style: 'normal1',
            text:[
            {text:'I.D. Number    '},
            {text:IdNo, style: 'reply'}
             ]
          },
          {
            style: 'normal1',
            text:[
            {text:'P.I.N.No   '},
            {text:PinNo, style: 'reply'}
             ]
          }
        ]
      },  
      {
        columns:[
          {
            style: 'normal1',
            text:[
            {text:'Postal Address   '},
            {text:PostalAddress, style: 'reply'}
             ]
          },
          {
            style: 'normal1',
            text:[
            {text:'Email    '},
            {text:Email, style: 'reply'}
             ]
          }
        ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Telephone No   '},
        {text:Telephone, style: 'reply'}
         ]
      },
      {
        text: 'B.BUSINESS DETAILS',
        bold: true,
        fontSize: 12,
        margin: [0, 0, 0, 10]
      },
      {
        style: 'normal1',
        text:[
        {text:'Type of business   '},
        {text:TypeofBusiness, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Telephone No   '},
        {text:Telephone, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'How long has the business been in existence?   '},
        {text:BeenInOperation +' '+BeenInOperationTime, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Individual/company/co-operative/Association  '},
        {text:CompanyBForm, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Is the business registered?  '},
        {text:IsRegistered, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Trade license /Permit    '},
        {text:TradeLicense, style: 'reply'}
         ]
      },
      {
        text: 'Business premises',
        bold: true,
        fontSize: 12,
        margin: [0, 0, 0, 10]
      },
      {
        columns:[
          {
            style: 'normal1',
            text:[
            {text:'Type of Building   '},
            {text:TypeofBuilding, style: 'reply'}
             ]
          },
          {
            style: 'normal1',
            text:[
            {text:'Condition    '},
            {text:Condition, style: 'reply'}
             ]
          }
        ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Owned or Rented    '},
        {text:OwnBuilding, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'If rented, name and address of owner (landlord)    '},
        {text:BuildingOwnerName+'  '+BuildingOwnerAddress, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Amount of rent (if rented) Ksh   '},
        {text:BuildingRent, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Layout and cleanliness   '},
        {text:LayoutAndCleanliness, style: 'reply'}
         ]
      },
      {
        text: 'Business Records:',
        bold: true,
        fontSize: 12,
        margin: [0, 0, 0, 10]
      },
      {
        columns:[
          {
            style: 'normal1',
            text:[
            {text:'Cash Book  '},
            {text:CashBook, style: 'reply'}
             ]
          },
          {
            style: 'normal1',
            text:[
            {text:'Credit Ledger    '},
            {text:CreditLedger, style: 'reply'}
             ]
          }
        ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Stock Books   '},
        {text:StockBooks, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Others   '},
        {text:OtherBooks +' '+OtherBooksDescription,  style: 'reply'}
         ]
         
      },
      {
        style: 'normal1',
        text:[
        {text:'Are Books kept up-to-date?   '},
        {text:IsBooksUpToDate, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Who keeps the books?   '},
        {text:WhoKeepsBooks, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Are Personal drawings recorded?    '},
        {text:IsPersonalDrawingsRecorded, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Bank account (Name and Branch)   '},
        {text:HaveBusinessBank+' '+ BankName+' ' +BankBranch, style: 'reply'}
         ]
      },
      {
        text: 'C.BUSINESS PERFORMANCE ANALYSIS',
        bold: true,
        fontSize: 12,
        margin: [0, 0, 0, 10]
      },
      
      {
        style: 'tableExample',
        table: {
          widths: ['*', 30, 30, 30, 30, 30, 30],
          body: [
          [{text: '(i)    CASH FLOW ANALYSIS FORM', style: 'tableHeader', alignment: 'center', colSpan: 7}, {}, {}, {}, {}, {}, {}],
					[{text: 'Details', style: 'tableHeader', alignment: 'center'}, 
          {text: '1st', style: 'tableHeader', alignment: 'center'}, 
          {text: '2nd', style: 'tableHeader', alignment: 'center'},
          {text: '3rd', style: 'tableHeader', alignment: 'center'},
          {text: '4th', style: 'tableHeader', alignment: 'center'},
          {text: '5th', style: 'tableHeader', alignment: 'center'},
          {text: '6th', style: 'tableHeader', alignment: 'center'}],
       
            ['a) Cash in the bank at the start of the month', A1,A2,A3,A4,A5,A6],
            ['b) Cash in hand at the start of the month', B1,B2,B3,B4,B5,B6],
            ['C) Cash  sales', C1,C2,C3,C4,C5,C6],
            ['Total cash (A+B+C)', ABC1,ABC2,ABC3,ABC4,ABC5,ABC6],
            ['d) Other monies expected', D1,D2,D3,D4,D5,D6],
            ['Total cash inflows (A+B+C+D)', ABCD1,ABCD2,ABCD3,ABCD4,ABCD5,ABCD6],
            ['e) Cash  Purchases', E1,E2,E3,E4,E5,E6],
            ['f) Cash Payments', F1,F2,F3,F4,F5,F6],
            ['Total Cash outflows(E+F)', EF1,EF2,EF3,EF4,EF5,EF6],
            ['Surplus/Deficit ', S1,S2,S3,S4,S5,S6]

          ]
        }
      },
     
         
      {
        style: 'tableExample',
        table: {
          widths: ['*', 30, 30, 30, 30, 30, 30],
          body: [
          [{text: '(ii) PROFIT AND LOSS STATEMENT ', style: 'tableHeader', alignment: 'center', colSpan: 7}, {}, {}, {}, {}, {}, {}],
					[{text: 'Details', style: 'tableHeader', alignment: 'center'}, 
          {text: '1st', style: 'tableHeader', alignment: 'center'}, 
          {text: '2nd', style: 'tableHeader', alignment: 'center'},
          {text: '3rd', style: 'tableHeader', alignment: 'center'},
          {text: '4th', style: 'tableHeader', alignment: 'center'},
          {text: '5th', style: 'tableHeader', alignment: 'center'},
          {text: '6th', style: 'tableHeader', alignment: 'center'}],

            ['a) Monthly sales', MS1,MS2,MS3,MS4,MS5,MS6],
            ['b) opening stock ', OS1,OS2,OS3,OS4,OS5,OS6],
            ['c) Purchases  for that month', PM1,PM2,PM3,PM4,PM5,PM6],
            ['d)Goods available for sale(B+C)', GBC1,GBC2,GBC3,GBC4,GBC5,GBC6],
            ['e) Closing Stock', CS1,CS2,CS3,CS4,CS5,CS6],
            ['f) Cost of goods Sold(D-E)', DE1,DE2,DE3,DE4,DE5,DE6],
            ['g) Gross Profit(A-F)', AF1,AF2,AF3,AF4,AF5,AF6],
            ['h) Operating expenses', OE1,OE2,OE3,OE4,OE5,OE6],
            ['i)  Net Profit(G-H)', GH1,GH2,GH3,GH4,GH5,GH6]

          ]
        }
      },
      {
        text: 'D) OTHER DETAILS',
        bold: true,
        fontSize: 12,
        margin: [0, 0, 0, 10]
      },
    
      {
        style: 'normal1',
        text:[
        {text:'(i)	Security   '}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Type of security   '},
        {text:SecurityType,  style: 'reply'}
         ]
         
      },
      {
        style: 'normal1',
        text:[
        {text:'Approximate value of security Ksh  '},
        {text:ApproximateValOfSecurity, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Adequacy of security   '},
        {text:AdequacyofSecurity, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'(ii)	Business environment   '}
         ]
      },
           
      {
        style: 'normal1',
        text:[
        {text:'Competitors    '},
        {text:Competitors, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'General safety (security)    '},
        {text:GeneralSafety +BankBranch, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Regulations (Licenses)   '},
        {text:Regulations, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Technology in use  '},
        {text:TechnologyUsed, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Date of visit(s)   '},
        {text:DateofVisit, style: 'reply'}
         ]
      },
      {
        text: 'E) Loan Appraisal Score Sheet',
        bold: true,
        fontSize: 12,
        margin: [0, 0, 0, 10]
      },
      {
        style: 'tableExample',
        table: {
          widths: ['*', '*', '*', '*', 50],
          body: [
					[{text: ' ', style: 'tableHeader', alignment: 'center'}, 
          {text: 'ISSUE/PARAMETERS', style: 'tableHeader', alignment: 'center'}, 
          {text: 'Maximum score (%)', style: 'tableHeader', alignment: 'center'},
          {text: 'Actual score', style: 'tableHeader', alignment: 'center'},
          {text: 'REMARK', style: 'tableHeader', alignment: 'center'}],

            [{text: '1', style: 'tableHeader'},{text: 'Purpose', style: 'tableHeader'}, '30', PurposeActualScore, PurposeRemarks],
            [{text: '2', style: 'tableHeader'},{text: 'Character ', style: 'tableHeader'}, '25', CharacterActualScore,CharacterRemarks],
            [{text: '3', style: 'tableHeader'},{text: 'Security  ', style: 'tableHeader'}, '20',SecurityActualScore,SecurityRemarks],
            [{text: '4', style: 'tableHeader'},{text: 'Ability', style: 'tableHeader'}, '15', AbilityActualScore,AbilityRemarks],
            [{text: '5', style: 'tableHeader'},{text: 'Amount', style: 'tableHeader'}, '10', AmountActualScore,AmountRemarks],
            [{text: 'Total', style: 'tableHeader', alignment: 'center', colSpan: 2},{text: '', style: 'tableHeader'}, '100', TotalActualScore,TotalRemarks]

          ]
        }
      },
    
      {
        style: 'normal1',
        text:[
        {text:'Board Treasurer /Secretary’s Comments/Recommendations \n'},
        {text:BoardRecommendations,  style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Name   '},
        {text:RecommName,  style: 'reply'}
         ]
         
      },
      {
        columns:[
          {
            style: 'normal1',
            text:[
            {text:'Signed '},
            {text:'........................'}
             ]
          },
          {
            style: 'normal1',
            text:[
            {text:'Date:  '},
            {text:RecommDate, style: 'reply'}
             ]
          }
        ]
      }

        ],
        styles: {
          header: {
            fontSize: 18,
            bold: true
          },
          subheader: {
            fontSize: 15,
            bold: true,
            italics: true
          },
          normal1: {
            fontSize: 10,
            margin: [0, 0, 0, 10]
          },
          normal2: {
            fontSize: 10,
            margin: [0, 0, 0, 20]
          },
          tableExample: {
            margin: [0, 5, 0, 15]
          },
          tableHeader: {
            bold: true,
            fontSize: 10,
            color: 'black'
          },
          reply: {
            decoration:'underline',
            decorationStyle:'dotted'
          }
        }

        };
        pdfMake.createPdf(documentDefinition).open();
       // window.localStorage.setItem('openPdfId', '');
        }

        getBase64ImageFromURL(url) {
          return new Promise((resolve, reject) => {
            var img = new Image();
            img.setAttribute("crossOrigin", "anonymous");
      
            img.onload = () => {
              var canvas = document.createElement("canvas");
              canvas.width = img.width;
              canvas.height = img.height;
      
              var ctx = canvas.getContext("2d");
              ctx.drawImage(img, 0, 0);
      
              var dataURL = canvas.toDataURL("image/png");
      
              resolve(dataURL);
            };
      
            img.onerror = error => {
              reject(error);
            };
      
            img.src = url;
          });
        }

}




