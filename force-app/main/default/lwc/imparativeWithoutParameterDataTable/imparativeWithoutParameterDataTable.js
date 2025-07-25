import { LightningElement,track } from 'lwc';
import imparatingmethod from '@salesforce/apex/Accountimparativemehod.imparatingmethod';
export default class ImparativeWithoutParameterDataTable extends LightningElement
{
    @track clm = [{label:'Name', fieldName:'Name', type:'text'},
                  {label:'Industry', fieldName:'Industry', type:'text'},
                  {label:'Rating', fieldName:'Rating', type:'text'},
                  {label:'Annualrevenue', fieldName:'AnnualRevenue', type:'currency'},
                  {label:'Phone', fieldName:'Phone', type:'phone'},
                  {label:'Fax', fieldName:'Fax', type:'fax'},
                  {label:'Active', fieldName:'Active__c', type:'boolean'}];

     
      @track resultcollection;
      @track numberofRecords;

     handlefun()
     {
         (imparatingmethod)({})
         .then(result=>{
                          this.resultcollection = result;
                          this.numberofRecords= result.length;
                       })

         .catch(error=>{
                          console.log('error occured'+error);
                          this.resultcollection = result;
                       })
     }

}