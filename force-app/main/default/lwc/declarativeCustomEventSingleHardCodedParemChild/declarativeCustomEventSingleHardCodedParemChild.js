import { LightningElement } from 'lwc';

export default class DeclarativeCustomEventSingleHardCodedParemChild extends LightningElement 
{
   incre()
    {
       this.dispatchEvent(new CustomEvent('hanleeventfirst', {detail:'Increase Voluem'}));
       //this.dispatchEvent(new CustomEvent('hanleEvent', {detail:'Increase voluem',bubbles:true, composed:true}));
    } 
    decre()  
    {
      this.dispatchEvent(new CustomEvent('hanleeventsecond', {detail:'Decrease Voluem'}));
    }
}