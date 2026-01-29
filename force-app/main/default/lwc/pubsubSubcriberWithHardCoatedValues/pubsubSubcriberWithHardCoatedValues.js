import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
export default class PubsubSubcriberWithHardCoatedValues extends LightningElement 
{
    
    receivedmsg;

    connectedCallback()
    {    
      this.register();
    }
    register()
    {
      pubsub.register('eventnotify', this.callme.bind(this));
    }
    callme(msg)
    {
  
     this.receivedmsg =  msg ? JSON.stringify(msg,null,'\t'):'no messageee';
 
    }
}