import { LightningElement,track } from 'lwc';
import pubsubConnector from 'c/pubsubConnector';
export default class PubsubPublisherWithProperty extends LightningElement 
{
    @track messagepassed;

    hndlevnt(event)
   {
      this.messagepassed = event.target.value
   }
     postme()
     {
         let messag = {
                       
                   //   "sender": "Hi chinthakindi Shivaram"  ----> using hardcotedvalues
                         'Sender message': this.messagepassed//---->using prperty
                      };
     
        pubsubConnector.fire('ganiEvent',messag);

        
     }
}