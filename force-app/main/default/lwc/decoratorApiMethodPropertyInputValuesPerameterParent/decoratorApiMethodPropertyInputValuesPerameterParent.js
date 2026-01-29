import { LightningElement,track } from 'lwc';

export default class DecoratorApiMethodPropertyInputValuesPerameterParent extends LightningElement 
{
       @track inputvarible;
    
        hndlvlue(event)
        {
            this.inputvarible = event.target.value;
        } 
        bunhandl()
        {
            var methodmeesge = this.template.querySelector('c-decorator-api-method-property-input-values-perameter-child');
            var details = {'name':this.inputvarible};
            methodmeesge.showmessagemethod(details);
        }
}