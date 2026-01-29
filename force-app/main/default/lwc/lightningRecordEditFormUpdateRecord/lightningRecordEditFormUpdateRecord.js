import { LightningElement,track,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class LightningRecordEditFormUpdateRecord extends LightningElement 
{
    @api recordId;
    @api objectApiName;

   

 
    susshndle()
    {
        const succmsg = new ShowToastEvent({
                                           title:'Success',
                                           variant:'success',
                                           mode:'sticky',
                                           message:'Record Updated Successfully'

                                          });
                                          this.dispatchEvent(succmsg);
    }
}