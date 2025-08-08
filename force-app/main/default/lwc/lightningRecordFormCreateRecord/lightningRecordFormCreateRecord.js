import { LightningElement,track,api } from 'lwc';
import{ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class LightningRecordFormCreateRecord extends LightningElement 
{

   @api objectApiName;

   hndonsus()
   {
       const showmsg = new ShowToastEvent({

                   title:'Success',
                   variant:'success',
                   message:'Record has been Created Successfully ',
                   mode:'pester'
                                         });
            this.dispatchEvent(showmsg);
   }
}