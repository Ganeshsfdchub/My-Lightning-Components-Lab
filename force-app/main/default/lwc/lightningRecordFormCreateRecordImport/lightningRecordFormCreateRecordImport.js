import { LightningElement,track,api } from 'lwc';
import ACCOUNTNAME from '@salesforce/schema/Account.Name';
import ACCOUNTINDUSTRY from '@salesforce/schema/Account.Industry';
import ACCOUNTPHONE from '@salesforce/schema/Account.Phone';
import ACCOUNTFAX from '@salesforce/schema/Account.Fax';
import ACCOUNTANNUALREVENUE from '@salesforce/schema/Account.AnnualRevenue';
import ACCOUNTRATING from '@salesforce/schema/Account.Rating';
import ACCOUNTACTIVE from '@salesforce/schema/Account.Active__c';
import ACCOUNTWEBSITE from '@salesforce/schema/Account.Website';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class LightningRecordFormCreateRecordImport extends LightningElement 
{

    @api objectApiName;
   
 
    @track fields = [ACCOUNTNAME,ACCOUNTINDUSTRY,ACCOUNTPHONE,ACCOUNTFAX,ACCOUNTANNUALREVENUE,
                     ACCOUNTRATING, ACCOUNTACTIVE,ACCOUNTWEBSITE];

    createhndle()
    {
        const showmsg = new ShowToastEvent({
  
                    title:'Success',
                    variant:'success',
                    message:'Record has bee Created Successfully ',
                    mode:'pester'
                                          });
             this.dispatchEvent(showmsg);
    }
}