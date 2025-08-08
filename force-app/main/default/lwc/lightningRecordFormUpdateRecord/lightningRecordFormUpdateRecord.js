import { LightningElement,track,api } from 'lwc';
import INDUSTRY_NAME from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import FAX_FIELD from '@salesforce/schema/Account.Fax';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import ACTIV_FIELD from '@salesforce/schema/Account.Active__c';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
//import Account from '@salesforce/schema/AccountHistory.Account';
// @track allfields = ['Account.Name', 'Account.Industry', 'Account.Rating', 'Account.Phone',....];

export default class LightningRecordFormUpdateRecord extends LightningElement 
{

    // @track allfields
    @track fields = [INDUSTRY_NAME, INDUSTRY_FIELD, PHONE_FIELD, FAX_FIELD,ANNUALREVENUE_FIELD,ACTIV_FIELD, RATING_FIELD ];
    @api recordId ; 
    @api objectApiName;


  hndonsus()
  {
      const showmsg = new ShowToastEvent({

                  title:'Success',
                  variant:'success',
                  message:'Record has bee Updated Successfully ',
                  mode:'pester'
                                        });
           this.dispatchEvent(showmsg);
  }
}