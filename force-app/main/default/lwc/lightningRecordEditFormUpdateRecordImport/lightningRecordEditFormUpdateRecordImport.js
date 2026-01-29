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
export default class LightningRecordEditFormUpdateRecordImport extends LightningElement 
{
    @api recordId;
    @api objectApiName;
   
 
    @track Name = ACCOUNTNAME;    
    @track Industry = ACCOUNTINDUSTRY; 
    @track Rating =  ACCOUNTRATING;
    @track Active__c =  ACCOUNTACTIVE;
    @track Phone =  ACCOUNTPHONE; 
    @track Fax =  ACCOUNTFAX; 
    @track AnnualRevenue = ACCOUNTANNUALREVENUE;
    @track Website = ACCOUNTWEBSITE;
    
        
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