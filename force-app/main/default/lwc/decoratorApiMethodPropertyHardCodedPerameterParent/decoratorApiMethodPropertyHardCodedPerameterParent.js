import { LightningElement } from 'lwc';

export default class DecoratorApiMethodPropertyHardCodedPerameterParent extends LightningElement 
{
   hndlshwmsg()
    {
        var smsmge = this.template.querySelector('c-decorator-api-method-property-hard-coded-perameter-child');
        var msgnames = {'firstname':'Ganesh', 'lastname':'Chinthakindi'};
        smsmge.showmessage(msgnames);
    }   
}