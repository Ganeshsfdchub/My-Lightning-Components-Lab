import { LightningElement,track,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class LightningRecordFormGetRecord extends LightningElement 
{
   @api recordId;
   @api objectApiName;
 
   hndonsus()
   {
       const showmsg = new ShowToastEvent({

                   title:'Success',
                   variant:'success',
                   message:'Operation Successfully Completed',
                   mode:'pester'
                                         });
            this.dispatchEvent(showmsg);
   }
}