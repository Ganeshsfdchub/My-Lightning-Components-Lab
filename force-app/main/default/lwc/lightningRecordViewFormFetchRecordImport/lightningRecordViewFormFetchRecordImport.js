import { LightningElement,track,api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import FAX_FIELD from '@salesforce/schema/Account.Fax';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import ACTIV_FIELD from '@salesforce/schema/Account.Active__c';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
export default class LightningRecordViewFormFetchRecordImport extends LightningElement 
{
    
  // @api objctrf = ACCOUNT_OBJECT; 
  // @api recordrf = "0015i00000fv3lVAAQ"; 

     @api recordId;
     @api objectApiName;
  
     @track Rating = RATING_FIELD;
     @track Industry = INDUSTRY_FIELD;
     @track AnnualRevenue = ANNUALREVENUE_FIELD;
     @track Name = ACCOUNT_NAME;
     @track Phone = PHONE_FIELD
     @track Active = ACTIV_FIELD;
     @track Fax = FAX_FIELD ;
}