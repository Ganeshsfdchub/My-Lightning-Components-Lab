import { LightningElement } from 'lwc';

export default class DeclarativeCustomEventMultipleHardCodedParemChild extends LightningElement 
{
    incre()
    {
       this.dispatchEvent(new CustomEvent('hanleeventfirst', {detail:{Name:'Ganesh Chinthakindi', Company:'Accenture'}}));
       
    } 
}