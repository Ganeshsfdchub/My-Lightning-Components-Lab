import { LightningElement,track,api } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class LdsUpdateRecord extends LightningElement 
{
   
    @api recordId;
    @api objectApiName;

 //  @track accId;
    @track accName;
    @track accRating;
    @track accIndustry;
    @track accPhone;
    @track accFax;
    @track accBillingState;
    @track accBillingCity;
    @track accBillingCountry;
    @track accBillingStreet;
    @track accPostalCode;
    @track accAnnualRevenue;
    @track accActiveStatus;
    

/* Idval(event)
   {
      this.accId = event.target.value;
   }*/
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
           const  fields = {      
                        //Id: this.accId,
                          Name: this.accName,
                          Rating: this.accRating,
                          Industry: this.accIndustry,
                          Phone: this.accPhone,
                          Fax: this.accFax,                        
                          BillingState: this.accBillingState,
                          BillingCity: this.accBillingCity,
                          BillingCountry: this.accBillingCountry,
                          BillingStreet: this.accBillingStreet,
                          BillingPostalCode: this.accPostalCode,
                          AnnualRevenue: this.accAnnualRevenue,
                          Active__c: this.accActiveStatus
                         
                       };
 
        // const recordinput = {fields};       
         const recordinput = {recordId:this.recordId, fields};
 
         updateRecord(recordinput).then(result=>{
                
                      const Showsuccesmsg = new ShowToastEvent ({
                                 title:'Succes',
                                 message:'Successfully Updated Record',
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



