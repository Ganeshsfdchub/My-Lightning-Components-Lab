import { LightningElement,track} from 'lwc';

export default class DecoratorTrackComponent extends LightningElement 
{
   @track customermsgproprty;
   @track customerdetailsproprty;

  handlecustommsg(event)
  {
     const refid = event.target.name;
     const refproperty = event.target.value;

     if(refid === "fname")
     {
        this.customermsgproprty = refproperty; 
     }
     else
     {
        this.customerdetailsproprty = refproperty; 
     }
     


   } 
}