import { LightningElement,track } from 'lwc';

export default class DeclarativeCustomEventSinglePropertyParemChild extends LightningElement 
{
    @track inputproperty;

 
    handevnt(event)
    {
       this.inputproperty = event.target.value;
    }
    clickhndevnt()
    {
         this.dispatchEvent(new CustomEvent('eventname',{detail:{message:this.inputproperty}}));
    }
}