import { LightningElement,track,wire } from 'lwc';
import { subscribe, publish, MessageContext } from 'lightning/messageService';
import SAMPLE_MESSAGE_CHANNEL from '@salesforce/messageChannel/My_Lightning_Message_Channel__c';
export default class LMS_Simple_Message_Subscriber_Component extends LightningElement 
{

        @track receivedmsg ;
        //@track subscription ;
    
        @wire(MessageContext)mymsgcontext;
    
        hndlsub()
        {
                   
           {
                subscribe(this.mymsgcontext, SAMPLE_MESSAGE_CHANNEL,(mymsg)=>{this.handlemsg(mymsg)});
           }
                 
        }
        handlemsg(newmsg)
        {
           this.receivedmsg = newmsg ? newmsg.pubmsg : 'No Message Received';
        }

        
}