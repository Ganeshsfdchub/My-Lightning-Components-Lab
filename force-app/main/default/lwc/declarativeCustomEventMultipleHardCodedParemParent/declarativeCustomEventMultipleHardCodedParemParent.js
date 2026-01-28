import { LightningElement,track } from 'lwc';

export default class DeclarativeCustomEventMultipleHardCodedParemParent extends LightningElement 
{
    @track Employename;
    @track Employecompanyname;

    myfun(event)
    {
       this.Employename = event.detail.Name;
       this.Employecompanyname = event.detail.Company;
    }
}