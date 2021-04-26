import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ToastrService } from 'ngx-toastr';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class LoanApplicationPdfService {

  constructor() { }


  getLoanApplicationPDF(FullNames,IdNo,SubCountyPerson,Ward,Village,
    WardAdministrator,VillageAdministrator,NextOfKin,Relationship,
    PostalAddress,Email,TelephoneNumber,LevelOfEducation,
    HasReceivedTraining,TrainingDescription,BeenInBusiness,BeenInBusinessTime,PaidEmployment,
    IsPysicallyDisabled,PysicallyDisabledDescription,OtherSourcesOfIncome,
    BusinessName,PhysicalAddress,LegalStatus,FormOfBusiness,
    Partners,NatureOfBusiness,BeenInOperation,BeenInOperationTime,
    NoOfEmployees,SalePerMonth,ExpensesPerMonth,MonthProfit,SaleAbleStock,
    OwnBuilding,BuildingOwner,BuildingAddress,MonthRent,BookofAccount,
    PersonalBooks,BusinessBank,BankName,BankBranch,BankAccountNo,PrivateDebts,
    BusinessDebts,loanAmount,loanpurpose,loanSecurity,haveAppliedLoan,
    gurantor1Name,gurantor1Address,gurantor1IdNo,gurantor1Email,gurantor1Telephone,
    gurantor2Name,gurantor2Address,gurantor2IdNo,gurantor2Email,gurantor2Telephone){

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
        
        text: 'BUSINESSES LOAN APPLICATION',
        bold: true,
        italics: true,
        fontSize: 12,
        alignment: 'center',
        margin: [0, 0, 0, 20]
      },{
        text: '------------------',
        alignment: 'center',
        margin: [0, 0, 0, 20]
      },
      {
        text: 'BARUA YA MKOPO KWA WAFANYI BIASHARA',
        bold: true,
        italics: true,
        fontSize: 12,
        alignment: 'center',
        margin: [0, 0, 0, 20]
      },{
        text: 'A. PERSONAL PARTICULARS/ MAELEZO KUHUSU MUOMBAJI',
        bold: true,
        fontSize: 14,
        alignment: 'center',
        margin: [0, 0, 0, 10]
      },{
        text: 'WRITE IN BLOCK LETTERS PLEASE /ANDIKA  HERUFI KUBWA TAFADHALI',
        italic: true,
        italics: true,
        fontSize: 12,
        alignment: 'center',
        margin: [0, 0, 0, 20]
      },{
        style: 'normal1',
        text:[
          {text:'1.	Full name of applicant/s \n Jina kamili la Muombaji/Waombaji    '},
          {text:FullNames, style: 'reply'}
        ]
      },{
        text: '2.	Applicants details ',
        style: 'normal2'
      },{
        ul : [{
          style: 'normal1',
          text:[
          {text:'I.D. Number/s (Namba ya/za Kitambulisho)        '},
          {text:IdNo, style: 'reply'}
           ]
         
        }]
      },
      {
        ul : [{
          style: 'normal1',
          text:[
          {text:'Sub-county/Constituency (Wilaya/Eneo Bunge)   '},
          {text:SubCountyPerson, style: 'reply'}
           ]
        }]
      },
      {
        ul : [{
          style: 'normal1',
          text:[
          {text:'Ward (Wadi)    '},
          {text:Ward, style: 'reply'}
           ]
        }]
      },
      {
        ul : [{
        
          style: 'normal1',
          text:[
          {text:'Village (Kijiji)   '},
          {text:Village, style: 'reply'}
           ]
        }]
      },
      {
        ul : [{
          style: 'normal1',
          text:[
          {text:'Ward Administrator (Mtawala wa Wadi)   '},
          {text:WardAdministrator, style: 'reply'}
           ]
        }]
      },
      {
        ul : [{
          style: 'normal1',
          text:[
          {text:'Village Administrator (Mtawala wa Kijiji)    '},
          {text:VillageAdministrator, style: 'reply'}
           ]
        }]
      },
      {
        ul : [{
          style: 'normal1',
          text:[
          {text:'Next of Kin (Murithi)    '},
          {text:NextOfKin, style: 'reply'}
           ]
        }]
      },
      {
        ul : [{
          style: 'normal1',
          text:[
          {text:'Relationship (Uhusiano)    '},
          {text:Relationship, style: 'reply'}
           ]
        }]
      },
      {
        ul : [{
          style: 'normal1',
          text:[
          {text:'Postal Address. (Anwani ya Posta)    '},
          {text:PostalAddress, style: 'reply'}
           ]
        }]
      },
      {
        ul : [{
          style: 'normal1',
          text:[
          {text:'Email address (Barua pepe)   '},
          {text:Email, style: 'reply'}
           ]
        }]
      },
      {
        ul : [{
          style: 'normal1',
          text:[
          {text:'Telephone No (Nambari ya Simu)   '},
          {text:TelephoneNumber, style: 'reply'}
           ]
        }]
      },
      {
        style: 'normal1',
        text:[
        {text:'3.	Level of education \n Kiwango cha elimu   '},
        {text:LevelOfEducation, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'4.	Have you received any business or technical training?  '},
        {text:HasReceivedTraining, style: 'reply'},
        {text:' Give details.'}
         ]
      },{
        text: 'Je, umepata elimu yoyote ya kibiashara au ujuzi mwingine wowote wa biashara? \nAndika maelezo kamili',
        style: 'normal1'
      },
      {
        style: 'normal1',
        text:[
        {text:TrainingDescription, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'5.	  For how long have you been in business (Umekuwa kwa biashara kwa muda gani)? \n'},
        {text:BeenInBusiness+BeenInBusinessTime, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'6.	Are you in paid employment (Unayo kazi nyingine unayolipwa mshahara)? \n'},
        {text:PaidEmployment, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'7.	Do you have any physical disabilities? (Unao ulemavu wowote) '},
        {text:IsPysicallyDisabled, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'If yes, explain what kind of disability  \n'},
        {text:PysicallyDisabledDescription, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'8. Other sources of income (Mapato mengine ya kifedha) \n'},
        {text:OtherSourcesOfIncome, style: 'reply'}
         ]
      },
      {
        text: 'B. BUSINESS DETAILS (MAELEZO YA BIASHARA)',
          bold: true,
          fontSize: 14,
          margin: [0, 0, 0, 10]
      },
      {
        style: 'normal1',
        text:[
        {text:'1.	Name of Business/Jina la biashara \n'},
        {text:BusinessName, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'2. Physical Address of business (Anwani ya biashara) \n'},
        {text:PhysicalAddress, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'3.	Legal status(Registered or unregistered) \nBiashara imeandikishwa au haijaandikishwa    '},
        {text:LegalStatus, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'4.	Form of Business (Sole proprietor, Partnership, association, cooperative or Limited company) Give details \nBiashara ni yako mwenyewe au umeshirikana na wengine; andika maelezo \n'},
        {text:FormOfBusiness, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Name, address and occupation of each partner. \n Jina, anwani na kazi ya kila mshirika \n'},
        {text:Partners, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'5.	Nature of trade or business carried on/proposed by applicant. \nAina ya biashara au kazi unayoendesha/unayotumaini kuanzisha \n'},
        {text:NatureOfBusiness, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'6.	 How long has the business been in operation? \nBiashara uliyonayo imedumu kwa muda  gani? '},
        {text:BeenInOperation+BeenInOperationTime, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'7.	Number of employees regularly engaged by the business. \nKwa kawaida biashara huwa inaajiri watumishi wangapi '},
        {text:NoOfEmployees, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'8.	Average sales per month \nMauzo ya kila mwezi '},
        {text:SalePerMonth, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'9.	Average business expenses per month \nGarama ya biashara ya kila mwezi '},
        {text:ExpensesPerMonth, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'10.	What is the business’s monthly profit \nFaida ya biashara ya kila mwezi '},
        {text:MonthProfit, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'11.	What is the value of the saleable stock. \nThamani ya bidhaa iliyo kwa biashara '},
        {text:SaleAbleStock, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'12.	Do you own the building in which you conduct the business or is it rented? \nMjengo wa biashara ni mali yako au umekodisha? '},
        {text:OwnBuilding, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'13.	If the business premises are rented state:-Name and address of the owner of the premises. \nIkiwa umekodisha mjengo, andika Jina na anwani ya mwenye mjengo '},
        {text:BuildingOwner+' '+BuildingAddress, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Monthly rent payable (Malipo ya kodi ya  kila mwezi) '},
        {text:MonthRent, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'14.	a) What books of account do you keep \nje, unaweka  vitabu gani vya hesabu  '},
        {text:BookofAccount, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'b)	Do you keep the books yourself? \nHujiandikia vitabu mwenyewe  '},
        {text:PersonalBooks, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'15.	Do you have a business bank account?  '},
        {text:BusinessBank, style: 'reply'},
        {text: ' if yes state bank, branch, account number(s)'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'Biashara yako iko na akaunti ya benki. ikiwa ndio, eleza ni benki gani, wapi na nambari ya account \n'},
        {text:BankName+' '+BankBranch+' '+BankAccountNo, style: 'reply'}
         ]
      },
      {
        text: '16.	Total debts:- \nJumla ya madeni ambayo unadaiwa wakati wa kujaza barua hii ya maombi',
        style: 'normal1'
      },
      {
        columns:[
          {
            text: 'Private.',
            style: 'normal1'
          },
          {
            text: 'Business.',
            style: 'normal1'
          }
        ]
      },
      {
        columns:[
          {
            style: 'normal1',
            text:[
            {text:'Binafsi Kshs  '},
            {text:PrivateDebts, style: 'reply'}
             ]
          },
          {
            style: 'normal1',
            text:[
            {text:'Biashara Kshs  '},
            {text:BusinessDebts, style: 'reply'}
             ]
          }
        ]
      },
      {
        text: 'C. LOAN DETAILS/ MAELEZO KUHUSU MKOPO',
         bold: true,
          fontSize: 14,
          margin: [0, 0, 0, 10]
      },
      {
        style: 'normal1',
        text:[
        {text:'1.	Amount of loan required Sh. \nKiwango cha mkopo Kinachohitajika Sh  '},
        {text:loanAmount, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'2.	What is the purpose of the loan if granted? (give full details) \n Madhumuni ya mkopo (Toa maelezo kamili) \n'},
        {text:loanpurpose, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'3.	What security will you offer \n Utatoa dhamana gani  '},
        {text:loanSecurity, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'4.	Have you applied for or received a loan from any other source during the past two years? \n\n Umepata kuomba au kupata mkopo mahali pengine popote kwa miaka miwili iliopita '},
        {text:haveAppliedLoan, style: 'reply'}
         ]
      },
      {
        text: '5.	Names, addresses and signatures of two referees. \n\n Majina ,anwani na sahihi za wadhamini wawili \n\n',
        style: 'normal1'
      },
      {
        style: 'normal1',
        text:[
        {text:'1. Name and Address '},
        {text:gurantor1Name+' '+gurantor1Address, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'ID NO. '},
        {text:gurantor1IdNo, style: 'reply'}
         ]
      },
      {
        columns:[
          {
            style: 'normal1',
            text:[
            {text:'Email address  '},
            {text:gurantor1Email, style: 'reply'}
             ]
          },
          {
            style: 'normal1',
            text:[
            {text:'Telephone Number  '},
            {text:gurantor1Telephone, style: 'reply'}
             ]
          }
        ]
      },
      {
        text: 'Signature............................ ',
        style: 'normal1'
      },
      {
        style: 'normal1',
        text:[
        {text:'2. Name and Address '},
        {text:gurantor2Name+' '+gurantor2Address, style: 'reply'}
         ]
      },
      {
        style: 'normal1',
        text:[
        {text:'ID NO. '},
        {text:gurantor2IdNo, style: 'reply'}
         ]
      },
      {
        columns:[
          {
            style: 'normal1',
            text:[
            {text:'Email address  '},
            {text:gurantor2Email, style: 'reply'}
             ]
          },
          {
            style: 'normal1',
            text:[
            {text:'Telephone Number  '},
            {text:gurantor2Telephone, style: 'reply'}
             ]
          }
        ]
      },
      {
        text: 'Signature............................ ',
        style: 'normal1'
      },
      {
        text: 'I understand that – \n\n i)	if  I am granted a loan I must continue to maintain acceptable books of accounts: \n and \n ii)	that all the facts given above will be verified at my place of business and that my application will be rejected outright if I have given  any false information. \n\n',
        style: 'normal1'
      },
      {
        text: 'Naelewa hivi- \n\n i)	nikipatiwa mkopo ni lazima kuendelea kuweka vitabu vya hesabu vinavyokubaliwa; \n na \n ii)	maelezo yote yalioandikwa hapa juu yatakaguliwa katika biashara yangu, na hivyo barua yangu ya mkopo inaweza kukataliwa kabisa ikiwa nimeandika maelezo ya uwongo. \n\n',
        style: 'normal1'
      },
      {
        columns:[
          {
            text: 'Date(Tarehe) ....................',
            style: 'normal1'
          },
          {
            text: 'Signature of Applicant(Sahihi ya Muombaji) ....................',
            style: 'normal1'
          }
        ]
      },
      {
        text: 'N.B -	If there is insufficient space on this form to answer all the questions fully, an 	additional plain sheet should be used.',
        style: 'normal2'
      },
      {
        text: 'Iwapo nafasi ya kujibu maswali kamili ndani ya barua hii ni ndogo karatasi nyingine 	inaweza kutumiwa ili maswali yote yajibiwe.',
        style: 'normal1'
      },
      {
        text: 'FOR OFFICIAL USE ONLY',
        bold: true,
        fontSize: 14,
        alignment: 'center',
        margin: [0, 0, 0, 20]
      },
      {
        text: 'RECOMMENDATIONS',
        fontSize: 12,
        alignment: 'center',
        margin: [0, 0, 0, 20]
      },
      {
        text: 'VILLAGE ADMINSTRATOR  ',
        bold: true,
          italic:true,
          fontSize: 12,
          margin: [0, 0, 0, 10]
      },
      {
        text: 'Name:..........................................',
        style: 'normal1'
      },
      {
        text: 'Signature:..........................................',
        style: 'normal1'
      },
      {
        text: 'Date and stamp..........................................',
        style: 'normal2'
      },
      {
        text: 'WARD ADMINISTRATOR',
        bold: true,
          italic:true,
          fontSize: 12,
          margin: [0, 0, 0, 10]
      },
      {
        text: 'Name:..........................................',
        style: 'normal1'
      },
      {
        text: 'Signature:..........................................',
        style: 'normal1'
      },
      {
        text: 'Date and stamp..........................................',
        style: 'normal2'
      },
      {
        text: 'BOARD SECRETARY:',
        bold: true,
        italic:true,
        fontSize: 12,
        margin: [0, 0, 0, 10]
      },
      {
        text: 'Amount recommended Kshs..........................................',
        style: 'normal2'
      },
      {
        text: 'Name:..........................................',
        style: 'normal2'
      },
      {
        text: 'Signature:..........................................',
        style: 'normal2'
      },
      {
        text: 'Date..........................................',
        style: 'normal2'
      },
      {
          text: 'BOARD\'S RECOMMENDATION',
          bold: true,
          italic:true,
          fontSize: 12,
          margin: [0, 0, 0, 10]
        
      },
      {
        text: 'Amount approved..........................................',
        style: 'normal1'
      },
      {
        text: 'Signatories',
        style: 'normal1'
      },
      {
        text: '1.	Chairman..........................................',
        style: 'normal1'
      },
      {
        text: '2.	Secretary..........................................',
        style: 'normal1'
      },
      {
        text: 'Terms and Conditions ',
        style: 'normal1'
      },
      {
        text: '.....................................................................................',
        style: 'normal1'
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
      reply: {
        bold: true,
        decoration:'underline',
        decorationStyle:'dotted'
      }
    }
   
  };
  pdfMake.createPdf(documentDefinition).open();
  window.localStorage.setItem('openPdfId', 'No');
}

  
}


