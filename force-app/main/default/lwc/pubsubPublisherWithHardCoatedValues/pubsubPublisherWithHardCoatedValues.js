import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
export default class PubsubPublisherWithHardCoatedValues extends LightningElement 
{
    postme()
    {
       // before variable we can use 'let = like var'
       let message = {

                           'msg': 'Hi this is a Publisher message via Pbsub',
                           'sender': 'Ganesh',
                           'phone': '9959308808'
                    };    

       pubsub.fire('eventnotify',message);
     }  
}