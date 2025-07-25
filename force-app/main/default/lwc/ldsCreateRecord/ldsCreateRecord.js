import { LightningElement,track,api } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class LdsCreateRecord extends LightningElement 
{
    @api objectApiName;

    @track accName;
    @track accRating;
    @track accIndustry;
    @track accPhone;
    @track accFax;
    @track accEmail;
    @track accBillingState;
    @track accBillingCity;
    @track accBillingCountry;
    @track accBillingStreet;
    @track accPostalCode;
    @track accAnnualRevenue;
    @track accActiveStatus;
 
   nameval(event)
   {
      this.accName = event.target.value;
   }
   Ratingval(event)
   {
     this.accRating= event.target.value;
   }
   Industryval(event)
   {
     this.accIndustry= event.target.value;
   }
   phoneval(event)
   {
     this.accPhone= event.target.value;
   }
   Faxval(event)
   {
     this.accFax= event.target.value;
   }
   Emailval(event)
   {
     this.accEmail= event.target.value;
   }
   Activeval(event)
   {
     this.accActiveStatus= event.target.value;
   }
   Stateval(event)
   {
     this.accBillingState= event.target.value;
   }
   Cityval(event)
   {
     this.accBillingCity= event.target.value;
   }
   Countryval(event)
   {
     this.accCountry= event.target.value;
   }
   Codeval(event)
   {
    this.accPostalCode= event.target.value;
   }
   Annualval(event)
   {
     this.accAnnualRevenue= event.target.value;
   }
   Streetval(event)
   {
     this.accBillingStreet= event.target.value;
 
   }
   
     crt()
     {
        const fields = { 
                          'Name': this.accName,
                          'Rating': this.accRating,
                          'Industry':this.accIndustry,
                          'Phone':this.accPhone,
                          'Fax':this.accFax,
                          'Email':this.accEmail,
                          'BillingState':this.accBillingState,
                          'BillingCity':this.accBillingCity,
                          'BillingCountry':this.accBillingCountry,
                          'BillingStreet':this.accBillingStreet,
                          'BillingPostalCode':this.accPostalCode,
                          'AnnualRevenue':this.accAnnualRevenue,
                          'Active__c':this.accActiveStatus
                       };
 
        // const recordinput = {apiName:'Account',fields};
         const recordinput = {apiName:this.objectApiName,fields};
 
         createRecord(recordinput)
         .then(result=>{
                
                      const Showsuccesmsg = new ShowToastEvent ({
                                 title:'Succes',
                                 message:'Successfully Created Record',
                                 variant:'success',
                                 mode:'pester'
                      });
                      this.dispatchEvent(Showsuccesmsg);
                     })
                     .catch(error=>{
 
                         const Showerromsg = new ShowToastEvent ({
                                    title:'Error',
                                    message:'Error Occured',
                                    variant:'error',
                                    mode:'pester'
                         });
                         this.dispatchEvent(Showerromsg);
                     })
     }
 }