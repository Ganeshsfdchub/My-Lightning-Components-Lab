import { LightningElement,track } from 'lwc';

export default class DeclarativeCustomEventSingleHardCodedParemParent extends LightningElement 
{
    @track vol = 0;
    @track controlvol;   

    myfunfirst(event)
    {
       this.controlvol = event.detail;
       this.vol = this.vol+1;
    }
    myfunsecond(event)
    {      
        this.controlvol = event.detail;
        if(this.vol>0)
        {
        this.vol = this.vol-1;
        }
    }
}