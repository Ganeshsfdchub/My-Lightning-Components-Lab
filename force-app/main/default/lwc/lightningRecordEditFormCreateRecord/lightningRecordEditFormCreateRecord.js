import { LightningElement,track,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class LightningRecordEditFormCreateRecord extends LightningElement 
{
   @api objectApiName;

   

 
    susshndle()
    {
        const succmsg = new ShowToastEvent({
                                           title:'Success',
                                           variant:'success',
                                           mode:'sticky',
                                           message:'Record Created Successfully'

                                          });
                                          this.dispatchEvent(succmsg);
    } 
}