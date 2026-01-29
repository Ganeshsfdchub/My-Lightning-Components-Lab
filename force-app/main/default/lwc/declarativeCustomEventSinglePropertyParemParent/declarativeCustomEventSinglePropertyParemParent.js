import { LightningElement,track } from 'lwc';

export default class DeclarativeCustomEventSinglePropertyParemParent extends LightningElement 
{
    @track myfunproprty;

    myfun(event)
    {
       this.myfunproprty = event.detail.message;
    }
}