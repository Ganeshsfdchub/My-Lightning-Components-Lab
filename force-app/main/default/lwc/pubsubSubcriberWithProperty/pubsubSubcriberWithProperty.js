import { LightningElement } from 'lwc';
import pubsubConnector from 'c/pubsubConnector';
export default class PubsubSubcriberWithProperty extends LightningElement 
{
    pubsubvariable;

   connectedCallback()
   {
       this.register();

   }
   register()
   {
     pubsubConnector.register('ganiEvent', this.callme.bind(this))
   }
   callme(msg)
   {
      this.pubsubvariable = msg ? JSON.stringify(msg,null,'\t'):'no message';
     
   } 
}