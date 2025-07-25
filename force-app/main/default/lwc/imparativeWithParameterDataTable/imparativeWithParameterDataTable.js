import { LightningElement,track } from 'lwc';
import imparativemethod from '@salesforce/apex/AccountImparativeClass.imparativemethod';
export default class ImparativeWithParameterDataTable extends LightningElement 
{
 
 @track clm = [{label:'Name', fieldName:'Name', type:'text'},
               {label:'Industry', fieldName:'Industry', type:'text'},
               {label:'Rating', fieldName:'Rating', type:'text'},
               {label:'Annualrevenue', fieldName:'AnnualRevenue', type:'currency'},
               {label:'Phone', fieldName:'Phone', type:'phone'},
               {label:'Fax', fieldName:'Fax', type:'fax'},
               {label:'Active', fieldName:'Active__c', type:'boolean'}];

 @track propty;
 @track resultcollection;
 @track numberofRecords;


 handlename(event)
 {
     this.propty = event.target.value;
 }
 handlesub()
 {
      (imparativemethod)({sechstring:this.propty})
      .then(result=>{
                      this.resultcollection = result;
                      this.numberofRecords= result.length;


                 })
      .catch(error=>{
                      console.log('Error Occured'+error);
                      this.resultcollection = error;
                    })
 }
   
 
  /*using only input without button
   handlename(event)
   {
     this.propty = event.target.value;
 
      (imparativemethod)({sechstring:this.propty})
      .then(result=>{
                      this.resultcollection = result;
                      this.numberofRecords= result.length;


                 })
      .catch(error=>{
                      console.log('Error Occured'+error);
                      this.resultcollection = error;
                    })
    }*/

}