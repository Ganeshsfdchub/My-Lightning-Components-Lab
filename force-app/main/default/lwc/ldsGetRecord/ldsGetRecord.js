import { LightningElement,track,api,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
const FIELDS = ['Account.Name', 'Account.Rating', 'Account.Industry', 'Account.AnnualRevenue'];
export default class LdsGetRecord extends LightningElement 
{
   
    @api recordId;      //holds current Record id
    @api objectApiName; //Entered Record object
 

// variables
  @track accName;
  @track accRating;
  @track accIndustry;
  @track accAnnualRevenue;


 @wire(getRecord, {recordId:'$recordId', fields:FIELDS}) wiredrecord({data,error})
// By using Enter record id
// @wire(getRecord, {recordId:'0015i00000gHdMjAAK', fields:FIELDS}) wiredrecord({data,error}

 {
      if(data)
      {
        /* this.accountRecord = data;

         this.accName = this.accountRecord.fields.Name.value;
         this.accRating = this.accountRecord.fields.Rating.value;
         this.accIndustry = this.accountRecord.fields.Industry.value;
         this.accAnnualRevenue = this.accountRecord.fields.AnnualRevenue.value;*/

         this.objectApiName = data;

         this.accName = this.objectApiName.fields.Name.value;
         this.accRating = this.objectApiName.fields.Rating.value;
         this.accIndustry = this.objectApiName.fields.Industry.value;
         this.accAnnualRevenue = this.objectApiName.fields.AnnualRevenue.value;

      }
      else if(error)
      {
         console.log('Error Occured'+error);
      }
 }

}