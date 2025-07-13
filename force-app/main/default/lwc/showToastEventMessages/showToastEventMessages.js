import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class ShowToastEventMessages extends LightningElement 
{
    



    handleSuccessToast()
    {
        const successmessge = new ShowToastEvent({
                                                   title:'Success',
                                                   message:'operation success',
                                                   variant:'success',
                                                   mode:'dismissible'
                                                 });
                                                 this.dispatchEvent(successmessge);
    }

    

    
}