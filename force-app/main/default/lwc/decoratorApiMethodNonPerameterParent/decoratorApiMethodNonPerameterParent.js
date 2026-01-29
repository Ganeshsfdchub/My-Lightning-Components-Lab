import { LightningElement } from 'lwc';

export default class DecoratorApiMethodNonPerameterParent extends LightningElement 
{
    hndlshwmsg()
    {
        var showms = this.template.querySelector('c-decorator-api-method-non-perameter-child');
        showms.showmessage();
    }
}