import { LightningElement,track,wire } from 'lwc';
import { publish, subscribe, MessageContext } from 'lightning/messageService';
import SAMPLE_MESSAGE_CHANNEL from '@salesforce/messageChannel/My_Lightning_Message_Channel__c';
export default class LMS_Simple_Message_Publish_Component extends LightningElement 
{

    @track message ='';


    @wire(MessageContext)myMessageContext;

    handleinput(event)
    {
        this.message = event.target.value;
    }

    hndlpublish()
    {
       const messgepayload = {pubmsg : this.message};

       publish(this.myMessageContext, SAMPLE_MESSAGE_CHANNEL, messgepayload);

    }


}